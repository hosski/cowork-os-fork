/**
 * IPC Handler for DAG Execution
 * 
 * Called from React UI via ipcRenderer.invoke('dag:execute', { dagJson })
 * Runs in the main process where we have access to ToolRegistry + Daemon
 */

import { ipcMain } from 'electron';
import type { TaskDAG } from './agent/orchestration/task-dag';
import { TaskDAG } from './agent/orchestration/task-dag';
import { createDAGExecutorFromContext } from './agent/orchestration/dag-executor';
import type { AgentDaemon } from './agent/daemon';
import type { ToolRegistry } from './agent/tools/registry';
import type { Workspace } from '../shared/types';

/**
 * Register DAG execution IPC handler.
 * Call from main process initialization.
 */
export function registerDAGExecutionHandler(
  getDaemon: () => AgentDaemon,
  getToolRegistry: (workspace: Workspace) => ToolRegistry,
  getWorkspace: () => Workspace,
): void {
  ipcMain.handle('dag:execute', async (_event, { dagJson }: { dagJson: string }) => {
    try {
      // Parse DAG from JSON
      const dag = TaskDAG.parse(dagJson);

      // Get dependencies
      const daemon = getDaemon();
      const workspace = getWorkspace();
      const toolRegistry = getToolRegistry(workspace);

      // Create executor with real dependencies
      const executor = await createDAGExecutorFromContext(workspace, daemon, toolRegistry);

      // Execute
      const result = await executor.executeTierByTier(dag);

      return {
        success: true,
        result,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || String(error),
      };
    }
  });
}
