# src/electron/agent/search/tavily-provider.ts

- TavilyProvider · class · L15-L119 — class TavilyProvider implements SearchProvider
- constructor · method · L22-L30 — constructor(config: SearchProviderConfig)
- search · method · L32-L81 — async search(query: SearchQuery): Promise<SearchResponse>
- testConnection · method · L83-L93 — async testConnection(): Promise<{ success: boolean; error?: string }>
- mapResults · method · L95-L103 — private mapResults(results: Any[]): SearchResult[]
- dateRangeToDays · method · L105-L118 — private dateRangeToDays(range: string): number
