# src/renderer/components/DigitalTwinsPanel.tsx

- AgentRole · type · L9-L9 — type AgentRole = AgentRoleData;
- DigitalTwinsPanelProps · interface · L18-L21 — interface DigitalTwinsPanelProps
- DigitalTwinsPanel · function · L23-L1040 — function DigitalTwinsPanel({ initialCompanyId = null, onOpenAgents, }: DigitalTwinsPanelProps)
- loadCompanyContext · function · L58-L74 — async function loadCompanyContext()
- handleCreateBlank · function · L83-L100 — handleCreateBlank = ()
- handleEdit · function · L102-L105 — handleEdit = (role: AgentRole)
- handleSave · function · L107-L162 — handleSave = async (role: AgentRole)
- handleDelete · function · L164-L176 — handleDelete = async (id: string)
- handleToggleActive · function · L178-L190 — handleToggleActive = async (role: AgentRole)
- handleActivated · function · L192-L195 — handleActivated = (agentRole: AgentRoleData)
- sortByActivity · function · L211-L212 — sortByActivity = (roles: AgentRole[])
- renderTwinCard · function · L245-L331 — renderTwinCard = (role: AgentRole, isInactive: boolean)
