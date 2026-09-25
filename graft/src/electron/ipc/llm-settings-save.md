# src/electron/ipc/llm-settings-save.ts

- mergeProviderSettings · function · L3-L11 — function mergeProviderSettings<T extends object>(incoming?: T, existing?: T): T | undefined
- cleanString · function · L13-L17 — function cleanString(value: string | undefined): string | undefined
- cleanProviderSettings · function · L39-L50 — function cleanProviderSettings<T extends object>(settings?: T): T | undefined
- cleanCustomProviders · function · L52-L61 — function cleanCustomProviders( providers?: LLMSettingsData["customProviders"], ): LLMSettingsData["customProviders"] | undefined
- normalizeAzureSettings · function · L63-L86 — function normalizeAzureSettings( incoming?: LLMSettingsData["azure"], existing?: LLMSettingsData["azure"], ): LLMSettingsData["azure"] | undefined
- normalizeAzureAnthropicSettings · function · L88-L111 — function normalizeAzureAnthropicSettings( incoming?: LLMSettingsData["azureAnthropic"], existing?: LLMSettingsData["azureAnthropic"], ): LLMSettingsData["azureAnthropic"] | undefined
- normalizeJevSettings · function · L113-L142 — function normalizeJevSettings( incoming?: LLMSettingsData["jev"], existing?: LLMSettingsData["jev"], ): LLMSettingsData["jev"] | undefined
- mergeJevProviderSettings · function · L119-L134 — mergeJevProviderSettings = <T extends { apiKey?: string; clearApiKey?: boolean }>( next?: T, previous?: T, ): T | undefined
- buildSavedLLMSettings · function · L144-L254 — function buildSavedLLMSettings( validated: LLMSettingsData, existingSettings: LLMSettingsData, ): LLMSettingsData
