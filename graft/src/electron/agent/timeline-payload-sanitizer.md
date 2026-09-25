# src/electron/agent/timeline-payload-sanitizer.ts

- isRecord · function · L51-L53 — function isRecord(value: unknown): value is Record<string, unknown>
- isBinaryLike · function · L55-L59 — function isBinaryLike(value: unknown): value is { byteLength?: number; length?: number }
- getBinaryByteLength · function · L61-L66 — function getBinaryByteLength(value: { byteLength?: number; length?: number }): number | undefined
- shouldOmitImageString · function · L68-L73 — function shouldOmitImageString(key: string | undefined, value: string): boolean
- truncateLargeString · function · L75-L80 — function truncateLargeString(value: string): string
- safeStringify · function · L82-L91 — function safeStringify(value: unknown): string
- serializedBytes · function · L93-L95 — function serializedBytes(value: unknown): number
- summarizeScalar · function · L97-L105 — function summarizeScalar(value: unknown): unknown
- buildRetainedSummary · function · L107-L150 — function buildRetainedSummary( value: unknown, depth = 0, seen = new WeakSet<object>(), ): Record<string, unknown>
- enforcePayloadByteLimit · function · L152-L174 — function enforcePayloadByteLimit(value: unknown, maxBytes: number): unknown
- sanitizeValue · function · L176-L280 — function sanitizeValue( value: unknown, key: string | undefined, depth: number, seen: WeakSet<object>, ): unknown
- sanitizeTimelinePayloadForStorage · function · L282-L287 — function sanitizeTimelinePayloadForStorage(payload: unknown): unknown
- sanitizeTimelineEventForStorage · function · L289-L294 — function sanitizeTimelineEventForStorage<T extends TaskEvent>(event: T): T
