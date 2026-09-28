/**
 * IPC Handler for DAG Execution
 * 
 * Called from React UI via ipcRenderer.invoke('dag:execute', { dagJson })
 * Runs in the main process where we have access to ToolRegistry + Daemon
 */

import { ipcMain } from 'electron';
import type { DAGExecutor } from '../agent/orchestration/dag-executor';
import type { TaskDAG } from '../agent/orchestration/task-dag';

let DAGExecutorClass: typeof DAGExecutor | null = null;
let TaskDAGClass: typeof TaskDAG | null = null;

/**
 * Initialize the handler with loaded classes (call this after modules are loaded in main process)
 */
export function initializeDAGExecutionHandler(
  ExecutorClass: typeof DAGExecutor,
  DAGClass: typeof TaskDAG,
): void {
  DAGExecutorClass = ExecutorClass;
  TaskDAGClass = DAGClass;
}

/**
 * Register DAG execution IPC handler.
 * Call from main process initialization.
 */
export function registerDAGExecutionHandler(
  getDaemon: () => any,
  getToolRegistry: (workspace: any) => any,
  getWorkspace: () => any,
  mainWindow?: any,
): void {
  ipcMain.handle('dag:execute', async (_event, data: any) => {
    console.error('[DAG IPC] Handler called');
    try {
      const { dagJson } = data || {};
      
      if (!dagJson) {
        return {
          success: false,
          error: 'No dagJson provided',
        };
      }

      if (!DAGExecutorClass || !TaskDAGClass) {
        return {
          success: false,
          error: 'DAG executor not initialized',
        };
      }

      console.error('[DAG IPC] Parsing DAG...');
      // Parse DAG from JSON - handle both object and string
      let dagString: string;
      if (typeof dagJson === 'string') {
        dagString = dagJson;
      } else {
        dagString = JSON.stringify(dagJson);
      }
      const dag = TaskDAGClass.parse(dagString);

      // Get dependencies
      const daemon = getDaemon();
      const workspace = getWorkspace();
      const toolRegistry = getToolRegistry(workspace);

      console.error('[DAG IPC] Dependencies ready');

      if (!daemon) {
        return {
          success: false,
          error: 'Daemon not available',
        };
      }

      // Create executor with real dependencies
      const executor = new DAGExecutorClass(toolRegistry, daemon, {
        maxParallel: 4,
        pollIntervalMs: 1000,
        verbose: true,
      });

      // Register event listener to forward to renderer
      if (mainWindow && !mainWindow.isDestroyed()) {
        executor.onExecutionEvent((event: any) => {
          try {
            mainWindow.webContents.send('dag:execution-event', event);
          } catch (err) {
            console.error('[DAG IPC] Failed to send event to renderer:', err);
          }
        });
      }

      console.error('[DAG IPC] Starting execution...');
      // Execute
      const result = await executor.executeTierByTier(dag);

      console.error('[DAG IPC] Execution complete');
      
      // Return detailed result for UI
      return {
        success: true,
        dagId: dag.id,
        status: 'completed',
        tiersCompleted: result.success ? dag.tiers.length : 0,
        totalTiers: dag.tiers.length,
        tasksCompleted: result.completedNodes ? result.completedNodes.length : 0,
        tasksFailed: result.failedNodes ? result.failedNodes.length : 0,
        totalTasks: dag.nodes.size,
        duration: Math.round(result.totalDurationMs / 1000),
        result,
      };
    } catch (error: any) {
      console.error('[DAG IPC] Execution failed:', error?.message);
      console.error('[DAG IPC] Stack:', error?.stack);
      return {
        success: false,
        error: error?.message || String(error),
      };
    }
  });
}
