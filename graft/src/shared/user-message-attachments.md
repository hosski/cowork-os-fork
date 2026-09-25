# src/shared/user-message-attachments.ts

- UserMessageAttachmentMetadata · type · L3-L6 — type UserMessageAttachmentMetadata = Pick< ImageAttachment, "filePath" | "mimeType" | "filename" | "sizeBytes" >;
- isRecord · function · L18-L20 — function isRecord(value: unknown): value is Record<string, unknown>
- isVisualAttachmentMimeType · function · L22-L26 — function isVisualAttachmentMimeType(value: unknown): value is VisualAttachmentMimeType
- buildUserMessageAttachmentMetadata · function · L33-L54 — function buildUserMessageAttachmentMetadata( images?: ImageAttachment[] | null, ): UserMessageAttachmentMetadata[]
- parseUserMessageAttachmentMetadata · function · L57-L82 — function parseUserMessageAttachmentMetadata( value: unknown, ): UserMessageAttachmentMetadata[]
- isImageAttachmentMimeType · function · L84-L88 — function isImageAttachmentMimeType( mimeType: VisualAttachmentMimeType | string | undefined, ): boolean
