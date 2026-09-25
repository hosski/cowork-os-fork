/**
 * Auto-Execution Middleware for DAG Workflows
 * 
 * Automatically spawns DAG execution when:
 * - A new workflow is created with a DAG structure
 * - The active workflow changes
 * - Manual trigger via Redux action
 * 
 * Communicates with main process via IPC to execute in Node context.
 */

import type { Middleware } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const dagAutoExecutionMiddleware: Middleware<{}, RootState> =
  (store) => (next) => async (action: any) => {
    // Pass through the action first
    const result = next(action);

    // After Redux state updates, check if we should auto-execute
    const state = store.getState();

    // Trigger auto-execution if:
    // 1. A new workflow was added
    // 2. The active workflow changed
    // 3. Execution was manually triggered via Redux action
    if (
      action.type === 'taskDAG/addWorkflow' ||
      action.type === 'taskDAG/setActiveWorkflow' ||
      action.type === 'executionPlan/startExecution'
    ) {
      const { activeWorkflow, workflows } = state.taskDAG;

      if (activeWorkflow && workflows[activeWorkflow]) {
        const workflowData = workflows[activeWorkflow];
        
        // Check if workflow has a DAG structure (not just a plain task)
        const hasDAGStructure = 
          workflowData.tiers && 
          Array.isArray(workflowData.tiers) && 
          workflowData.tiers.length > 0;

        if (hasDAGStructure) {
          // Trigger execution via IPC to main process
          try {
            const { ipcRenderer } = await import('electron');
            const dagJson = typeof workflowData === 'string' 
              ? workflowData 
              : JSON.stringify(workflowData);

            // Fire-and-forget: don't block UI
            ipcRenderer.invoke('dag:execute', { dagJson }).catch((err: any) => {
              console.error('[DAG Auto-Execute] IPC failed:', err?.message);
            });
          } catch (err) {
            console.error('[DAG Auto-Execute] Failed to trigger execution:', err);
          }
        }
      }
    }

    return result;
  };
