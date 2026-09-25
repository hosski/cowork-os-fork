# src/electron/agents/subagent-display-names.ts

- SubagentNameInput · type · L4-L8 — type SubagentNameInput = { role?: Pick<AgentRole, "capabilities" | "displayName" | "name">; workerRole?: WorkerRoleKind; index: number; };
- deriveRoleLabel · function · L94-L105 — function deriveRoleLabel(input: SubagentNameInput): SubagentCallsign
- buildSubagentDisplayName · function · L107-L113 — function buildSubagentDisplayName(input: SubagentNameInput): string
