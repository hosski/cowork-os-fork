# src/electron/agents/bot-team.ts

- BotTeamDefinition · interface · L10-L21 — interface BotTeamDefinition
- collaborationPrompt · function · L94-L106 — function collaborationPrompt(role: BotTeamDefinition): string
- roleMatchesDefinition · function · L108-L116 — function roleMatchesDefinition(role: AgentRole, definition: BotTeamDefinition): boolean
- findRoleForDefinition · function · L118-L133 — function findRoleForDefinition( roleRepo: AgentRoleRepository, definition: BotTeamDefinition, ): AgentRole | undefined
- ensureDefaultBotRoles · function · L136-L188 — function ensureDefaultBotRoles(db: Database.Database): AgentRole[]
- ensureDefaultBotTeam · function · L194-L243 — function ensureDefaultBotTeam( db: Database.Database, workspaceId: string, ): { team: AgentTeam; roles: AgentRole[] } | undefined
- isDefaultBotTeamRole · function · L245-L247 — function isDefaultBotTeamRole(roleId: string, roster: AgentRole[]): boolean
