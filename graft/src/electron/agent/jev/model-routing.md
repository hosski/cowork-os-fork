# src/electron/agent/jev/model-routing.ts

- JevModelRoute · type · L11-L11 — type JevModelRoute = LlmProfile | "abstain";
- JevModelRoutingInput · interface · L13-L30 — interface JevModelRoutingInput
- JevModelRoutingResult · interface · L32-L51 — interface JevModelRoutingResult
- clampProbability · function · L72-L74 — function clampProbability(value: unknown): number
- boundedText · function · L76-L78 — function boundedText(value: unknown, maxLength = MAX_TASK_TEXT): string
- hasStrongProfileSignal · function · L80-L85 — function hasStrongProfileSignal(input: JevModelRoutingInput): boolean
- readChoiceAnswer · function · L87-L102 — function readChoiceAnswer(answer: JevAnswer | undefined): { choice: string; confidence: number; probability: number; } | null
- buildJevModelRoutingRequest · function · L104-L138 — function buildJevModelRoutingRequest(input: JevModelRoutingInput): JevRequest
- routeModelWithJev · function · L140-L251 — async function routeModelWithJev( input: JevModelRoutingInput, ): Promise<JevModelRoutingResult>
