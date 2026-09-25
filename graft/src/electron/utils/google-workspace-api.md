# src/electron/utils/google-workspace-api.ts

- parseJsonSafe · function · L28-L36 — function parseJsonSafe(text: string): Any | undefined
- formatDriveError · function · L38-L41 — function formatDriveError(status: number, data: Any, fallback?: string): string
- GoogleDriveRequestOptions · interface · L43-L50 — interface GoogleDriveRequestOptions
- GoogleDriveRequestResult · interface · L52-L56 — interface GoogleDriveRequestResult
- notifyGoogleWorkspaceAuthIssue · function · L58-L67 — async function notifyGoogleWorkspaceAuthIssue(error: unknown): Promise<void>
- googleDriveRequest · function · L69-L157 — async function googleDriveRequest( settings: GoogleWorkspaceSettingsData, options: GoogleDriveRequestOptions, ): Promise<GoogleDriveRequestResult>
- requestOnce · function · L85-L139 — requestOnce = async (accessToken: string): Promise<GoogleDriveRequestResult>
- abort · function · L96-L96 — abort = ()
- googleDriveUpload · function · L159-L239 — async function googleDriveUpload( settings: GoogleWorkspaceSettingsData, fileId: string, data: Uint8Array, contentType: string, signal?: AbortSignal, ): Promise<GoogleDriveRequestResult>
- requestOnce · function · L170-L221 — requestOnce = async (accessToken: string): Promise<GoogleDriveRequestResult>
- abort · function · L178-L178 — abort = ()
- extractUserInfo · function · L241-L248 — function extractUserInfo(data: Any): { name?: string; userId?: string; email?: string }
- testGoogleWorkspaceConnection · function · L250-L302 — async function testGoogleWorkspaceConnection( settings: GoogleWorkspaceSettingsData, ): Promise<GoogleWorkspaceConnectionTestResult>
