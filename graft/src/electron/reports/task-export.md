# src/electron/reports/task-export.ts

- asTrimmedString · function · L12-L16 — function asTrimmedString(value: unknown): string | undefined
- asNumber · function · L18-L25 — function asNumber(value: unknown): number | undefined
- getFileEventPath · function · L27-L34 — function getFileEventPath(payload: Any): string | undefined
- extractFileChanges · function · L36-L59 — function extractFileChanges(events: TaskEvent[]): TaskFileChanges | undefined
- extractLatestUsage · function · L61-L91 — function extractLatestUsage(events: TaskEvent[]): TaskUsageTotals | undefined
- indexEventsByTaskId · function · L93-L105 — function indexEventsByTaskId(events: TaskEvent[]): Map<string, TaskEvent[]>
- buildTaskExportItem · function · L107-L144 — function buildTaskExportItem(params: { task: Task; workspaceName?: string; events?: TaskEvent[]; exportedAt: number; }): TaskExportItem
- buildTaskExportJson · function · L146-L169 — function buildTaskExportJson(params: { query: TaskExportQuery; tasks: Task[]; workspaces: Workspace[]; events: TaskEvent[]; exportedAt?: number; }): TaskExportJson
