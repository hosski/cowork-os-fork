# src/electron/agent/jev/harness.ts

- JevToolReviewStatus · type · L54-L54 — type JevToolReviewStatus = "benign" | "concerning" | "uncertain" | "unavailable";
- JevToolReviewRequestInput · interface · L56-L64 — interface JevToolReviewRequestInput
- JevToolReviewInput · interface · L66-L71 — interface JevToolReviewInput extends JevToolReviewRequestInput
- JevToolReviewResult · interface · L73-L90 — interface JevToolReviewResult
- isRecord · function · L128-L130 — function isRecord(value: unknown): value is Record<string, unknown>
- redactText · function · L132-L141 — function redactText(value: string, maxLength = MAX_STRING_LENGTH): string
- redactValue · function · L143-L171 — function redactValue(value: unknown, depth: number, seen: WeakSet<object>): JevJsonValue
- stableStringify · function · L173-L182 — function stableStringify(value: unknown): string
- digest · function · L184-L186 — function digest(value: unknown): string
- boundedModel · function · L188-L191 — function boundedModel(model: string): string
- boundedTimeout · function · L193-L196 — function boundedTimeout(timeoutMs: number | undefined): number
- readNoulAnswer · function · L198-L204 — function readNoulAnswer(answers: Record<string, JevAnswer>, id: string): number
- shouldObserveJevToolCall · function · L206-L224 — function shouldObserveJevToolCall( toolName: string, approvalType?: ApprovalType | null, sideEffectLevel?: RuntimeToolSideEffectLevel, ): boolean
- buildJevToolReviewRequest · function · L226-L270 — function buildJevToolReviewRequest(input: JevToolReviewRequestInput): JevRequest
- reviewToolCallWithJev · function · L272-L369 — async function reviewToolCallWithJev( input: JevToolReviewInput, ): Promise<JevToolReviewResult>
