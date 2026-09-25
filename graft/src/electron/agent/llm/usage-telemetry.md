# src/electron/agent/llm/usage-telemetry.ts

- LlmCallTelemetryInput · type · L8-L17 — type LlmCallTelemetryInput = { workspaceId?: string | null; taskId?: string | null; sourceKind: string; sourceId?: string | null; providerType?: string | null; modelKey?: string | null; modelId?: string | null; timestamp?: number; };
- redactErrorMessage · function · L19-L32 — function redactErrorMessage(value: string): string
- getDb · function · L34-L40 — function getDb()
- recordLlmCallSuccess · function · L42-L114 — function recordLlmCallSuccess( input: LlmCallTelemetryInput, usage?: LLMResponse["usage"], ): void
- recordLlmCallError · function · L116-L177 — function recordLlmCallError(input: LlmCallTelemetryInput, error: unknown): void
