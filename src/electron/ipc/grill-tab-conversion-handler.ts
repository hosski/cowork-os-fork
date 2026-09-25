/**
 * Grill-Tab → DAG Conversion IPC Handler
 * 
 * Allows renderer to request conversion of a completed Grill-Tab ladder
 * into an executable TaskDAG workflow.
 */

import { ipcMain } from 'electron';
import { grillTabToWorkflow } from '../agent/orchestration/grill-tab-to-dag';

export interface GrillTabLadderRung {
  question: string;
  answer: string;
  category: 'goal' | 'deliverable' | 'scope' | 'verification' | 'architecture';
  recommended: string;
}

export function registerGrillTabConversionHandler(): void {
  ipcMain.handle(
    'grill-tab:to-dag',
    async (
      _event,
      {
        taskId,
        taskTitle,
        ladder,
      }: { taskId: string; taskTitle: string; ladder: GrillTabLadderRung[] }
    ) => {
      try {
        console.log('[Grill-Tab→DAG] Converting task:', taskTitle);

        const workflowData = grillTabToWorkflow(taskId, taskTitle, ladder);

        console.log('[Grill-Tab→DAG] Created DAG with', workflowData.tiers.length, 'tiers');

        return {
          success: true,
          workflowData,
        };
      } catch (error: any) {
        console.error('[Grill-Tab→DAG] Conversion failed:', error?.message);
        return {
          success: false,
          error: error?.message || 'Conversion failed',
        };
      }
    }
  );
}
