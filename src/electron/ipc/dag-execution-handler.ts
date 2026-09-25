/**
 * IPC Handler for DAG Execution
 * 
 * Called from React UI via ipcRenderer.invoke('dag:execute', { dagJson })
 * Runs in the main process where we have access to ToolRegistry + Daemon
 */

import { ipcMain } from 'electron';

/**
 * Register DAG execution IPC handler.
 * Call from main process initialization.
 */
export function registerDAGExecutionHandler(
  getDaemon: () => any,
  getToolRegistry: (workspace: any) => any,
  getWorkspace: () => any,
): void {
  ipcMain.handle('dag:execute', async (_event, data: any) => {
    console.error('[DAG IPC] Handler called with data:', data);
    try {
      const { dagJson } = data || {};
      
      if (!dagJson) {
        return {
          success: false,
          error: 'No dagJson provided',
        };
      }

      // Dynamic imports to avoid circular deps at load time
      console.error('[DAG IPC] Importing modules...');
      const { TaskDAG } = await import('../agent/orchestration/task-dag');
      const { DAGExecutor } = await import('../agent/orchestration/dag-executor');

      console.error('[DAG IPC] Parsing DAG...');
      // Parse DAG from JSON
      const dag = TaskDAG.parse(dagJson);

      // Get dependencies
      const daemon = getDaemon();
      const workspace = getWorkspace();
      const toolRegistry = getToolRegistry(workspace);

      console.error('[DAG IPC] Dependencies:', { daemon: !!daemon, toolRegistry: !!toolRegistry, workspace: !!workspace });

      if (!daemon) {
        return {
          success: false,
          error: 'Daemon not available',
        };
      }

      // Create executor with real dependencies
      const executor = new DAGExecutor(toolRegistry, daemon, {
        maxParallel: 4,
        pollIntervalMs: 1000,
        verbose: true,
      });

      console.error('[DAG IPC] Starting execution...');
      // Execute
      const result = await executor.executeTierByTier(dag);

      console.error('[DAG IPC] Execution complete:', result);
      return {
        success: true,
        result,
      };
    } catch (error: any) {
      console.error('[DAG IPC] Execution failed:', error);
      console.error('[DAG IPC] Stack:', error?.stack);
      return {
        success: false,
        error: error?.message || String(error),
      };
    }
  });
}
