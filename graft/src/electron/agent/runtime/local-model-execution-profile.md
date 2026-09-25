# src/electron/agent/runtime/local-model-execution-profile.ts

- LocalModelExecutionProfile · interface · L8-L21 — interface LocalModelExecutionProfile
- LocalModelExecutionProfileTrace · interface · L23-L30 — interface LocalModelExecutionProfileTrace
- LocalModelExecutionProfileResolution · interface · L32-L35 — interface LocalModelExecutionProfileResolution
- isLocalInferenceProvider · function · L54-L71 — function isLocalInferenceProvider(providerType: string, baseUrl?: string): boolean
- resolveRequestedProfile · function · L73-L77 — function resolveRequestedProfile(requestedProfile?: string): string | undefined
- resolveLocalModelExecutionProfile · function · L79-L105 — function resolveLocalModelExecutionProfile(input: { providerType: string; modelId: string; baseUrl?: string; requestedProfile?: string; now?: number; }): LocalModelExecutionProfileResolution
- LocalRequestTokenBudgetInput · interface · L107-L116 — interface LocalRequestTokenBudgetInput
- LocalRequestTokenBudget · interface · L118-L131 — interface LocalRequestTokenBudget
- positiveInteger · function · L133-L136 — function positiveInteger(value: number | undefined, fallback: number): number
- estimateLocalRequestTokenBudget · function · L138-L174 — function estimateLocalRequestTokenBudget( input: LocalRequestTokenBudgetInput, profile: LocalModelExecutionProfile = LOCAL_BALANCED_PROFILE, ): LocalRequestTokenBudget
- LocalToolSelectionResult · interface · L176-L180 — interface LocalToolSelectionResult
- selectLocalToolSet · function · L187-L224 — function selectLocalToolSet(input: { visibleTools: LLMTool[]; phase?: string; taskDomain?: string; requiredToolNames?: string[]; maxTools?: number; }): LocalToolSelectionResult
