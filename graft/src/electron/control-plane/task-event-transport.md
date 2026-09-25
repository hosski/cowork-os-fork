# src/electron/control-plane/task-event-transport.ts

- TaskRepoLike · type · L10-L13 — type TaskRepoLike = { findById(taskId: string): Task | null | undefined; findByParent(taskId: string): Task[]; };
- TaskEventRepoLike · type · L15-L18 — type TaskEventRepoLike = { findRecentByTaskId(taskId: string, maxEvents: number): TaskEvent[]; findByTaskIds(taskIds: string[], types?: string[]): TaskEvent[]; };
- TaskTimelineEventRepoLike · type · L20-L30 — type TaskTimelineEventRepoLike = TaskEventRepoLike & { findTimelinePage(request: TaskTimelinePageRequest): TaskTimelinePageResult; findEventDetailById( eventId: string, scope?: { taskId?: string; additionalTaskIds?: string[]; additionalTaskEventTypes?: string[]; }, ): TaskEventDetailResult; };
- sanitizeTaskTimelinePageRequest · function · L43-L78 — function sanitizeTaskTimelinePageRequest(params: unknown): TaskTimelinePageRequest
- numeric · function · L65-L70 — numeric = (key: string): number | undefined
- sanitizeTaskEventDetailRequest · function · L80-L87 — function sanitizeTaskEventDetailRequest(params: unknown): TaskEventDetailRequest
- buildTaskEventHistoryForTransport · function · L89-L115 — function buildTaskEventHistoryForTransport(params: { taskId: string; limit: number; taskRepo: TaskRepoLike; eventRepo: TaskEventRepoLike; }): TaskEvent[]
- serializeTaskEventForTransport · function · L117-L125 — function serializeTaskEventForTransport( event: TaskEvent, sanitizeValue: (value: unknown) => unknown, ): TaskEvent
- buildTaskTimelinePageForTransport · function · L127-L152 — function buildTaskTimelinePageForTransport(params: { request: TaskTimelinePageRequest; taskRepo: TaskRepoLike; eventRepo: TaskTimelineEventRepoLike; sanitizeValue: (value: unknown) => unknown; }): TaskTimelinePageResult
- buildTaskEventDetailForTransport · function · L154-L179 — function buildTaskEventDetailForTransport(params: { request: TaskEventDetailRequest; taskRepo: TaskRepoLike; eventRepo: TaskTimelineEventRepoLike; sanitizeValue: (value: unknown) => unknown; }): TaskEventDetailResult
