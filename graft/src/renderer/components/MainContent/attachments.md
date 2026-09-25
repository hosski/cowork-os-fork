# src/renderer/components/MainContent/attachments.ts

- SelectedFileInfo · type · L11-L16 — type SelectedFileInfo = { path?: string; name: string; size: number; mimeType?: string; };
- PendingAttachment · type · L18-L24 — type PendingAttachment = SelectedFileInfo & { id: string; dataBase64?: string; draftRefId?: string; draftSha256?: string; status?: "available" | "unavailable"; };
- ImportedAttachment · type · L26-L31 — type ImportedAttachment = { relativePath: string; fileName: string; size: number; mimeType?: string; };
- formatFileSize · function · L33-L39 — formatFileSize = (size: number): string
- composeMessageWithAttachments · function · L41-L118 — composeMessageWithAttachments = async ( workspacePath: string | undefined, text: string, attachments: ImportedAttachment[], ): Promise<{ message: string; extractionWarnings: string[] }>
