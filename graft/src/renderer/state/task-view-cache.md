# src/renderer/state/task-view-cache.ts

- TaskSurfaceKey · interface · L6-L12 — interface TaskSurfaceKey
- TaskViewSnapshot · interface · L14-L32 — interface TaskViewSnapshot
- serializeTaskSurfaceKey · function · L34-L42 — function serializeTaskSurfaceKey(key: TaskSurfaceKey): string
- normalizeTaskSurfaceKey · function · L44-L52 — function normalizeTaskSurfaceKey(key: TaskSurfaceKey): TaskSurfaceKey
- createEmptyTaskViewSnapshot · function · L54-L67 — function createEmptyTaskViewSnapshot(now = Date.now()): TaskViewSnapshot
- TaskViewCacheOptions · interface · L69-L72 — interface TaskViewCacheOptions
- CacheEntry · type · L74-L74 — type CacheEntry = { snapshot: TaskViewSnapshot; bytes: number };
- TaskViewCache · class · L76-L150 — class TaskViewCache
- constructor · method · L82-L85 — constructor(options: TaskViewCacheOptions = {})
- get · method · L87-L95 — get(key: TaskSurfaceKey | string): TaskViewSnapshot | null
- set · method · L97-L115 — set(key: TaskSurfaceKey, snapshot: TaskViewSnapshot): void
- delete · method · L117-L123 — delete(key: TaskSurfaceKey | string): void
- clear · method · L125-L128 — clear(): void
- has · method · L130-L133 — has(key: TaskSurfaceKey | string): boolean
- size · method · L135-L137 — get size(): number
- bytes · method · L139-L141 — get bytes(): number
- evict · method · L143-L149 — private evict(): void
- estimateTaskViewSnapshotBytes · function · L152-L167 — function estimateTaskViewSnapshotBytes(snapshot: TaskViewSnapshot): number
