# src/electron/telemetry/task-event-exporter.ts

- stableHexId · function · L19-L24 — function stableHexId(input: string, bytes: number): string
- toHrTime · function · L26-L29 — function toHrTime(timestampMs: number): string
- toAttributes · function · L31-L43 — function toAttributes( input: Record<string, unknown>, ): Array<{ key: string; value: Record<string, unknown> }>
- eventKind · function · L45-L60 — function eventKind( type: string, ): "tool" | "approval" | "sandbox" | "network" | "permission" | "other"
- enqueueTaskEventTelemetry · function · L62-L115 — function enqueueTaskEventTelemetry(event: TaskEvent): void
