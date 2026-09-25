# src/electron/agents/__tests__/MentionRepository.test.ts

- MockMentionRepository · class · L26-L122 — class MockMentionRepository
- create · method · L27-L45 — create(request: CreateMentionRequest): AgentMention
- findById · method · L47-L50 — findById(id: string): AgentMention | undefined
- list · method · L52-L77 — list(query: MentionListQuery): AgentMention[]
- getPendingForAgent · method · L79-L81 — getPendingForAgent(agentRoleId: string): AgentMention[]
- acknowledge · method · L83-L92 — acknowledge(id: string): AgentMention | undefined
- complete · method · L94-L103 — complete(id: string): AgentMention | undefined
- dismiss · method · L105-L113 — dismiss(id: string): AgentMention | undefined
- delete · method · L115-L117 — delete(id: string): boolean
- countPending · method · L119-L121 — countPending(agentRoleId: string): number
