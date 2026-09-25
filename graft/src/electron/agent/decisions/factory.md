# src/electron/agent/decisions/factory.ts

- JevProviderKind · type · L12-L12 — type JevProviderKind = "typesafe" | "openrouter";
- StoredJevSettings · interface · L15-L31 — interface StoredJevSettings
- JevProviderFactoryOptions · interface · L33-L37 — interface JevProviderFactoryOptions
- normalizeProvider · function · L39-L55 — function normalizeProvider(value: StoredJevSettings["provider"]): JevProviderKind
- requiredKey · function · L57-L74 — function requiredKey(provider: JevProviderKind, settings: StoredJevSettings): string
- commonOptions · function · L76-L106 — function commonOptions( settings: StoredJevSettings, factoryOptions: JevProviderFactoryOptions, ): Pick< TypeSafeDecisionProviderOptions & OpenRouterDecisionProviderOptions, | "fetch" | "fetchImpl" | "sleep" | "endpoint" | "baseUrl" | "baseURL" | "model" | "defaultModel" | "timeoutMs" | "maxRetries" | "retryDelayMs" >
- createDecisionProvider · function · L108-L124 — function createDecisionProvider( settings: StoredJevSettings, factoryOptions: JevProviderFactoryOptions = {}, ): DecisionProvider
