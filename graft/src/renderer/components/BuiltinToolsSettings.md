# src/renderer/components/BuiltinToolsSettings.tsx

- ToolCategoryConfig · interface · L17-L21 — interface ToolCategoryConfig
- BuiltinToolsSettingsData · interface · L23-L47 — interface BuiltinToolsSettingsData
- CategoryKey · type · L49-L49 — type CategoryKey = keyof BuiltinToolsSettingsData["categories"];
- BuiltinToolsSettings · function · L139-L694 — function BuiltinToolsSettings()
- loadSettings · function · L150-L185 — loadSettings = async ()
- handleCategoryToggle · function · L187-L211 — handleCategoryToggle = async (category: CategoryKey, enabled: boolean)
- handleCategoryPriority · function · L213-L240 — handleCategoryPriority = async ( category: CategoryKey, priority: "high" | "normal" | "low", )
- handleRunCommandAutoApprove · function · L242-L267 — handleRunCommandAutoApprove = async (enabled: boolean)
- handleRunCommandApprovalMode · function · L269-L287 — handleRunCommandApprovalMode = async (mode: "per_command" | "single_bundle")
- handleRunCommandTimeout · function · L289-L316 — handleRunCommandTimeout = async (value: string)
- handleCodexRuntimeMode · function · L318-L336 — handleCodexRuntimeMode = async (mode: "native" | "acpx")
- handleBrowserAutomationMode · function · L338-L359 — handleBrowserAutomationMode = async (mode: "background" | "visible" | "ask")
- handleNativeComputerUseMode · function · L361-L384 — handleNativeComputerUseMode = async ( mode: "background_first" | "ask_visible" | "visible", )
- handleToolToggle · function · L386-L410 — handleToolToggle = async (tool: string, enabled: boolean)
