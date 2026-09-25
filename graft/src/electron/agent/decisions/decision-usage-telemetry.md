# src/electron/agent/decisions/decision-usage-telemetry.ts

- JevDecisionTelemetryContext · interface · L5-L9 — interface JevDecisionTelemetryContext
- JevDecisionTelemetryInput · interface · L11-L24 — interface JevDecisionTelemetryInput extends JevDecisionTelemetryContext
- getDb · function · L26-L32 — function getDb()
- boundedText · function · L34-L37 — function boundedText(value: unknown, maxLength: number): string | null
- safeErrorMessage · function · L39-L46 — function safeErrorMessage(value: unknown): string | null
- safeInteger · function · L48-L50 — function safeInteger(value: unknown): number
- safeCost · function · L52-L54 — function safeCost(value: unknown): number
- recordJevCall · function · L62-L127 — function recordJevCall(input: JevDecisionTelemetryInput): void
