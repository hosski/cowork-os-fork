# src/electron/extensions/pack-registry.ts

- PackRegistryEntry · interface · L21-L38 — interface PackRegistryEntry
- PackSearchResult · interface · L40-L46 — interface PackSearchResult
- PackRegistryConfig · interface · L48-L50 — interface PackRegistryConfig
- sanitizePackId · function · L55-L65 — function sanitizePackId(packId: string): string | null
- PackRegistry · class · L67-L338 — class PackRegistry
- constructor · method · L71-L73 — constructor(config?: PackRegistryConfig)
- fetchWithTimeout · method · L75-L84 — private async fetchWithTimeout(url: string): Promise<Response>
- isStaticCatalog · method · L89-L97 — private isStaticCatalog(): boolean
- fetchCatalog · method · L102-L130 — private async fetchCatalog(): Promise<PackRegistryEntry[]>
- search · method · L135-L165 — async search( query: string, options?: { page?: number; pageSize?: number; category?: string }, ): Promise<PackSearchResult>
- searchCatalog · method · L170-L210 — private async searchCatalog( query: string, page: number, pageSize: number, category?: string, ): Promise<PackSearchResult>
- getPackDetails · method · L215-L239 — async getPackDetails(packId: string): Promise<PackRegistryEntry | null>
- getCategories · method · L244-L259 — async getCategories(): Promise<string[]>
- checkUpdates · method · L265-L308 — async checkUpdates( installedPacks: { name: string; version: string }[], ): Promise<{ name: string; currentVersion: string; latestVersion: string }[]>
- isNewerVersion · method · L313-L323 — private isNewerVersion(remote: string, local: string): boolean
- clearCache · method · L328-L330 — clearCache(): void
- getRegistryUrl · method · L335-L337 — getRegistryUrl(): string
- getPackRegistry · function · L343-L348 — function getPackRegistry(): PackRegistry
