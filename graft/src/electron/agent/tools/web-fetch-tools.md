# src/electron/agent/tools/web-fetch-tools.ts

- redactSecret · function · L11-L14 — function redactSecret(value: string, secret?: string): string
- WebFetchTools · class · L22-L791 — class WebFetchTools
- constructor · method · L23-L28 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, private protectedCredentialService?: ProtectedCredentialService, )
- setWorkspace · method · L33-L35 — setWorkspace(workspace: Workspace): void
- ensureDomainAllowed · method · L37-L39 — private ensureDomainAllowed(url: string): void
- ensureNetworkAllowed · method · L41-L55 — private ensureNetworkAllowed(url: string, toolName: string): void
- fetchWithPolicyCheckedRedirects · method · L57-L103 — private async fetchWithPolicyCheckedRedirects( url: string, init: RequestInit, toolName: string, followRedirects = true, ): Promise<Response>
- isRedirectResponse · method · L105-L107 — private isRedirectResponse(status: number): boolean
- buildRedirectInit · method · L109-L119 — private buildRedirectInit(init: RequestInit, status: number): RequestInit
- resolveProtectedCredential · method · L121-L159 — private resolveProtectedCredential( credentialId: unknown, destination: string, credentialHeader: unknown, credentialPrefix: unknown, ): { used: false } | { used: true; secret: string; headerName: string; prefix: string }
- applyProtectedCredentialHeader · method · L161-L173 — private applyProtectedCredentialHeader( headers: Record<string, string>, credential: | { used: false } | { used: true; secret: string; headerName: string; prefix: string }, ): void
- getToolDefinitions · method · L178-L286 — static getToolDefinitions(): LLMTool[]
- webFetch · method · L291-L433 — async webFetch(input: { url: string; selector?: string; includeLinks?: boolean; maxLength?: number; credentialId?: string; credentialHeader?: string; credentialPrefix?: string; }): Promise<{ success: boolean; url: string; title?: string; content: string; contentLength: number; error?: string; }>
- httpRequest · method · L438-L598 — async httpRequest(input: { url: string; method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS"; headers?: Record<string, string>; body?: string; timeout?: number; followRedirects?: boolean; maxLength?: number; credentialId?: string; credentialHeader?: string; credentialPrefix?: string; }): Promise<{ success: boolean; url: string; status: number; statusText: string; headers: Record<string, string>; body: string; contentLength: number; error?: string; }>
- normalizeHttpRequestUrl · method · L600-L623 — private normalizeHttpRequestUrl(rawUrl: string): string
- htmlToMarkdown · method · L628-L751 — private htmlToMarkdown( html: string, selector?: string, includeLinks: boolean = true, ): { content: string; title?: string }
- decodeHtmlEntities · method · L756-L790 — private decodeHtmlEntities(text: string): string
