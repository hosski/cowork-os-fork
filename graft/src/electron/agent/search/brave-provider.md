# src/electron/agent/search/brave-provider.ts

- BraveProvider · class · L15-L150 — class BraveProvider implements SearchProvider
- constructor · method · L22-L30 — constructor(config: SearchProviderConfig)
- search · method · L32-L79 — async search(query: SearchQuery): Promise<SearchResponse>
- testConnection · method · L81-L91 — async testConnection(): Promise<{ success: boolean; error?: string }>
- getEndpoint · method · L93-L102 — private getEndpoint(searchType: SearchType): string
- mapDateRange · method · L104-L117 — private mapDateRange(range: string): string
- mapResults · method · L119-L149 — private mapResults(data: Any, searchType: SearchType): SearchResult[]
