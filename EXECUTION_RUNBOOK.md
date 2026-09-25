# Execution Runbook

**Step-by-Step Guide to Running Your First Workflows**

Date: September 25, 2026

---

## Before You Start

Run the health check (2 minutes):

```bash
cd /Users/hosski/.cowork-os-fork
node scripts/health-check.js
```

Expected: `✓ 29 checks passed. Ready for deployment.`

---

## Phase 1: Environment Setup (5 minutes)

### 1.1 Start Render Queue

```bash
# Terminal 1
node scripts/start-render-queue.js
```

Expected output:
```
✓ Render Queue listening on port 5556
✓ Ready to accept render jobs
```

### 1.2 Configure Credentials

```bash
# Terminal 2
node scripts/setup-executor-credentials.js
```

Follow the prompts:
- Bybit API key? → (leave blank for demo)
- Binance API key? → (leave blank for demo)
- OpenRouter API key? → (leave blank for demo)

Expected: `✓ Credentials saved. Using local mock for demo.`

### 1.3 Enable OpenViking Sync

```bash
# Terminal 2 (cont.)
node scripts/setup-viking-cron.js
```

Expected: `✓ Nightly cron scheduled for OpenViking sync (2:00 AM)`

---

## Phase 2: Launch CoWork OS (3 minutes)

### 2.1 Start the Desktop App

```bash
# Terminal 3
npm start
```

Wait for Electron window to open (Webpack should complete).

### 2.2 Verify Redux Store is Initialized

Open DevTools (Cmd+Option+I):
```javascript
// In console:
store.getState().workflows.list.length
// Should return: 0 (empty list, ready for workflows)
```

---

## Phase 3: Create & Execute Your First Workflow (5 minutes)

### Option A: Video Episode Workflow

**UI Method:**
1. Click "+" in left sidebar
2. Select "Video Episode"
3. Fill form:
   - Episode: 1
   - Series: "MyShow"
   - Season: 1
4. Click "Create Workflow"

**API Method (DevTools Console):**
```javascript
const wf = await ipcRenderer.invoke('video:create-workflow', {
  episodeNumber: 1,
  seriesName: 'MyShow'
});
console.log('Workflow created:', wf.id);
// Watch execution start automatically via Redux middleware
```

**What happens:**
- Redux middleware detects `workflow.tiers` array
- Auto-invokes `ipcRenderer.invoke('dag:execute', { dagJson: workflow })`
- DAG executor starts Tier 0 (Storyboard tasks)
- Monitor panel shows: "Tier 0/5: Running 1 task..."
- ~30 seconds per tier in mock mode
- Final results saved to SQLite DB

---

### Option B: Trading Bot Workflow

**UI Method:**
1. Click "+"
2. Select "Trading Bot"
3. Fill form:
   - Bot Name: "BTC-Pump-5min"
   - Exchange: "bybit"
4. Click "Create Workflow"

**Watch execution** in DAG Execution Monitor:
```
Tier 0: Market Analysis — 1 task
  └─ Status: Completed ✓
    └─ QA: PASS (market data valid)

Tier 1: Strategy Eval — 2 tasks
  ├─ Technical indicators — COMPLETED ✓
  └─ Sentiment analysis — COMPLETED ✓
  
[Tier 1/3 done, advancing...]
```

---

### Option C: From Grill-Tab-5 Interrogation

1. In left sidebar, click "Grill-Tab-5"
2. Answer 5 questions:
   - Goal: "Automated crypto trading"
   - Deliverable: "Trading bot execution report"
   - Scope: "5-minute candles, 10 positions"
   - Verification: "Win rate > 55%"
   - Architecture: "Bybit REST API"
3. Click "Convert to DAG"
4. Review generated 5-tier DAG
5. Click "Execute"

---

## Phase 4: Monitor Execution (Real-time)

Open **DAG Execution Monitor** panel (right sidebar):

```
═══════════════════════════════════════════
   DAG Execution Monitor
═══════════════════════════════════════════

Tiers: 1/5  |  Tasks: 3/11  |  QA Pass Rate: 100%

Tier 0 — COMPLETED ✓
├─ planning-task-1 ... COMPLETED
├─ planning-task-2 ... COMPLETED  
└─ planning-task-3 ... COMPLETED

Tier 1 — IN PROGRESS
├─ design-task-1 ... RUNNING
├─ design-task-2 ... QUEUED
└─ design-task-3 ... QUEUED

Tier 2-5 — PENDING

───────────────────────────────────────────
QA Validation Log (last task):
✓ planning-task-3
  - Output format: JSON ✓
  - File size: 2.4 KB (expected: 1-5 KB) ✓
  - Confidence: 98%
───────────────────────────────────────────
```

**Metrics visible:**
- Tiers: Progress (e.g., "2/5 complete")
- Tasks: Count (e.g., "8/11 done")
- QA Pass Rate: Percentage of successful validations
- Per-task logs: status, QA rationale, retry count

---

## Phase 5: Review Results (3 minutes)

After execution completes:

### 5.1 In Redux Store

```javascript
// DevTools console:
const execution = store.getState().executionPlan;
console.log(execution.results);
// Array of { taskId, status, output, qaValidation, completedAt }
```

### 5.2 In Database

```bash
# Terminal:
node -e "
const Database = require('better-sqlite3');
const db = new Database(process.env.HOME + '/.cowork-os-fork/cowork.db');
const tasks = db.prepare('SELECT id, status, output FROM task_events ORDER BY created_at DESC LIMIT 5').all();
console.table(tasks);
"
```

### 5.3 In OpenViking (Next Morning)

Nightly sync (2 AM) exports to OpenViking:
```
Bot Action: video-ep1-storyboard COMPLETED
Bot Action: video-ep1-script COMPLETED
Bot Action: video-ep1-design COMPLETED
...
```

Check Hermes memory system tomorrow for audit trail.

---

## Troubleshooting

| Issue | Diagnosis | Fix |
|-------|-----------|-----|
| "Module child_process" error | Renderer is pulling Node modules | Check render process has `USE_RENDERER_PROCESS=1` env var |
| Tasks won't execute | IPC handler not registered | Run `npm run build` then restart app |
| Render queue won't start | Port 5556 in use | `lsof -i :5556` to kill, then retry |
| QA validation keeps failing | Task output format wrong | Check `fruvisi-validator.ts` for expected schema |
| OpenViking sync doesn't run | Cron not scheduled | Run `node scripts/setup-viking-cron.js` again |
| Redux middleware not triggering | Workflow missing `tiers` array | Verify template generates proper structure |

---

## Expected Runtimes

| Task | Mock Time | Real Time |
|------|-----------|-----------|
| Video Episode (5 tiers, 11 tasks) | 2.5 min | 30-45 min (rendering) |
| Trading Bot (4 tiers, 7 tasks) | 1.5 min | 5-10 min (API calls) |
| Grill-Tab → DAG conversion | <1 sec | <1 sec |
| QA validation per task | 50ms | 50-200ms |

---

## Next Iteration

After first successful run:

1. **Scale video:** 11 episodes in parallel across 11 tiers (5 tiers × 11 episodes)
2. **Add trading pairs:** Run 3 bots (BTC, ETH, SOL) in parallel
3. **Monitor profitability:** Auto-track trading bot P&L per run
4. **Automate schedule:** Cron video rendering (weekly) + trading (hourly)

---

## Success Criteria

✅ Health check passes
✅ Render queue starts
✅ Credentials configured
✅ App launches
✅ First workflow executes (no manual intervention)
✅ All tiers progress automatically
✅ QA validation logs show 100% pass rate (or explicit retry)
✅ Results saved to DB
✅ OpenViking sync runs nightly

**Est. time to first successful run: 20 minutes**

---

**Questions?** See [DEPLOYMENT.md](./DEPLOYMENT.md) or [QUICKSTART.md](./QUICKSTART.md)
