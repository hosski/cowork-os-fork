# CoWork OS Contribution Plan

## Option A: TaskDAG + Tier Orchestration + Grill-Tab

### Phase 1: TaskDAG Model Port (Days 1-2)

**Target Files (Integration Points):**
1. `src/electron/agent/tools/orchestrate_agents_tool.ts` — Where `orchestrate_agents` is implemented
2. `src/shared/types.ts` — Type definitions for agent coordination
3. `src/electron/agent/executor.ts` — Main agent loop (line ~8000-9000, tool orchestration section)

**What to Port:**
```
From: /Users/hosski/.hermes/projects/ai-os-stack/orchestrator/models_v1_task_dag.py
To:   src/electron/agent/orchestration/task-dag.ts

Includes:
  - TaskDAGNode interface (id, name, label, dependencies, requires)
  - TaskDAGGraph class (nodes, edges, adjacency list)
  - topologicalSort() → tier computation
  - criticalPathLength() → M5 speedup hints
  - generateTierAssignments() → parallel tier breakdown
  - Test: input_task_spec.json → output tiers (3 levels, parallel within each)
```

**Integration Point:**
- In `orchestrate_agents` tool, after receiving agent list:
  - Build TaskDAG from agent dependencies
  - Compute tiers
  - Return tier-annotated agent list to executor
  - Executor respects tier ordering (sequential tiers, parallel agents within tier)

---

### Phase 2: Grill-Tab Skill Port (Day 3)

**Target Files:**
1. `src/electron/agent/tools/` — New tool or skill hook
2. `src/renderer/components/PromptComposerInput.tsx` — Add "Grill" button next to Send
3. New skill: `src/electron/skills/grill-tab-skill.ts` (if plugin-based)

**What to Port:**
```
From: /Users/hosski/.hermes/plugins/grill-tab/dashboard/grill_engine.py (~670 lines)
To:   src/electron/skills/grill-tab/grill-engine.ts

Includes:
  - _INTERROGATE_SYSTEM prompt (decision-tree interrogation)
  - _BRIEF_SYSTEM prompt (faithful brief synthesis)
  - interrogate(draft: string) → { question, recommended, options, category }
  - synthesizeBrief(intent: string, ladder: Answer[]) → markdown brief
  - Test: Draft task → 5-question grill → brief output
```

**UX Integration:**
- Composer has "Grill" button (or Tab key)
- On click: Grill-Tab asks 1 question, user answers
- Loop until `done: true`
- Synthesize brief, insert into composer
- User reviews + sends (never auto-sends)

---

### Phase 3: Video Workflow Case Study (Days 4-5)

**Build Live Video Team in CoWork:**

```
Team Structure:
  Chief of Staff: task_dispatcher_video_chief
    ├── Editor (video_editor_specialist)
    ├── Colorist (video_color_specialist)
    ├── Sound Designer (audio_specialist)
    └── QA (video_qa_specialist)

DAG Example:
  task_intake → grill-tab-5 (structured breakdown)
    ├─ Phase 1: Script & Storyboard (Editor)
    ├─ Phase 2: Raw Cut (Editor + QA in parallel)
    ├─ Phase 3: Color Grade (Colorist) [waits for Phase 2]
    ├─ Phase 4: Sound Mix (Sound) [parallel with Phase 3]
    └─ Phase 5: Final QA (QA) [waits for Phase 4]

Expected Tier Assignment:
  Tier 1 (P-cores): Storyboard, Raw Cut (parallel)
  Tier 2 (P-cores): Color + Sound (parallel)
  Tier 3 (E-cores): Final QA
  
Expected Speedup: 1.5-2× vs sequential

Documentation:
  - docs/case-studies/video-workflow.md
  - Screenshots: CoWork Mission Control showing DAG + task timeline
  - Before/After: Sequential vs tier-based execution
```

---

## File Structure

```
cowork-os-fork/
├── src/electron/agent/
│   ├── orchestration/
│   │   ├── task-dag.ts          ← NEW (TaskDAG port)
│   │   ├── task-dag.test.ts     ← NEW (tests)
│   │   └── tier-computation.ts  ← NEW (M5 hints)
│   └── tools/
│       ├── orchestrate_agents_tool.ts  ← MODIFY (wire DAG)
│       └── runtime-tool-definition.ts  ← MODIFY (concurrency)
│
├── src/electron/skills/
│   └── grill-tab/               ← NEW plugin
│       ├── grill-engine.ts      ← Ported from Python
│       ├── grill-engine.test.ts
│       └── composer-integration.ts
│
├── src/renderer/components/
│   └── PromptComposerInput.tsx   ← MODIFY (add Grill button)
│
├── docs/case-studies/
│   └── video-workflow.md        ← NEW (documentation)
│
└── TASKING_PLAN.md              ← THIS FILE
```

---

## PR Template

**Title:** `feat(orchestration): Add TaskDAG model + tier-based parallelization + Grill-Tab`

**Description:**
```
## What
- TaskDAG model: topological sorting + tier computation for M5 Pro parallelization
- Tier-based orchestration: sequential tiers, parallel agents within tier (1.5-2× speedup)
- Grill-Tab skill: preflight interrogation + brief synthesis for task planning

## Why
- Intelligent parallelization on Apple Silicon (P-cores vs E-cores)
- Faster task planning (Grill-Tab pre-submission interrogation)
- Real-world case study (video workflow demonstrating speedup)

## How
- Port TaskDAG from Hermes AI OS Stack (Python → TypeScript)
- Integrate into orchestrate_agents tool
- Wire Grill-Tab as a skill with composer UI
- Document with video workflow case study

## Testing
- Unit: task-dag.test.ts (topo sort, tier assignment, critical path)
- Integration: Grill-Tab end-to-end (draft → brief)
- E2E: Video workflow execution with tier-based parallelization

## Docs
- Orchestration guide (TaskDAG + tiers)
- Grill-Tab user guide (preflight workflow)
- Case study (video team, tier assignment, speedup measurement)
```

---

## Timeline

| Day | Task | Deliverable |
|-----|------|-------------|
| 1 | Port TaskDAG model | Compiling TypeScript, tests passing |
| 2 | Wire to orchestrate_agents, M5 hints | Integration test + executor validation |
| 3 | Port Grill-Tab + composer UI | Grill-Tab working in composer |
| 4 | Build video team, design DAG | Live team + tier assignment |
| 5 | Document + case study | Shipped + documented |
| 6 | Polish + PR | Ready for CoWork review |

---

## Next Step

✅ Clone CoWork OS → scout structure → **START Phase 1 Port**

Ready? Let's turn it to 11! 🎸
