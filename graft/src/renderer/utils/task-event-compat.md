# src/renderer/utils/task-event-compat.ts

- TaskEventLike · type · L3-L3 — type TaskEventLike = Pick<TaskEvent, "type" | "legacyType" | "status" | "payload">;
- asObject · function · L5-L8 — function asObject(value: unknown): Record<string, unknown> | null
- coerceNonEmptyText · function · L10-L20 — function coerceNonEmptyText(value: unknown): string
- isLikelyTaskCompletionPayload · function · L22-L48 — function isLikelyTaskCompletionPayload(payload: Record<string, unknown> | null): boolean
- getEffectiveTaskEventType · function · L50-L89 — function getEffectiveTaskEventType(event: TaskEventLike): string
- getTimelineErrorText · function · L91-L102 — function getTimelineErrorText(event: Pick<TaskEvent, "type" | "payload">): string
