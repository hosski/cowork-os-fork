# src/electron/agent/jev/task-strategy-decision.ts

- JevTaskStrategy · type · L11-L11 — type JevTaskStrategy = "single_agent" | "team" | "multitask" | "verification" | "abstain";
- JevTaskStrategyInput · interface · L13-L29 — interface JevTaskStrategyInput
- JevTaskStrategyResult · interface · L31-L49 — interface JevTaskStrategyResult
- bounded · function · L79-L81 — function bounded(value: unknown, max = 4_000): string
- probability · function · L83-L85 — function probability(value: unknown): number
- readChoice · function · L87-L100 — function readChoice(answer: JevAnswer | undefined): { choice: string; confidence: number; probability: number; } | null
- hasExplicitExpansionSignal · function · L102-L107 — function hasExplicitExpansionSignal(input: JevTaskStrategyInput): boolean
- requiresExpansionGuard · function · L109-L113 — function requiresExpansionGuard(input: JevTaskStrategyInput, strategy: JevTaskStrategy): boolean
- buildJevTaskStrategyRequest · function · L115-L133 — function buildJevTaskStrategyRequest(input: JevTaskStrategyInput): JevRequest
- decideTaskStrategyWithJev · function · L135-L254 — async function decideTaskStrategyWithJev( input: JevTaskStrategyInput, ): Promise<JevTaskStrategyResult>
