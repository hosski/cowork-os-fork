# src/electron/agent/runtime/tool-result-envelope.ts

- BuildToolResultEnvelopeParams · interface · L8-L21 — interface BuildToolResultEnvelopeParams
- stringifyJsonResult · function · L23-L29 — function stringifyJsonResult(value: unknown): string
- stringifyPayloadWithReminder · function · L31-L46 — function stringifyPayloadWithReminder( value: unknown, reminder: string, stringField: "content" | "error", ): string
- stringifyModelPayload · function · L48-L67 — function stringifyModelPayload(params: BuildToolResultEnvelopeParams): string
- buildUserSummary · function · L69-L75 — function buildUserSummary(params: BuildToolResultEnvelopeParams): string
- buildDefaultEvidence · function · L77-L188 — function buildDefaultEvidence(params: BuildToolResultEnvelopeParams): ToolResultEvidence[]
- push · function · L83-L85 — push = (entry: ToolResultEvidence | null)
- stringValue · function · L87-L87 — stringValue = (value: unknown): string
- buildToolResultEnvelope · function · L190-L205 — function buildToolResultEnvelope(params: BuildToolResultEnvelopeParams): ToolResultEnvelope
