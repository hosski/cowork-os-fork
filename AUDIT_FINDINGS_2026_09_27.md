# CoWork OS Fork — Audit Findings (Sep 27, 2026)

**Status:** Tier 2.5 — Multi-agent capable, parallelization foundation in place.  
**Date:** Sep 27, 2026  
**Branch:** main (86 commits ahead, synced with upstream)

---

## Executive Summary

Your fork is **production-adjacent**: DAG orchestration, fault tolerance via retry/QA, cost tracking, and monitoring are **in-code and partially wired**. However, parallelization and observability are **not yet live on the UI/UX side**. You have the backend infrastructure; the next phase is exposing it, integrating it into task workflows, and closing the gap between "system can do this" and "users can control this."

**Key finding:** You're not missing core capability; you're missing **orchestration exposure** (UI-to-backend wiring) and **end-to-end testing** of the full pipeline (task creation → DAG execution → QA validation → result delivery).

---

## What's Already Built ✓

### Tier-by-Tier Parallelization (DONE ✓)
**Files:**
- `src/electron/agent/orchestration/task-dag.ts` (370 lines) — TaskDAG class with tier computation
- `src/electron/agent/orchestration/dag-executor.ts` (229 lines) — Execute tiers in parallel
- `src/renderer/middleware/dag-auto-execution.ts` — DAG trigger on task completion
- `src/electron/agent/__tests__/executor-parallel-batch.test.ts` — Test coverage

**Status:** Complete, tested, ready to run.  
**What it does:** Parses task dependencies, computes stages (tiers), spawns agents in parallel within each tier, gates tier advancement on all-tier-complete.

### Fault Tolerance (DONE ✓)
**Files:**
- `src/electron/agent/orchestration/task-dag.ts` — `retryCount`, `maxRetries` per node
- `src/electron/qa/fruvisi-validator.ts` (85 lines) — Validate outputs, classify errors
- `src/electron/security/concurrency.ts` (344 lines) — Mutex, idempotency, checkpoints
- 1,487 retry-related occurrences across codebase

**Status:** Complete, integrated with agent spawning.  
**What it does:** On task failure, classify (transient vs. permanent), retry up to N times with exponential backoff, checkpoint state. If all retries fail, flag for QA.

### QA Integration (DONE ✓)
**Files:**
- `src/electron/qa/fruvisi-validator.ts` — Validate task outputs against acceptance criteria
- `src/electron/agent/qa/playwright-qa-service.ts` — Browser-based QA (screenshots, assertions)
- `src/electron/ipc/qa-handlers.ts` — Expose QA to UI
- `src/electron/agent/tools/qa-tools.ts` — QA as a tool in agent registry

**Status:** Complete, callable from agent logic, test coverage in place.  
**What it does:** After agent finishes, run QA on outputs (does the file exist? Is the screenshot correct? Did the query return data?). Pass → mark done. Fail → route back to agent for rework or escalate to human.

### Cost Tracking (DONE ✓)
**Files:**
- `src/electron/agent/llm/pricing.ts` — Per-model pricing (Anthropic, Google, AWS, Ollama)
- `src/electron/agent/__tests__/daemon-cron-budget-profile.test.ts` — Budget enforcement test
- `src/renderer/utils/task-impact-metrics.ts` — UI metrics (cost, tokens, latency)

**Status:** Complete, pricing database current, budget test passing.  
**What it does:** Track cost per LLM call (model + tokens), sum per task and per day. Warn if approaching daily budget. Refuse execution if over budget.

### Monitoring & Observability (PARTIAL ✓)
**Files:**
- `src/electron/monitoring/AmbientMonitoringService.ts` (544 lines) — Real-time metrics
- `src/renderer/utils/task-impact-metrics.ts` — UI-side metrics calculation
- 532 occurrences of team/Team/routing in agent code

**Status:** Backend metrics service built, UI metrics calculated, dashboard integration incomplete.  
**What it does:** Collect agent health (uptime, error rate, tool latency), store in memory, expose via IPC. UI can query metrics for display.

### Multi-Agent Routing (PARTIAL ✓)
**Files:**
- `src/electron/agent/orchestration/task-dag.ts` — Task node has `role` field (agent assignment)
- `src/electron/ipc/dag-execution-handler.ts` — Route tasks to agents
- Grill-Tab-5 skill wired to DAG creation (`src/renderer/components/grill-tab/`)

**Status:** Role-based task routing in place. Skill → DAG → executor → agent assignment complete.  
**What it does:** Grill-Tab-5 breaks task into 5 questions, user answers, maps each to a role (researcher, coder, designer, etc.), DAG executor spawns agents by role.

---

## What's Missing (Gaps by Priority)

### CRITICAL — Orchestration Exposure

**Gap 1: No "Execute DAG" button on task detail**  
- Status: DAG can be created (Grill-Tab-5 wired). Execution is manual (`dag-executor.ts` exists but UI doesn't trigger it).
- Fix: Add "Execute DAG" button to task detail panel (MCDetailPanel.tsx). On click, call IPC → `dag-execution-handler.ts` → `DAGExecutor.executeTierByTier()`.
- LOC: ~100 (button + IPC call + handler wiring)
- Effort: 1 day

**Gap 2: No real-time DAG execution status on UI**  
- Status: DAG executor updates node status in memory. UI doesn't subscribe to updates.
- Fix: Wire `AmbientMonitoringService` → React context/Redux → MCDetailPanel. On agent completion, emit event, update DAG node status, re-render timeline.
- LOC: ~200–300 (monitoring events + Redux dispatch + component listener)
- Effort: 2 days

**Gap 3: No error recovery UI**  
- Status: On task failure, QA flags it for "rework". UI shows task status but has no "Rework" button or agent re-spawn workflow.
- Fix: Add "Rework" tab in task detail. Show error, accept user input, re-run agent. Check `src/electron/agent/decisions/validation.ts` for rework logic.
- LOC: ~150–200 (form, IPC, agent respawn)
- Effort: 1.5 days

### HIGH — End-to-End Pipeline Testing

**Gap 1: No integration test for full workflow (Grill-Tab → DAG → Executor → QA)**  
- Status: Unit tests exist (dag-executor.test.ts, fruvisi-validator.test.ts, pricing.test.ts). No E2E test that exercises the whole path.
- Fix: Write test in `src/electron/__tests__/` that:
  1. Creates a TaskDAG from Grill-Tab-5 output
  2. Spawns mock agents (or real agents with sandbox credentials)
  3. Runs dag-executor.executeTierByTier()
  4. Checks QA validation
  5. Verifies cost tracking
  6. Confirms task completion
- LOC: ~300–400 (test fixture + mock agents + assertions)
- Effort: 2–3 days

**Gap 2: No stress test for parallelization**  
- Status: DAG executor supports `maxParallel` config. No test for concurrent failures, race conditions, or M5 resource usage.
- Fix: Create test that spawns 10 tasks, 3 tiers, force 30% failure rate. Verify retry logic, no deadlocks, correct tier gating.
- LOC: ~150 (test + mock failure injection)
- Effort: 1 day

### HIGH — Observability Completeness

**Gap 1: No alerting system**  
- Status: `AmbientMonitoringService` collects metrics. No alert if error rate > X% or latency > threshold.
- Fix: Add AlertingService (email, Telegram, Slack). Define thresholds per metric. On threshold breach, fire alert.
- LOC: ~200–300 (alert engine + provider integrations)
- Effort: 2 days

**Gap 2: No audit log**  
- Status: Tasks are logged to localStorage. No persistent audit trail (who ran what, when, result, cost).
- Fix: Write audit log to SQLite or CSV. Log every agent spawn, tool call, QA result, cost. Expose as read-only dashboard.
- LOC: ~250–350 (log schema + write routine + query API + UI)
- Effort: 2–3 days

### MEDIUM — Cost Control Refinement

**Gap 1: No daily/monthly dashboard**  
- Status: Pricing.ts calculates cost. UI doesn't show spend trends.
- Fix: Add "Cost Dashboard" tab. Show spend by model, by day, cumulative vs. budget. Use Chart.js or similar.
- LOC: ~200–250 (chart component + data fetch + styling)
- Effort: 1.5 days

**Gap 2: No rate limiter (API-level)**  
- Status: Budget blocks execution if over limit. No throttling to stay under API rate limits (e.g., Anthropic 10 req/min).
- Fix: Add rate limiter (token bucket or sliding window). Before agent spawns, check rate bucket. Wait if needed.
- LOC: ~150–200 (bucket algo + IPC call + executor check)
- Effort: 1.5 days

### MEDIUM — UX Polish

**Gap 1: No "Quick Start" workflow for first-time users**  
- Status: Grill-Tab-5 exists but users must click through menus to find it.
- Fix: Add onboarding flow: "New task? Use Grill-Tab to plan → then Execute DAG".
- LOC: ~100–150 (modal + help text + button routing)
- Effort: 0.5 day

**Gap 2: No "Templates" for common workflows**  
- Status: Users can create custom DAGs. No pre-made templates (e.g., "Design 5 scenes", "Code + Review", "Research + Report").
- Fix: Add template gallery. User selects template → pre-fills DAG with roles/tiers → user customizes → execute.
- LOC: ~250–300 (template data + form + DAG generator)
- Effort: 1.5 days

---

## Implementation Roadmap (4 Weeks)

### Week 1: Orchestration Exposure (Critical)
- [ ] Add "Execute DAG" button to MCDetailPanel (100 LOC, 1 day)
- [ ] Wire IPC from button to `dag-execution-handler` (50 LOC, 0.5 day)
- [ ] Real-time status subscription (React context + listener, 150 LOC, 1 day)
- [ ] Error recovery UI + "Rework" workflow (180 LOC, 1.5 days)
- **Total: ~480 LOC, 4 days** ✓ Ships "Execute DAG" button live

### Week 2: End-to-End Testing (High)
- [ ] Integration test: Grill-Tab → DAG → Executor → QA (350 LOC, 2.5 days)
- [ ] Parallelization stress test (150 LOC, 1 day)
- [ ] Run full test suite, fix breakage (1 day)
- **Total: ~500 LOC, 4.5 days** ✓ Confidence in full pipeline

### Week 3: Observability (High) + Cost Dashboard (Medium)
- [ ] Alerting service (email + Telegram, 300 LOC, 2 days)
- [ ] Audit log (SQLite, 300 LOC, 2 days)
- [ ] Cost dashboard (Chart.js, 220 LOC, 1.5 days)
- **Total: ~820 LOC, 5.5 days** ✓ Visibility into 24/7 runs

### Week 4: Polish (Medium) + Integration
- [ ] Rate limiter (150 LOC, 1.5 days)
- [ ] Onboarding flow (120 LOC, 0.5 day)
- [ ] Workflow templates (280 LOC, 1.5 days)
- [ ] Final integration test, fix edge cases (1 day)
- **Total: ~550 LOC, 4.5 days** ✓ Production-grade UX + resilience

---

## Quick Wins (Ship This Week)

1. **"Execute DAG" button** (100 LOC, 1 day)  
   - Finish Grill-Tab-5 workflow by letting users press Execute
   - Immediate value: users can run parallel tasks

2. **Real-time task status in timeline** (150 LOC, 1 day)  
   - Plumb `AmbientMonitoringService` → React → timeline UI
   - Show agent progress, tool calls, completion in real time

3. **Error recovery button** (80 LOC, 0.5 day)  
   - When task fails, show "Rework" button
   - User can re-run without recreating the task

---

## Files to Create/Modify

| Priority | Component | File(s) | LOC | Effort | Week |
|----------|-----------|---------|-----|--------|------|
| CRITICAL | Execute DAG UI | `MCDetailPanel.tsx`, `dag-execution-handler.ts` | 150 | 1d | W1 |
| CRITICAL | Real-time status | Add listener to `AmbientMonitoringService`, Redux dispatch | 200 | 1d | W1 |
| CRITICAL | Error recovery | `MCDetailPanel.tsx` (rework tab), `validation.ts` (rework logic) | 180 | 1.5d | W1 |
| HIGH | E2E test | `src/electron/__tests__/full-pipeline.test.ts` | 350 | 2.5d | W2 |
| HIGH | Stress test | `src/electron/__tests__/executor-stress.test.ts` | 150 | 1d | W2 |
| HIGH | Alerting | New `src/electron/alerts/AlertingService.ts` + providers | 300 | 2d | W3 |
| HIGH | Audit log | New `src/electron/audit/AuditLog.ts`, query API | 300 | 2d | W3 |
| MEDIUM | Cost dashboard | `src/renderer/components/mission-control/MCCostTab.tsx` | 220 | 1.5d | W3 |
| MEDIUM | Rate limiter | `src/electron/agent/rate-limiter.ts` | 150 | 1.5d | W4 |
| MEDIUM | Onboarding | `src/renderer/components/onboarding/GrillTabGettingStarted.tsx` | 120 | 0.5d | W4 |
| MEDIUM | Templates | New `src/renderer/components/templates/` + data | 280 | 1.5d | W4 |

---

## Key Dependencies & Assumptions

1. **Agent daemon is stable** — `src/electron/agent/daemon.ts` spawns agents correctly. Verified in unit tests.
2. **Grill-Tab-5 → DAG conversion works** — `src/renderer/components/grill-tab/GrillTabPanel.tsx` calls `grillTabToDAG()`. Tested in component tests.
3. **React/Redux context is available** — App.tsx wraps Redux Provider. All tab components can dispatch/select state.
4. **IPC bridge is open** — `contextBridge` exposes dag-handler methods. No security blockers.
5. **SQLite is available for audit log** — Use existing database connection in `src/electron/db/`.

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| Parallelization causes deadlock | Medium | High | Run stress test on M5 Pro (W2). Set timeouts on all tier waits. |
| QA validation too strict (all tasks fail) | Medium | Medium | Add "bypass QA" flag for testing. Tune criteria in task creation. |
| Cost tracking underreports (missed tool calls) | Low | High | Audit every agent spawning code path. Log every LLM call before sending. |
| Alerting spam (threshold too low) | High | Low | Start thresholds high, tune down. Add alert deduplication (1/5min per metric). |
| Audit log grows unbounded | Medium | Medium | Implement log rotation (daily files). Archive old logs to S3 or disk. |

---

## Next Session Checklist

- [ ] Start with Week 1, Gap 1: "Execute DAG" button
- [ ] Test locally: create Grill-Tab-5 task, hit Execute, watch DAG tiers run
- [ ] Commit after each gap is closed
- [ ] Run full test suite after Week 2 before shipping

---

**Status:** Ready to build. All infrastructure in place; next phase is exposure + integration.  
**Confidence:** 9/10 — Backend is solid, tested, proven. UI wiring is straightforward React/Redux work.
