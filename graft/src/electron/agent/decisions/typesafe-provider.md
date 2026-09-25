# src/electron/agent/decisions/typesafe-provider.ts

- TypeSafeDecisionProviderOptions · type · L7-L16 — type TypeSafeDecisionProviderOptions = Omit< HttpDecisionProviderOptions, "endpoint" | "providerName" | "defaultModel" > & { endpoint?: string; baseUrl?: string; baseURL?: string; model?: string; defaultModel?: string; };
- resolveOptions · function · L18-L33 — function resolveOptions( options: string | TypeSafeDecisionProviderOptions, ): HttpDecisionProviderOptions
- TypeSafeDecisionProvider · class · L35-L39 — class TypeSafeDecisionProvider extends HttpDecisionProvider
- constructor · method · L36-L38 — constructor(options: string | TypeSafeDecisionProviderOptions)
