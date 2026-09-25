# src/electron/notifications/integration-auth.ts

- IntegrationAuthNotificationInput · interface · L12-L20 — interface IntegrationAuthNotificationInput
- IntegrationAuthIssueDetection · interface · L22-L27 — interface IntegrationAuthIssueDetection
- setIntegrationAuthNotificationServiceProvider · function · L29-L33 — function setIntegrationAuthNotificationServiceProvider( provider: (() => NotificationService | null) | null, ): void
- resetIntegrationAuthNotificationDedupe · function · L35-L37 — function resetIntegrationAuthNotificationDedupe(): void
- isLikelyIntegrationAuthError · function · L39-L63 — function isLikelyIntegrationAuthError(error: unknown): boolean
- errorText · function · L65-L68 — function errorText(error: unknown): string
- detectIntegrationAuthIssue · function · L70-L153 — function detectIntegrationAuthIssue(error: unknown): IntegrationAuthIssueDetection | null
- sanitizeReason · function · L155-L170 — function sanitizeReason(reason?: string): string | undefined
- notifyIntegrationAuthIssue · function · L172-L226 — async function notifyIntegrationAuthIssue( input: IntegrationAuthNotificationInput, ): Promise<boolean>
- notifyDetectedIntegrationAuthIssue · function · L228-L235 — async function notifyDetectedIntegrationAuthIssue(error: unknown): Promise<boolean>
