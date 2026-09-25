# Mac Mini Remote Sync Setup

**Keep your Mac Mini always-on and run nightly OpenViking exports automatically via CoWork OS Devices panel.**

---

## Overview

Instead of relying on your primary Mac to stay awake at 2 AM, you can:

1. **Register your Mac Mini as a remote device** in CoWork OS
2. **Set it to always-on** (typical for Mini)
3. **Dispatch nightly sync tasks** to it from your primary machine
4. **Monitor status** in the Devices panel (real-time online/offline)

This way, your primary Mac can sleep, and the Mini handles sync reliably every night.

---

## 3-Step Setup

### Step 1: Register Device (Primary Mac)

On your primary Mac, run:

```bash
cd /Users/hosski/.cowork-os-fork
node scripts/register-mac-mini-device.js --name "Mac Mini Studio" --host 192.168.1.50
```

**Expected output:**
```
✓ Device Name: Mac Mini Studio
✓ Device Host: 192.168.1.50
✓ Device ID: device-mac-mini-studio-...
✓ Saved to: ~/Library/Application Support/cowork-os/devices.json
✓ SSH tunnel config ready
✓ Setup script created: ~/Library/Application Support/cowork-os/setup-mac-mini.sh
```

This creates:
- Device registry entry (in Devices panel)
- SSH tunnel config (for secure connection)
- Mac Mini setup script (copy to Mini and run)

---

### Step 2: Run Setup on Mac Mini

Copy and run the setup script **on your Mac Mini**:

```bash
# On PRIMARY Mac:
scp ~/Library/Application\ Support/cowork-os/setup-mac-mini.sh hosski@192.168.1.50:~/

# Then SSH to Mini:
ssh hosski@192.168.1.50

# Run the setup script:
bash ~/setup-mac-mini.sh
```

**What it does:**
- Installs CoWork OS dependencies (Node.js check)
- Creates `/Users/hosski/.cowork-os-fork/` workspace
- Sets up launchd daemon for nightly sync at 2 AM
- Creates logs directory
- Verifies installation

**Expected output:**
```
✓ Creating workspace directory...
✓ Checking Node.js...
✓ Installing npm dependencies...
✓ Setting up launchd daemon...
✓ Launchd daemon loaded (runs at 2:00 AM daily)

Verify daemon:
  launchctl list | grep viking-sync-remote
```

---

### Step 3: Connect via Devices Panel

In CoWork OS (primary Mac):

1. Open **Devices panel** (left sidebar)
2. Find **"Mac Mini Studio"** in device list
3. Click **"Connect"** (initiates SSH tunnel)
4. Wait for status: **"Online & Ready"**
5. Nightly sync now automatically dispatches to Mac Mini

---

## How It Works

### Execution Flow

```
Primary Mac (2 AM)
    ↓
CoWork OS Dispatcher
    ↓
SSH Tunnel (encrypted)
    ↓
Mac Mini (always-on)
    ↓
launchd daemon triggers
    ↓
node scripts/sync-viking.js
    ↓
Database → OpenViking export
    ↓
Logs saved locally
    ↓
Status reported back to primary Mac (Devices panel)
```

### Architecture

- **Primary Mac:** Can sleep or be off
- **Mac Mini:** Always-on, runs sync at 2 AM
- **Connection:** SSH tunnel (secure, requires public key auth)
- **Fallback:** If Mini offline, sync queues and retries when online

---

## Monitoring

### In CoWork OS Devices Panel

- **Device Status:** Shows "Online" or "Offline"
- **Last Sync:** Timestamp of last successful export
- **Next Sync:** Countdown to next scheduled 2 AM
- **Sync History:** View last 10 sync runs (status, duration, errors)
- **Manual Trigger:** Click "Run Now" to sync immediately

### Via Command Line (on Mac Mini)

```bash
# View launchd status
launchctl list | grep viking-sync-remote

# Check logs
tail -f ~/.cowork-os-fork/logs/viking-sync-remote.{out,err}

# View last sync result
cat ~/.cowork-os-fork/logs/viking-sync-remote.out | tail -50
```

---

## Configuration

### Change Sync Time

Edit `setup-mac-mini.sh` before running on Mini, or manually update plist:

```bash
# On Mac Mini:
nano ~/Library/LaunchAgents/com.cowork.viking-sync-remote.plist
```

Change:
```xml
<key>Hour</key>
<integer>2</integer>    <!-- Change 2 to your preferred hour (0-23) -->
<key>Minute</key>
<integer>0</integer>    <!-- Change 0 to your preferred minute (0-59) -->
```

Reload daemon:
```bash
launchctl unload ~/Library/LaunchAgents/com.cowork.viking-sync-remote.plist
launchctl load ~/Library/LaunchAgents/com.cowork.viking-sync-remote.plist
```

### Disable Remote Sync (Use Primary Mac)

If you want to go back to syncing on your primary Mac:

```bash
# On primary Mac, disable remote dispatch:
#   Devices panel → Mac Mini Studio → Disconnect
#   Device gets marked "offline" automatically

# Then re-enable local sync:
node scripts/setup-viking-cron.js  # Sets up launchd on primary
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **"Device offline"** in Devices panel | Check Mac Mini is powered on, SSH key access (`ssh hosski@192.168.1.50` should work) |
| **SSH tunnel fails** | Verify SSH public key at `/Users/hosski/.ssh/id_rsa.pub` is in Mini's `~/.ssh/authorized_keys` |
| **Sync never runs** | Check launchd: `launchctl list \| grep viking-sync-remote` should show the job. Check logs: `tail ~/.cowork-os-fork/logs/viking-sync-remote.err` |
| **"Permission denied" in sync log** | Ensure Mini's workspace path `/Users/hosski/.cowork-os-fork/` is readable by sync script. Run `chmod -R 755` if needed. |
| **OpenViking export fails** | Check HERMES_HOME on Mini is set: `echo $HERMES_HOME`. Should be `~/.hermes`. |

---

## Security Notes

- **SSH Keys:** Uses your default `~/.ssh/id_rsa`. Ensure it's passphrase-protected or use `ssh-add`.
- **Tunnel Encryption:** All traffic between primary Mac and Mini is encrypted via SSH.
- **Credentials:** API keys never transmitted; only stored locally on each machine.
- **Logs:** Sync logs saved locally on Mini; not sent to primary Mac (only status summary).

---

## Next Steps

1. **Run registration script** (primary Mac):
   ```bash
   node scripts/register-mac-mini-device.js
   ```

2. **Copy setup to Mini** and run:
   ```bash
   scp ... setup-mac-mini.sh hosski@192.168.1.50:~/
   ssh hosski@192.168.1.50 bash ~/setup-mac-mini.sh
   ```

3. **Connect in Devices panel** (primary Mac):
   - Open CoWork OS → Devices → Mac Mini Studio → Connect

4. **Verify at 2 AM** (next night):
   - Check Devices panel status
   - View sync logs on Mini

---

**Result:** Nightly OpenViking sync runs reliably on your always-on Mac Mini, no matter what your primary Mac is doing.
