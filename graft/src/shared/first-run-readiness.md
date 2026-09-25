# src/shared/first-run-readiness.ts

- FirstRunModelPath · type · L10-L15 — type FirstRunModelPath = | "account_or_subscription" | "local_model" | "gateway_or_cloud" | "api_key" | "missing";
- FirstRunReadiness · interface · L17-L24 — interface FirstRunReadiness
- FirstRunReadinessOptions · interface · L26-L28 — interface FirstRunReadinessOptions
- hasText · function · L30-L32 — function hasText(value: unknown): boolean
- hasOpenAiOAuth · function · L34-L40 — function hasOpenAiOAuth(settings: LLMSettingsData): boolean
- hasOpenAiApiKey · function · L42-L44 — function hasOpenAiApiKey(settings: LLMSettingsData): boolean
- hasClaudeCredential · function · L46-L48 — function hasClaudeCredential(settings: LLMSettingsData): boolean
- hasAccountCredential · function · L50-L71 — function hasAccountCredential(settings: LLMSettingsData, providerType: LLMProviderType): boolean
- modelPathForProvider · function · L73-L83 — function modelPathForProvider( settings: LLMSettingsData, providerType: LLMProviderType, ): FirstRunModelPath
- hasConfiguredApiKeyProvider · function · L85-L151 — function hasConfiguredApiKeyProvider( settings: LLMSettingsData, providerType: LLMProviderType, ): boolean
- getUsableProvider · function · L153-L206 — function getUsableProvider(settings: LLMSettingsData): { providerType?: LLMProviderType; modelPath: FirstRunModelPath; }
- getFirstRunReadiness · function · L208-L225 — function getFirstRunReadiness( settings: LLMSettingsData | null | undefined, options: FirstRunReadinessOptions = {}, ): FirstRunReadiness
- getFirstRunReadinessActionLabel · function · L227-L230 — function getFirstRunReadinessActionLabel(readiness: FirstRunReadiness): string
