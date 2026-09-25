# src/renderer/utils/task-event-append.ts

- estimateEventPayloadBytes · function · L29-L31 — function estimateEventPayloadBytes(event: TaskEvent): number
- estimatePayloadBytes · function · L33-L50 — function estimatePayloadBytes(value: unknown, seen = new Set<object>()): number
- truncateString · function · L52-L58 — function truncateString(value: string, maxChars: number): string
- truncatePayloadStrings · function · L60-L75 — function truncatePayloadStrings(value: unknown, maxChars: number): unknown
- shouldTrimPayload · function · L77-L90 — function shouldTrimPayload(event: TaskEvent): boolean
- trimRendererEventPayload · function · L92-L103 — function trimRendererEventPayload(event: TaskEvent): TaskEvent
- isRendererNoiseEvent · function · L105-L107 — function isRendererNoiseEvent(event: TaskEvent): boolean
- capTaskEvents · function · L109-L175 — function capTaskEvents( events: TaskEvent[], maxEvents: number = DEFAULT_MAX_EVENTS, maxPayloadBytes: number = DEFAULT_MAX_EVENT_PAYLOAD_BYTES, ): TaskEvent[]
- getTrimmedEvents · function · L128-L132 — getTrimmedEvents = ()
- getTransientEventReplacementKey · function · L177-L208 — function getTransientEventReplacementKey(event: TaskEvent): string | null
- appendRendererTaskEvents · function · L210-L279 — function appendRendererTaskEvents( previousEvents: TaskEvent[], incomingEvents: TaskEvent[], ): TaskEvent[]
