# src/electron/memory/MemoryTierService.ts

- TierPromotionRule · interface · L25-L29 — interface TierPromotionRule
- PromotionPassResult · interface · L31-L34 — interface PromotionPassResult
- MemoryTierService · class · L41-L182 — class MemoryTierService
- recordReference · method · L51-L63 — static recordReference(db: Database.Database, memoryId: string): void
- recordReferenceBatch · method · L68-L81 — static recordReferenceBatch(db: Database.Database, memoryIds: string[]): void
- runPromotionPass · method · L87-L144 — static runPromotionPass(db: Database.Database): PromotionPassResult
- getByTier · method · L149-L181 — static getByTier( db: Database.Database, workspaceId: string, tier: MemoryTier, limit = 100, ): Array<{ id: string; content: string; referenceCount: number; createdAt: number }>
