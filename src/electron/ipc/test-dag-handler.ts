/**
 * Test DAG Execution IPC Handler
 * 
 * Allows renderer to trigger infrastructure validation test.
 * Called from test UI or CLI.
 */

import { ipcMain } from 'electron';
import { createTestDAG } from '../agent/orchestration/test-dag';

export function registerTestDAGHandler() {
  ipcMain.handle('test:execute-dag', async (event) => {
    try {
      const dag = createTestDAG();
      const dagJSON = dag.toJSON();

      return {
        success: true,
        dagId: dag.id,
        dagJSON,
        message: 'Test DAG created and ready for execution',
        tiers: dagJSON.tiers,
        nodeCount: dagJSON.nodes.length,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || String(error),
        message: 'Failed to create test DAG',
      };
    }
  });

  ipcMain.handle('test:get-dag-json', async (event) => {
    try {
      const dag = createTestDAG();
      return {
        success: true,
        dag: dag.toJSON(),
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || String(error),
      };
    }
  });
}
