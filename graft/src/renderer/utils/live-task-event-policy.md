# src/renderer/utils/live-task-event-policy.ts

- LiveTaskEventLane · type · L4-L4 — type LiveTaskEventLane = "immediate" | "batchable" | "coalescible" | "hiddenLiveNoise";
- asObject · function · L43-L46 — function asObject(value: unknown): Record<string, unknown>
- getPayloadText · function · L48-L61 — function getPayloadText(payload: Record<string, unknown>): string
- getLiveTaskEventCoalesceFingerprint · function · L63-L100 — function getLiveTaskEventCoalesceFingerprint(event: TaskEvent): string | null
- classifyLiveTaskEvent · function · L102-L109 — function classifyLiveTaskEvent(event: TaskEvent): LiveTaskEventLane
- isImmediateLiveTaskEvent · function · L111-L113 — function isImmediateLiveTaskEvent(event: TaskEvent): boolean
