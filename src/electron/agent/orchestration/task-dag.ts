/**
 * Task DAG Model: Directed Acyclic Graph for multi-agent orchestration
 *
 * Core data structure for:
 * - CoWork task coordination (orchestrate_agents tool)
 * - Tier-based parallelization (M5 Pro P-core/E-core optimization)
 * - Grill-Tab-5 structured task breakdown
 *
 * Ported from: Hermes AI OS Stack (Python → TypeScript)
 */

export enum TaskType {
  RESEARCH = "research",
  CODE = "code",
  DESIGN = "design",
  ANALYSIS = "analysis",
  ORCHESTRATION = "orchestration",
}

export enum TaskStatus {
  PENDING = "pending",
  RUNNING = "running",
  COMPLETED = "completed",
  FAILED = "failed",
  REWORK = "rework",
}

export enum TaskPriority {
  LOW = "low",
  NORMAL = "normal",
  HIGH = "high",
  CRITICAL = "critical",
}

/**
 * Single task in the DAG. Maps to a sub-agent role.
 * Example: Designer creates 5 scene sketches (one task node).
 */
export interface TaskNode {
  id: string; // Unique identifier (e.g., "design_0", "code_1")
  title: string; // Display name
  description: string; // What this task does
  role: string; // Sub-agent role (e.g., "designer", "coder", "researcher")
  taskType: TaskType; // Domain classification
  priority: TaskPriority; // Execution priority (for critical path)

  // Execution
  estimatedDurationSeconds: number; // Estimate for critical path (default: 300s)
  inputs: Record<string, any>; // Task-specific inputs
  outputs: Record<string, any>; // Results after execution

  // QA
  successCriteria: string; // One-line proof of completion

  // State tracking
  status: TaskStatus;
  retryCount: number;
  maxRetries: number;

  // Timing
  createdAt: string;
  startedAt: string | null;
  completedAt: string | null;
}

/**
 * Directed Acyclic Graph of tasks. Represents a complete workflow.
 * - Nodes: TaskNode instances
 * - Edges: Dependency relationships (node_id → list of dependent node_ids)
 * - Tiers: Computed layers for parallel execution
 *
 * Example DAG (3 tiers):
 * Tier 0: [Researcher]              (research inputs)
 * Tier 1: [Designer, Coder]         (parallel, both use Researcher output)
 * Tier 2: [Orchestrator]            (synthesizes all)
 */
export class TaskDAG {
  id: string;
  title: string;
  description: string;

  // Task nodes: node_id → TaskNode
  nodes: Map<string, TaskNode>;

  // Dependency edges: node_id → [dependent_node_ids]
  // Example: {"research_0": ["design_0", "code_0"]}
  // (design_0 and code_0 depend on research_0)
  edges: Map<string, string[]>;

  // Computed tiers (0-indexed levels for parallel execution)
  tiers: string[][];

  // Metadata
  teamId: string;
  createdBy: string;
  domain: string; // e.g., "law", "video", "architecture", "homesteading"

  // State
  status: TaskStatus;
  createdAt: string;
  startedAt: string | null;
  completedAt: string | null;

  constructor(
    id: string,
    title: string,
    description: string,
    teamId: string = "default",
    domain: string = "",
    createdBy: string = "",
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.nodes = new Map();
    this.edges = new Map();
    this.tiers = [];
    this.teamId = teamId;
    this.createdBy = createdBy;
    this.domain = domain;
    this.status = TaskStatus.PENDING;
    this.createdAt = new Date().toISOString();
    this.startedAt = null;
    this.completedAt = null;
  }

  /**
   * Add a task node to the DAG.
   */
  addNode(node: TaskNode): void {
    this.nodes.set(node.id, node);
    if (!this.edges.has(node.id)) {
      this.edges.set(node.id, []);
    }
  }

  /**
   * Add dependency: toId depends on fromId.
   */
  addEdge(fromId: string, toId: string): void {
    if (!this.nodes.has(fromId) || !this.nodes.has(toId)) {
      throw new Error(`Node ${fromId} or ${toId} not in DAG`);
    }
    const deps = this.edges.get(fromId) || [];
    if (!deps.includes(toId)) {
      deps.push(toId);
      this.edges.set(fromId, deps);
    }
  }

  /**
   * Compute execution tiers using topological sort + level-assignment.
   *
   * Returns list of lists:
   * - tiers[0] = tasks with no dependencies (entry points)
   * - tiers[1] = tasks that depend only on tier 0
   * - tiers[n] = tasks that depend only on tiers 0..n-1
   *
   * This enables parallel execution: all tasks in tier N can run together.
   */
  computeTiers(): string[][] {
    // Build reverse dependency map: node → nodes that depend on it
    const dependents: Map<string, string[]> = new Map();
    this.nodes.forEach((_, nodeId) => {
      dependents.set(nodeId, []);
    });

    this.edges.forEach((toIds, fromId) => {
      toIds.forEach((toId) => {
        const deps = dependents.get(fromId) || [];
        deps.push(toId);
        dependents.set(fromId, deps);
      });
    });

    // Build in-degree map: node → count of tasks it depends on
    const inDegree: Map<string, number> = new Map();
    this.nodes.forEach((_, nodeId) => {
      inDegree.set(nodeId, 0);
    });

    this.edges.forEach((toIds) => {
      toIds.forEach((toId) => {
        inDegree.set(toId, (inDegree.get(toId) || 0) + 1);
      });
    });

    // Kahn's algorithm: topological sort + tier assignment
    const tiers: string[][] = [];
    const sortedNodes = new Set<string>();

    while (sortedNodes.size < this.nodes.size) {
      // Find all nodes with in_degree 0 (ready for execution)
      const currentTier: string[] = [];
      this.nodes.forEach((_, nodeId) => {
        if ((inDegree.get(nodeId) || 0) === 0 && !sortedNodes.has(nodeId)) {
          currentTier.push(nodeId);
        }
      });

      if (currentTier.length === 0) {
        // Cycle detected (shouldn't happen in valid DAG)
        const remaining: string[] = [];
        this.nodes.forEach((_, nodeId) => {
          if (!sortedNodes.has(nodeId)) {
            remaining.push(nodeId);
          }
        });
        throw new Error(`Cycle detected in DAG. Remaining: ${remaining.join(", ")}`);
      }

      // Add tier
      tiers.push(currentTier);
      currentTier.forEach((nodeId) => {
        sortedNodes.add(nodeId);
      });

      // Decrement in-degree for dependent nodes
      currentTier.forEach((nodeId) => {
        (dependents.get(nodeId) || []).forEach((dependentId) => {
          inDegree.set(dependentId, (inDegree.get(dependentId) || 0) - 1);
        });
      });
    }

    this.tiers = tiers;
    return tiers;
  }

  /**
   * Compute longest path through DAG.
   * Used to estimate total execution time.
   *
   * Returns: sum of max durations along critical path (seconds).
   */
  getCriticalPathDuration(): number {
    if (this.tiers.length === 0) {
      this.computeTiers();
    }

    let total = 0;
    this.tiers.forEach((tier) => {
      // Max duration in this tier (parallelized, so we take max not sum)
      const tierMax = Math.max(
        ...tier.map((nodeId) => {
          const node = this.nodes.get(nodeId);
          return node ? node.estimatedDurationSeconds : 0;
        }),
        0,
      );
      total += tierMax;
    });

    return total;
  }

  /**
   * Serialize entire DAG to JSON-compatible object.
   */
  toJSON() {
    const nodesObj: Record<string, any> = {};
    this.nodes.forEach((node, id) => {
      nodesObj[id] = {
        id: node.id,
        title: node.title,
        description: node.description,
        role: node.role,
        taskType: node.taskType,
        priority: node.priority,
        estimatedDurationSeconds: node.estimatedDurationSeconds,
        inputs: node.inputs,
        outputs: node.outputs,
        successCriteria: node.successCriteria,
        status: node.status,
        retryCount: node.retryCount,
        maxRetries: node.maxRetries,
        createdAt: node.createdAt,
        startedAt: node.startedAt,
        completedAt: node.completedAt,
      };
    });

    const edgesObj: Record<string, string[]> = {};
    this.edges.forEach((toIds, fromId) => {
      edgesObj[fromId] = toIds;
    });

    return {
      id: this.id,
      title: this.title,
      description: this.description,
      teamId: this.teamId,
      domain: this.domain,
      createdBy: this.createdBy,
      status: this.status,
      createdAt: this.createdAt,
      startedAt: this.startedAt,
      completedAt: this.completedAt,
      nodes: nodesObj,
      edges: edgesObj,
      tiers: this.tiers,
      criticalPathSeconds: this.getCriticalPathDuration(),
    };
  }

  /**
   * Deserialize DAG from JSON object.
   */
  static fromJSON(data: any): TaskDAG {
    const dag = new TaskDAG(
      data.id,
      data.title,
      data.description,
      data.teamId || "default",
      data.domain || "",
      data.createdBy || "",
    );

    // Rebuild nodes
    Object.entries(data.nodes || {}).forEach(([nodeId, nodeData]: [string, any]) => {
      const node: TaskNode = {
        id: nodeData.id,
        title: nodeData.title,
        description: nodeData.description,
        role: nodeData.role,
        taskType: nodeData.taskType as TaskType,
        priority: nodeData.priority as TaskPriority,
        estimatedDurationSeconds: nodeData.estimatedDurationSeconds,
        inputs: nodeData.inputs,
        outputs: nodeData.outputs,
        successCriteria: nodeData.successCriteria,
        status: nodeData.status as TaskStatus,
        retryCount: nodeData.retryCount,
        maxRetries: nodeData.maxRetries,
        createdAt: nodeData.createdAt,
        startedAt: nodeData.startedAt,
        completedAt: nodeData.completedAt,
      };
      dag.nodes.set(nodeId, node);
    });

    // Rebuild edges
    dag.edges = new Map(Object.entries(data.edges || {}));

    // Rebuild tiers
    dag.tiers = data.tiers || [];

    // Restore state
    dag.status = (data.status as TaskStatus) || TaskStatus.PENDING;
    dag.startedAt = data.startedAt || null;
    dag.completedAt = data.completedAt || null;

    return dag;
  }

  /**
   * Serialize to JSON string.
   */
  stringify(): string {
    return JSON.stringify(this.toJSON(), null, 2);
  }

  /**
   * Deserialize from JSON string.
   */
  static parse(jsonStr: string): TaskDAG {
    const data = JSON.parse(jsonStr);
    return TaskDAG.fromJSON(data);
  }
}
