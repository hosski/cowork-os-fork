# Production Deployment Guide

**CoWork OS Video + Trading Bot Infrastructure**
**Date:** September 25, 2026
**Status:** Ready for deployment

---

## 📋 Pre-Deployment Checklist

Run the automated deployment checklist:

```bash
node scripts/deployment-checklist.js
```

Expected output: **12/12 checks passed** ✅

---

## 🔧 Deployment Steps (3 phases)

### Phase 1: Credential Setup (5 minutes)

**Setup Executor credential gateway:**

```bash
node scripts/setup-executor-credentials.js
```

This script:
- Loads Executor config (default: http://localhost:3100)
- Reads API keys from `.env` (never stored in config file)
- Configures Bybit API (if `BYBIT_API_KEY` set)
- Configures Binance API (if `BINANCE_API_KEY` set)
- Configures OpenRouter LLM (if `OPENROUTER_API_KEY` set)
- Configures OpenViking (if `VIKING_URL` set)

**Required environment variables:**

Create or update `~/.cowork-os-fork/.env`:

```bash
# Executor
EXECUTOR_URL=http://localhost:3100
EXECUTOR_API_KEY=<your-key>

# Bybit Trading (optional)
BYBIT_API_KEY=<your-key>
BYBIT_API_SECRET=<your-secret>
BYBIT_TESTNET=false

# Binance Trading (optional)
BINANCE_API_KEY=<your-key>
BINANCE_API_SECRET=<your-secret>

# LLM
OPENROUTER_API_KEY=<your-key>

# OpenViking
VIKING_URL=http://localhost:6789
VIKING_API_KEY=<optional>
```

**Output:** `~/.cowork-os-fork/executor-config.json`

---

### Phase 2: Render Queue Setup (10 minutes)

**Start the render queue daemon:**

```bash
node scripts/start-render-queue.js
```

Or with custom port:

```bash
RENDER_QUEUE_PORT=6000 node scripts/start-render-queue.js
```

This starts:
- HTTP server on port **5556** (default)
- REST API for queuing/monitoring renders
- Graceful shutdown on SIGTERM/SIGINT
- Logs to `~/.cowork-os-fork/render-queue.log`

**Verify it's running:**

```bash
curl http://localhost:5556/health
# Expected response: {"status": "ok", "activeJobs": 0, "totalJobs": 0}
```

---

### Phase 3: Scheduling & Launch (5 minutes)

**Setup OpenViking nightly sync:**

```bash
node scripts/setup-viking-cron.js
```

This creates:
- macOS launchd plist: `~/Library/LaunchAgents/com.cowork.viking-sync.plist`
- Scheduled time: **2:00 AM daily**
- Logs to `~/.cowork-os-fork/logs/viking-sync.{out,err}`

**Verify it's scheduled:**

```bash
launchctl list | grep viking-sync
# Expected: com.cowork.viking-sync <pid> <exit-code>
```

**Uninstall (if needed):**

```bash
node scripts/setup-viking-cron.js --uninstall
```

---

## 🚀 Launching Workflows

### From UI

1. Open CoWork OS desktop app
2. Click **"Launch Workflow"** panel
3. Choose **Video Production** or **Trading Bot**
4. Configure (series name/episode or bot name/exchange)
5. Click **▶️ Launch**

→ Redux middleware auto-triggers execution
→ DAG executor starts tier-by-tier
→ Monitor progress in real-time

### Programmatically (CLI/Script)

```javascript
const { ipcRenderer } = require('electron');

// Video workflow
const video = await ipcRenderer.invoke('video:create-workflow', {
  episodeNumber: 1,
  seriesName: 'Animation Adventure'
});
console.log(video.dagId, video.tiers); // DAG created + auto-executing

// Trading bot workflow
const trading = await ipcRenderer.invoke('trading:create-workflow', {
  botName: 'BTC Trader',
  exchange: 'bybit'
});
console.log(trading.dagId, trading.tiers); // DAG created + auto-executing
```

---

## 📊 Monitoring Execution

### Real-Time Progress

UI component: **DAGExecutionMonitor**
- Tier progress bar
- Task progress bar
- Live stats (tiers, tasks, failed, duration)
- ETA for running workflows
- Status badges (pending/running/completed/failed)

### Logs

**Render queue logs:**
```bash
tail -f ~/.cowork-os-fork/render-queue.log
```

**Viking sync logs:**
```bash
tail -f ~/.cowork-os-fork/logs/viking-sync.out
```

**DAG executor logs:**
Printed to console during execution (verbose mode)

---

## 🔍 Troubleshooting

### Render Queue Won't Start

```bash
# Check port conflicts
lsof -i :5556

# Start on different port
RENDER_QUEUE_PORT=6000 node scripts/start-render-queue.js
```

### Viking Sync Not Running

```bash
# Verify launchd status
launchctl list | grep viking-sync

# Force reload
launchctl unload ~/Library/LaunchAgents/com.cowork.viking-sync.plist
launchctl load ~/Library/LaunchAgents/com.cowork.viking-sync.plist

# Check logs
cat ~/.cowork-os-fork/logs/viking-sync.out
cat ~/.cowork-os-fork/logs/viking-sync.err
```

### Workflow Not Auto-Executing

Check:
1. Redux middleware loaded: `ipcRenderer.invoke('test:get-stats')`
2. IPC handlers registered: check browser console for errors
3. Main process running: check Electron logs

```bash
# Verify handlers exist
grep "dag:execute\|video:create" ~/.cowork-os-fork/src/electron/main.ts
```

### Render Jobs Not Queuing

```bash
# Check render queue health
curl http://localhost:5556/health

# Verify render task integration
grep "queueRenderTask" ~/.cowork-os-fork/src/electron/services/render-task-integration.ts
```

---

## 🔐 Security

### Secrets Management

✅ **Never** store secrets in config files
✅ **Always** use `.env` for credentials
✅ **Executor.sh** handles credential lookup (gateway pattern)
✅ IPC messages don't carry credentials

### Environment Variables

All sensitive data (API keys, secrets) must be:
1. Set in `.env` file (never committed)
2. Accessed via `process.env` in Node.js
3. Passed through Executor daemon for external APIs
4. Never logged or cached

---

## 📈 Performance Tuning

### Video Workflow

Timing per episode:
- Serial (worst case): 220 min
- Parallel (tier parallelization): **20-25 min** ← Default
- 11 episodes sequential: **220-275 min**
- 11 episodes parallel: **20-25 min** (no cross-dependencies)

### Trading Bot

Timing per run:
- Analysis + Strategy: 10 min (can parallelize)
- Position management: 5 min (can parallelize)
- Monitoring: 5 min (parallel)
- **Total: 20-25 min**

### Render Queue

Optimization:
- Max parallel renders per episode: 3
- 11 episodes × 3 renders = 33 concurrent jobs possible
- Configure `maxParallel` in DAGExecutor config (default: 4)

---

## 📞 Support

### Logs Directory

All infrastructure logs:
```
~/.cowork-os-fork/
├── render-queue.log
├── cowork-os.db (SQLite task events)
└── logs/
    ├── viking-sync.out
    └── viking-sync.err
```

### Rollback

If deployment fails:

```bash
# Uninstall cron
node scripts/setup-viking-cron.js --uninstall

# Stop render queue (Ctrl+C in terminal)

# Reset config
rm ~/.cowork-os-fork/executor-config.json

# Rebuild app
npm run build
```

---

## ✅ Deployment Checklist

- [ ] Run `deployment-checklist.js` → 12/12 pass
- [ ] Setup `.env` with credentials
- [ ] Run `setup-executor-credentials.js`
- [ ] Start render queue: `start-render-queue.js`
- [ ] Verify render health: `curl http://localhost:5556/health`
- [ ] Setup cron: `setup-viking-cron.js`
- [ ] Verify cron: `launchctl list | grep viking-sync`
- [ ] Launch test workflow from UI
- [ ] Monitor in DAGExecutionMonitor
- [ ] Verify render queue logs
- [ ] Verify Viking sync at 2 AM

---

## 🎯 Next: First Workflow

**Recommended first run:**

1. **Video Episode 1** (safest)
   - Series: "Test Production"
   - Episode: 1
   - Monitors: Tier-by-tier progression
   - Expected time: 20-25 min

2. **Trading Bot Test** (requires Bybit/Binance API)
   - Bot: "Test Bot"
   - Exchange: Bybit
   - Pair: BTC/USDT
   - Expected time: 20-25 min

Both workflows execute the same infrastructure—start with video to verify.

---

**Deployment Guide v1.0**
**Last Updated:** Sep 25, 2026, 12:30 PM EDT
**Status:** Production Ready
