# src/renderer/utils/task-timeline-cache.ts

- CachedTaskTimeline · interface · L7-L15 — interface CachedTaskTimeline
- estimateEventsPayloadBytes · function · L17-L27 — function estimateEventsPayloadBytes(events: TaskEvent[]): number
- latestSequence · function · L29-L34 — function latestSequence(events: TaskEvent[]): number
- TaskTimelineCache · class · L36-L101 — class TaskTimelineCache
- constructor · method · L39-L42 — constructor( private readonly taskLimit = TASK_TIMELINE_CACHE_TASK_LIMIT, private readonly byteLimit = TASK_TIMELINE_CACHE_BYTE_LIMIT, )
- get · method · L44-L51 — get(key: string): CachedTaskTimeline | null
- peek · method · L53-L55 — peek(key: string): CachedTaskTimeline | null
- set · method · L57-L74 — set( key: string, value: Omit<CachedTaskTimeline, "latestSequence" | "payloadBytes" | "cachedAt"> & { payloadBytes?: number; }, ): CachedTaskTimeline
- delete · method · L76-L78 — delete(key: string): void
- clear · method · L80-L82 — clear(): void
- size · method · L84-L86 — get size(): number
- totalBytes · method · L88-L92 — get totalBytes(): number
- evict · method · L94-L100 — private evict(): void
