# src/renderer/components/MainContent/ModelDropdown.tsx

- ModelPickerView · type · L17-L17 — type ModelPickerView = "quick" | "advanced";
- ReasoningEffortOption · type · L18-L18 — type ReasoningEffortOption = ReturnType<typeof getLlmReasoningEffortOptions>[number];
- QuickModelPickerProps · interface · L30-L40 — interface QuickModelPickerProps
- QuickModelPicker · function · L42-L143 — function QuickModelPicker({ providerType, providerLabel, accessLabel, selectedModelLabel, selectedModelInfo, selectedReasoningEffort, reasoningEffortOptions, onReasoningEffortChange, onOpenAdvanced, }: QuickModelPickerProps)
- ModelDropdownProps · interface · L146-L160 — interface ModelDropdownProps
- ModelDropdown · function · L162-L655 — function ModelDropdown({ models, selectedModel, selectedProvider, selectedReasoningEffort, providers = [], variant = "button", align = "left", onModelChange, onOpenSettings, }: ModelDropdownProps)
- handleClickOutside · function · L197-L201 — handleClickOutside = (e: MouseEvent)
- selectModel · function · L284-L305 — selectModel = ( providerType: LLMProviderType, modelKey: string, modelInfo?: LLMModelInfo, )
- handleKeyDown · function · L307-L329 — handleKeyDown = (e: React.KeyboardEvent)
- handleOpenProviders · function · L331-L334 — handleOpenProviders = ()
- handleOpenAdvanced · function · L335-L339 — handleOpenAdvanced = ()
- handleReturnToQuick · function · L340-L344 — handleReturnToQuick = ()
