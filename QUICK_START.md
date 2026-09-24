# Quick Start: TaskDAG + Grill-Tab + Video Case Study

## Run the Demo

```bash
cd /Users/hosski/.cowork-os-fork
npx ts-node src/electron/agent/case-studies/video-workflow-demo.ts
```

Output:
```
╔════════════════════════════════════════════════════════════════╗
║                  VIDEO WORKFLOW CASE STUDY                     ║
║         TaskDAG + M5 Pro Parallelization + Grill-Tab-5         ║
╚════════════════════════════════════════════════════════════════╝

▶ PHASE 1: Building Video Workflow DAG...
✓ Created 14 tasks

▶ PHASE 2: Analyzing Critical Path & Tier Structure...
Total tasks: 14
Critical path duration: 30.0 hours
Estimated M5 Pro speedup: 1.48x
Expected runtime on M5: 20.3h

▶ PHASE 3: Serializing DAG to JSON...
✓ Serialized to 45,000+ bytes
```

## Code Examples

### Build a TaskDAG

```typescript
import { TaskDAG, TaskNode } from "./orchestration/task-dag";

const dag = new TaskDAG("my-workflow", "My Workflow", "Description");

const task1: TaskNode = {
  id: "task_1",
  title: "First Task",
  description: "Do this first",
  role: "designer",
  taskType: TaskType.DESIGN,
  priority: TaskPriority.HIGH,
  estimatedDurationSeconds: 3600, // 1 hour
  inputs: {},
  outputs: {},
  successCriteria: "Task completed successfully",
  status: TaskStatus.PENDING,
  retryCount: 0,
  maxRetries: 2,
  createdAt: new Date().toISOString(),
  startedAt: null,
  completedAt: null,
};

dag.addNode(task1);

// Compute tiers (parallelizable layers)
const tiers = dag.computeTiers();
const criticalPathHours = dag.getCriticalPathDuration() / 3600;
```

### Use Grill-Tab

```typescript
import { interrogate, brief } from "./skills/grill-engine";

// Ask one question
const q1 = await interrogate({
  text: "Build a video dashboard",
  ladder: []
});

console.log(q1.question);
// "Who's the primary audience for this dashboard?"

// User answers, ask next question
const q2 = await interrogate({
  text: "Build a video dashboard",
  ladder: [{
    question: "Who's the primary audience?",
    answer: "Professional video editors",
    category: "goal",
    recommended: "Professional video editors"
  }]
});

console.log(q2.question);
// "What's the main deliverable?"

// Once complete, get brief
const briefText = await brief({
  text: "Build a video dashboard",
  ladder: [ /* all answers */ ]
});

console.log(briefText.brief);
// Execution summary
```

## Directory Map

```
src/electron/agent/
├── orchestration/              # TaskDAG model + M5 Pro optimization
│   ├── task-dag.ts            # Core DAG (370 lines)
│   ├── tier-computation.ts     # M5 Pro hints (219 lines)
│   └── task-dag.test.ts        # Tests (483 lines)
├── skills/                      # Grill-Tab interrogation
│   ├── grill-engine.ts         # Engine (640 lines)
│   └── grill-engine.test.ts    # Tests (320 lines)
└── case-studies/                # Video workflow proof of concept
    ├── video-workflow-dag.ts    # DAG builder (260 lines)
    ├── video-workflow-execution.ts  # Execution (180 lines)
    └── video-workflow-demo.ts   # Demo script (165 lines)
```

## Key Metrics

| Metric | Value |
|--------|-------|
| Total LOC | ~3,800 |
| Test coverage | ~1,100 LOC tests |
| External deps | 0 |
| Compilation | ✅ Clean (TS strict mode) |
| M5 Pro speedup | 1.48× |
| Demo runtime | ~35 seconds |

## Documentation

- **SUBMISSION_SUMMARY.md** — PR overview + strategy
- **PR_INTEGRATION_GUIDE.md** — Full technical integration
- **PR_GRILL_TAB_FOLLOWUP.md** — Follow-up PR template
- **ARCHITECTURE.md** — Code deep-dive + design decisions
- **TASKING_PLAN.md** — 6-phase roadmap

## Files to Review First

1. `SUBMISSION_SUMMARY.md` — What we built + why
2. `PR_INTEGRATION_GUIDE.md` — How it integrates with CoWork
3. `src/electron/agent/case-studies/video-workflow-demo.ts` — See it in action
4. `ARCHITECTURE.md` — Understand the code

## Tests

```bash
# Run all tests
npm test

# TaskDAG tests
npm test -- src/electron/agent/orchestration/task-dag.test.ts

# Grill-Tab tests
npm test -- src/electron/agent/skills/grill-engine.test.ts

# Run case study demo
npx ts-node src/electron/agent/case-studies/video-workflow-demo.ts
```

## What's Next

1. ✅ Code complete
2. ✅ Tests passing
3. ✅ Documentation ready
4. → Push to GitHub fork
5. → Create PR against cowork-os/cowork-os
6. → Wait for review (2-5 days)
7. → Follow-up PRs for Grill-Tab UI

**Status: Ready for PR submission.** 🚀

