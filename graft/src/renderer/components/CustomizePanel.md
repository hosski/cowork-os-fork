# src/renderer/components/CustomizePanel.tsx

- PluginPackData · interface · L8-L35 — interface PluginPackData
- DetailTab · type · L37-L37 — type DetailTab = "commands" | "skills" | "agents";
- CustomizePanelProps · interface · L39-L43 — interface CustomizePanelProps
- CustomizePanel · function · L45-L1536 — function CustomizePanel({ onNavigateToConnectors, onNavigateToSkills, onCreateTask, }: CustomizePanelProps)
- loadPacks · function · L66-L84 — async function loadPacks()
- matchesPack · function · L117-L128 — matchesPack = (p: PluginPackData)
- handleToggle · function · L136-L149 — handleToggle = async (packName: string, enabled: boolean)
- handleSkillToggle · function · L151-L169 — handleSkillToggle = async (packName: string, skillId: string, enabled: boolean)
- handleTryAsking · function · L171-L175 — handleTryAsking = (prompt: string)
- getSecurityBadge · function · L177-L188 — getSecurityBadge = (report?: CapabilitySecurityReport)
- handleRetryQuarantined · function · L190-L198 — handleRetryQuarantined = async (recordId: string)
- handleRemoveQuarantined · function · L200-L208 — handleRemoveQuarantined = async (recordId: string)
