# src/electron/agents/AgentTeamItemRepository.ts

- AgentTeamItemRepository · class · L13-L203 — class AgentTeamItemRepository
- constructor · method · L14-L14 — constructor(private db: Database.Database)
- create · method · L19-L60 — create(request: CreateAgentTeamItemRequest): AgentTeamItem
- findById · method · L65-L69 — findById(id: string): AgentTeamItem | undefined
- listByRun · method · L74-L83 — listByRun(teamRunId: string): AgentTeamItem[]
- update · method · L88-L138 — update(request: UpdateAgentTeamItemRequest): AgentTeamItem | undefined
- delete · method · L143-L147 — delete(id: string): boolean
- deleteByRun · method · L152-L156 — deleteByRun(teamRunId: string): number
- setResultSummaryBySourceTaskId · method · L163-L171 — setResultSummaryBySourceTaskId(sourceTaskId: string, resultSummary: string | null): number
- listBySourceTaskId · method · L176-L185 — listBySourceTaskId(sourceTaskId: string): AgentTeamItem[]
- mapRowToItem · method · L187-L202 — private mapRowToItem(row: Any): AgentTeamItem
