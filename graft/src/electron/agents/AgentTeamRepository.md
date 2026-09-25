# src/electron/agents/AgentTeamRepository.ts

- AgentTeamRepository · class · L8-L213 — class AgentTeamRepository
- constructor · method · L9-L9 — constructor(private db: Database.Database)
- create · method · L16-L59 — create(request: CreateAgentTeamRequest): AgentTeam
- findById · method · L64-L68 — findById(id: string): AgentTeam | undefined
- findByName · method · L73-L77 — findByName(workspaceId: string, name: string): AgentTeam | undefined
- listByWorkspace · method · L82-L90 — listByWorkspace(workspaceId: string, includeInactive = false): AgentTeam[]
- update · method · L95-L149 — update(request: UpdateAgentTeamRequest): AgentTeam | undefined
- delete · method · L158-L183 — delete(id: string): boolean
- listPersistent · method · L188-L194 — listPersistent(): AgentTeam[]
- mapRowToTeam · method · L196-L212 — private mapRowToTeam(row: Any): AgentTeam
