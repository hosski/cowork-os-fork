# src/electron/agent/search/google-provider.ts

- GoogleProvider · class · L15-L139 — class GoogleProvider implements SearchProvider
- constructor · method · L23-L40 — constructor(config: SearchProviderConfig)
- search · method · L42-L95 — async search(query: SearchQuery): Promise<SearchResponse>
- testConnection · method · L97-L107 — async testConnection(): Promise<{ success: boolean; error?: string }>
- mapDateRange · method · L109-L122 — private mapDateRange(range: string): string
- mapResults · method · L124-L138 — private mapResults(items: Any[], searchType: SearchType): SearchResult[]
