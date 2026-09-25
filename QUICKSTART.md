# Quick Start Guide

**CoWork OS Video + Trading Bot Infrastructure**

---

## 30-Second Overview

This CoWork OS fork ships production-ready infrastructure for:
- **Video Production:** 5-tier DAG for 11-episode animated series
- **Trading Bots:** 4-tier DAG for algorithmic crypto trading
- **Grill-Tab-5 → DAG:** Convert interrogation ladder into executable workflows
- **QA Validation:** Auto-retry failed tasks based on error analysis
- **Audit Trail:** Nightly sync to OpenViking memory

---

## Launch (5 minutes)

```bash
# 1. Start render queue daemon (port 5556)
node scripts/start-render-queue.js &

# 2. Setup executor credentials (Bybit, Binance, etc.)
node scripts/setup-executor-credentials.js

# 3. Enable OpenViking nightly sync
node scripts/setup-viking-cron.js

# 4. Verify deployment (automated checklist)
node scripts/deployment-checklist.js

# 5. Start CoWork OS app
npm start
```

**Expected output:** "✅ All 12 deployment checks passed"

---

## Create Your First Workflow

### Option A: Video Episode

```javascript
// In Electron DevTools or API:
const workflow = await ipcRenderer.invoke('video:create-workflow', {
  episodeNumber: 1,
  seriesName: 'MyShow'
});
// Auto-launches 5-tier DAG execution via Redux middleware
```

**What happens:** 11 parallel tasks (Storyboard → Script → Design → Render → QA) chain across 5 tiers.

### Option B: Trading Bot Run

```javascript
const workflow = await ipcRenderer.invoke('trading:create-workflow', {
  botName: 'BTC-UST-Pump',
  exchange: 'bybit'
});
// Auto-launches 4-tier DAG execution
```

**What happens:** Market Analysis → Strategy Eval → Position Entry → Monitoring chain across 4 tiers.

### Option C: From Grill-Tab-5

1. Fill Grill-Tab interrogation (Goal → Planning, etc.)
2. Click "Convert to DAG"
3. Auto-launches execution

---

## Monitor Execution

Open the **DAG Execution Monitor** panel in UI:
- Tier progress (e.g., "Tier 2/5: 3/4 tasks complete")
- Task status: Running, Completed, Failed, Retrying
- QA validation logs (pass rate, retry rationale)
- Final results per tier

---

## After Execution

All task outputs:
- Saved to CoWork SQLite DB
- Synced nightly to OpenViking memory (audit trail)
- Available in Redux `executionPlan` state

---

## Troubleshoot

| Issue | Fix |
|-------|-----|
| Render queue won't start | Check port 5556 is free: `lsof -i :5556` |
| Credentials not found | Run `node scripts/setup-executor-credentials.js` again |
| OpenViking sync fails | Verify `HERMES_HOME` env var is set correctly |
| Task keeps retrying | Check QA validation logs; permanent errors fail fast |

---

## Docs

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — 3-phase deployment guide (20 min)
- **[INFRASTRUCTURE_COMPLETE.md](./INFRASTRUCTURE_COMPLETE.md)** — Component inventory
- **[docs/viking-sync/VIKING_SYNC_QUICKSTART.md](./docs/viking-sync/VIKING_SYNC_QUICKSTART.md)** — OpenViking integration

---

## Next Steps

1. ✅ Run `deployment-checklist.js` to verify environment
2. ✅ Create your first workflow (video or trading bot)
3. ✅ Watch tier-by-tier execution in DAG Monitor
4. ✅ Check OpenViking for audit trail (nightly sync)

**Expected time to first workflow:** 10 minutes after deployment

---

**Questions?** Check DEPLOYMENT.md or dive into:
- `src/electron/agent/orchestration/` — DAG executor logic
- `src/renderer/middleware/dag-auto-execution.ts` — Auto-trigger logic
- `src/electron/qa/fruvisi-validator.ts` — QA validation rules
