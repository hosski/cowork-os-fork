# src/electron/agent/jev/jev-provider-factory.ts

- JevProviderResolution · interface · L18-L22 — interface JevProviderResolution
- JevProviderFactoryOptions · interface · L24-L28 — interface JevProviderFactoryOptions
- isConfiguredJevDecisionLayerEnabled · function · L30-L37 — function isConfiguredJevDecisionLayerEnabled(settings: JevSettingsData): boolean
- isJevActiveHarnessEnabled · function · L45-L51 — function isJevActiveHarnessEnabled(settings: JevSettingsData): boolean
- resolveEndpoint · function · L53-L75 — function resolveEndpoint( baseUrl: string | undefined, path: string, defaultEndpoint: string, ): string
- resolveProviderSettings · function · L77-L119 — function resolveProviderSettings( settings: JevSettingsData, mainOpenRouterApiKey?: string, ): { providerType: "typesafe" | "openrouter"; apiKey?: string; endpoint: string; model: string; usesMainOpenRouterKey: boolean; }
- validateJevEndpoint · function · L121-L159 — function validateJevEndpoint( endpoint: string, providerType: "typesafe" | "openrouter", usesMainOpenRouterKey: boolean, ): void
- createJevProvider · function · L161-L191 — function createJevProvider( settings: JevSettingsData, mainOpenRouterApiKey?: string, factoryOptions: JevProviderFactoryOptions = {}, ): JevProviderResolution
- createConfiguredJevProvider · function · L193-L198 — function createConfiguredJevProvider( settings: Pick<LLMSettingsData, "jev" | "openrouter">, ): JevProviderResolution | null
- testJevProvider · function · L200-L221 — async function testJevProvider( settings: JevSettingsData, mainOpenRouterApiKey?: string, factoryOptions: JevProviderFactoryOptions = {}, ): Promise<{ success: boolean; provider: "typesafe" | "openrouter"; model?: string; latencyMs: number; error?: string; }>
