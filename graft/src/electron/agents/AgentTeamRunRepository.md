# src/electron/agents/AgentTeamRunRepository.ts

- AgentTeamRunRepository · class · L13-L200 — class AgentTeamRunRepository
- constructor · method · L14-L14 — constructor(private db: Database.Database)
- create · method · L19-L58 — create(request: CreateAgentTeamRunRequest): AgentTeamRun
- findById · method · L63-L67 — findById(id: string): AgentTeamRun | undefined
- findByRootTaskId · method · L72-L82 — findByRootTaskId(rootTaskId: string): AgentTeamRun | undefined
- listByTeam · method · L87-L100 — listByTeam(teamId: string, limit?: number): AgentTeamRun[]
- update · method · L108-L168 — update( id: string, updates: { status?: AgentTeamRunStatus; completedAt?: number | null; error?: string | null; summary?: string | null; phase?: AgentTeamRunPhase; }, ): AgentTeamRun | undefined
- delete · method · L173-L183 — delete(id: string): boolean
- mapRowToRun · method · L185-L199 — private mapRowToRun(row: Any): AgentTeamRun
