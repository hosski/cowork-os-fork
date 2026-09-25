# src/renderer/components/ChatGPTImportWizard.tsx

- ChatGPTImportProgress · interface · L4-L11 — interface ChatGPTImportProgress
- ChatGPTImportResult · interface · L13-L20 — interface ChatGPTImportResult
- WizardStep · type · L22-L22 — type WizardStep = "tutorial" | "select" | "options" | "importing" | "done";
- CachedModel · interface · L25-L29 — interface CachedModel
- ChatGPTImportWizardProps · interface · L58-L62 — interface ChatGPTImportWizardProps
- ChatGPTImportWizard · function · L64-L743 — function ChatGPTImportWizard({ workspaceId, onClose, onImportComplete, }: ChatGPTImportWizardProps)
- handleSelectFile · function · L119-L139 — handleSelectFile = async ()
- handleStartImport · function · L141-L185 — handleStartImport = async ()
- handleCancel · function · L187-L194 — handleCancel = async ()
- formatSize · function · L196-L202 — formatSize = (bytes: number): string
