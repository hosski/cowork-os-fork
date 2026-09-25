# Where to Find Workflow Creation

## Current Status
The `WorkflowLauncherPanel` and `DAGExecutionMonitor` components are **built but not yet integrated into the main UI** — no "+" button visible yet.

---

## How to Test Workflows For Now

### Option 1: Direct Script Execution (Fastest)

While CoWork OS is running, execute workflows directly:

```bash
# Video Workflow (1 episode, 3 tiers, 6 tasks)
node scripts/execute-first-workflow.js

# Trading Bot Workflow (4 tiers, 7 tasks)
node scripts/execute-trading-bot.js
```

Both auto-execute via IPC → Redux → DAG Executor → Fruvisi QA validation.

**Result:** Task events saved to database, visible in DAGExecutionMonitor when you open it.

---

### Option 2: Where to Add the UI Button

When ready to integrate, add to **Sidebar.tsx** or **RightPanel.tsx**:

```tsx
import { WorkflowLauncherPanel } from './components/WorkflowLauncherPanel';
import { DAGExecutionMonitor } from './components/DAGExecutionMonitor';

// In the main panel area (wherever you want the "+ Create Workflow" button):
<WorkflowLauncherPanel 
  onWorkflowCreated={(workflow) => {
    // Dispatches Redux action + IPC automatically
    console.log('Workflow created:', workflow);
  }}
/>

// Monitor execution progress below:
<DAGExecutionMonitor />
```

---

### Option 3: Add to Settings/Automation Panel

These panels would fit well in:
- **Settings → Automation** (new tab)
- **AutomationStudioPanel.tsx** (existing)
- **GrillTabPanel.tsx** (existing Grill-Tab-5 integration)

---

## What's Already Built

✅ **WorkflowLauncherPanel.tsx** (325 lines)
- Video workflow form (episodes 1-11)
- Trading bot form (market pairs)
- Auto-dispatch to IPC

✅ **DAGExecutionMonitor.tsx** (322 lines)
- Real-time tier progress
- Task status per tier
- QA validation logs
- Final results display

✅ **IPC Handlers** (registered in main.ts)
- video:workflow
- trading:bot
- dag:execute

✅ **Redux Middleware** (dag-auto-execution.ts)
- Watches for workflows with `tiers` array
- Auto-invokes IPC
- Updates Redux state

---

## Until Integration is Done

**Quick test:**
```bash
cd /Users/hosski/.cowork-os-fork

# Video (auto-executes)
node scripts/execute-first-workflow.js

# Trading bot (auto-executes)
node scripts/execute-trading-bot.js

# View results
sqlite3 cowork-os.db "SELECT task_id, status FROM task_events ORDER BY timestamp DESC LIMIT 10;"
```

---

## Next Step: Wire into UI

Add button to **Sidebar** or **RightPanel** that renders `WorkflowLauncherPanel`:

**File to edit:** `src/renderer/components/Sidebar.tsx` or create new "Workflows" tab

**Add:**
```tsx
{activeView === 'workflows' && (
  <WorkflowLauncherPanel onWorkflowCreated={handleWorkflowCreated} />
)}
{showDAGMonitor && (
  <DAGExecutionMonitor />
)}
```

Then add button to show/hide these panels.

**Component files ready at:**
- `src/renderer/components/WorkflowLauncherPanel.tsx`
- `src/renderer/components/DAGExecutionMonitor.tsx`
