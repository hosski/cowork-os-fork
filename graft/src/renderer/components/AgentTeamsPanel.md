# src/renderer/components/AgentTeamsPanel.tsx

- AgentRole · type · L13-L13 — type AgentRole = AgentRoleData;
- AgentTeamsPanelProps · interface · L15-L20 — interface AgentTeamsPanelProps
- TeamRunEvent · type · L22-L26 — type TeamRunEvent = { type: string; timestamp?: number; [key: string]: Any; };
- formatTime · function · L28-L39 — function formatTime(ts?: number): string
- summarizeEvent · function · L41-L74 — function summarizeEvent(event: TeamRunEvent): string
- AgentTeamsPanel · function · L76-L1424 — function AgentTeamsPanel({ workspaceId, agents, tasks, onOpenTask }: AgentTeamsPanelProps)
- runStatusLabel · function · L697-L708 — runStatusLabel = (status?: AgentTeamRunStatus): string
- itemStatusColorClass · function · L710-L725 — itemStatusColorClass = (status: AgentTeamItemStatus): string
