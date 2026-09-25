# src/electron/agent/jev/loop-decision.ts

- JevLoopAction · type · L10-L10 — type JevLoopAction = "continue" | "change_strategy" | "stop" | "ask_user" | "abstain";
- JevLoopDecisionInput · interface · L12-L26 — interface JevLoopDecisionInput
- JevLoopDecisionResult · interface · L28-L41 — interface JevLoopDecisionResult
- clamp · function · L68-L70 — function clamp(value: unknown): number
- bounded · function · L72-L74 — function bounded(value: unknown, max = 1_500): string
- readChoice · function · L76-L89 — function readChoice(answer: JevAnswer | undefined): { choice: JevLoopAction; confidence: number; probability: number; } | null
- buildJevLoopDecisionRequest · function · L91-L115 — function buildJevLoopDecisionRequest(input: JevLoopDecisionInput): JevRequest
- decideLoopActionWithJev · function · L117-L189 — async function decideLoopActionWithJev( input: JevLoopDecisionInput, ): Promise<JevLoopDecisionResult>
