# Test Menu While CoWork OS is Booting

Your complete infrastructure is now ready. While the app boots, run these tests to validate everything works.

---

## 🧪 Full System Test (40 tests)

```bash
node scripts/full-system-test.js
```

**What it validates:**
- Database exists and is readable
- Render queue daemon online
- All 15 core infrastructure files present
- DAG executor, validators, middleware code intact
- IPC handlers registered correctly
- TypeScript/Electron build configs
- All 9 documentation files present
- Render queue responding on port 5556

**Expected result:** ✅ 40 passed, 0 failed

---

## ⚡ Quick Workflow Test (7 tests)

```bash
node scripts/quick-workflow-test.js
```

**What it validates:**
- Minimal DAG execution works
- Video workflow template ready
- Trading bot workflow template ready
- Database has task events (shows: "16 task events recorded")
- Render queue online (0 active jobs)
- OpenViking sync scheduled
- Mac Mini device script ready

**Expected result:** ✅ All green checks, "ALL TESTS READY FOR EXECUTION"

---

## 🚀 Manual Execution Tests (While App is Open)

### Test 1: Create a Video Workflow
1. Open CoWork OS (should already be running)
2. Click **"+"** button (top-right)
3. Select **"Video Workflow"**
4. Enter: Episodes = `1` (single episode)
5. Click **Create**
6. **Auto-execution starts** → Watch DAG Execution Monitor panel
7. Expected: 3 tiers (Storyboard → Script → Design), 6 tasks total
8. Expected result: 100% QA pass rate, task events saved to DB

### Test 2: Create a Trading Bot Workflow
1. Click **"+"** button again
2. Select **"Trading Bot Workflow"**
3. Enter: Market Pair = `BTCUSDT` (or any pair)
4. Click **Create**
5. **Auto-execution starts** → Monitor progress
6. Expected: 4 tiers (Analysis → Strategy → Entry → Monitor), 7 tasks
7. Expected result: All tasks complete, QA validation logs visible

### Test 3: Check Database Results
```bash
sqlite3 cowork-os.db "SELECT COUNT(*) FROM task_events;"
```
Should show: **22** or higher (16 from earlier + 6 from Test 1)

---

## 🔍 Diagnostic Tests (If Something Breaks)

### Render Queue Health
```bash
curl -s http://localhost:5556/health | jq .
```
Expected: `{"status":"ok","activeJobs":0,"totalJobs":0}`

### Check CoWork OS Process
```bash
pgrep -f "Electron.app.*cowork" | head -1
```
Should return a process ID.

### View Electron Logs
```bash
tail -f ~/Library/Application\ Support/cowork-os/logs/main.log
```

### Verify IPC Handlers
```bash
grep "registerDAGExecutionHandler\|registerVideoWorkflowHandler\|registerTradingBotWorkflowHandler" src/electron/main.ts
```
Should return 3 matches.

---

## ✅ Final Checklist

Before declaring "Ready for Production":

- [ ] Run `node scripts/full-system-test.js` → All pass
- [ ] Run `node scripts/quick-workflow-test.js` → All green
- [ ] Create 1 video workflow → Auto-executes, 100% QA pass
- [ ] Create 1 trading bot workflow → Auto-executes, 100% QA pass
- [ ] Database query shows new task events
- [ ] Render queue responds to health check
- [ ] CoWork OS Electron app is running (6+ processes)
- [ ] Mac Mini device registration script ready

---

## 📊 Expected Metrics While Booting

- **Vite dev server**: Port 5173 (building renderer)
- **Electron app**: Should open as window
- **Database**: ~16 existing task events (from earlier test runs)
- **Render queue**: Port 5556, 0 active jobs
- **Process count**: Electron main + 2 renderer helpers + GPU process = 4+ threads

---

## 🚨 Troubleshooting

| Issue | Check |
|-------|-------|
| "Render queue offline" | Run: `npm run start:render-queue` in new terminal |
| "CoWork OS not responding" | Kill old processes: `pkill -f "Electron.*cowork"`; restart |
| "Database locked" | Ensure no old processes hold the DB; restart app |
| "IPC handler not found" | Check `src/electron/main.ts` has `registerDAGExecutionHandler` calls |
| "Workflow doesn't auto-execute" | Check Redux middleware in `src/renderer/middleware/dag-auto-execution.ts` |

---

**Status: ✅ READY FOR TESTING**

All infrastructure built. App is booting. Run tests above to validate.

Expected time: ~5-10 minutes to complete all tests while app loads.
