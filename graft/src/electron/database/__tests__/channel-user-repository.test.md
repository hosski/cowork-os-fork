# src/electron/database/__tests__/channel-user-repository.test.ts

- MockChannelUser · interface · L18-L27 — interface MockChannelUser
- MockChannelUserRepository · class · L30-L115 — class MockChannelUserRepository
- create · method · L31-L39 — create(user: Omit<MockChannelUser, "id" | "createdAt">): MockChannelUser
- findByChannelId · method · L41-L43 — findByChannelId(channelId: string): MockChannelUser[]
- delete · method · L45-L47 — delete(id: string): void
- deleteExpiredPending · method · L52-L71 — deleteExpiredPending(channelId: string): number
- deletePendingByChannel · method · L76-L91 — deletePendingByChannel(channelId: string): number
- deleteExpiredPendingAll · method · L96-L114 — deleteExpiredPendingAll(): number
