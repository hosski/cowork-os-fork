import type { TaskDag, TaskDagNode } from '../../shared/types';

export type ExecutionNodeStatus = 'pending' | 'running' | 'completed' | 'failed' | 'skipped';

export interface ExecutionNodeState {
  nodeId: string;
  status: ExecutionNodeStatus;
  startedAt?: number;
  completedAt?: number;
  error?: string;
  result?: Record<string, unknown>;
  retryCount: number;
}

export interface DagExecutionState {
  dagId: string;
  taskId: string;
  status: 'idle' | 'running' | 'paused' | 'completed' | 'failed';
  currentTier: number;
  totalTiers: number;
  nodeStates: Map<string, ExecutionNodeState>;
  startedAt?: number;
  completedAt?: number;
  error?: string;
}

/**
 * DAG Executor — tier-by-tier execution with parallel support
 * Executes all nodes in tier N before moving to tier N+1
 */
export class DagExecutor {
  private state: DagExecutionState;
  private onStateChange: (state: DagExecutionState) => void;
  private maxRetries: number;
  private retryDelayMs: number;

  constructor(
    dag: TaskDag,
    taskId: string,
    onStateChange: (state: DagExecutionState) => void,
    options?: { maxRetries?: number; retryDelayMs?: number },
  ) {
    this.maxRetries = options?.maxRetries ?? 3;
    this.retryDelayMs = options?.retryDelayMs ?? 5000;
    this.onStateChange = onStateChange;

    // Calculate total tiers from DAG
    const totalTiers = this.calculateTotalTiers(dag);

    this.state = {
      dagId: dag.id,
      taskId,
      status: 'idle',
      currentTier: 0,
      totalTiers,
      nodeStates: new Map(
        dag.nodes.map((node) => [
          node.id,
          {
            nodeId: node.id,
            status: 'pending',
            retryCount: 0,
          },
        ]),
      ),
    };
  }

  /**
   * Calculate total number of tiers from DAG
   * Tier is determined by max(tier of dependencies) + 1
   */
  private calculateTotalTiers(dag: TaskDag): number {
    const tierMap = new Map<string, number>();

    // Topological sort to assign tiers
    const assignTier = (nodeId: string): number => {
      if (tierMap.has(nodeId)) return tierMap.get(nodeId)!;

      const node = dag.nodes.find((n) => n.id === nodeId);
      if (!node || !node.dependencies || node.dependencies.length === 0) {
        tierMap.set(nodeId, 0);
        return 0;
      }

      const depTiers = node.dependencies.map((depId) => assignTier(depId));
      const tier = Math.max(...depTiers) + 1;
      tierMap.set(nodeId, tier);
      return tier;
    };

    dag.nodes.forEach((node) => assignTier(node.id));
    return Math.max(...Array.from(tierMap.values()), 0) + 1;
  }

  /**
   * Get all nodes ready to execute at current tier
   */
  getExecutableTier(dag: TaskDag): TaskDagNode[] {
    const completedNodeIds = new Set(
      Array.from(this.state.nodeStates.entries())
        .filter(([, state]) => state.status === 'completed')
        .map(([id]) => id),
    );

    const executable: TaskDagNode[] = [];

    for (const node of dag.nodes) {
      const nodeState = this.state.nodeStates.get(node.id);
      if (!nodeState || nodeState.status !== 'pending') continue;

      // Check if all dependencies are completed
      const depsCompleted =
        !node.dependencies || node.dependencies.length === 0
          ? true
          : node.dependencies.every((depId) => completedNodeIds.has(depId));

      if (depsCompleted) {
        executable.push(node);
      }
    }

    return executable;
  }

  /**
   * Start execution of current tier
   */
  async startTier(dag: TaskDag): Promise<void> {
    if (this.state.status === 'completed' || this.state.status === 'failed') {
      return;
    }

    const executableNodes = this.getExecutableTier(dag);

    if (executableNodes.length === 0) {
      // Check if all nodes are completed
      const allCompleted = Array.from(this.state.nodeStates.values()).every(
        (state) => state.status === 'completed' || state.status === 'skipped',
      );

      if (allCompleted) {
        this.state.status = 'completed';
        this.state.completedAt = Date.now();
      } else {
        // Check for any failed nodes
        const hasFailed = Array.from(this.state.nodeStates.values()).some(
          (state) => state.status === 'failed',
        );
        if (hasFailed) {
          this.state.status = 'failed';
          this.state.error = 'One or more nodes failed';
          this.state.completedAt = Date.now();
        }
      }
      this.onStateChange(this.cloneState());
      return;
    }

    // Update state: mark nodes as running, start tier
    this.state.status = 'running';
    this.state.startedAt = this.state.startedAt ?? Date.now();
    this.state.currentTier = this.getCurrentTier(dag);

    for (const node of executableNodes) {
      const nodeState = this.state.nodeStates.get(node.id)!;
      nodeState.status = 'running';
      nodeState.startedAt = Date.now();
    }

    this.onStateChange(this.cloneState());

    // Execute nodes in parallel
    await Promise.allSettled(
      executableNodes.map((node) => this.executeNode(node, dag)),
    );

    // After all nodes in tier complete, recursively start next tier
    await this.startTier(dag);
  }

  /**
   * Execute a single node (spawn agent, wait for completion)
   */
  private async executeNode(node: TaskDagNode, dag: TaskDag): Promise<void> {
    const nodeState = this.state.nodeStates.get(node.id)!;

    try {
      // Simulate node execution (replace with actual agent spawning in IPC bridge)
      await this.simulateNodeExecution(node);

      nodeState.status = 'completed';
      nodeState.completedAt = Date.now();
      nodeState.result = { agentId: node.role, prompt: node.prompt };
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);

      if (nodeState.retryCount < this.maxRetries) {
        nodeState.retryCount += 1;
        await new Promise((resolve) => setTimeout(resolve, this.retryDelayMs));
        await this.executeNode(node, dag); // Retry
      } else {
        nodeState.status = 'failed';
        nodeState.error = errorMsg;
        nodeState.completedAt = Date.now();
      }
    }

    this.onStateChange(this.cloneState());
  }

  /**
   * Simulate node execution (placeholder for actual agent spawn)
   * In production, this calls the IPC bridge to spawn an agent subprocess
   */
  private simulateNodeExecution(node: TaskDagNode): Promise<void> {
    return new Promise((resolve, reject) => {
      const delay = Math.random() * 2000 + 1000; // 1-3s random
      const shouldFail = Math.random() < 0.05; // 5% failure rate for testing

      setTimeout(() => {
        if (shouldFail) {
          reject(new Error(`Simulated failure for node ${node.id}`));
        } else {
          resolve();
        }
      }, delay);
    });
  }

  /**
   * Pause execution (can be resumed)
   */
  pause(): void {
    if (this.state.status === 'running') {
      this.state.status = 'paused';
      this.onStateChange(this.cloneState());
    }
  }

  /**
   * Resume execution from pause
   */
  resume(dag: TaskDag): void {
    if (this.state.status === 'paused') {
      this.state.status = 'running';
      this.onStateChange(this.cloneState());
      // Resume from current tier
      void this.startTier(dag);
    }
  }

  /**
   * Skip a failed node and continue
   */
  skipNode(nodeId: string, dag: TaskDag): void {
    const nodeState = this.state.nodeStates.get(nodeId);
    if (nodeState && nodeState.status === 'failed') {
      nodeState.status = 'skipped';
      this.onStateChange(this.cloneState());
      // Resume execution
      if (this.state.status === 'paused') {
        void this.resume(dag);
      }
    }
  }

  /**
   * Retry a failed node
   */
  retryNode(nodeId: string, dag: TaskDag): void {
    const nodeState = this.state.nodeStates.get(nodeId);
    if (nodeState && nodeState.status === 'failed') {
      nodeState.status = 'pending';
      nodeState.error = undefined;
      nodeState.completedAt = undefined;
      this.onStateChange(this.cloneState());
      // Resume execution
      if (this.state.status === 'paused') {
        void this.resume(dag);
      }
    }
  }

  /**
   * Abort all execution
   */
  abort(): void {
    this.state.status = 'failed';
    this.state.error = 'Execution aborted by user';
    this.state.completedAt = Date.now();

    // Mark all running nodes as failed
    for (const nodeState of this.state.nodeStates.values()) {
      if (nodeState.status === 'running') {
        nodeState.status = 'failed';
        nodeState.error = 'Aborted';
        nodeState.completedAt = Date.now();
      }
    }

    this.onStateChange(this.cloneState());
  }

  /**
   * Get current tier based on completed nodes
   */
  private getCurrentTier(dag: TaskDag): number {
    let maxCompletedTier = -1;

    for (const node of dag.nodes) {
      const nodeState = this.state.nodeStates.get(node.id);
      if (nodeState?.status === 'completed' && node.tier !== undefined) {
        maxCompletedTier = Math.max(maxCompletedTier, node.tier);
      }
    }

    return maxCompletedTier + 1;
  }

  /**
   * Get current execution state (deep copy)
   */
  getState(): DagExecutionState {
    return this.cloneState();
  }

  /**
   * Clone state for external consumption
   */
  private cloneState(): DagExecutionState {
    return {
      ...this.state,
      nodeStates: new Map(this.state.nodeStates),
    };
  }
}
