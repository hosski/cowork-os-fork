# src/renderer/components/MissionControlPanel.tsx

- AgentRole · type · L34-L34 — type AgentRole = AgentRoleData;
- HeartbeatStatusInfo · interface · L36-L52 — interface HeartbeatStatusInfo
- MissionControlPanelProps · interface · L60-L63 — interface MissionControlPanelProps
- MissionControlPanel · function · L65-L1337 — function MissionControlPanel({ onClose: _onClose, initialCompanyId = null, }: MissionControlPanelProps)
- handleCreateAgent · function · L493-L509 — handleCreateAgent = ()
- handleEditAgent · function · L511-L514 — handleEditAgent = (agent: AgentRole)
- handleSaveAgent · function · L516-L566 — handleSaveAgent = async (agent: AgentRole)
- formatRelativeTime · function · L568-L585 — formatRelativeTime = (timestamp?: number)
- format · function · L573-L573 — format = (value: number, unit: string, suffix: string)
- getAgentStatus · function · L587-L592 — getAgentStatus = (agentId: string): "working" | "idle" | "offline"
