# src/electron/agent/search/exa-provider.ts

- ExaResult · interface · L11-L19 — interface ExaResult
- ExaSearchResponse · interface · L21-L23 — interface ExaSearchResponse
- ExaProvider · class · L29-L139 — class ExaProvider implements SearchProvider
- constructor · method · L36-L44 — constructor(config: SearchProviderConfig)
- search · method · L46-L95 — async search(query: SearchQuery): Promise<SearchResponse>
- testConnection · method · L97-L107 — async testConnection(): Promise<{ success: boolean; error?: string }>
- mapResults · method · L109-L121 — private mapResults(results: ExaResult[]): SearchResult[]
- buildPublishedDateFilter · method · L123-L138 — private buildPublishedDateFilter(range: SearchQuery["dateRange"]): { startPublishedDate: string; }
