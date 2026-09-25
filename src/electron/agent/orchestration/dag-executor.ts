/**
 * DAG Executor for CoWork OS
 * 
 * Executes a TaskDAG tier-by-tier using spawn_agent.
 * - Tier 0: All tasks spawn in parallel
 * - Tier 1+: Wait for previous tier to complete
 * - Retry: Failed tasks retry up to max_retries
 * 
 * Usage:
 *   const executor = new DAGExecutor(toolRegistry, daemon);
 *   const result = await executor.executeTierByTier(dag);
 */

import type { TaskDAG, TaskNode, TaskStatus } from "./task-dag";
import type { ToolRegistry } from "../tools/registry";
import type { AgentDaemon } from "../daemon";

export interface DAGExecutionConfig {
  /** Max parallel tasks per tier (0 = unlimited) */
  maxParallel?: number;
  
  /** Poll interval for task completion (ms) */
  pollIntervalMs?: number;
  
  /** Max total execution time (ms, 0 = unlimited) */
  timeoutMs?: number;
  
  /** Verbose logging */
  verbose?: boolean;
}

export interface DAGExecutionResult {
  success: boolean;
  status: TaskStatus;
  completedNodes: string[];
  failedNodes: string[];
  tier: number; // Which tier failed (if any)
  totalDurationMs: number;
  error?: string;
}

export class DAGExecutor {
  private toolRegistry: ToolRegistry;
  private daemon: AgentDaemon;
  private config: Required<DAGExecutionConfig>;

  constructor(
    toolRegistry: ToolRegistry,
    daemon: AgentDaemon,
    config: DAGExecutionConfig = {},
  ) {
    this.toolRegistry = toolRegistry;
    this.daemon = daemon;
    this.config = {
      maxParallel: config.maxParallel ?? 0,
      pollIntervalMs: config.pollIntervalMs ?? 1000,
      timeoutMs: config.timeoutMs ?? 0,
      verbose: config.verbose ?? false,
    };
  }

  /**
   * Execute DAG tier-by-tier.
   * Blocks until all tiers complete or first failure.
   */
  async executeTierByTier(dag: TaskDAG): Promise<DAGExecutionResult> {
    const startTime = Date.now();
    const log = (msg: string) => {
      if (this.config.verbose) console.log(`[DAG] ${msg}`);
    };

    try {
      // Ensure tiers are computed
      if (dag.tiers.length === 0) {
        dag.computeTiers();
      }

      const completedNodes: string[] = [];
      const failedNodes: string[] = [];

      // Mark DAG as running
      dag.status = "running" as TaskStatus;
      dag.startedAt = new Date().toISOString();

      // Execute each tier
      for (let tierIdx = 0; tierIdx < dag.tiers.length; tierIdx++) {
        const tier = dag.tiers[tierIdx];
        log(`Starting tier ${tierIdx} with ${tier.length} task(s)`);

        // Spawn all tasks in tier in parallel
        const spawnPromises = tier.map((nodeId) =>
          this.spawnTaskNode(dag, nodeId, tierIdx).catch((err) => ({
            nodeId,
            error: err.message,
          })),
        );

        // Track spawned task IDs
        const spawnedTasks = await Promise.all(spawnPromises);
        const taskIdMap: Map<string, string> = new Map();

        for (const result of spawnedTasks) {
          if ("error" in result) {
            failedNodes.push(result.nodeId);
            const node = dag.nodes.get(result.nodeId);
            if (node) node.status = "failed" as TaskStatus;
            log(`Tier ${tierIdx}: Task ${result.nodeId} spawn failed: ${result.error}`);
          } else {
            const { nodeId, taskId } = result;
            taskIdMap.set(nodeId, taskId);
            log(`Tier ${tierIdx}: Task ${nodeId} spawned (internal: ${taskId})`);
          }
        }

        // Wait for all tasks in tier to complete
        const tierResult = await this.waitForTierCompletion(
          dag,
          tier,
          taskIdMap,
          tierIdx,
          startTime,
        );

        if (tierResult.completedNodes.length > 0) {
          completedNodes.push(...tierResult.completedNodes);
        }
        if (tierResult.failedNodes.length > 0) {
          failedNodes.push(...tierResult.failedNodes);
          // Stop on first tier failure
          dag.status = "failed" as TaskStatus;
          dag.completedAt = new Date().toISOString();
          return {
            success: false,
            status: "failed",
            completedNodes,
            failedNodes,
            tier: tierIdx,
            totalDurationMs: Date.now() - startTime,
            error: `Tier ${tierIdx} failed: ${tierResult.failedNodes.join(", ")}`,
          };
        }
      }

      // All tiers completed
      dag.status = "completed" as TaskStatus;
      dag.completedAt = new Date().toISOString();
      return {
        success: true,
        status: "completed",
        completedNodes,
        failedNodes,
        tier: dag.tiers.length,
        totalDurationMs: Date.now() - startTime,
      };
    } catch (error: any) {
      dag.status = "failed" as TaskStatus;
      dag.completedAt = new Date().toISOString();
      return {
        success: false,
        status: "failed",
        completedNodes: [],
        failedNodes: [],
        tier: 0,
        totalDurationMs: Date.now() - startTime,
        error: error?.message || String(error),
      };
    }
  }

  /**
   * Spawn a single task node as a sub-agent.
   */
  private async spawnTaskNode(
    dag: TaskDAG,
    nodeId: string,
    tierIdx: number,
  ): Promise<{ nodeId: string; taskId: string }> {
    const node = dag.nodes.get(nodeId);
    if (!node) throw new Error(`Node ${nodeId} not found in DAG`);

    // Build prompt from node details
    const prompt = this.buildNodePrompt(dag, node, tierIdx);

    // Call spawn_agent tool
    const result = await this.toolRegistry.executeTool("spawn_agent", {
      prompt,
      title: node.title,
      capability_hint: node.role,
      personality: "technical",
      max_turns: 20,
      wait: false, // Async; we'll poll
    });

    if (!result.success) {
      throw new Error(result.error || result.message);
    }

    node.status = "running" as TaskStatus;
    node.startedAt = new Date().toISOString();

    return {
      nodeId,
      taskId: result.task_id || nodeId,
    };
  }

  /**
   * Wait for all tasks in a tier to complete.
   */
  private async waitForTierCompletion(
    dag: TaskDAG,
    tier: string[],
    taskIdMap: Map<string, string>,
    tierIdx: number,
    startTime: number,
  ): Promise<{ completedNodes: string[]; failedNodes: string[] }> {
    const completedNodes: string[] = [];
    const failedNodes: string[] = [];
    const pendingNodes = new Set(tier);

    while (pendingNodes.size > 0) {
      // Check timeout
      if (this.config.timeoutMs > 0 && Date.now() - startTime > this.config.timeoutMs) {
        const remaining = Array.from(pendingNodes);
        failedNodes.push(...remaining);
        return { completedNodes, failedNodes };
      }

      // Check each pending task
      for (const nodeId of pendingNodes) {
        const taskId = taskIdMap.get(nodeId);
        if (!taskId) {
          // Task never spawned
          failedNodes.push(nodeId);
          pendingNodes.delete(nodeId);
          continue;
        }

        const node = dag.nodes.get(nodeId);
        if (!node) continue;

        // Poll task status
        try {
          const status = await this.getTaskStatus(taskId);

          if (status === "completed") {
            // Update node
            node.status = "completed" as TaskStatus;
            node.completedAt = new Date().toISOString();
            node.outputs = await this.getTaskOutput(taskId);

            completedNodes.push(nodeId);
            pendingNodes.delete(nodeId);
          } else if (status === "failed") {
            // Check retry count
            if (node.retryCount < node.maxRetries) {
              node.retryCount++;
              // Retry: re-spawn
              try {
                const retryResult = await this.spawnTaskNode(dag, nodeId, tierIdx);
                taskIdMap.set(nodeId, retryResult.taskId);
              } catch (err) {
                node.status = "failed" as TaskStatus;
                node.completedAt = new Date().toISOString();
                failedNodes.push(nodeId);
                pendingNodes.delete(nodeId);
              }
            } else {
              node.status = "failed" as TaskStatus;
              node.completedAt = new Date().toISOString();
              failedNodes.push(nodeId);
              pendingNodes.delete(nodeId);
            }
          }
        } catch (err) {
          // If we can't get status, assume running
        }
      }

      // Sleep before next poll
      if (pendingNodes.size > 0) {
        await new Promise((resolve) => setTimeout(resolve, this.config.pollIntervalMs));
      }
    }

    return { completedNodes, failedNodes };
  }

  /**
   * Build a prompt for executing this node.
   */
  private buildNodePrompt(dag: TaskDAG, node: TaskNode, tierIdx: number): string {
    // Gather outputs from previous tiers (dependencies)
    const dependencies: Record<string, any> = {};
    dag.edges.forEach((dependents, fromId) => {
      if (dependents.includes(node.id)) {
        const depNode = dag.nodes.get(fromId);
        if (depNode) {
          dependencies[fromId] = depNode.outputs;
        }
      }
    });

    return `
# Task: ${node.title}
**Role:** ${node.role}
**Tier:** ${tierIdx}

## Description
${node.description}

## Success Criteria
${node.successCriteria}

## Inputs
\`\`\`json
${JSON.stringify(node.inputs, null, 2)}
\`\`\`

${Object.keys(dependencies).length > 0 ? `
## Dependency Outputs
\`\`\`json
${JSON.stringify(dependencies, null, 2)}
\`\`\`
` : ""}

## Your Task
Complete the above task. Output your results as JSON under "outputs" key.
    `.trim();
  }

  /**
   * Get task status from daemon.
   */
  private async getTaskStatus(taskId: string): Promise<"running" | "completed" | "failed"> {
    try {
      // Query daemon for task status
      const task = await this.daemon.getTask(taskId);
      const status = task?.status;
      if (status === "completed") return "completed";
      if (status === "cancelled" || status === "interrupted") return "failed";
      return "running";
    } catch {
      return "failed";
    }
  }

  /**
   * Get task output.
   */
  private async getTaskOutput(taskId: string): Promise<Record<string, any>> {
    try {
      // Query daemon for task events
      const events = await this.daemon.getTaskEvents(taskId);
      // Extract last tool result or task output
      const lastEvent = events[events.length - 1];
      if (lastEvent?.payload?.output) {
        return lastEvent.payload.output;
      }
      return {};
    } catch {
      return {};
    }
  }
}
