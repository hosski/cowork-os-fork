# src/renderer/components/ChannelSpecializationSettings.tsx

- ChannelSpecializationSettingsProps · interface · L12-L14 — interface ChannelSpecializationSettingsProps
- ChatOption · type · L16-L16 — type ChatOption = { chatId: string; lastTimestamp: number };
- AgentRole · type · L17-L17 — type AgentRole = AgentRoleData;
- formatChatLabel · function · L19-L22 — function formatChatLabel(chat: ChatOption): string
- scopeKey · function · L24-L26 — function scopeKey(chatId?: string, threadId?: string): string
- ChannelSpecializationSettings · function · L28-L336 — function ChannelSpecializationSettings({ channelId }: ChannelSpecializationSettingsProps)
- resetForm · function · L84-L96 — resetForm = ()
- toggleRestriction · function · L98-L104 — toggleRestriction = (restriction: string)
- handleSave · function · L106-L146 — handleSave = async ()
- handleDelete · function · L148-L162 — handleDelete = async ()
