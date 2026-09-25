/**
 * Video Workflow Creation IPC Handler
 * 
 * Allows renderer to create 5-tier video production workflows.
 * Usage: ipcRenderer.invoke('video:create-workflow', { episodeNumber, seriesName })
 */

import { ipcMain } from 'electron';
import { createVideoWorkflow, createFullSeasonWorkflow } from '../agent/orchestration/video-workflow-template';

export function registerVideoWorkflowHandler() {
  // Create single episode workflow
  ipcMain.handle('video:create-workflow', async (event, { episodeNumber, seriesName }) => {
    console.log(`[VideoWorkflow] Creating workflow: ${seriesName} Ep${episodeNumber}`);
    try {
      const dag = createVideoWorkflow({ episodeNumber, seriesName });
      console.log(`[VideoWorkflow] DAG created with ID: ${dag.id}`);
      const dagJSON = dag.toJSON();
      console.log(`[VideoWorkflow] DAG serialized, returning response`);

      return {
        success: true,
        dagId: dag.id,
        dagJSON,
        message: `Video workflow created for ${seriesName} Episode ${episodeNumber}`,
        tiers: dagJSON.tiers,
        nodeCount: Object.keys(dagJSON.nodes).length,
        taskCount: Object.keys(dagJSON.nodes).length,
        estimatedDurationSeconds: Object.values(dagJSON.nodes).reduce(
          (sum: number, n: any) => sum + (n.estimatedDurationSeconds || 0),
          0
        ),
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || String(error),
        message: 'Failed to create video workflow',
      };
    }
  });

  // Create full season (11 episodes)
  ipcMain.handle('video:create-season', async (event, { seriesName }) => {
    try {
      const workflows = createFullSeasonWorkflow(seriesName);
      const allDAGs = workflows.map((w) => w.toJSON());

      const totalNodes = allDAGs.reduce((sum, d) => sum + Object.keys(d.nodes).length, 0);
      const totalDuration = allDAGs.reduce(
        (sum, d) =>
          sum +
          Object.values(d.nodes).reduce((s: number, n: any) => s + (n.estimatedDurationSeconds || 0), 0),
        0
      );

      return {
        success: true,
        seriesName,
        episodeCount: workflows.length,
        dags: allDAGs,
        message: `Full season workflow created: 11 episodes, ${totalNodes} total tasks`,
        totalNodes,
        totalDurationSeconds: totalDuration,
        estimatedRenderTime: `${(totalDuration / 3600).toFixed(1)} hours`,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || String(error),
        message: 'Failed to create season workflow',
      };
    }
  });

  // Get workflow stats
  ipcMain.handle('video:get-stats', async (event, { episodeNumber, seriesName }) => {
    try {
      const dag = createVideoWorkflow({ episodeNumber, seriesName });
      const tiers = dag.computeTiers();

      return {
        success: true,
        tierCount: tiers.length,
        tiers: tiers.map((tier, idx) => ({
          tier: idx,
          nodeCount: tier.length,
          nodeIds: tier,
          parallelizable: idx > 0 && tier.length > 1,
        })),
        totalNodes: dag.nodes.size,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || String(error),
      };
    }
  });
}
