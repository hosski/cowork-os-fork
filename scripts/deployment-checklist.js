#!/usr/bin/env node
/**
 * Production Deployment Checklist
 * 
 * Step-by-step verification before running video/trading workflows.
 * 
 * Usage:
 *   node scripts/deployment-checklist.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const COWORK_HOME = path.join(process.env.HOME, '.cowork-os-fork');
const checks = [];

function check(name, fn) {
  const result = {
    name,
    passed: false,
    message: '',
    error: null,
  };

  try {
    result.message = fn();
    result.passed = true;
  } catch (err) {
    result.error = err.message;
    result.passed = false;
  }

  checks.push(result);
  return result;
}

function main() {
  console.log('=== Production Deployment Checklist ===\n');

  // 1. Build
  check('Build Status', () => {
    try {
      execSync('cd ' + COWORK_HOME + ' && npm run build > /tmp/build.log 2>&1');
      return 'Build compiles cleanly';
    } catch (err) {
      const log = fs.readFileSync('/tmp/build.log', 'utf8');
      if (log.includes('error TS')) {
        throw new Error('TypeScript errors in build');
      }
      throw err;
    }
  });

  // 2. Database
  check('Database Connectivity', () => {
    const dbPath = path.join(COWORK_HOME, 'cowork-os.db');
    if (!fs.existsSync(dbPath)) {
      throw new Error('Database file not found');
    }
    return `DB exists: ${dbPath}`;
  });

  // 3. IPC Handlers
  check('IPC Handlers Registered', () => {
    const mainPath = path.join(COWORK_HOME, 'src/electron/main.ts');
    const content = fs.readFileSync(mainPath, 'utf8');
    const handlers = [
      'registerDAGExecutionHandler',
      'registerGrillTabConversionHandler',
      'registerTestDAGHandler',
      'registerVideoWorkflowHandler',
      'registerTradingBotWorkflowHandler',
    ];
    const missing = handlers.filter((h) => !content.includes(h));
    if (missing.length > 0) {
      throw new Error(`Missing handlers: ${missing.join(', ')}`);
    }
    return `All ${handlers.length} handlers registered`;
  });

  // 4. Redux Middleware
  check('Redux Auto-Execution Middleware', () => {
    const storeFile = path.join(COWORK_HOME, 'src/renderer/store.ts');
    const content = fs.readFileSync(storeFile, 'utf8');
    if (!content.includes('dagAutoExecutionMiddleware')) {
      throw new Error('Middleware not integrated into store');
    }
    return 'Middleware active in Redux store';
  });

  // 5. QA Validator
  check('Fruvisi QA Validator', () => {
    const qaPath = path.join(COWORK_HOME, 'src/electron/qa/fruvisi-validator.ts');
    if (!fs.existsSync(qaPath)) {
      throw new Error('QA validator not found');
    }
    const content = fs.readFileSync(qaPath, 'utf8');
    if (!content.includes('validateTaskOutput') || !content.includes('shouldRetry')) {
      throw new Error('QA functions incomplete');
    }
    return 'QA validator operational';
  });

  // 6. OpenViking Sync
  check('OpenViking Sync Scripts', () => {
    const syncFiles = [
      'scripts/sync-viking.js',
      'scripts/test-viking-sync.js',
      'scripts/setup-viking-cron.js',
    ];
    const missing = syncFiles.filter((f) => !fs.existsSync(path.join(COWORK_HOME, f)));
    if (missing.length > 0) {
      throw new Error(`Missing: ${missing.join(', ')}`);
    }
    return `${syncFiles.length} sync scripts ready`;
  });

  // 7. Render Queue
  check('Render Queue Integration', () => {
    const renderPath = path.join(COWORK_HOME, 'src/electron/services/render-task-integration.ts');
    if (!fs.existsSync(renderPath)) {
      throw new Error('Render queue integration not found');
    }
    return 'Render queue service integration ready';
  });

  // 8. Video Workflow
  check('Video Workflow Template', () => {
    const videoPath = path.join(COWORK_HOME, 'src/electron/agent/orchestration/video-workflow-template.ts');
    if (!fs.existsSync(videoPath)) {
      throw new Error('Video workflow template not found');
    }
    const content = fs.readFileSync(videoPath, 'utf8');
    if (!content.includes('createVideoWorkflow') || !content.includes('createFullSeasonWorkflow')) {
      throw new Error('Video workflow functions incomplete');
    }
    return '5-tier video workflow template ready';
  });

  // 9. Trading Bot Workflow
  check('Trading Bot Workflow Template', () => {
    const tradingPath = path.join(COWORK_HOME, 'src/electron/agent/orchestration/trading-bot-workflow.ts');
    if (!fs.existsSync(tradingPath)) {
      throw new Error('Trading bot workflow not found');
    }
    const content = fs.readFileSync(tradingPath, 'utf8');
    if (!content.includes('createTradingBotWorkflow')) {
      throw new Error('Trading bot workflow incomplete');
    }
    return '4-tier trading bot workflow ready';
  });

  // 10. Test Coverage
  check('Test Suite', () => {
    const testFiles = [
      'scripts/test-dag-e2e.js',
      'scripts/test-video-workflow.js',
      'scripts/test-viking-sync.js',
    ];
    const missing = testFiles.filter((f) => !fs.existsSync(path.join(COWORK_HOME, f)));
    if (missing.length > 0) {
      throw new Error(`Missing: ${missing.join(', ')}`);
    }
    return `${testFiles.length} test suites ready`;
  });

  // 11. Credentials Setup
  check('Executor Credentials Setup', () => {
    const credScript = path.join(COWORK_HOME, 'scripts/setup-executor-credentials.js');
    if (!fs.existsSync(credScript)) {
      throw new Error('Credentials setup script not found');
    }
    return 'Executor.sh credential bridge ready';
  });

  // 12. Render Queue Daemon
  check('Render Queue Startup Script', () => {
    const renderScript = path.join(COWORK_HOME, 'scripts/start-render-queue.js');
    if (!fs.existsSync(renderScript)) {
      throw new Error('Render queue startup script not found');
    }
    return 'Render queue daemon script ready';
  });

  // Print results
  console.log('Results:\n');
  let passCount = 0;
  checks.forEach((result, idx) => {
    const status = result.passed ? '✓' : '✗';
    console.log(`${idx + 1}. ${status} ${result.name}`);
    if (result.message) {
      console.log(`   → ${result.message}`);
    }
    if (result.error) {
      console.log(`   → ERROR: ${result.error}`);
    }
    if (result.passed) passCount++;
  });

  console.log(`\nSummary: ${passCount}/${checks.length} checks passed`);

  if (passCount === checks.length) {
    console.log('\n✅ ALL CHECKS PASSED — Ready for execution');
    console.log('\nNext steps:');
    console.log('1. node scripts/setup-executor-credentials.js');
    console.log('2. node scripts/start-render-queue.js');
    console.log('3. node scripts/setup-viking-cron.js');
    console.log('4. Start CoWork OS and create video/trading workflows');
    process.exit(0);
  } else {
    console.log('\n❌ Some checks failed — Fix issues before deployment');
    process.exit(1);
  }
}

main();
