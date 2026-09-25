# src/electron/agents/MentionRepository.ts

- MentionRepository · class · L14-L243 — class MentionRepository
- constructor · method · L15-L15 — constructor(private db: Database.Database)
- create · method · L20-L54 — create(request: CreateMentionRequest): AgentMention
- findById · method · L59-L63 — findById(id: string): AgentMention | undefined
- list · method · L68-L118 — list(query: MentionListQuery): AgentMention[]
- getPendingForAgent · method · L123-L136 — getPendingForAgent(toAgentRoleId: string, workspaceId?: string): AgentMention[]
- getPendingCount · method · L141-L154 — getPendingCount(toAgentRoleId: string, workspaceId?: string): number
- acknowledge · method · L159-L170 — acknowledge(id: string): AgentMention | undefined
- complete · method · L175-L189 — complete(id: string): AgentMention | undefined
- dismiss · method · L194-L205 — dismiss(id: string): AgentMention | undefined
- delete · method · L210-L214 — delete(id: string): boolean
- deleteByTask · method · L219-L223 — deleteByTask(taskId: string): number
- mapRowToMention · method · L228-L242 — private mapRowToMention(row: Any): AgentMention
