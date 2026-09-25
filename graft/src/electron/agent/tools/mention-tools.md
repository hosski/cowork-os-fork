# src/electron/agent/tools/mention-tools.ts

- MentionTools · class · L12-L364 — class MentionTools
- constructor · method · L16-L27 — constructor( private workspaceId: string, private taskId: string, private daemon: AgentDaemon, private currentAgentRoleId?: string, )
- setContext · method · L32-L36 — setContext(workspaceId: string, taskId: string, agentRoleId?: string): void
- listAgentRoles · method · L41-L73 — async listAgentRoles(): Promise<{ agents: Array<{ id: string; name: string; displayName: string; description?: string; capabilities: string[]; }>; }>
- mentionAgent · method · L78-L156 — async mentionAgent(params: { agentRole: string; mentionType: MentionType; context: string; }): Promise<{ success: boolean; mentionId: string; toAgent: string; message: string; }>
- getPendingMentions · method · L161-L203 — async getPendingMentions(): Promise<{ mentions: Array<{ id: string; fromAgent: string | null; mentionType: MentionType; context?: string; createdAt: number; }>; }>
- acknowledgeMention · method · L208-L236 — async acknowledgeMention(mentionId: string): Promise<{ success: boolean; message: string; }>
- completeMention · method · L241-L269 — async completeMention(mentionId: string): Promise<{ success: boolean; message: string; }>
- getToolDefinitions · method · L274-L363 — static getToolDefinitions(): LLMTool[]
