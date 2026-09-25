# OpenViking Sync: Quick Start
**~2 hours to deploy, then automated forever.**

---

## What This Does

Every bot action in CoWork OS → searchable memory in OpenViking.

```
CoWork (task_events)
  ↓
sync-viking.js (export + transform)
  ↓
OpenViking (memory tree)
  ↓
Query: "What BTC trades happened Sep 25?" → searchable
```

---

## Files Ready

All in `/Users/hosski/.hermes/cache/scratch/`:

1. **`VIKING_SYNC_GUIDE.md`** — Full architectural guide (read first)
2. **`sync-viking.js`** — Ready-to-run script (no edits needed)

---

## Deploy in 3 Steps

### 1. Copy Script

```bash
mkdir -p ~/.cowork-os
cp /Users/hosski/.hermes/cache/scratch/sync-viking.js ~/.cowork-os/
chmod +x ~/.cowork-os/sync-viking.js
```

### 2. Test Export (2 min)

```bash
node ~/.cowork-os/sync-viking.js
# Output: [2026-09-25T...] [info] === CoWork → OpenViking Sync Started ===
#         [2026-09-25T...] [info] Exported 42 events since ...
#         [2026-09-25T...] [info] ✓ Sync complete.
```

See events? ✓ Move to step 3.

### 3. Schedule Nightly (2 min)

**Option A: macOS launchd (easiest)**

```bash
cat > ~/Library/LaunchAgents/com.cowork.viking-sync.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
 "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.cowork.viking-sync</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/env</string>
    <string>node</string>
    <string>/Users/hosski/.cowork-os/sync-viking.js</string>
  </array>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>2</integer>
    <key>Minute</key>
    <integer>0</integer>
  </dict>
  <key>StandardErrorPath</key>
  <string>/Users/hosski/.cowork-os/viking-sync.log</string>
  <key>StandardOutPath</key>
  <string>/Users/hosski/.cowork-os/viking-sync.log</string>
</dict>
</plist>
EOF

launchctl load ~/Library/LaunchAgents/com.cowork.viking-sync.plist
```

**Option B: CoWork Automation Studio**

1. Open CoWork → Automation
2. New automation:
   - **Trigger:** Daily @ 2:00 AM
   - **Action:** Run shell command
   - **Command:** `node /Users/hosski/.cowork-os/sync-viking.js`
   - **Retry:** 3x on failure

**Option C: Hermes cron**

```bash
hermes cron --schedule "0 2 * * *" \
  --command "node ~/.cowork-os/sync-viking.js" \
  --name "viking-sync" \
  --deliver telegram
```

---

## Verify It Works

### Check Logs

```bash
tail -f ~/.cowork-os/viking-sync.log
```

### Manual Run

```bash
node ~/.cowork-os/sync-viking.js
```

### In OpenViking

```bash
viking_search("bot action OR executor", limit=10)
# Should see today's CoWork events
```

---

## What Gets Logged

Every event in CoWork `task_events` table:
- Task started / completed
- Tool called (e.g., "executor call bybit getPositions")
- Status changes
- Errors

All searchable in Viking with full payload.

---

## Cost (Time & Effort)

- **Setup:** 5 min
- **Test:** 2 min
- **Schedule:** 2 min
- **Total:** ~10 min right now
- **Then:** Runs nightly automatically

---

## Next: DAG Wiring (#2)

Once this is running (no human action needed after scheduling):

→ Move to **DAG execution wiring** in your fork (6h)
→ Then **Fruvisi plugin** (4h)
→ Then **Render-queue API** (6h)

---

## Troubleshooting

**"DB locked" error?**  
CoWork is running. Wait 30s or restart the app, then retry.

**"Module not found: better-sqlite3"?**  
```bash
npm install -g better-sqlite3
```

**Viking not responding?**  
Script falls back to logging only. Sync continues.

**No events exported?**  
Check CoWork has run at least one task. Then try again.

---

**Start:** Copy script → test → schedule. 10 min. 🚀**
