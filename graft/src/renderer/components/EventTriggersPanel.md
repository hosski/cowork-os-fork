# src/renderer/components/EventTriggersPanel.tsx

- TriggerCondition · interface · L4-L8 — interface TriggerCondition
- TriggerAction · interface · L10-L13 — interface TriggerAction
- EventTrigger · interface · L15-L30 — interface EventTrigger
- TriggerHistoryEntry · interface · L32-L39 — interface TriggerHistoryEntry
- MCPServerOption · interface · L41-L45 — interface MCPServerOption
- ExampleTrigger · type · L124-L132 — type ExampleTrigger = { name: string; source: string; conditions: TriggerCondition[]; actionTitle?: string; actionPrompt: string; actionType?: "create_task" | "wake_agent"; agentRoleId?: string; };
- EventTriggersPanel · function · L218-L924 — EventTriggersPanel: React.FC<{ workspaceId?: string }> = ({ workspaceId })
- loadMcpServers · function · L250-L265 — loadMcpServers = async ()
- addCondition · function · L289-L292 — addCondition = ()
- removeCondition · function · L294-L296 — removeCondition = (idx: number)
- updateCondition · function · L298-L300 — updateCondition = (idx: number, updates: Partial<TriggerCondition>)
- handleAdd · function · L302-L338 — handleAdd = async ()
- toggleTrigger · function · L340-L347 — toggleTrigger = async (id: string, enabled: boolean)
- deleteTrigger · function · L349-L356 — deleteTrigger = async (id: string)
- applyExample · function · L358-L367 — applyExample = (ex: (typeof EXAMPLE_TRIGGERS)[0])
- loadHistory · function · L369-L381 — loadHistory = async (triggerId: string)
