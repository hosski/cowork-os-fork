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
  getDaemon: () => any, // AgentDaemon
  getToolRegistry: (workspace: any) => any, // ToolRegistry
  getWorkspace: () => any, // Workspace
): void {
  ipcMain.handle('dag:execute', async (_event, { dagJson }: { dagJson: string }) => {
    try {
      // Dynamic imports to avoid circular deps at load time
      const { TaskDAG } = await import('../agent/orchestration/task-dag');
      const { DAGExecutor } = await import('../agent/orchestration/dag-executor');

      // Parse DAG from JSON
      const dag = TaskDAG.parse(dagJson);

      // Get dependencies
      const daemon = getDaemon();
      const workspace = getWorkspace();
      const toolRegistry = getToolRegistry(workspace);

      if (!daemon || !toolRegistry) {
        throw new Error('DAG executor dependencies not available (daemon or toolRegistry missing)');
      }

      // Create executor with real dependencies
      const executor = new DAGExecutor(toolRegistry, daemon, {
        maxParallel: 4,
        pollIntervalMs: 1000,
        verbose: true,
      });

      // Execute
      const result = await executor.executeTierByTier(dag);

      return {
        success: true,
        result,
      };
    } catch (error: any) {
      console.error('[DAG IPC] Execution failed:', error);
      return {
        success: false,
        error: error?.message || String(error),
      };
    }
  });
}
