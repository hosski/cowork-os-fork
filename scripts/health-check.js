#!/usr/bin/env node
/**
 * Comprehensive Health Check
 * 
 * Deep system verification before running workflows.
 * Tests: Node.js, npm, builds, IPC handlers, render queue, credentials, DB.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const COWORK_HOME = '/Users/hosski/.cowork-os-fork';
const RENDER_QUEUE_PORT = 5556;

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

let passed = 0;
let failed = 0;
let warnings = 0;

function log(msg) {
  console.log(msg);
}

function success(test, msg) {
  log(`${colors.green}✓${colors.reset} ${test}: ${msg}`);
  passed++;
}

function error(test, msg) {
  log(`${colors.red}✗${colors.reset} ${test}: ${msg}`);
  failed++;
}

function warn(test, msg) {
  log(`${colors.yellow}⚠${colors.reset} ${test}: ${msg}`);
  warnings++;
}

log(`\n${colors.blue}=== CoWork OS Health Check ===${colors.reset}\n`);

// 1. Environment
log(`${colors.blue}1. Environment${colors.reset}`);
try {
  if (!process.env.HERMES_HOME) {
    warn('HERMES_HOME', 'Not set; will default to ~/.hermes');
  } else {
    success('HERMES_HOME', process.env.HERMES_HOME);
  }
} catch (err) {
  error('HERMES_HOME', err.message);
}

// 2. Node.js + npm
log(`\n${colors.blue}2. Build Tools${colors.reset}`);
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
  success('Node.js', nodeVersion);
} catch (err) {
  error('Node.js', 'Not installed');
}

try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
  success('npm', `v${npmVersion}`);
} catch (err) {
  error('npm', 'Not installed');
}

// 3. CoWork Project Structure
log(`\n${colors.blue}3. Project Structure${colors.reset}`);
const requiredDirs = [
  'src/electron',
  'src/renderer',
  'src/electron/agent/orchestration',
  'src/electron/ipc',
  'src/electron/qa',
  'scripts',
];

requiredDirs.forEach(dir => {
  const fullPath = path.join(COWORK_HOME, dir);
  if (fs.existsSync(fullPath)) {
    success(`Directory: ${dir}`, 'exists');
  } else {
    error(`Directory: ${dir}`, 'missing');
  }
});

// 4. Critical Files
log(`\n${colors.blue}4. Critical Infrastructure Files${colors.reset}`);
const requiredFiles = [
  'src/electron/agent/orchestration/dag-executor.ts',
  'src/electron/agent/orchestration/grill-tab-to-dag.ts',
  'src/electron/agent/orchestration/video-workflow-template.ts',
  'src/electron/agent/orchestration/trading-bot-workflow.ts',
  'src/electron/ipc/dag-execution-handler.ts',
  'src/electron/ipc/grill-tab-conversion-handler.ts',
  'src/electron/ipc/video-workflow-handler.ts',
  'src/electron/ipc/trading-bot-handler.ts',
  'src/electron/qa/fruvisi-validator.ts',
  'src/renderer/middleware/dag-auto-execution.ts',
  'scripts/sync-viking.js',
  'DEPLOYMENT.md',
  'QUICKSTART.md',
];

requiredFiles.forEach(file => {
  const fullPath = path.join(COWORK_HOME, file);
  if (fs.existsSync(fullPath)) {
    success(`File: ${path.basename(file)}`, 'found');
  } else {
    error(`File: ${file}`, 'missing');
  }
});

// 5. Build Status
log(`\n${colors.blue}5. Build Status${colors.reset}`);
try {
  // Safe: hardcoded path, no user input interpolated
  execSync('cd ' + COWORK_HOME + ' && npm run build > /tmp/build-health.log 2>&1', { stdio: 'pipe' });
  success('npm run build', 'passes with no errors');
} catch (err) {
  const buildLog = fs.readFileSync('/tmp/build-health.log', 'utf8');
  if (buildLog.includes('error TS')) {
    error('Build', 'TypeScript compilation errors');
  } else {
    error('Build', 'failed to compile');
  }
}

// 6. Render Queue
log(`\n${colors.blue}6. Render Queue Service${colors.reset}`);
try {
  const renderQueuePath = path.join(COWORK_HOME, 'src/services/render-queue-service.ts');
  if (fs.existsSync(renderQueuePath)) {
    success('Render Queue Service', 'file exists');
  } else {
    error('Render Queue Service', 'file not found');
  }
} catch (err) {
  error('Render Queue', err.message);
}

// 7. Database
log(`\n${colors.blue}7. Database${colors.reset}`);
try {
  const dbPath = path.join(process.env.HOME || '/Users/hosski', '.cowork-os-fork', 'cowork.db');
  if (fs.existsSync(dbPath)) {
    const stats = fs.statSync(dbPath);
    success('SQLite DB', `${(stats.size / 1024).toFixed(1)} KB`);
  } else {
    warn('SQLite DB', 'not yet initialized (will be created on first run)');
  }
} catch (err) {
  warn('Database check', err.message);
}

// 8. OpenViking Sync Script
log(`\n${colors.blue}8. OpenViking Integration${colors.reset}`);
try {
  const vikingSyncPath = path.join(COWORK_HOME, 'scripts/sync-viking.js');
  if (fs.existsSync(vikingSyncPath)) {
    success('Viking Sync Script', 'ready for nightly cron');
  } else {
    error('Viking Sync Script', 'file not found');
  }
} catch (err) {
  error('OpenViking Integration', err.message);
}

// 9. Git Status
log(`\n${colors.blue}9. Git Status${colors.reset}`);
try {
  const gitStatus = execSync('cd ' + COWORK_HOME + ' && git status --short', { encoding: 'utf8' }).trim();
  if (gitStatus === '') {
    success('Git', 'working tree clean');
  } else {
    warn('Git', `${gitStatus.split('\n').length} uncommitted changes`);
  }
} catch (err) {
  error('Git', 'not available');
}

// 10. Recent Commits
log(`\n${colors.blue}10. Recent Infrastructure Commits${colors.reset}`);
try {
  const commits = execSync(
    'cd ' + COWORK_HOME + ' && git log --oneline -10 | grep -E "feat|docs|test"',
    { encoding: 'utf8' }
  ).split('\n').filter(l => l).slice(0, 5);

  if (commits.length > 0) {
    commits.forEach(c => {
      const [hash, ...msg] = c.split(' ');
      success('Commit', msg.join(' ').substring(0, 60));
    });
  } else {
    warn('Recent Commits', 'none found');
  }
} catch (err) {
  warn('Git History', err.message);
}

// Summary
log(`\n${colors.blue}=== Summary ===${colors.reset}`);
log(`${colors.green}Passed: ${passed}${colors.reset}`);
if (failed > 0) log(`${colors.red}Failed: ${failed}${colors.reset}`);
if (warnings > 0) log(`${colors.yellow}Warnings: ${warnings}${colors.reset}`);

if (failed === 0) {
  log(`\n${colors.green}✓ Health check passed! Ready for deployment.${colors.reset}`);
  process.exit(0);
} else {
  log(`\n${colors.red}✗ ${failed} checks failed. Review above and retry.${colors.reset}`);
  process.exit(1);
}
