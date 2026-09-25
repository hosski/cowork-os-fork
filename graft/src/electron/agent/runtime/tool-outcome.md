# src/electron/agent/runtime/tool-outcome.ts

- CanonicalToolOutcomeStatus · type · L3-L3 — type CanonicalToolOutcomeStatus = "success" | "error" | "blocked" | "cancelled" | "unknown";
- CanonicalToolOutcome · interface · L5-L13 — interface CanonicalToolOutcome
- asRecord · function · L44-L48 — function asRecord(value: unknown): Record<string, unknown> | null
- messageFrom · function · L50-L57 — function messageFrom(value: unknown): string | undefined
- statusFrom · function · L59-L69 — function statusFrom(value: unknown): CanonicalToolOutcomeStatus | null
- normalizeToolOutcome · function · L77-L258 — function normalizeToolOutcome(value: unknown, thrownError?: unknown): CanonicalToolOutcome
- toToolEnvelopeStatus · function · L260-L273 — function toToolEnvelopeStatus(status: CanonicalToolOutcomeStatus): ToolResultEnvelopeStatus
