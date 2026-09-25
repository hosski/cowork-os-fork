# src/electron/utils/dropbox-api.ts

- parseJsonSafe · function · L11-L19 — function parseJsonSafe(text: string): Any | undefined
- formatDropboxError · function · L21-L25 — function formatDropboxError(status: number, data: Any, fallback?: string): string
- DropboxRequestOptions · interface · L27-L32 — interface DropboxRequestOptions
- DropboxRequestResult · interface · L34-L38 — interface DropboxRequestResult
- dropboxRequest · function · L40-L88 — async function dropboxRequest( settings: DropboxSettingsData, options: DropboxRequestOptions, ): Promise<DropboxRequestResult>
- dropboxContentUpload · function · L90-L145 — async function dropboxContentUpload( settings: DropboxSettingsData, opts: { path: string; data: Uint8Array; timeoutMs?: number }, ): Promise<DropboxRequestResult>
- extractAccountInfo · function · L147-L153 — function extractAccountInfo(data: Any): { name?: string; userId?: string; email?: string }
- testDropboxConnection · function · L155-L176 — async function testDropboxConnection( settings: DropboxSettingsData, ): Promise<DropboxConnectionTestResult>
