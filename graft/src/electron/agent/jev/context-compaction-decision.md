# src/electron/agent/jev/context-compaction-decision.ts

- JevCompactionCandidate · interface · L17-L23 — interface JevCompactionCandidate
- JevContextCompactionInput · interface · L25-L35 — interface JevContextCompactionInput
- JevContextCompactionResult · interface · L37-L52 — interface JevContextCompactionResult
- clamp · function · L54-L56 — function clamp(value: unknown): number
- bounded · function · L58-L60 — function bounded(value: unknown, max: number): string
- messageText · function · L62-L69 — function messageText(message: LLMMessage): string
- isPinned · function · L71-L78 — function isPinned(message: LLMMessage): boolean
- containsToolBlock · function · L80-L87 — function containsToolBlock(message: LLMMessage): boolean
- buildCandidates · function · L89-L114 — function buildCandidates(messages: LLMMessage[]): JevCompactionCandidate[]
- buildJevContextCompactionRequest · function · L116-L162 — function buildJevContextCompactionRequest( input: Pick< JevContextCompactionInput, "model" | "messages" | "availableTokens" | "targetTokens" | "taskPrompt" >, ): { request: JevRequest; candidates: JevCompactionCandidate[] }
- readNoul · function · L164-L167 — function readNoul(answer: JevAnswer | undefined): number | null
- compactContextWithJev · function · L169-L279 — async function compactContextWithJev( input: JevContextCompactionInput, ): Promise<JevContextCompactionResult>
