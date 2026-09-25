# src/shared/computer-use-contract.ts

- ComputerUseToolName · type · L13-L13 — type ComputerUseToolName = (typeof COMPUTER_USE_TOOL_NAMES)[number];
- isComputerUseToolName · function · L17-L19 — function isComputerUseToolName(toolName: string): toolName is ComputerUseToolName
- BrowserAutomationMode · type · L21-L21 — type BrowserAutomationMode = "background" | "visible" | "ask";
- NativeComputerUseMode · type · L22-L22 — type NativeComputerUseMode = "background_first" | "ask_visible" | "visible";
- ComputerUseAutomationSettings · interface · L24-L27 — interface ComputerUseAutomationSettings
- normalizeBrowserAutomationMode · function · L29-L31 — function normalizeBrowserAutomationMode(value: unknown): BrowserAutomationMode
- normalizeNativeComputerUseMode · function · L33-L35 — function normalizeNativeComputerUseMode(value: unknown): NativeComputerUseMode
