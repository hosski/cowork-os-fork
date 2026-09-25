# src/electron/agents/capabilityMatcher.ts

- LLMTeamSelection · interface · L39-L43 — interface LLMTeamSelection
- JevTeamSelection · interface · L50-L54 — interface JevTeamSelection
- AgentSelectionSource · type · L56-L56 — type AgentSelectionSource = "jev" | "chat_model" | "keyword" | "keyword_active";
- AgentSelectionResult · interface · L58-L63 — interface AgentSelectionResult
- rankJevCandidates · function · L65-L79 — function rankJevCandidates(prompt: string, activeRoles: AgentRole[]): AgentRole[]
- buildJevQuestions · function · L81-L115 — function buildJevQuestions(candidates: AgentRole[]): Record<string, JevQuestion>
- selectViaJev · function · L117-L215 — async function selectViaJev( prompt: string, activeRoles: AgentRole[], maxAgents?: number, telemetryContext?: JevDecisionTelemetryContext, ): Promise<JevTeamSelection | null>
- selectViaLLM · function · L225-L327 — async function selectViaLLM( prompt: string, activeRoles: AgentRole[], maxAgents?: number, ): Promise<LLMTeamSelection | null>
- selectViaKeywords · function · L333-L390 — function selectViaKeywords( prompt: string, activeRoles: AgentRole[], maxAgents?: number, ): { members: AgentRole[]; leader: AgentRole }
- selectAgentsForTask · function · L404-L488 — async function selectAgentsForTask( prompt: string, allRoles: AgentRole[], maxAgents?: number, telemetryContext?: JevDecisionTelemetryContext, ): Promise<AgentSelectionResult>
