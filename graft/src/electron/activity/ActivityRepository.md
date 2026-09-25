# src/electron/activity/ActivityRepository.ts

- safeJsonParse · function · L14-L22 — function safeJsonParse<T>(jsonString: string | null, defaultValue: T, context?: string): T
- ActivityRepository · class · L27-L238 — class ActivityRepository
- constructor · method · L28-L28 — constructor(private db: Database.Database)
- create · method · L33-L74 — create(request: CreateActivityRequest): Activity
- findById · method · L79-L83 — findById(id: string): Activity | undefined
- list · method · L88-L139 — list(query: ActivityListQuery): Activity[]
- getUnreadCount · method · L144-L150 — getUnreadCount(workspaceId: string): number
- markRead · method · L155-L159 — markRead(id: string): boolean
- markAllRead · method · L164-L170 — markAllRead(workspaceId: string): number
- togglePin · method · L175-L184 — togglePin(id: string): Activity | undefined
- delete · method · L189-L193 — delete(id: string): boolean
- deleteOld · method · L198-L213 — deleteOld(workspaceId: string, olderThanMs?: number): number
- mapRowToActivity · method · L218-L237 — private mapRowToActivity(row: Any): Activity
