# src/electron/agent/tools/scraping-tools.ts

- buildScrapingBridgeEnvironment · function · L35-L43 — function buildScrapingBridgeEnvironment(): NodeJS.ProcessEnv
- ScrapingTools · class · L49-L633 — class ScrapingTools
- constructor · method · L50-L54 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L56-L58 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L63-L65 — static isEnabled(): boolean
- getToolDefinitions · method · L70-L257 — static getToolDefinitions(): LLMTool[]
- executeTool · method · L262-L269 — async executeTool(name: string, input: Any): Promise<Any>
- isScrapingTool · method · L274-L282 — static isScrapingTool(name: string): boolean
- getStatus · method · L286-L288 — private async getStatus(): Promise<Any>
- ensureNetworkAllowed · method · L290-L316 — private async ensureNetworkAllowed(url: string, toolName: string): Promise<string>
- getAllowedHost · method · L318-L320 — private getAllowedHost(url: string): string
- assertScopedFetcherAllowed · method · L322-L331 — private assertScopedFetcherAllowed(fetcher: string | undefined, toolName: string): void
- getApprovedProxyUrl · method · L333-L336 — private async getApprovedProxyUrl(settings: Any, toolName: string): Promise<string | undefined>
- scrapePage · method · L338-L384 — private async scrapePage(input: { url: string; fetcher?: string; selector?: string; wait_for?: string; extract_links?: boolean; extract_images?: boolean; extract_tables?: boolean; headless?: boolean; max_content_length?: number; }): Promise<Any>
- scrapeMultiple · method · L386-L431 — private async scrapeMultiple(input: { urls: string[]; fetcher?: string; selector?: string; max_content_length?: number; }): Promise<Any>
- extractStructured · method · L433-L471 — private async extractStructured(input: { url: string; extract_type?: string; selectors?: Record<string, string>; fetcher?: string; }): Promise<Any>
- scrapeSession · method · L473-L531 — private async scrapeSession(input: { steps: Array<{ action: string; url?: string; selector?: string; value?: string; wait_for?: string; }>; headless?: boolean; }): Promise<Any>
- callBridge · method · L536-L632 — private callBridge(action: string, params: Record<string, Any>): Promise<Any>
