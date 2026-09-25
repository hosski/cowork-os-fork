# src/electron/agent/tools/search-tools.ts

- SearchTools · class · L17-L335 — class SearchTools
- constructor · method · L23-L27 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L32-L34 — setWorkspace(workspace: Workspace): void
- setDomainPolicy · method · L36-L45 — setDomainPolicy(policy: { allowedDomains?: string[]; blockedDomains?: string[] } | null): void
- normalizeDomainPatterns · method · L47-L57 — private normalizeDomainPatterns(values: unknown): string[]
- matchesDomainPattern · method · L59-L68 — private matchesDomainPattern(hostname: string, pattern: string): boolean
- extractHostname · method · L70-L77 — private extractHostname(url: string): string | null
- getEffectiveDomainPolicy · method · L79-L86 — private getEffectiveDomainPolicy(): { allowedDomains: string[]; blockedDomains: string[] }
- getAccessProfileDomainRules · method · L88-L92 — private getAccessProfileDomainRules()
- applyDomainPolicy · method · L94-L192 — private applyDomainPolicy(response: SearchResponse): { response: SearchResponse; originalCount: number; filteredCount: number; filteredOutCount: number; }
- webSearch · method · L197-L334 — async webSearch(input: { query: string; searchType?: SearchType; maxResults?: number; provider?: SearchProviderType; dateRange?: "day" | "week" | "month" | "year"; region?: string; language?: string; safeSearch?: boolean; maxUses?: number; }): Promise<SearchResponse>
