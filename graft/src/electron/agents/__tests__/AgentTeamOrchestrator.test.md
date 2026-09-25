# src/electron/agents/__tests__/AgentTeamOrchestrator.test.ts

- makeRepos · function · L23-L115 — function makeRepos(seed: { team: AgentTeam; run: AgentTeamRun; items: AgentTeamItem[] }): { teamRepo: { findById: (id: string) => AgentTeam | undefined }; runRepo: { findById: (id: string) => AgentTeamRun | undefined; update: (id: string, updates: Any) => AgentTeamRun | undefined; }; itemRepo: { listByRun: (runId: string) => AgentTeamItem[]; listBySourceTaskId: (taskId: string) => AgentTeamItem[]; update: (req: UpdateAgentTeamItemRequest) => AgentTeamItem | undefined; create: (req: Any) => AgentTeamItem; }; }
- mockProfileRouting · function · L121-L136 — function mockProfileRouting( profileRoutingEnabled: boolean, providerType: LLMSettings["providerType"] = "openai", ): void
