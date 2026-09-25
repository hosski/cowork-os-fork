# src/electron/agent/search/serpapi-provider.ts

- SerpApiProvider · class · L15-L148 — class SerpApiProvider implements SearchProvider
- constructor · method · L22-L30 — constructor(config: SearchProviderConfig)
- search · method · L32-L87 — async search(query: SearchQuery): Promise<SearchResponse>
- testConnection · method · L89-L99 — async testConnection(): Promise<{ success: boolean; error?: string }>
- mapDateRange · method · L101-L114 — private mapDateRange(range: string): string
- mapResults · method · L116-L147 — private mapResults(data: Any, searchType: SearchType): SearchResult[]
