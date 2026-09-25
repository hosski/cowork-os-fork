# src/electron/utils/google-calendar-api.ts

- parseJsonSafe · function · L18-L26 — function parseJsonSafe(text: string): Any | undefined
- formatCalendarError · function · L28-L31 — function formatCalendarError(status: number, data: Any, fallback?: string): string
- GoogleCalendarRequestOptions · interface · L33-L40 — interface GoogleCalendarRequestOptions
- GoogleCalendarRequestResult · interface · L42-L46 — interface GoogleCalendarRequestResult
- notifyGoogleWorkspaceAuthIssue · function · L48-L57 — async function notifyGoogleWorkspaceAuthIssue(error: unknown): Promise<void>
- googleCalendarRequest · function · L59-L147 — async function googleCalendarRequest( settings: GoogleWorkspaceSettingsData, options: GoogleCalendarRequestOptions, ): Promise<GoogleCalendarRequestResult>
- requestOnce · function · L75-L129 — requestOnce = async (accessToken: string): Promise<GoogleCalendarRequestResult>
- abort · function · L86-L86 — abort = ()
