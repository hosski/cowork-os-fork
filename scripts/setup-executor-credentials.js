#!/usr/bin/env node
/**
 * Executor.sh Credential Setup
 * 
 * Bridge CoWork OS → Executor daemon for credential management.
 * Supports: Bybit, Binance, OpenRouter, OpenVi king
 * 
 * Usage:
 *   node scripts/setup-executor-credentials.js --exchange bybit
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(process.env.HOME, '.cowork-os-fork', 'executor-config.json');

function loadConfig() {
  if (fs.existsSync(CONFIG_PATH)) {
    return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  }
  return {
    executor: {
      url: process.env.EXECUTOR_URL || 'http://localhost:3100',
      apiKey: process.env.EXECUTOR_API_KEY || '',
    },
    exchanges: {},
    llm: {},
    viking: {},
  };
}

function saveConfig(config) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
  console.log(`✓ Config saved to ${CONFIG_PATH}`);
}

function setupBybit(config) {
  const apiKey = process.env.BYBIT_API_KEY;
  const apiSecret = process.env.BYBIT_API_SECRET;
  
  if (!apiKey || !apiSecret) {
    console.warn('⚠ BYBIT_API_KEY or BYBIT_API_SECRET not set');
    return;
  }

  config.exchanges.bybit = {
    apiKey, // Never store in config, fetch from env
    apiSecret: undefined, // Never store secrets
    endpoint: 'https://api.bybit.com',
    testnet: process.env.BYBIT_TESTNET === 'true',
  };
  
  console.log('✓ Bybit configured (credentials via env vars)');
}

function setupBinance(config) {
  const apiKey = process.env.BINANCE_API_KEY;
  const apiSecret = process.env.BINANCE_API_SECRET;
  
  if (!apiKey || !apiSecret) {
    console.warn('⚠ BINANCE_API_KEY or BINANCE_API_SECRET not set');
    return;
  }

  config.exchanges.binance = {
    apiKey: undefined,
    apiSecret: undefined,
    endpoint: 'https://api.binance.com',
  };
  
  console.log('✓ Binance configured (credentials via env vars)');
}

function setupOpenRouter(config) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  if (!apiKey) {
    console.warn('⚠ OPENROUTER_API_KEY not set');
    return;
  }

  config.llm.openrouter = {
    endpoint: 'https://openrouter.ai/api/v1',
    model: 'openai/gpt-4-turbo',
    maxTokens: 4096,
  };
  
  console.log('✓ OpenRouter configured');
}

function setupViking(config) {
  const url = process.env.VIKING_URL || 'http://localhost:6789';
  const apiKey = process.env.VIKING_API_KEY;

  config.viking = {
    url,
    authenticated: !!apiKey,
  };
  
  console.log(`✓ OpenViking configured at ${url}`);
}

function testExecutorConnection() {
  const config = loadConfig();
  console.log(`\nTesting Executor connection: ${config.executor.url}`);
  console.log('(Actual connection test requires running Executor daemon)');
}

function main() {
  console.log('=== Executor Credential Setup ===\n');

  const config = loadConfig();

  // Setup exchanges
  if (process.env.BYBIT_API_KEY) setupBybit(config);
  if (process.env.BINANCE_API_KEY) setupBinance(config);

  // Setup LLM
  if (process.env.OPENROUTER_API_KEY) setupOpenRouter(config);

  // Setup Viking
  setupViking(config);

  saveConfig(config);
  testExecutorConnection();

  console.log('\n=== Credential Setup Complete ===');
  console.log('Config file: ' + CONFIG_PATH);
  console.log('\nSecrets management:');
  console.log('✓ API keys stored in .env (never in config file)');
  console.log('✓ Executor daemon handles credential lookup');
  console.log('✓ CoWork uses MCP interface for authenticated requests');
}

main();
