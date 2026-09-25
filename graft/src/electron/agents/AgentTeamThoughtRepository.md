# src/electron/agents/AgentTeamThoughtRepository.ts

- AgentTeamThoughtRepository · class · L9-L155 — class AgentTeamThoughtRepository
- constructor · method · L10-L10 — constructor(private db: Database.Database)
- create · method · L15-L59 — create(request: CreateAgentThoughtRequest): AgentThought
- findById · method · L64-L68 — findById(id: string): AgentThought | undefined
- listByRun · method · L73-L82 — listByRun(teamRunId: string): AgentThought[]
- listByAgent · method · L87-L96 — listByAgent(teamRunId: string, agentRoleId: string): AgentThought[]
- updateContent · method · L101-L113 — updateContent(id: string, content: string, isStreaming: boolean): AgentThought | undefined
- deleteByRun · method · L118-L122 — deleteByRun(teamRunId: string): number
- listBySourceTaskId · method · L127-L136 — listBySourceTaskId(sourceTaskId: string): AgentThought[]
- mapRowToThought · method · L138-L154 — private mapRowToThought(row: Any): AgentThought
