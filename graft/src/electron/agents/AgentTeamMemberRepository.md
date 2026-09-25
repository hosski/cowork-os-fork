# src/electron/agents/AgentTeamMemberRepository.ts

- AgentTeamMemberRepository · class · L12-L189 — class AgentTeamMemberRepository
- constructor · method · L13-L13 — constructor(private db: Database.Database)
- add · method · L19-L51 — add(request: CreateAgentTeamMemberRequest): AgentTeamMember
- findById · method · L56-L60 — findById(id: string): AgentTeamMember | undefined
- findByTeamAndRole · method · L65-L71 — findByTeamAndRole(teamId: string, agentRoleId: string): AgentTeamMember | undefined
- listByTeam · method · L76-L85 — listByTeam(teamId: string): AgentTeamMember[]
- update · method · L90-L118 — update(request: UpdateAgentTeamMemberRequest): AgentTeamMember | undefined
- remove · method · L123-L127 — remove(id: string): boolean
- removeByTeamAndRole · method · L132-L138 — removeByTeamAndRole(teamId: string, agentRoleId: string): boolean
- deleteByTeam · method · L143-L147 — deleteByTeam(teamId: string): number
- reorder · method · L153-L176 — reorder(teamId: string, orderedMemberIds: string[]): AgentTeamMember[]
- mapRowToMember · method · L178-L188 — private mapRowToMember(row: Any): AgentTeamMember
