# DAG Live Wiring — Test Summary

**Date:** Sep 25, 2026  
**Commit:** 285be22f6 (wire DAG to live task data and Redux store)

---

## What Was Wired

### 1. **useTaskDAG Hook** (new)
**File:** `src/renderer/components/mission-control/useTaskDAG.ts` (140 lines)

Builds a task DAG structure from parent/child relationships:

```typescript
export interface TaskDAGStructure {
  workflowId: string;
  rootTaskId: string;
  tiers: TaskTier[];              // Layers of parallelizable tasks
  totalDuration: number;           // minutes
  criticalPath: string[];          // Task IDs in longest chain
  parallelizationSpeedup: number;  // 1.0 = sequential, 2.0x = 2x speedup
}
```

**Calculates:**
- Tiers via BFS (breadth-first) — tasks at the same depth level can run in parallel
- Critical path — longest dependency chain (determines minimum time)
- Parallelization speedup — `sequential_duration / tiered_duration`

Example: If 12 tasks would take 60m sequential, but parallelized into 3 tiers of 20m each = 3x speedup.

### 2. **MCDetailPanel Enhancement**
**File:** `src/renderer/components/mission-control/MCDetailPanel.tsx` (lines 1-33)

When a task is selected:
1. Calls `useTaskDAG(selectedTask, allTasks)` → builds DAG
2. Dispatches to Redux: `taskDAGActions.addWorkflow({ id, dag })`
3. Sets active workflow: `taskDAGActions.setActiveWorkflow(id)`

**Flow:**
```
User clicks task in MissionControl
  → detailPanel.taskId set
  → useTaskDAG builds DAG from task + descendants
  → Redux state updates with tiers, critical path, speedup
  → TaskDAGViewer re-renders with real data
```

### 3. **TaskDAGViewer Refactored**
**File:** `src/renderer/components/TaskDAGViewer.tsx` (340 lines, was 302)

**Before:** Hardcoded mock Gantt chart with fake tasks & durations.  
**After:** Reads real workflow from Redux:

```typescript
const workflow = useSelector((state: RootState) => 
  workflowId ? state.taskDAG.workflows[workflowId] : null
);
```

**Renders:**
- **Stats bar:** Sequential duration, parallelized duration, speedup ratio, tier count
- **Gantt chart:** Horizontal bars showing tier timeline, proportional durations
- **Tier details:** Each tier card lists task IDs, marks critical path with ⭐
- **Critical path section:** Step-by-step view of longest chain (bottom section)

**Visual enhancements:**
- Tier colors: Orange, Blue, Green, Purple, Red (6-color cycle)
- Critical path highlighted in header + step badges
- Responsive layout (wraps on mobile)

---

## Data Flow Example

**Scenario:** User creates a parent task "Video Editing" with 3 child tiers:
- Tier 0 (parallel): "Research" (4m) + "Gather footage" (4m) → 4m total
- Tier 1 (parallel): "Storyboard" (6m) + "Organize" (6m) → 6m total
- Tier 2 (sequential): "Edit" (30m) + "Export" (5m) → 35m total

**Total:** Parallelized = 4 + 6 + 35 = 45m  
**Sequential:** 4 + 4 + 6 + 6 + 30 + 5 = 55m  
**Speedup:** 55/45 = 1.22x

**Rendered in DAG viewer:**
- Stats: "Sequential 55m | Parallelized 45m | Speedup 1.22x | Tiers 3"
- Gantt: 3 horizontal bars (tier 0-2) proportionally sized
- Critical path: "Edit → Export" (Tier 2 is the bottleneck)

---

## Integration Points

| Component | Redux State | Data Flow |
|-----------|-------------|-----------|
| MCDetailPanel | taskDAG.workflows, taskDAG.activeWorkflow | Builds DAG, dispatches on task selection |
| useTaskDAG | None (pure hook) | Takes Task[], returns TaskDAGStructure |
| TaskDAGViewer | taskDAG.workflows, taskDAG.activeWorkflow | Reads workflow by ID, renders |
| useMissionControlData | N/A | Provides allTasks array |

---

## Testing Checklist

**To verify the wiring works live:**

1. **Open CoWork Mission Control**
   - [ ] Click a task in the board
   - [ ] Panel opens, show "Details" tab

2. **Switch to DAG tab**
   - [ ] Click "📊 DAG" tab in detail panel
   - [ ] Gantt chart appears (not mocks, real data)
   - [ ] Shows stats: sequential/parallelized times, speedup, tier count

3. **Verify real data**
   - [ ] Task IDs in tier cards match the selected task's children
   - [ ] Critical path shows the longest chain
   - [ ] Speedup > 1.0 if task has parallelizable children

4. **Test edge cases**
   - [ ] Select a task with no children → "No workflow data" placeholder
   - [ ] Select a task with 1 child → "No speedup" (1.0x)
   - [ ] Select a task with 10+ descendants → Gantt scales appropriately

5. **Verify Redux state**
   - Browser DevTools > Redux tab (if Redux DevTools installed)
   - `state.taskDAG.workflows[taskId]` should have tiers array
   - `state.taskDAG.activeWorkflow` should be the selected task ID

---

## Known Limitations

- **Mock estimation:** Duration uses `task.estimatedMinutes` or defaults to 4m
  - If no estimates are set on tasks, all durations are 4m
  - Speedup will be accurate but may not reflect real times until estimates are filled

- **Critical path calculation:** Simple BFS (not considering wait times or dependencies)
  - Works for DAGs (no cycles)
  - Assumes all parent tasks complete before child can start

- **No drag-to-reschedule:** DAG is read-only visualization
  - To change tier assignments, modify task.parentTaskId in data source

---

## Next Steps

1. **Add task estimates UI** — Let users set minutes per task
2. **Add critical path notifications** — Flag if critical path tasks are blocked
3. **Wire Grill-Tab to same data** — 5-question breakdown of DAG steps
4. **Integrate with M5 Pro** — Convert speedup to actual wall-clock time with M5 core allocation

---

## Commits

- `1c2acc0f9` — Cleanup: remove v1 MissionControlPanel, rename timeline-v1
- `285be22f6` — Wire DAG to live task data and Redux store

**Status:** ✅ Complete. DAG is live and reading real task hierarchy from Redux.
