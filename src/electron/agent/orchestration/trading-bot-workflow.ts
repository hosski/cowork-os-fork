/**
 * AI Trading Bot Workflow Template
 * 
 * 4-tier DAG for automated cryptocurrency trading.
 * 
 * Tiers:
 * - Tier 0: Market Analysis (1 task: fetch + analyze market data)
 * - Tier 1: Strategy Execution (2 parallel tasks: long + short positions)
 * - Tier 2: Position Management (2 parallel tasks: set stops + limits)
 * - Tier 3: Monitoring (2 parallel tasks: price alerts + risk checks)
 */

import { TaskDAG, TaskStatus, TaskPriority, TaskType } from './task-dag';

export interface TradingBotConfig {
  botName: string;
  exchange?: 'bybit' | 'binance';
  tradingPair?: string;
  initialBalance?: number;
}

export function createTradingBotWorkflow(config: TradingBotConfig): TaskDAG {
  const { botName, exchange = 'bybit', tradingPair = 'BTC/USDT', initialBalance = 1000 } = config;
  const dagId = `trading-${botName}-${Date.now()}`;

  const dag = new TaskDAG(
    dagId,
    `${botName} Trading Bot Run`,
    `4-tier trading bot DAG: Analysis → Strategy → Position Mgmt → Monitoring`
  );

  // ========== TIER 0: MARKET ANALYSIS ==========
  const analysisId = `analysis_${Date.now()}`;
  const analysisNode: any = {
    id: analysisId,
    title: `Market Analysis: ${tradingPair}`,
    description: `Fetch and analyze market data from ${exchange}`,
    role: 'analyst',
    taskType: TaskType.ANALYSIS,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      exchange,
      tradingPair,
      indicators: ['RSI', 'MACD', 'Bollinger Bands', 'Moving Averages'],
      timeframes: ['1h', '4h', '1d'],
    },
    outputs: {},
    successCriteria: 'Market analysis complete with signal indicators',
    maxRetries: 2,
    retryCount: 0,
    estimatedDurationSeconds: 300,
  };
  dag.addNode(analysisNode);

  // ========== TIER 1: STRATEGY EXECUTION (2 parallel tasks) ==========
  // Task 1a: Long Signal Detection
  const longStrategyId = `strategy_long_${Date.now()}`;
  const longStrategyNode: any = {
    id: longStrategyId,
    title: `Strategy: Long Position (${tradingPair})`,
    description: `Evaluate BUY signals and entry points`,
    role: 'trader',
    taskType: TaskType.CODE,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      analysisId,
      strategyType: 'long',
      riskPercentage: 2,
      positionSize: initialBalance * 0.5,
    },
    outputs: {},
    successCriteria: 'Long signal evaluated, position size calculated',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 600,
  };
  dag.addNode(longStrategyNode);
  dag.addEdge(analysisId, longStrategyId);

  // Task 1b: Short Signal Detection
  const shortStrategyId = `strategy_short_${Date.now()}`;
  const shortStrategyNode: any = {
    id: shortStrategyId,
    title: `Strategy: Short Position (${tradingPair})`,
    description: `Evaluate SELL signals and entry points`,
    role: 'trader',
    taskType: TaskType.CODE,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      analysisId,
      strategyType: 'short',
      riskPercentage: 2,
      positionSize: initialBalance * 0.3,
    },
    outputs: {},
    successCriteria: 'Short signal evaluated, position size calculated',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 600,
  };
  dag.addNode(shortStrategyNode);
  dag.addEdge(analysisId, shortStrategyId);

  // ========== TIER 2: POSITION MANAGEMENT (2 parallel tasks) ==========
  // Task 2a: Stop Loss & Take Profit
  const stopLossId = `stoploss_${Date.now()}`;
  const stopLossNode: any = {
    id: stopLossId,
    title: `Set Stop Loss & Take Profit`,
    description: `Calculate and set SL/TP for all active positions`,
    role: 'risk-manager',
    taskType: TaskType.CODE,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      longStrategyId,
      shortStrategyId,
      slippage: 0.5,
      profitTarget: 5,
      lossLimit: -2,
    },
    outputs: {},
    successCriteria: 'SL/TP levels set for all positions',
    maxRetries: 2,
    retryCount: 0,
    estimatedDurationSeconds: 300,
  };
  dag.addNode(stopLossNode);
  dag.addEdge(longStrategyId, stopLossId);
  dag.addEdge(shortStrategyId, stopLossId);

  // Task 2b: Position Sizing & Leverage
  const leverageId = `leverage_${Date.now()}`;
  const leverageNode: any = {
    id: leverageId,
    title: `Apply Leverage & Position Sizing`,
    description: `Calculate optimal leverage and position sizing`,
    role: 'risk-manager',
    taskType: TaskType.CODE,
    priority: TaskPriority.NORMAL,
    status: TaskStatus.PENDING,
    inputs: {
      longStrategyId,
      shortStrategyId,
      maxLeverage: 5,
      accountRisk: 1,
      availableBalance: initialBalance,
    },
    outputs: {},
    successCriteria: 'Leverage calculated, positions sized within risk limits',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 300,
  };
  dag.addNode(leverageNode);
  dag.addEdge(longStrategyId, leverageId);
  dag.addEdge(shortStrategyId, leverageId);

  // ========== TIER 3: MONITORING (2 parallel tasks) ==========
  // Task 3a: Price Alerts & Notifications
  const alertsId = `alerts_${Date.now()}`;
  const alertsNode: any = {
    id: alertsId,
    title: `Setup Price Alerts & Webhooks`,
    description: `Configure price alerts and webhook notifications`,
    role: 'monitor',
    taskType: TaskType.CODE,
    priority: TaskPriority.NORMAL,
    status: TaskStatus.PENDING,
    inputs: {
      stopLossId,
      leverageId,
      alertThresholds: [1, 2, 5, 10],
      webhookUrl: process.env.TRADING_WEBHOOK_URL || 'http://localhost:3000/trading-alerts',
    },
    outputs: {},
    successCriteria: 'Price alerts configured and active',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 300,
  };
  dag.addNode(alertsNode);
  dag.addEdge(stopLossId, alertsId);
  dag.addEdge(leverageId, alertsId);

  // Task 3b: Risk & Performance Monitoring
  const monitoringId = `monitoring_${Date.now()}`;
  const monitoringNode: any = {
    id: monitoringId,
    title: `Start Risk & Performance Monitoring`,
    description: `Monitor PnL, drawdown, position health`,
    role: 'monitor',
    taskType: TaskType.CODE,
    priority: TaskPriority.NORMAL,
    status: TaskStatus.PENDING,
    inputs: {
      stopLossId,
      leverageId,
      refreshInterval: 5000,
      maxDrawdown: -5,
      maxDailyLoss: -10,
    },
    outputs: {},
    successCriteria: 'Monitoring active, ready for trading',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 300,
  };
  dag.addNode(monitoringNode);
  dag.addEdge(stopLossId, monitoringId);
  dag.addEdge(leverageId, monitoringId);

  // Compute execution tiers
  dag.computeTiers();

  return dag;
}

export function getTradingBotWorkflowJSON(botName: string, exchange: 'bybit' | 'binance' = 'bybit'): Record<string, any> {
  return createTradingBotWorkflow({ botName, exchange }).toJSON();
}
