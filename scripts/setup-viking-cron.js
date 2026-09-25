#!/usr/bin/env node
/**
 * Setup OpenViking Nightly Sync Cron Job
 * 
 * Schedules sync-viking.js to run nightly (2 AM) via launchd (macOS).
 * Exports task_events from CoWork DB to OpenViking memory.
 * 
 * Usage:
 *   node scripts/setup-viking-cron.js
 * 
 * Uninstall:
 *   node scripts/setup-viking-cron.js --uninstall
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PLIST_PATH = path.join(
  process.env.HOME,
  'Library/LaunchAgents/com.cowork.viking-sync.plist'
);

const SCRIPT_PATH = path.join(
  process.env.HOME,
  '.cowork-os-fork/scripts/sync-viking.js'
);

function createPlist() {
  const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.cowork.viking-sync</string>
  
  <key>ProgramArguments</key>
  <array>
    <string>/usr/local/bin/node</string>
    <string>${SCRIPT_PATH}</string>
  </array>
  
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>2</integer>
    <key>Minute</key>
    <integer>0</integer>
  </dict>
  
  <key>StandardOutPath</key>
  <string>${process.env.HOME}/.cowork-os-fork/logs/viking-sync.out</string>
  
  <key>StandardErrorPath</key>
  <string>${process.env.HOME}/.cowork-os-fork/logs/viking-sync.err</string>
  
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>/usr/local/bin:/usr/bin:/bin</string>
    <key>HOME</key>
    <string>${process.env.HOME}</string>
    <key>VIKING_URL</key>
    <string>${process.env.VIKING_URL || 'http://localhost:6789'}</string>
  </dict>
  
  <key>RunAtLoad</key>
  <true/>
  
  <key>KeepAlive</key>
  <false/>
</dict>
</plist>`;

  return plist;
}

function install() {
  console.log('=== Installing OpenViking Sync Cron ===\n');

  // Create logs directory
  const logsDir = path.join(process.env.HOME, '.cowork-os-fork/logs');
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
    console.log(`✓ Created logs directory: ${logsDir}`);
  }

  // Create plist
  const plistContent = createPlist();
  fs.writeFileSync(PLIST_PATH, plistContent);
  console.log(`✓ Created launchd plist: ${PLIST_PATH}`);

  // Load plist
  try {
    execSync(`launchctl load ${PLIST_PATH}`);
    console.log('✓ Loaded plist with launchctl');
  } catch (err) {
    if (err.message.includes('already loaded')) {
      console.log('⚠ Plist already loaded, unloading and reloading...');
      try {
        execSync(`launchctl unload ${PLIST_PATH}`);
      } catch (e) {
        // ignore
      }
      execSync(`launchctl load ${PLIST_PATH}`);
      console.log('✓ Reloaded plist');
    } else {
      throw err;
    }
  }

  console.log('\n=== Cron Installation Complete ===');
  console.log('Schedule: Every night at 2:00 AM');
  console.log(`Script: ${SCRIPT_PATH}`);
  console.log(`Logs: ${logsDir}/viking-sync.{out,err}`);
  console.log('\nVerify:');
  console.log('  launchctl list | grep viking-sync');
  console.log('\nUninstall:');
  console.log('  node scripts/setup-viking-cron.js --uninstall');
}

function uninstall() {
  console.log('=== Uninstalling OpenViking Sync Cron ===\n');

  try {
    execSync(`launchctl unload ${PLIST_PATH}`);
    console.log('✓ Unloaded plist with launchctl');
  } catch (err) {
    if (!err.message.includes('not loaded')) {
      throw err;
    }
    console.log('✓ Plist not loaded');
  }

  if (fs.existsSync(PLIST_PATH)) {
    fs.unlinkSync(PLIST_PATH);
    console.log(`✓ Removed plist: ${PLIST_PATH}`);
  }

  console.log('\n=== Cron Uninstallation Complete ===');
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--uninstall')) {
    uninstall();
  } else {
    install();
  }
}

main();
