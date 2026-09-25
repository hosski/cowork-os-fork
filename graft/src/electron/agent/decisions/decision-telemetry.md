# src/electron/agent/decisions/decision-telemetry.ts

- DecisionTelemetryStatus · type · L4-L9 — type DecisionTelemetryStatus = | "success" | "unavailable" | "cancelled" | "budget_exhausted" | "circuit_open";
- DecisionTelemetryEvent · interface · L11-L24 — interface DecisionTelemetryEvent
- DecisionTelemetrySnapshot · interface · L26-L32 — interface DecisionTelemetrySnapshot
- stableStringify · function · L34-L46 — function stableStringify(value: unknown): string
- digestDecisionState · function · L49-L51 — function digestDecisionState(value: unknown): string
- DecisionTelemetry · class · L53-L101 — class DecisionTelemetry
- constructor · method · L56-L56 — constructor(private readonly maxEvents = 500)
- record · method · L58-L71 — record(event: DecisionTelemetryEvent): void
- snapshot · method · L73-L96 — snapshot(): DecisionTelemetrySnapshot
- clear · method · L98-L100 — clear(): void
