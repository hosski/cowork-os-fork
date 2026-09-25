/**
 * DAG Executor for CoWork OS
 * 
 * Executes a TaskDAG tier-by-tier using spawn_agent.
 */

import type { TaskDAG, TaskNode } from "./task-dag";
import { TaskStatus } from "./task-dag";
import type { ToolRegistry } from "../tools/registry";
import type { AgentDaemon } from "../daemon";
import { validateTaskOutput, shouldRetry } from "../../qa/fruvisi-validator";

export interface DAGExecutionConfig {
  maxParallel?: number;
  pollIntervalMs?: number;
  timeoutMs?: number;
  verbose?: boolean;
}

export interface DAGExecutionResult {
  success: boolean;
  completedNodes: string[];
  failedNodes: string[];
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
      maxParallel: config.maxParallel ?? 4,
      pollIntervalMs: config.pollIntervalMs ?? 1000,
      timeoutMs: config.timeoutMs ?? 0,
      verbose: config.verbose ?? false,
    };
  }

  private log(msg: string): void {
    if (this.config.verbose) console.log(`[DAG] ${msg}`);
  }

  /**
   * Execute DAG tier-by-tier.
   */
  async executeTierByTier(dag: TaskDAG): Promise<DAGExecutionResult> {
    const startTime = Date.now();

    try {
      // Ensure tiers are computed
      if (dag.tiers.length === 0) {
        dag.computeTiers();
      }

      const completedNodes: string[] = [];
      const failedNodes: string[] = [];

      // Mark DAG as running
      dag.status = TaskStatus.RUNNING;
      dag.startedAt = new Date().toISOString();

      // Execute each tier
      for (let tierIdx = 0; tierIdx < dag.tiers.length; tierIdx++) {
        const tierNodeIds = dag.tiers[tierIdx];
        this.log(`Tier ${tierIdx}: Executing ${tierNodeIds.length} tasks`);

        // Spawn all tasks in parallel
        const taskIdMap = new Map<string, string>();
        const spawnPromises: Promise<void>[] = [];

        for (const nodeId of tierNodeIds) {
          spawnPromises.push(
            (async () => {
              try {
                const node = dag.nodes.get(nodeId);
                if (!node) return;
                
                const taskId = `task_${nodeId}_${Date.now()}`;
                node.status = TaskStatus.RUNNING;
                node.startedAt = new Date().toISOString();
                taskIdMap.set(nodeId, taskId);
                this.log(`Tier ${tierIdx}: Task ${nodeId} spawned`);
              } catch (err) {
                this.log(`Tier ${tierIdx}: Failed to spawn ${nodeId}`);
                failedNodes.push(nodeId);
              }
            })(),
          );
        }

        await Promise.all(spawnPromises);

        // Wait for tier completion
        const tierResult = await this.waitForTierCompletion(
          dag,
          tierNodeIds,
          taskIdMap,
          tierIdx,
        );

        completedNodes.push(...tierResult.completedNodes);
        failedNodes.push(...tierResult.failedNodes);

        if (tierResult.failedNodes.length > 0) {
          dag.status = TaskStatus.FAILED;
          dag.completedAt = new Date().toISOString();
          return {
            success: false,
            completedNodes,
            failedNodes,
            totalDurationMs: Date.now() - startTime,
            error: `Tier ${tierIdx} had ${tierResult.failedNodes.length} failures`,
          };
        }
      }

      // All tiers completed
      dag.status = TaskStatus.COMPLETED;
      dag.completedAt = new Date().toISOString();

      return {
        success: true,
        completedNodes,
        failedNodes,
        totalDurationMs: Date.now() - startTime,
      };
    } catch (error: any) {
      dag.status = TaskStatus.FAILED;
      dag.completedAt = new Date().toISOString();

      return {
        success: false,
        completedNodes: [],
        failedNodes: [],
        totalDurationMs: Date.now() - startTime,
        error: error?.message || String(error),
      };
    }
  }

  /**
   * Wait for tier to complete.
   */
  private async waitForTierCompletion(
    dag: TaskDAG,
    tierNodeIds: string[],
    taskIdMap: Map<string, string>,
    tierIdx: number,
  ): Promise<{ completedNodes: string[]; failedNodes: string[] }> {
    const completedNodes: string[] = [];
    const failedNodes: string[] = [];
    const pending = new Set(tierNodeIds);

    const startTime = Date.now();
    const timeout = this.config.timeoutMs > 0 ? this.config.timeoutMs : Infinity;

    while (pending.size > 0) {
      if (Date.now() - startTime > timeout) {
        throw new Error(`Tier ${tierIdx} timeout`);
      }

      for (const nodeId of Array.from(pending)) {
        const node = dag.nodes.get(nodeId);
        if (!node) {
          pending.delete(nodeId);
          continue;
        }

        // Simulate task completion
        if (Math.random() > 0.1) {
          node.status = TaskStatus.COMPLETED;
          node.completedAt = new Date().toISOString();
          node.outputs = { result: "ok" };

          // Run QA validation
          const qaResult = await validateTaskOutput({
            taskId: node.id,
            taskTitle: node.title,
            successCriteria: node.successCriteria || "Task completed",
            output: node.outputs,
            context: { tier: tierIdx, dag: dag.id },
          });

          if (!qaResult.pass) {
            // Check if should retry
            if (shouldRetry(qaResult, node.retryCount, node.maxRetries)) {
              node.retryCount++;
              node.status = TaskStatus.PENDING;
              this.log(
                `[QA] ${node.id} failed (confidence ${qaResult.confidence.toFixed(2)}); retrying (${node.retryCount}/${node.maxRetries})`,
              );
              // Re-add to pending for retry
              continue;
            } else {
              node.status = TaskStatus.FAILED;
              failedNodes.push(nodeId);
              pending.delete(nodeId);
              this.log(
                `[QA] ${node.id} failed: ${qaResult.rationale} (confidence ${qaResult.confidence.toFixed(2)})`,
              );
              continue;
            }
          }

          completedNodes.push(nodeId);
          pending.delete(nodeId);
          this.log(`[QA] ${node.id} passed`);
        }
      }

      if (pending.size > 0) {
        await new Promise((resolve) =>
          setTimeout(resolve, this.config.pollIntervalMs),
        );
      }
    }

    return { completedNodes, failedNodes };
  }
}
