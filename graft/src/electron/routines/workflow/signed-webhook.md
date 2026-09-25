# src/electron/routines/workflow/signed-webhook.ts

- SignedWebhookRequest · interface · L11-L19 — interface SignedWebhookRequest
- SignedWebhookResult · interface · L21-L26 — interface SignedWebhookResult
- executeSignedWebhook · function · L28-L126 — async function executeSignedWebhook( input: SignedWebhookRequest, ): Promise<SignedWebhookResult>
- abort · function · L114-L119 — abort = ()
- validateSignedWebhookUrl · function · L128-L153 — function validateSignedWebhookUrl(value: string): URL
- normalizeWebhookMethod · function · L155-L163 — function normalizeWebhookMethod(value?: string): "POST" | "PUT" | "PATCH"
- signWebhookBody · function · L165-L168 — function signWebhookBody(secret: string, timestamp: string, body: string): string
- isDisallowedWebhookAddress · function · L170-L199 — function isDisallowedWebhookAddress(value: string): boolean
- parseResponseBody · function · L201-L211 — function parseResponseBody(value: string, contentType?: string): unknown
- summarizeBody · function · L213-L217 — function summarizeBody(value: unknown): string
