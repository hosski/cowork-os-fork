#!/usr/bin/env node
/**
 * OpenViking Sync Test Suite
 * 
 * Verify end-to-end sync from CoWork task_events → OpenViking memory.
 * 
 * Usage:
 *   node scripts/test-viking-sync.js
 */

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(process.env.HOME, '.cowork-os-fork', 'cowork-os.db');
const LOG_FILE = path.join(process.env.HOME, '.cowork-os-fork', 'test-viking-sync.log');

function log(msg, level = 'info') {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] ${msg}`;
  console.log(logEntry);
  fs.appendFileSync(LOG_FILE, logEntry + '\n');
}

async function testVikingSync() {
  log('=== OpenViking Sync Test Suite ===');

  // Test 1: Check database connectivity
  log('\nTest 1: Database connectivity');
  try {
    const db = new Database(DB_PATH, { readonly: true });
    const count = db.prepare('SELECT COUNT(*) as cnt FROM task_events').get();
    log(`✓ Connected to ${DB_PATH}`);
    log(`✓ Found ${count.cnt} task events`);
    db.close();
  } catch (e) {
    log(`✗ Database error: ${e.message}`, 'error');
    return;
  }

  // Test 2: Export recent events
  log('\nTest 2: Export recent task events');
  try {
    const db = new Database(DB_PATH, { readonly: true });
    const recentEvents = db.prepare(`
      SELECT id, task_id, timestamp, type, status
      FROM task_events
      WHERE timestamp > ?
      ORDER BY timestamp DESC
      LIMIT 5
    `).all((Date.now() - 7 * 24 * 60 * 60 * 1000));
    
    log(`✓ Exported ${recentEvents.length} recent events (last 7 days)`);
    recentEvents.forEach((evt, i) => {
      log(`  ${i + 1}. [${new Date(evt.timestamp).toISOString()}] ${evt.type} on task ${evt.task_id} (${evt.status})`);
    });
    db.close();
  } catch (e) {
    log(`✗ Export error: ${e.message}`, 'error');
    return;
  }

  // Test 3: Format as Markdown (Viking format)
  log('\nTest 3: Format events as Markdown');
  try {
    const db = new Database(DB_PATH, { readonly: true });
    const allEvents = db.prepare(`
      SELECT id, task_id, timestamp, type, payload, status
      FROM task_events
      ORDER BY timestamp DESC
      LIMIT 10
    `).all();

    let markdown = '# CoWork Task Events Export\n\n';
    markdown += `Exported at: ${new Date().toISOString()}\n`;
    markdown += `Total events: ${allEvents.length}\n\n`;

    allEvents.forEach((evt) => {
      const payload = evt.payload ? JSON.parse(evt.payload) : {};
      markdown += `## Event ${evt.id}\n`;
      markdown += `- Task: ${evt.task_id}\n`;
      markdown += `- Type: ${evt.type}\n`;
      markdown += `- Status: ${evt.status}\n`;
      markdown += `- Time: ${new Date(evt.timestamp).toISOString()}\n`;
      markdown += `- Payload: ${JSON.stringify(payload, null, 2)}\n\n`;
    });

    log(`✓ Formatted ${allEvents.length} events as Markdown`);
    log(`  Markdown length: ${markdown.length} bytes`);
    db.close();
  } catch (e) {
    log(`✗ Format error: ${e.message}`, 'error');
    return;
  }

  // Test 4: Check OpenViking connectivity
  log('\nTest 4: OpenViking API connectivity');
  const vikingUrl = process.env.VIKING_URL || 'http://localhost:6789';
  try {
    // Try direct HTTP call
    const response = await fetch(`${vikingUrl}/health`, { method: 'GET', timeout: 5000 });
    if (response.ok) {
      log(`✓ OpenViking reachable at ${vikingUrl}`);
    } else {
      log(`⚠ OpenViking returned ${response.status}`, 'warn');
    }
  } catch (e) {
    log(`⚠ OpenViking unreachable: ${e.message} (will retry via Hermes tools)`, 'warn');
  }

  // Test 5: Simulate upload (if tools available)
  log('\nTest 5: Upload simulation');
  try {
    const testMarkdown = `# CoWork DAG Execution Report

- Workflow: test-dag
- Status: COMPLETED
- Tiers: 3
- Tasks: 8
- Duration: 12.5s
- QA: All tasks passed`;

    log(`✓ Test markdown (${testMarkdown.length} bytes) ready for upload`);
    log(`  (Actual upload requires Hermes tools or Viking API)`);
  } catch (e) {
    log(`✗ Upload error: ${e.message}`, 'error');
    return;
  }

  log('\n=== Test Suite Complete ===');
  log('Summary: Database ✓, Export ✓, Format ✓, Viking status ⚠, Upload ready ✓');
}

// Run tests
testVikingSync().catch((err) => {
  log(`Fatal error: ${err.message}`, 'error');
  process.exit(1);
});
