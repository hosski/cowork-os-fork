/**
 * Rework Handler for DAG Error Recovery
 *
 * Allows users to re-run a failed node without recreating the entire DAG.
 * Called from React UI when user clicks "Rework" on a failed task.
 */

import { ipcMain } from 'electron';
import type { DAGExecutor } from '../agent/orchestration/dag-executor';
import type { TaskDAG, TaskNode } from '../agent/orchestration/task-dag';
import { TaskStatus } from '../agent/orchestration/task-dag';

let DAGExecutorClass: typeof DAGExecutor | null = null;
let TaskDAGClass: typeof TaskDAG | null = null;

export function initializeReworkHandler(
  ExecutorClass: typeof DAGExecutor,
  DAGClass: typeof TaskDAG,
): void {
  DAGExecutorClass = ExecutorClass;
  TaskDAGClass = DAGClass;
}

/**
 * Register rework handler
 */
export function registerReworkHandler(
  getDaemon: () => any,
  getToolRegistry: (workspace: any) => any,
  getWorkspace: () => any,
  mainWindow?: any,
): void {
  ipcMain.handle('rework:node', async (_event, data: any) => {
    console.log('[Rework] Reworking node:', data.nodeId);
    try {
      const { dagId, nodeId, dagJson } = data || {};

      if (!dagId || !nodeId || !dagJson) {
        return {
          success: false,
          error: 'dagId, nodeId, and dagJson are required',
        };
      }

      if (!DAGExecutorClass || !TaskDAGClass) {
        return {
          success: false,
          error: 'Executor not initialized',
        };
      }

      // Parse DAG
      let dagString: string;
      if (typeof dagJson === 'string') {
        dagString = dagJson;
      } else {
        dagString = JSON.stringify(dagJson);
      }
      const dag = TaskDAGClass.parse(dagString);

      // Find and reset the node
      const node = dag.nodes.get(nodeId);
      if (!node) {
        return {
          success: false,
          error: `Node ${nodeId} not found in DAG`,
        };
      }

      console.log('[Rework] Resetting node:', nodeId);
      // Reset node state for rework
      node.status = TaskStatus.PENDING;
      node.retryCount = (node.retryCount || 0) + 1;
      node.startedAt = undefined;
      node.completedAt = undefined;
      node.outputs = undefined;

      // Get dependencies
      const daemon = getDaemon();
      const workspace = getWorkspace();
      const toolRegistry = getToolRegistry(workspace);

      if (!daemon) {
        return {
          success: false,
          error: 'Daemon not available',
        };
      }

      // Create executor
      const executor = new DAGExecutorClass(toolRegistry, daemon, {
        maxParallel: 4,
        pollIntervalMs: 1000,
        verbose: true,
      });

      // Register event listener
      if (mainWindow && !mainWindow.isDestroyed()) {
        executor.onExecutionEvent((event: any) => {
          try {
            mainWindow.webContents.send('rework:execution-event', event);
          } catch (err) {
            console.error('[Rework] Failed to send event:', err);
          }
        });
      }

      console.log('[Rework] Re-executing node tier');
      // Find which tier contains this node
      let targetTierIdx = -1;
      for (let i = 0; i < dag.tiers.length; i++) {
        if (dag.tiers[i].includes(nodeId)) {
          targetTierIdx = i;
          break;
        }
      }

      if (targetTierIdx === -1) {
        return {
          success: false,
          error: `Node ${nodeId} not found in any tier`,
        };
      }

      // Re-execute just this node (in its tier context for dependencies)
      // For simplicity, we'll mark node as ready and let executor handle it
      const result = await executor.executeTierByTier(dag);

      console.log('[Rework] Node execution complete:', {
        success: result.success,
        nodeStatus: node.status,
        completed: result.completedNodes,
        failed: result.failedNodes,
      });

      return {
        success: result.success && node.status === TaskStatus.COMPLETED,
        nodeId,
        nodeStatus: node.status,
        error: node.status === TaskStatus.FAILED ? node.outputs?.error || 'Node failed' : undefined,
        retryCount: node.retryCount,
      };
    } catch (error: any) {
      console.error('[Rework] Failed:', error?.message);
      return {
        success: false,
        error: error?.message || String(error),
      };
    }
  });
}
