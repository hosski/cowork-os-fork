# src/electron/control-plane/llm-configure.ts

- LlmValidationError · type · L16-L16 — type LlmValidationError = Error & { code: ErrorCode };
- SanitizedLlmConfigureParams · type · L18-L23 — type SanitizedLlmConfigureParams = { providerType: LLMProviderType; apiKey?: string; model?: string; settings?: Record<string, unknown>; };
- createInvalidParamsError · function · L25-L26 — createInvalidParamsError = (message: string): LlmValidationError
- sanitizeOptionalStringField · function · L28-L43 — function sanitizeOptionalStringField( value: unknown, fieldName: string, maxLength: number, ): string | undefined
- sanitizeLlmConfigureParams · function · L45-L69 — function sanitizeLlmConfigureParams(params: unknown): SanitizedLlmConfigureParams
- readOptionalSettingString · function · L71-L78 — function readOptionalSettingString( settings: Record<string, unknown> | undefined, key: string, maxLength: number, ): string | undefined
- readOptionalSettingBoolean · function · L80-L91 — function readOptionalSettingBoolean( settings: Record<string, unknown> | undefined, key: string, ): boolean | undefined
- readOptionalSettingUnitInterval · function · L93-L107 — function readOptionalSettingUnitInterval( settings: Record<string, unknown> | undefined, key: string, ): number | undefined
- applyProviderApiKeyAndBaseUrl · function · L109-L124 — function applyProviderApiKeyAndBaseUrl( updatedSettings: Any, providerKey: string, apiKey: string | undefined, baseUrl: string | undefined, ): Any
- getControlPlaneLlmStatus · function · L126-L133 — function getControlPlaneLlmStatus()
- configureLlmFromControlPlaneParams · function · L135-L281 — function configureLlmFromControlPlaneParams(params: unknown): { llm: ReturnType<typeof getControlPlaneLlmStatus>; }
