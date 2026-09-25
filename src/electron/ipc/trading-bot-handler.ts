/**
 * Trading Bot Workflow IPC Handler
 * 
 * Allows renderer to create and trigger trading bot workflows.
 * Usage: ipcRenderer.invoke('trading:create-workflow', { botName, exchange })
 */

import { ipcMain } from 'electron';
import { createTradingBotWorkflow } from '../agent/orchestration/trading-bot-workflow';

export function registerTradingBotWorkflowHandler() {
  ipcMain.handle('trading:create-workflow', async (event, { botName, exchange, tradingPair, initialBalance }) => {
    console.log(`[TradingWorkflow] Creating workflow: ${botName} on ${exchange}`);
    try {
      const dag = createTradingBotWorkflow({
        botName,
        exchange: exchange || 'bybit',
        tradingPair: tradingPair || 'BTC/USDT',
        initialBalance: initialBalance || 1000,
      });
      console.log(`[TradingWorkflow] DAG created with ID: ${dag.id}`);
      const dagJSON = dag.toJSON();
      console.log(`[TradingWorkflow] DAG serialized, returning response`);

      return {
        success: true,
        dagId: dag.id,
        dagJSON,
        message: `Trading bot workflow created: ${botName}`,
        tiers: dagJSON.tiers,
        nodeCount: Object.keys(dagJSON.nodes).length,
        estimatedDurationSeconds: Object.values(dagJSON.nodes).reduce(
          (sum: number, n: any) => sum + (n.estimatedDurationSeconds || 0),
          0
        ),
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || String(error),
        message: 'Failed to create trading bot workflow',
      };
    }
  });

  ipcMain.handle('trading:get-stats', async (event, { botName }) => {
    try {
      const dag = createTradingBotWorkflow({ botName });
      const tiers = dag.computeTiers();

      return {
        success: true,
        botName,
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
