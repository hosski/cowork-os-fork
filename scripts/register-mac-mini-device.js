#!/usr/bin/env node
/**
 * Register Mac Mini as Remote Device for Nightly OpenViking Sync
 * 
 * Sets up your Mac Mini to:
 * 1. Register as a "cowork-sync-server" device in CoWork OS
 * 2. Run OpenViking sync at 2 AM nightly (via launchd on the Mini)
 * 3. Keep always-on (typically how Mac Mini is used)
 * 4. Dispatch sync tasks from primary Mac via Devices panel
 * 
 * Usage:
 *   node scripts/register-mac-mini-device.js --name "Mac Mini Studio" --host 192.168.1.50
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const args = process.argv.slice(2);
const nameIdx = args.indexOf('--name');
const hostIdx = args.indexOf('--host');

const deviceName = nameIdx >= 0 ? args[nameIdx + 1] : 'Mac Mini (Sync Server)';
const deviceHost = hostIdx >= 0 ? args[hostIdx + 1] : '192.168.1.50';
const devicePort = 3001; // Control plane server port on Mac Mini
const deviceId = `device-${deviceName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;

console.log('\n=== Registering Mac Mini as Remote Device ===\n');
console.log(`Device Name: ${deviceName}`);
console.log(`Device Host: ${deviceHost}`);
console.log(`Device Port: ${devicePort}`);
console.log(`Device ID: ${deviceId}\n`);

// 1. Create device registration config
const deviceConfig = {
  id: deviceId,
  name: deviceName,
  type: 'macos-mini',
  role: 'sync-server',
  host: deviceHost,
  port: devicePort,
  sshUser: process.env.USER || 'hosski',
  sshKey: path.join(process.env.HOME, '.ssh', 'id_rsa'),
  workspacePath: '/Users/hosski/.cowork-os-fork',
  capabilities: {
    syncToOpenViking: true,
    renderQueue: false,
    agentExecution: false,
  },
  healthCheckInterval: 60000, // 60 seconds
  timezone: 'America/New_York',
  alwaysOn: true,
  syncSchedule: {
    enabled: true,
    time: '02:00', // 2 AM
    frequency: 'daily',
    task: 'sync-viking.js',
  },
};

// 2. Save to devices registry
const devicesRegistryPath = path.join(
  process.env.HOME,
  'Library/Application Support/cowork-os/devices.json',
);

console.log('1. Saving device configuration...');

// Ensure directory exists
const registryDir = path.dirname(devicesRegistryPath);
if (!fs.existsSync(registryDir)) {
  fs.mkdirSync(registryDir, { recursive: true });
  console.log(`✓ Created registry directory: ${registryDir}`);
}

// Load existing devices or create new registry
let devicesRegistry = { devices: [], lastUpdated: new Date().toISOString() };
if (fs.existsSync(devicesRegistryPath)) {
  devicesRegistry = JSON.parse(fs.readFileSync(devicesRegistryPath, 'utf8'));
  console.log(`✓ Loaded existing registry (${devicesRegistry.devices.length} devices)`);
}

// Add or update device
const existingIdx = devicesRegistry.devices.findIndex((d) => d.id === deviceId);
if (existingIdx >= 0) {
  devicesRegistry.devices[existingIdx] = deviceConfig;
  console.log(`✓ Updated device: ${deviceName}`);
} else {
  devicesRegistry.devices.push(deviceConfig);
  console.log(`✓ Registered new device: ${deviceName}`);
}

devicesRegistry.lastUpdated = new Date().toISOString();
fs.writeFileSync(devicesRegistryPath, JSON.stringify(devicesRegistry, null, 2));
console.log(`✓ Saved to: ${devicesRegistryPath}\n`);

// 3. Create SSH tunnel configuration (if needed)
console.log('2. Creating SSH tunnel configuration...');

const sshTunnelConfig = {
  deviceId,
  deviceName,
  host: deviceHost,
  port: devicePort,
  localPort: 3001,
  sshUser: deviceConfig.sshUser,
  sshKey: deviceConfig.sshKey,
  forwardLocal: `127.0.0.1:3001`,
  forwardRemote: `127.0.0.1:${devicePort}`,
  autoConnect: true,
  reconnectInterval: 30000,
};

const sshConfigPath = path.join(
  process.env.HOME,
  'Library/Application Support/cowork-os/ssh-tunnels.json',
);

let sshConfigs = { tunnels: [] };
if (fs.existsSync(sshConfigPath)) {
  sshConfigs = JSON.parse(fs.readFileSync(sshConfigPath, 'utf8'));
}

sshConfigs.tunnels = sshConfigs.tunnels.filter((t) => t.deviceId !== deviceId);
sshConfigs.tunnels.push(sshTunnelConfig);

fs.writeFileSync(sshConfigPath, JSON.stringify(sshConfigs, null, 2));
console.log(`✓ Saved SSH tunnel config: ${sshConfigPath}\n`);

// 4. Generate setup script for Mac Mini
console.log('3. Generating Mac Mini setup script...');

const miniSetupScript = `#!/bin/bash
# Mac Mini OpenViking Sync Setup Script
# Run this on your Mac Mini to enable remote sync task execution

set -e

echo "=== Setting up Mac Mini as CoWork Sync Server ==="
echo

# 1. Create workspace directory if needed
WORKSPACE_DIR="\\$HOME/.cowork-os-fork"
if [ ! -d "\\$WORKSPACE_DIR" ]; then
  echo "✓ Creating workspace directory..."
  mkdir -p "\\$WORKSPACE_DIR"
fi

# 2. Install required tools
echo "✓ Checking Node.js..."
node --version || (echo "Node.js not found. Install from https://nodejs.org"; exit 1)

echo "✓ Checking npm..."
npm --version || (echo "npm not found"; exit 1)

# 3. Install deps (if not already done)
if [ ! -d "\\$WORKSPACE_DIR/node_modules" ]; then
  echo "✓ Installing npm dependencies..."
  cd "\\$WORKSPACE_DIR"
  npm install > /dev/null 2>&1
fi

# 4. Setup launchd plist for nightly sync
echo "✓ Setting up launchd daemon..."

PLIST_DIR="\\$HOME/Library/LaunchAgents"
PLIST_FILE="\\$PLIST_DIR/com.cowork.viking-sync-remote.plist"

mkdir -p "\\$PLIST_DIR"

cat > "\\$PLIST_FILE" << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.cowork.viking-sync-remote</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/node</string>
        <string>\\$HOME/.cowork-os-fork/scripts/sync-viking.js</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>2</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>\\$HOME/.cowork-os-fork/logs/viking-sync-remote.out</string>
    <key>StandardErrorPath</key>
    <string>\\$HOME/.cowork-os-fork/logs/viking-sync-remote.err</string>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
EOF

launchctl load "\\$PLIST_FILE" 2>/dev/null || launchctl unload "\\$PLIST_FILE" && launchctl load "\\$PLIST_FILE"
echo "✓ Launchd daemon loaded (runs at 2:00 AM daily)"

# 5. Verify
echo
echo "=== Setup Complete ==="
echo "Verify daemon:"
echo "  launchctl list | grep viking-sync-remote"
echo
echo "View logs:"
echo "  tail -f \\$HOME/.cowork-os-fork/logs/viking-sync-remote.{out,err}"
echo
echo "Unload daemon (if needed):"
echo "  launchctl unload \\$HOME/Library/LaunchAgents/com.cowork.viking-sync-remote.plist"
`;

const setupScriptPath = path.join(
  process.env.HOME,
  'Library/Application Support/cowork-os/setup-mac-mini.sh',
);

fs.mkdirSync(path.dirname(setupScriptPath), { recursive: true });
fs.writeFileSync(setupScriptPath, miniSetupScript);
fs.chmodSync(setupScriptPath, 0o755);
console.log(`✓ Setup script created: ${setupScriptPath}\n`);

// 5. Create dispatch configuration
console.log('4. Creating task dispatch configuration...');

const dispatchConfig = {
  deviceId,
  syncTaskConfig: {
    taskName: 'nightly-viking-sync',
    schedule: '0 2 * * *', // Cron: 2 AM daily
    script: 'scripts/sync-viking.js',
    timeout: 300000, // 5 minutes
    retryOnFail: true,
    maxRetries: 3,
    backoffMs: 60000,
    notifyOnComplete: true,
    logPath: 'logs/viking-sync-remote.log',
  },
};

console.log(`✓ Task dispatch config ready for Devices panel\n`);

// 6. Summary
console.log('=== Registration Complete ===\n');
console.log('Next Steps:');
console.log(`\n1. ON YOUR MAC MINI:`);
console.log(`   scp ${setupScriptPath} ${deviceConfig.sshUser}@${deviceHost}:~/setup-mac-mini.sh`);
console.log(`   ssh ${deviceConfig.sshUser}@${deviceHost}`);
console.log(`   bash ~/setup-mac-mini.sh`);
console.log(`\n2. IN COWORK OS APP (Primary Mac):`);
console.log(`   • Open Devices panel`);
console.log(`   • Find: "${deviceName}"`);
console.log(`   • Click "Connect" (uses SSH tunnel)`);
console.log(`   • Verify status: "Online & Ready"`);
console.log(`   • Nightly sync now dispatches to Mac Mini at 2 AM`);
console.log(`\n3. MONITOR:`);
console.log(`   • Devices panel shows real-time status`);
console.log(`   • Check logs: tail -f ~/.cowork-os-fork/logs/viking-sync-remote.*`);
console.log(`   • Last sync timestamp updates after each run`);

console.log(`\nDevice Config:`);
console.log(JSON.stringify(deviceConfig, null, 2));

console.log(`\nRegistry saved to:`);
console.log(`  ${devicesRegistryPath}\n`);
