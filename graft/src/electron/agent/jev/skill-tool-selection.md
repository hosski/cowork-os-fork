# src/electron/agent/jev/skill-tool-selection.ts

- JevSkillToolCandidate · interface · L14-L22 — interface JevSkillToolCandidate
- JevSkillToolSelectionInput · interface · L24-L33 — interface JevSkillToolSelectionInput
- JevSkillToolSelectionResult · interface · L35-L48 — interface JevSkillToolSelectionResult
- clamp · function · L50-L52 — function clamp(value: unknown): number
- bounded · function · L54-L56 — function bounded(value: unknown, max: number): string
- candidateKey · function · L58-L60 — function candidateKey(index: number): string
- buildJevSkillToolSelectionRequest · function · L62-L117 — function buildJevSkillToolSelectionRequest( input: Pick<JevSkillToolSelectionInput, "model" | "query" | "candidates">, ): { request: JevRequest; candidates: JevSkillToolCandidate[] }
- readScore · function · L119-L122 — function readScore(answer: JevAnswer | undefined): { score: number; confidence: number } | null
- rerankEligibleSkillToolsWithJev · function · L124-L217 — async function rerankEligibleSkillToolsWithJev( input: JevSkillToolSelectionInput, ): Promise<JevSkillToolSelectionResult>
