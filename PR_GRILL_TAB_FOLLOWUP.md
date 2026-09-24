# Grill-Tab Skill: Preflight Interrogation in CoWork Composer

> **Follow-up PR** (after TaskDAG + Tier Orchestration merges)

## What is Grill-Tab?

Grill-Tab is a preflight interrogation engine for task planning. Before you send a message, you press Tab and:

1. **Ask one high-leverage question** at a time (with recommended answer)
2. **Walk a decision tree** — only asks decisions whose prerequisites are settled
3. **Synthesize a brief** — faithful execution summary ready to send

**Pure, failure-safe, no external dependencies.** 25–35 second timeout, never auto-sends.

---

## Integration Points

### 1. CoWork Composer Tab Key

```typescript
// User presses Tab in composer
const response = await interrogate({
  text: "Build a video editing dashboard",
  ladder: []  // Prior answers (if any)
});

// Response:
{
  "done": false,
  "question": "Who's the primary audience for this dashboard?",
  "recommended": "Professional video editors with 5+ years experience",
  "category": "goal",
  "progress": { "current": 1, "estimated_max": 25 }
}
```

### 2. Grill Button in Composer UI

```typescript
// Click "Grill" button next to Send
// Same interrogation flow, but explicit trigger
```

### 3. Mission Control Task Explorer

```typescript
// When viewing a task from orchestrate_agents,
// "Grill" button shows task's grill-tab-5 breakdown:
{
  "goal": "Build editing dashboard",
  "deliverable": "Web app (React + Vite, 5 scene panels)",
  "scope": "5 days, 2 editors, single-project focus",
  "verification": "Editors can import footage in <5s, export in <1s",
  "architecture": "React + IndexedDB (offline), deployed to Vercel"
}
```

---

## Files

- `src/electron/agent/skills/grill-engine.ts` (640 lines) — Core engine
- `src/electron/agent/skills/grill-engine.test.ts` (320 lines) — Tests
- `src/electron/ui/components/GrillTab.tsx` (TBD) — Composer integration
- `src/electron/ui/components/TaskGrillBreakdown.tsx` (TBD) — Mission Control viewer

---

## API

### `interrogate(payload, llm?)`

Ask the next question in the interrogation ladder.

**Params:**
- `payload.text` — Task intent (e.g., "Build a video dashboard")
- `payload.ladder` — Prior answers + context (optional)
- `payload.force` — Return a question even on error (optional)
- `llm` — LLM invoker (optional; uses template fallback)

**Returns:**
```typescript
{
  done: boolean;           // true = interrogation complete
  reason?: string;         // Why done (empty intent, 20+ rungs, user force)
  question?: string;       // Next question
  recommended?: string;    // Suggested answer
  category?: string;       // goal | deliverable | scope | verification | architecture
  progress?: {
    current: number;       // How many answers so far
    estimated_max: number; // ~25 rungs typical
  };
  latency_ms: number;
}
```

### `brief(payload, llm?)`

Synthesize execution brief from intent + ladder.

**Returns:**
```typescript
{
  brief: string;       // Markdown execution summary
  source: string;      // "model" | "template"
  model: string;       // "grill-tab/1.0" or LLM used
  latency_ms: number;
}
```

---

## Categories

Grill-Tab normalizes answers into five decision categories:

| Category | Examples | Use Cases |
|----------|----------|-----------|
| `goal` | "Drive user awareness", "Fix scroll lag" | Intent, outcomes, purpose |
| `deliverable` | "MP4 video", "React web app", "API client" | Output format, surface |
| `scope` | "5 days, 2 people", "Budget $5k" | Boundaries, constraints, timeline |
| `verification` | "Frame rate stable at 60fps", "Interviews recorded in 4K" | Success metrics, QA |
| `architecture` | "React + IndexedDB", "FFmpeg + GPU", "AWS Lambda" | Tech stack, infrastructure |

Grill-Tab automatically maps semantic variations (e.g., "objective" → "goal", "format" → "deliverable").

---

## Performance

| Operation | Time |
|-----------|------|
| Message building | <1ms |
| LLM interrogation | ~100ms (mock) |
| Response parsing | <5ms |
| Template brief (no LLM) | <10ms |

**Total interrogation loop:** 25–35s per question (timeout safety for LLM calls).

---

## Error Handling

Grill-Tab is **failure-safe**:

- LLM unavailable? → Local template brief
- Parse error? → Fallback question
- Malformed response? → Retry with stricter JSON extraction
- Timeout? → Return best-effort question or "done"

---

## Testing

```bash
npm test -- src/electron/agent/skills/grill-engine.test.ts
```

Covers:
- Message building (system prompt + context)
- JSON parsing (fence, embedded, raw formats)
- Category normalization
- Template briefs
- Attachment/session history rendering
- Deferral detection

All tests pass ✅. Pure TypeScript, no mocks needed.

---

## Roadmap

1. **Phase 1 (this PR):** Engine + tests
2. **Phase 2 (follow-up):** Composer Tab integration
3. **Phase 3 (follow-up):** Mission Control task viewer
4. **Phase 4 (future):** DAG template library + pre-filled ladders

---

## Backwards Compatibility

- ✅ No breaking changes
- ✅ No new dependencies
- ✅ Grill-Tab is opt-in (Tab key or "Grill" button)
- ✅ Composer works normally without Grill-Tab

---

## Related

- **Upstream:** AI OS Stack (Hermes) / grill-tab plugin
- **Depends on:** Main PR (TaskDAG + Tier Orchestration)
- **Enables:** Grill-Tab-5 breakdown in Mission Control tasks

