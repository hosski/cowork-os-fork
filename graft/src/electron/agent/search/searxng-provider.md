# src/electron/agent/search/searxng-provider.ts

- SearXngResult · interface · L19-L28 — interface SearXngResult
- SearXngResponse · interface · L30-L33 — interface SearXngResponse
- SearXngHttpResponse · interface · L35-L39 — interface SearXngHttpResponse
- isPrivateHost · function · L41-L89 — function isPrivateHost(hostname: string): boolean
- domainMatches · function · L91-L101 — function domainMatches(hostname: string, pattern: string): boolean
- languageFromRegion · function · L103-L119 — function languageFromRegion(region?: string): string | undefined
- safeHttpUrl · function · L121-L129 — function safeHttpUrl(value?: string): string | undefined
- SearXngProvider · class · L135-L394 — class SearXngProvider implements SearchProvider
- constructor · method · L142-L182 — constructor(config: SearchProviderConfig)
- search · method · L184-L240 — async search(query: SearchQuery): Promise<SearchResponse>
- testConnection · method · L242-L252 — async testConnection(): Promise<{ success: boolean; error?: string }>
- assertWorkspaceEndpointAllowed · method · L254-L268 — private assertWorkspaceEndpointAllowed(query: SearchQuery): void
- mapResult · method · L270-L288 — private mapResult(result: SearXngResult): SearchResult | null
- resolvePinnedAddress · method · L290-L327 — private async resolvePinnedAddress(): Promise<{ address: string; family: 4 | 6 }>
- request · method · L329-L393 — private async request(body: string): Promise<SearXngHttpResponse>
- fail · function · L335-L339 — fail = (error: Error)
