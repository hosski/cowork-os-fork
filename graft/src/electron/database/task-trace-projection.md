# src/electron/database/task-trace-projection.ts

- Any · type · L10-L10 — type Any = any;
- asObject · function · L12-L15 — function asObject(value: unknown): Record<string, unknown>
- toFiniteNumber · function · L17-L19 — function toFiniteNumber(value: unknown): number
- normalizeText · function · L21-L23 — function normalizeText(value: unknown): string
- getEffectiveEventType · function · L25-L29 — function getEffectiveEventType(event: TaskEvent): string
- getTaskTraceSessionId · function · L31-L35 — function getTaskTraceSessionId(task: Pick<Task, "id" | "sessionId">): string
- sortTaskTraceSiblingRuns · function · L37-L52 — function sortTaskTraceSiblingRuns(runs: TaskTraceRunSibling[]): TaskTraceRunSibling[]
- buildTaskTraceSiblingRuns · function · L54-L71 — function buildTaskTraceSiblingRuns(tasks: Task[]): TaskTraceRunSibling[]
- matchesTaskTraceFilters · function · L73-L94 — function matchesTaskTraceFilters(task: Task, filters: ListTaskTraceRunsRequest): boolean
- buildTaskTraceRunSummaries · function · L96-L156 — function buildTaskTraceRunSummaries( tasks: Task[], filters: ListTaskTraceRunsRequest = {}, ): TaskTraceRunSummary[]
- buildTaskTraceMetrics · function · L158-L197 — function buildTaskTraceMetrics( task: Task, events: TaskEvent[], now = Date.now(), ): TaskTraceMetrics
