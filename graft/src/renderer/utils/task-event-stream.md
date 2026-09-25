# src/renderer/utils/task-event-stream.ts

- getNumericOrderValue · function · L3-L5 — function getNumericOrderValue(value: unknown): number | null
- getTaskEventIdentity · function · L7-L22 — function getTaskEventIdentity(event: Partial<TaskEvent>): string
- compareTaskEventOrder · function · L24-L38 — function compareTaskEventOrder(left: Partial<TaskEvent>, right: Partial<TaskEvent>): number
- mergeTaskEventsByIdentity · function · L40-L83 — function mergeTaskEventsByIdentity( existing: TaskEvent[], incoming: TaskEvent[], ): TaskEvent[]
- hydrateSelectedTaskEvents · function · L85-L92 — function hydrateSelectedTaskEvents( selectedTaskId: string, existing: TaskEvent[], historical: TaskEvent[], ): TaskEvent[]
- shouldIncludeTaskEventInSelectedSession · function · L101-L118 — function shouldIncludeTaskEventInSelectedSession(params: { selectedTaskId: string | null; event: TaskEvent; tasks: Task[]; }): boolean
- shouldRefreshCanonicalEventsForTerminalUpdate · function · L120-L134 — function shouldRefreshCanonicalEventsForTerminalUpdate(params: { selectedTaskId: string | null; event: TaskEvent; nextStatus?: Task["status"]; }): boolean
