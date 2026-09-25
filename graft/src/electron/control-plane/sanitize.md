# src/electron/control-plane/sanitize.ts

- sanitizeTaskMessageParams · function · L29-L160 — function sanitizeTaskMessageParams(params: unknown): { interactionMode?: import("../../shared/interaction-mode").InteractionModeSelection; deliveryMode?: "message" | "follow_up"; returnOnAccepted?: boolean; messageId?: string; taskId: string; message: string; expectedTurnId?: string; images?: ImageAttachment[]; quotedAssistantMessage?: QuotedAssistantMessage; permissionMode?: PermissionMode; accessProfileId?: AccessProfileId; shellAccess?: boolean; integrationMentions?: IntegrationMentionSelection[]; }
- isPathUnderAllowedRoot · function · L166-L177 — function isPathUnderAllowedRoot(resolvedPath: string): boolean
- normalizeImagesForRemote · function · L184-L225 — async function normalizeImagesForRemote(params: unknown): Promise<unknown>
