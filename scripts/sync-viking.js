#!/usr/bin/env node
/**
 * CoWork OS → OpenViking Sync
 * 
 * Exports task events from CoWork database and uploads to OpenViking.
 * Run: node sync-viking.js
 * Or schedule: launchd / cron / CoWork Automation
 */

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const https = require('https');

const DB_PATH = path.join(process.env.HOME, '.cowork-os', 'cowork-os.db');
const LAST_EXPORT_FILE = path.join(process.env.HOME, '.cowork-os', 'last-viking-export.txt');
const LOG_FILE = path.join(process.env.HOME, '.cowork-os', 'viking-sync.log');

// Logger
function log(msg, level = 'info') {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] ${msg}\n`;
  console.log(logEntry);
  fs.appendFileSync(LOG_FILE, logEntry);
}

// Step 1: Export task events
function exportTaskEventsSince(sinceSec) {
  try {
    const db = new Database(DB_PATH, { readonly: true });
    const rows = db.prepare(`
      SELECT 
        id, task_id, timestamp, type, payload,
        actor, status, step_id
      FROM task_events
      WHERE timestamp > ?
      ORDER BY timestamp DESC
      LIMIT 1000
    `).all(sinceSec * 1000) || [];

    db.close();
    log(`Exported ${rows.length} events since ${new Date(sinceSec * 1000).toISOString()}`);

    return rows.map(row => ({
      id: row.id,
      task_id: row.task_id,
      timestamp_sec: Math.floor(row.timestamp / 1000),
      type: row.type,
      actor: row.actor || 'cowork-bot',
      status: row.status,
      payload: typeof row.payload === 'string' ? JSON.parse(row.payload) : row.payload,
    }));
  } catch (error) {
    log(`Export failed: ${error.message}`, 'error');
    throw error;
  }
}

// Step 2: Transform to Viking markdown
function toVikingMemory(event) {
  const date = new Date(event.timestamp_sec * 1000).toISOString();
  const typeLabel = event.type.replace(/_/g, ' ').toUpperCase();

  return `## Bot Action: ${event.task_id.slice(0, 8)} ${typeLabel}
**Timestamp:** ${date}
**Actor:** ${event.actor}
**Status:** ${event.status || 'unknown'}

### Action Details
- **Type:** ${event.type}
- **Task ID:** ${event.task_id}
- **Payload (truncated):** \`\`\`json
${JSON.stringify(event.payload, null, 2).slice(0, 500)}
\`\`\`

### Trace
- **Execution ID:** ${event.id}
- **Synced by:** CoWork → OpenViking Sync
---
`;
}

// Step 3: Upload to Viking (via hermes_tools)
async function uploadToViking(markdown) {
  try {
    // Try using hermes_tools if available
    try {
      const { viking_remember } = require('hermes_tools');
      await viking_remember({ content: markdown });
      log(`Uploaded ${markdown.split('---').length} events to OpenViking`);
      return true;
    } catch (e) {
      // Hermes not available; try direct HTTP
      log(`Hermes tools not available, trying direct Viking API`, 'warn');
    }

    // Fallback: Direct Viking API (if exposed locally)
    const vikingUrl = process.env.VIKING_URL || 'http://localhost:6789';
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(JSON.stringify({ content: markdown })),
        },
      };

      const req = https.request(`${vikingUrl}/remember`, options, (res) => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          log(`Viking responded: ${res.statusCode}`);
          resolve(true);
        } else {
          reject(new Error(`Viking returned ${res.statusCode}`));
        }
      });

      req.on('error', (e) => {
        log(`Viking upload failed: ${e.message}`, 'warn');
        // Don't fail the whole sync; log and continue
        resolve(false);
      });

      req.write(JSON.stringify({ content: markdown }));
      req.end();
    });
  } catch (error) {
    log(`Upload to Viking failed: ${error.message}`, 'error');
    throw error;
  }
}

// Main sync
async function syncToViking() {
  try {
    log('=== CoWork → OpenViking Sync Started ===');

    // Get last export time
    const lastExport = fs.existsSync(LAST_EXPORT_FILE)
      ? parseInt(fs.readFileSync(LAST_EXPORT_FILE, 'utf-8'))
      : Math.floor(Date.now() / 1000) - 86400; // Default: last 24h

    // Export events
    const events = exportTaskEventsSince(lastExport);
    if (events.length === 0) {
      log('No new events; sync complete.');
      return;
    }

    // Transform
    const markdown = events.map(toVikingMemory).join('\n');

    // Upload
    await uploadToViking(markdown);

    // Update checkpoint
    fs.writeFileSync(LAST_EXPORT_FILE, Math.floor(Date.now() / 1000).toString());
    log('✓ Sync complete. Next sync will start from now.');

  } catch (error) {
    log(`Sync failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Run
if (require.main === module) {
  syncToViking().catch(err => {
    log(`Fatal error: ${err.message}`, 'error');
    process.exit(1);
  });
}

module.exports = { exportTaskEventsSince, toVikingMemory, uploadToViking };
