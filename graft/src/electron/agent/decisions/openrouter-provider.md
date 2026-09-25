# src/electron/agent/decisions/openrouter-provider.ts

- OpenRouterDecisionProviderOptions · type · L7-L16 — type OpenRouterDecisionProviderOptions = Omit< HttpDecisionProviderOptions, "endpoint" | "providerName" | "defaultModel" > & { endpoint?: string; baseUrl?: string; baseURL?: string; model?: string; defaultModel?: string; };
- resolveOptions · function · L18-L33 — function resolveOptions( options: string | OpenRouterDecisionProviderOptions, ): HttpDecisionProviderOptions
- OpenRouterDecisionProvider · class · L35-L39 — class OpenRouterDecisionProvider extends HttpDecisionProvider
- constructor · method · L36-L38 — constructor(options: string | OpenRouterDecisionProviderOptions)
