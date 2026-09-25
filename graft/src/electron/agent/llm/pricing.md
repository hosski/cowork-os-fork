# src/electron/agent/llm/pricing.ts

- ModelPricing · interface · L11-L18 — interface ModelPricing
- CacheTokenAccounting · type · L20-L20 — type CacheTokenAccounting = "inclusive" | "disjoint";
- CacheCostOptions · interface · L22-L27 — interface CacheCostOptions
- getCacheTokenAccounting · function · L29-L59 — function getCacheTokenAccounting( providerType?: string | null, modelId?: string | null, ): CacheTokenAccounting
- calculateCost · function · L247-L324 — function calculateCost( modelId: string, inputTokens: number, outputTokens: number, cachedTokens = 0, cacheWriteTokens = 0, cacheTokenAccounting?: CacheTokenAccounting, cacheCostOptions?: CacheCostOptions, ): number
- resolveCacheWriteRate · function · L326-L369 — function resolveCacheWriteRate( pricing: ModelPricing, normalizedModelId: string, options?: CacheCostOptions, ): number
- getModelPricing · function · L376-L391 — function getModelPricing(modelId: string): ModelPricing | null
- formatCost · function · L396-L401 — function formatCost(cost: number): string
- calculateImageCost · function · L409-L417 — function calculateImageCost(modelId: string, numberOfImages: number): number
- getImagePricing · function · L424-L428 — function getImagePricing(modelId: string): number | null
