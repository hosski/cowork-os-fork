# src/electron/agent/llm/github-copilot-provider.ts

- CopilotTokenCache · type · L7-L11 — type CopilotTokenCache = { token: string; expiresAt: number; baseUrl: string; };
- isTokenValid · function · L13-L15 — function isTokenValid(cache: CopilotTokenCache, now = Date.now()): boolean
- parseCopilotTokenResponse · function · L17-L40 — function parseCopilotTokenResponse(payload: Any): { token: string; expiresAt: number }
- deriveCopilotBaseUrl · function · L42-L48 — function deriveCopilotBaseUrl(token: string): string
- GitHubCopilotProvider · class · L50-L117 — class GitHubCopilotProvider implements LLMProvider
- constructor · method · L56-L63 — constructor(config: LLMProviderConfig)
- createMessage · method · L65-L68 — async createMessage(request: LLMRequest): Promise<LLMResponse>
- testConnection · method · L70-L77 — async testConnection(): Promise<{ success: boolean; error?: string }>
- getClient · method · L79-L88 — private async getClient(model: string): Promise<OpenAICompatibleProvider>
- getCopilotAuth · method · L90-L116 — private async getCopilotAuth(): Promise<CopilotTokenCache>
