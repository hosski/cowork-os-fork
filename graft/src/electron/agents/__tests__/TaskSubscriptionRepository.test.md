# src/electron/agents/__tests__/TaskSubscriptionRepository.test.ts

- MockTaskSubscriptionRepository · class · L21-L177 — class MockTaskSubscriptionRepository
- subscribe · method · L22-L49 — subscribe(taskId: string, agentRoleId: string, reason: SubscriptionReason): TaskSubscription
- autoSubscribe · method · L51-L53 — autoSubscribe(taskId: string, agentRoleId: string, reason: SubscriptionReason): TaskSubscription
- unsubscribe · method · L55-L63 — unsubscribe(taskId: string, agentRoleId: string): boolean
- findByTaskAndAgent · method · L65-L72 — findByTaskAndAgent(taskId: string, agentRoleId: string): TaskSubscription | undefined
- findById · method · L74-L77 — findById(id: string): TaskSubscription | undefined
- getSubscribers · method · L79-L87 — getSubscribers(taskId: string): TaskSubscription[]
- getSubscriberCount · method · L89-L95 — getSubscriberCount(taskId: string): number
- getSubscriptionsForAgent · method · L97-L105 — getSubscriptionsForAgent(agentRoleId: string): TaskSubscription[]
- list · method · L107-L130 — list(query: { taskId?: string; agentRoleId?: string; limit?: number; offset?: number; }): TaskSubscription[]
- deleteByTask · method · L132-L141 — deleteByTask(taskId: string): number
- deleteByAgent · method · L143-L152 — deleteByAgent(agentRoleId: string): number
- isSubscribed · method · L154-L156 — isSubscribed(taskId: string, agentRoleId: string): boolean
- getSubscriberIds · method · L158-L166 — getSubscriberIds(taskId: string): string[]
- mapRowToSubscription · method · L168-L176 — private mapRowToSubscription(row: Any): TaskSubscription
