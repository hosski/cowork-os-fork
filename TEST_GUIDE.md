# Testing Guide: TaskDAG + Grill-Tab + Video Case Study

## 1. Compile Everything (2 min)

```bash
cd /Users/hosski/.cowork-os-fork
npx tsc src/electron/agent/orchestration/*.ts --noEmit --skipLibCheck
npx tsc src/electron/agent/skills/*.ts --noEmit --skipLibCheck
npx tsc src/electron/agent/case-studies/*.ts --noEmit --skipLibCheck
```

**Expected:** Zero errors, all ✅

## 2. Run Unit Tests (5 min)

```bash
# TaskDAG tests
npm test -- src/electron/agent/orchestration/task-dag.test.ts

# Grill-Tab tests
npm test -- src/electron/agent/skills/grill-engine.test.ts
```

**Expected:** All tests pass, 100% coverage for both modules

## 3. Run the Demo (1 min)

```bash
npx ts-node src/electron/agent/case-studies/video-workflow-demo.ts
```

**Expected output:**
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

▶ PHASE 4: Building M5 Pro Execution Plan...
✓ Execution plan ready

▶ PHASE 5: Dispatching to CoWork Orchestrator...
✓ Plan dispatched to orchestrate_agents tool

▶ PHASE 6: Simulating Execution Results...

=== Video Workflow Execution Complete ===
Workflow ID: video-workflow-20260924-prod
Status: completed
Tasks: 14/14 completed
Elapsed: 20.3h
Speedup: 1.48x (M5 Pro parallelization)
```

## 4. Inspect Generated JSON (2 min)

```bash
node -e "
const { buildVideoWorkflowDAG, serializeVideoWorkflowDAG } = require('./src/electron/agent/case-studies/video-workflow-dag');
const dag = buildVideoWorkflowDAG();
const json = serializeVideoWorkflowDAG(dag);
console.log(json);
" | jq . | head -100
```

**What to look for:**
- 14 tasks with proper IDs, titles, descriptions
- Dependencies correctly wired (e.g., storyboard depends on research)
- Tiers computed (tier 0, tier 1, tier 2, tier 3, tier 4)
- Critical path: 30 hours

## 5. Test TaskDAG API Directly (3 min)

```bash
node -e "
const { buildVideoWorkflowDAG } = require('./src/electron/agent/case-studies/video-workflow-dag');
const dag = buildVideoWorkflowDAG();

console.log('=== TaskDAG API Test ===');
console.log('Total nodes:', dag.nodes.size);
console.log('Total edges:', dag.edges.size);

const tiers = dag.computeTiers();
console.log('Tiers:', tiers.length);
tiers.forEach((tier, idx) => {
  const tasks = tier.map(id => dag.nodes.get(id).title).join(', ');
  console.log(\`  Tier \${idx}: \${tasks}\`);
});

const criticalPath = dag.getCriticalPathDuration() / 3600;
console.log('Critical path:', criticalPath.toFixed(1), 'hours');
"
```

**Expected:**
- Total nodes: 14
- Total edges: 13+ (dependencies)
- Tiers: 5
- Critical path: 30.0 hours

## 6. Test Grill-Tab Engine (2 min)

```bash
node -e "
const { interrogate, brief, localTemplateBrief } = require('./src/electron/agent/skills/grill-engine');

// Test 1: Local template brief (no LLM needed)
const briefText = localTemplateBrief('Build a video editing dashboard');
console.log('=== Template Brief ===');
console.log(briefText.substring(0, 200) + '...');

// Test 2: Interrogate (with fallback)
interrogate({ text: 'Create a marketing video', force: true }).then(response => {
  console.log('\n=== Interrogate Response ===');
  console.log('Done:', response.done);
  console.log('Question:', response.question || '(none)');
  console.log('Progress:', response.progress);
  console.log('Latency:', response.latency_ms, 'ms');
});
"
```

**Expected:**
- Template brief shows Goal, Directive, Settled decisions
- Interrogate returns a question + progress tracking
- Latency <100ms for template, ~100ms for LLM call

## 7. Full Integration Test (1 min)

```bash
node -e "
const { buildVideoExecutionPlan, executeVideoWorkflowInCoWork, mockVideoWorkflowResult, displayExecutionResult } = require('./src/electron/agent/case-studies/video-workflow-execution');

const plan = buildVideoExecutionPlan();
console.log('=== Execution Plan ===');
console.log('Workflow:', plan.workflow_name);
console.log('Team:', plan.team);
console.log('Strategy:', plan.parallelization_strategy);
console.log('Estimated duration:', plan.estimated_total_hours.toFixed(1) + 'h → ' + plan.estimated_m5_hours + 'h');

const result = mockVideoWorkflowResult();
displayExecutionResult(result);
"
```

**Expected:**
- Execution plan shows all tier hints
- Mock results show 1.48× speedup
- All artifacts listed

## 8. Compilation Check (Full Project)

```bash
npm run build 2>&1 | grep -E "error|warning" | head -10
```

**Expected:** No errors (warnings okay)

## 9. Type Checking (Strict Mode)

```bash
npx tsc --noEmit --strict --skipLibCheck 2>&1 | wc -l
```

**Expected:** 0 errors (just header output)

## Summary Checklist

- [ ] All TypeScript compiles (00:00–00:05)
- [ ] TaskDAG tests pass (00:05–00:10)
- [ ] Grill-Tab tests pass (00:10–00:15)
- [ ] Demo runs end-to-end (00:15–00:20)
- [ ] JSON serialization works (00:20–00:25)
- [ ] TaskDAG API verified (00:25–00:30)
- [ ] Grill-Tab engine verified (00:30–00:35)
- [ ] Execution plan builds (00:35–00:40)
- [ ] Full project compiles clean (00:40–00:45)

**Total test time: ~45 minutes**

## If Tests Fail

1. **Compilation error?** → Check TypeScript version (`npm list typescript`)
2. **Test timeout?** → Increase Jest timeout: `npm test -- --testTimeout=10000`
3. **Module not found?** → Run `npm install` again
4. **JSON parse error?** → Check Node version (`node --version` should be 16+)

## Quick Smoke Test (2 min)

If you just want to verify everything works without running full tests:

```bash
cd /Users/hosski/.cowork-os-fork
npx ts-node src/electron/agent/case-studies/video-workflow-demo.ts 2>&1 | head -50
```

This runs the demo script, which exercises all three components (TaskDAG, tiers, case study).

