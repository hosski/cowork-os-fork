# src/shared/subagent-presentation.ts

- SubagentCallsign · type · L29-L29 — type SubagentCallsign = (typeof SUBAGENT_CALLSIGNS)[number];
- hasCallsignSuffix · function · L47-L50 — function hasCallsignSuffix(value: string): boolean
- collapseWhitespace · function · L52-L54 — function collapseWhitespace(value: string): string
- buildSpawnInstructionsPreview · function · L57-L65 — function buildSpawnInstructionsPreview( prompt: unknown, limit: number = SPAWN_INSTRUCTIONS_PREVIEW_LIMIT, ): string
- formatSpawnedAgentLabel · function · L72-L84 — function formatSpawnedAgentLabel(input: { title?: unknown; workerRole?: unknown; /** Used when the event carries no title — "an agent" when creating, "the agent" after. */ fallback?: string; }): string
- stripAgentRoleSuffix · function · L87-L90 — function stripAgentRoleSuffix(label: string): string
- formatSpawnRecapLine · function · L96-L105 — function formatSpawnRecapLine(input: { label: string; instructions?: string; pending?: boolean; }): string
- AgentRosterState · type · L107-L107 — type AgentRosterState = "working" | "finished";
- formatAgentNameList · function · L110-L119 — function formatAgentNameList(names: string[], maxNamed: number = 2): string
- formatAgentRosterLine · function · L122-L126 — function formatAgentRosterLine(input: { names: string[]; state: AgentRosterState }): string
