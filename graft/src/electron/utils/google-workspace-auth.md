# src/electron/utils/google-workspace-auth.ts

- parseJsonSafe · function · L21-L29 — function parseJsonSafe(text: string): Any | undefined
- parseScopeList · function · L31-L37 — function parseScopeList(scope?: string): string[] | undefined
- getRefreshDedupeKey · function · L39-L47 — function getRefreshDedupeKey(settings: GoogleWorkspaceSettingsData): string
- refreshGoogleWorkspaceAccessToken · function · L49-L61 — async function refreshGoogleWorkspaceAccessToken( settings: GoogleWorkspaceSettingsData, ): Promise<string>
- refreshGoogleWorkspaceAccessTokenUncached · function · L63-L183 — async function refreshGoogleWorkspaceAccessTokenUncached( settings: GoogleWorkspaceSettingsData, ): Promise<string>
- getGoogleWorkspaceAccessToken · function · L185-L221 — async function getGoogleWorkspaceAccessToken( settings: GoogleWorkspaceSettingsData, ): Promise<string>
