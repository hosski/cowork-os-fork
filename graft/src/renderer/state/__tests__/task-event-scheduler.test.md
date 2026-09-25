# src/renderer/state/__tests__/task-event-scheduler.test.ts

- target · function · L10-L16 — function target( taskId: string, source: "local" | "remote" = "local", surfaceId = "main", ): TaskEventTarget
- event · function · L18-L35 — function event( id: string, type: string, options: Partial<Pick<TaskEvent, "eventId" | "seq" | "timestamp" | "taskId">> & { payload?: Record<string, unknown>; } = {}, ): TaskEvent
- enqueue · function · L37-L44 — function enqueue( scheduler: TaskEventScheduler, taskTarget: TaskEventTarget, generation: number, taskEvent: TaskEvent, ): boolean
