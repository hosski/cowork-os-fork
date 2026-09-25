# src/electron/agents/TaskSubscriptionRepository.ts

- SubscriptionReason · type · L8-L8 — type SubscriptionReason = "assigned" | "mentioned" | "commented" | "manual";
- SubscriptionListQuery · interface · L13-L18 — interface SubscriptionListQuery
- TaskSubscriptionRepository · class · L24-L221 — class TaskSubscriptionRepository
- constructor · method · L25-L25 — constructor(private db: Database.Database)
- subscribe · method · L31-L62 — subscribe(taskId: string, agentRoleId: string, reason: SubscriptionReason): TaskSubscription
- autoSubscribe · method · L68-L70 — autoSubscribe(taskId: string, agentRoleId: string, reason: SubscriptionReason): TaskSubscription
- unsubscribe · method · L75-L81 — unsubscribe(taskId: string, agentRoleId: string): boolean
- findByTaskAndAgent · method · L86-L92 — findByTaskAndAgent(taskId: string, agentRoleId: string): TaskSubscription | undefined
- findById · method · L97-L101 — findById(id: string): TaskSubscription | undefined
- getSubscribers · method · L106-L112 — getSubscribers(taskId: string): TaskSubscription[]
- getSubscriberCount · method · L117-L123 — getSubscriberCount(taskId: string): number
- getSubscriptionsForAgent · method · L128-L134 — getSubscriptionsForAgent(agentRoleId: string): TaskSubscription[]
- list · method · L139-L169 — list(query: SubscriptionListQuery): TaskSubscription[]
- deleteByTask · method · L174-L178 — deleteByTask(taskId: string): number
- deleteByAgent · method · L183-L187 — deleteByAgent(agentRoleId: string): number
- isSubscribed · method · L192-L198 — isSubscribed(taskId: string, agentRoleId: string): boolean
- getSubscriberIds · method · L203-L207 — getSubscriberIds(taskId: string): string[]
- mapRowToSubscription · method · L212-L220 — private mapRowToSubscription(row: Any): TaskSubscription
