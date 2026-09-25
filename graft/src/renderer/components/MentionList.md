# src/renderer/components/MentionList.tsx

- MentionListProps · interface · L11-L17 — interface MentionListProps
- formatTimeAgo · function · L33-L42 — function formatTimeAgo(timestamp: number): string
- MentionList · function · L44-L470 — function MentionList({ workspaceId, taskId, toAgentRoleId, showFilters = true, onMentionClick, }: MentionListProps)
- loadAgents · function · L60-L71 — loadAgents = async ()
- handleAcknowledge · function · L134-L141 — handleAcknowledge = async (id: string, e: React.MouseEvent)
- handleComplete · function · L143-L150 — handleComplete = async (id: string, e: React.MouseEvent)
- handleDismiss · function · L152-L159 — handleDismiss = async (id: string, e: React.MouseEvent)
- getAgentName · function · L161-L164 — getAgentName = (agentId: string | undefined): string
- getAgentIcon · function · L166-L170 — getAgentIcon = (agentId: string | undefined): { icon: string; color: string }
