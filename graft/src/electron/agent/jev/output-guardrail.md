# src/electron/agent/jev/output-guardrail.ts

- JevOutputGuardrailAction · type · L15-L21 — type JevOutputGuardrailAction = | "pass" | "revise" | "run_verification" | "ask_user" | "block_external_publication" | "abstain";
- JevOutputGuardrailInput · interface · L23-L39 — interface JevOutputGuardrailInput
- JevOutputGuardrailResult · interface · L41-L55 — interface JevOutputGuardrailResult
- clamp · function · L66-L68 — function clamp(value: unknown): number
- bounded · function · L70-L72 — function bounded(value: unknown, max: number): string
- buildCheckQuestion · function · L74-L84 — function buildCheckQuestion(check: string): JevNoulQuestion
- buildJevOutputGuardrailRequest · function · L101-L140 — function buildJevOutputGuardrailRequest( input: Pick< JevOutputGuardrailInput, "model" | "taskPrompt" | "output" | "contextLabel" | "requiredCriteria" | "evidence" >, ): JevRequest
- readNoul · function · L142-L145 — function readNoul(answer: JevAnswer | undefined): number | null
- readAction · function · L147-L160 — function readAction(answer: JevAnswer | undefined): { action: JevOutputGuardrailAction; confidence: number; probability: number; } | null
- reviewOutputWithJev · function · L162-L253 — async function reviewOutputWithJev( input: JevOutputGuardrailInput, ): Promise<JevOutputGuardrailResult>
