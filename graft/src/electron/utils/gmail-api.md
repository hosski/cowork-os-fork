# src/electron/utils/gmail-api.ts

- parseJsonSafe · function · L18-L26 — function parseJsonSafe(text: string): Any | undefined
- formatGmailError · function · L28-L34 — function formatGmailError(status: number, data: Any, fallback?: string): string
- GmailRequestOptions · interface · L36-L43 — interface GmailRequestOptions
- GmailRequestResult · interface · L45-L49 — interface GmailRequestResult
- notifyGoogleWorkspaceAuthIssue · function · L51-L60 — async function notifyGoogleWorkspaceAuthIssue(error: unknown): Promise<void>
- gmailRequest · function · L62-L156 — async function gmailRequest( settings: GoogleWorkspaceSettingsData, options: GmailRequestOptions, ): Promise<GmailRequestResult>
- requestOnce · function · L84-L138 — requestOnce = async (accessToken: string): Promise<GmailRequestResult>
- abort · function · L95-L95 — abort = ()
