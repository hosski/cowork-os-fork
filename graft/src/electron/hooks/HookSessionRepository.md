# src/electron/hooks/HookSessionRepository.ts

- HookSessionRecord · interface · L3-L7 — interface HookSessionRecord
- HookSessionRepository · class · L12-L77 — class HookSessionRepository
- constructor · method · L13-L13 — constructor(private db: Database.Database)
- findBySessionKey · method · L15-L34 — findBySessionKey(sessionKey: string): HookSessionRecord | null
- create · method · L36-L47 — create(sessionKey: string, taskId: string): boolean
- acquireLock · method · L49-L63 — acquireLock(sessionKey: string, ttlMs = 120000): boolean
- releaseLock · method · L65-L72 — releaseLock(sessionKey: string): void
- cleanupExpiredLocks · method · L74-L76 — private cleanupExpiredLocks(nowMs = Date.now()): void
