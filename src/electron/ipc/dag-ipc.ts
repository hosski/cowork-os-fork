import { ipcMain } from 'electron';
import type { TaskDag } from '../../shared/types';
import { DagExecutor, type DagExecutionState } from '../services/dag-executor';
import { ExecutionHistoryService } from '../services/execution-history';
import { WorkflowVersioningService } from '../../shared/workflow-versioning';

/**
 * DAG Executor IPC Handler
 * Manages executor lifecycle on main process, sends state updates to renderer
 * Integrates with ExecutionHistoryService and WorkflowVersioningService
 */
export class DagExecutorIpc {
  private executors = new Map<string, DagExecutor>(); // key: taskId
  private historyService: ExecutionHistoryService;
  private versioningService: WorkflowVersioningService;

  constructor(
    private onSendToViking?: (memory: string) => Promise<void>,
  ) {
    this.historyService = new ExecutionHistoryService(onSendToViking);
    this.versioningService = new WorkflowVersioningService();
  }

  /**
   * Register all IPC handlers
   */
  registerHandlers(ipcSend: (channel: string, data: unknown) => void): void {
    ipcMain.handle('dag:start', async (_, args: { dag: TaskDag; taskId: string }) => {
      const { dag, taskId } = args;

      if (this.executors.has(taskId)) {
        throw new Error(`Executor already running for task ${taskId}`);
      }

      const executor = new DagExecutor(
        dag,
        taskId,
        (state) => {
          ipcSend('dag:state-changed', { taskId, state: this.serializeState(state) });
        },
        {
          onHistoryUpdate: async (summary) => {
            await this.historyService.flush();
          },
        }
      );

      this.executors.set(taskId, executor);

      try {
        await executor.startTier(dag);
        
        // Persist execution to OpenViking when complete
        await executor.persistToOpenViking(dag);
        
        return { success: true, message: 'DAG execution completed' };
      } catch (error) {
        executor.abort();
        this.executors.delete(taskId);
        throw error;
      }
    });

    /**
     * Pause execution
     */
    ipcMain.handle('dag:pause', async (_, taskId: string) => {
      const executor = this.executors.get(taskId);
      if (!executor) throw new Error(`No executor for task ${taskId}`);
      executor.pause();
      return { success: true };
    });

    /**
     * Resume execution
     */
    ipcMain.handle('dag:resume', async (_, args: { taskId: string; dag: TaskDag }) => {
      const executor = this.executors.get(args.taskId);
      if (!executor) throw new Error(`No executor for task ${args.taskId}`);
      executor.resume(args.dag);
      return { success: true };
    });

    /**
     * Skip failed node and continue
     */
    ipcMain.handle('dag:skip-node', async (_, args: { taskId: string; nodeId: string; dag: TaskDag }) => {
      const executor = this.executors.get(args.taskId);
      if (!executor) throw new Error(`No executor for task ${args.taskId}`);
      executor.skipNode(args.nodeId, args.dag);
      return { success: true };
    });

    /**
     * Retry failed node
     */
    ipcMain.handle('dag:retry-node', async (_, args: { taskId: string; nodeId: string; dag: TaskDag }) => {
      const executor = this.executors.get(args.taskId);
      if (!executor) throw new Error(`No executor for task ${args.taskId}`);
      executor.retryNode(args.nodeId, args.dag);
      return { success: true };
    });

    /**
     * Abort execution
     */
    ipcMain.handle('dag:abort', async (_, taskId: string) => {
      const executor = this.executors.get(taskId);
      if (!executor) throw new Error(`No executor for task ${taskId}`);
      executor.abort();
      this.executors.delete(taskId);
      return { success: true };
    });

    /**
     * Get current execution state
     */
    ipcMain.handle('dag:get-state', async (_, taskId: string) => {
      const executor = this.executors.get(taskId);
      if (!executor) return null;
      return this.serializeState(executor.getState());
    });
  }

  /**
   * Serialize execution state for IPC transmission
   */
  private serializeState(state: DagExecutionState): Record<string, unknown> {
    return {
      dagId: state.dagId,
      taskId: state.taskId,
      status: state.status,
      currentTier: state.currentTier,
      totalTiers: state.totalTiers,
      startedAt: state.startedAt,
      completedAt: state.completedAt,
      error: state.error,
      nodeStates: Array.from(state.nodeStates.entries()).map(([nodeId, nodeState]) => ({
        nodeId,
        ...nodeState,
      })),
    };
  }
}

/**
 * Global executor IPC instance (created once on app startup)
 */
let globalExecutorIpc: DagExecutorIpc | null = null;

export function initializeDagExecutorIpc(
  ipcSend: (channel: string, data: unknown) => void,
  onSendToViking?: (memory: string) => Promise<void>
): void {
  if (!globalExecutorIpc) {
    globalExecutorIpc = new DagExecutorIpc(onSendToViking);
    globalExecutorIpc.registerHandlers(ipcSend);
  }
}

export function getDagExecutorIpc(): DagExecutorIpc {
  if (!globalExecutorIpc) {
    throw new Error('DAG Executor IPC not initialized. Call initializeDagExecutorIpc() first.');
  }
  return globalExecutorIpc;
}
