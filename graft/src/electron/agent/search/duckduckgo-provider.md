# src/electron/agent/search/duckduckgo-provider.ts

- DuckDuckGoProvider · class · L16-L217 — class DuckDuckGoProvider implements SearchProvider
- constructor · method · L22-L24 — constructor(_config?: SearchProviderConfig)
- search · method · L26-L92 — async search(query: SearchQuery): Promise<SearchResponse>
- testConnection · method · L94-L107 — async testConnection(): Promise<{ success: boolean; error?: string }>
- parseResults · method · L116-L145 — private parseResults(html: string, maxResults: number): SearchResult[]
- extractUrl · method · L151-L163 — private extractUrl(rawUrl: string): string
- stripHtml · method · L165-L178 — private stripHtml(html: string): string
- extractHostname · method · L180-L186 — private extractHostname(url: string): string | undefined
- mapRegion · method · L188-L201 — private mapRegion(region: string): string
- mapDateRange · method · L203-L216 — private mapDateRange(range: string): string
