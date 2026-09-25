# src/electron/utils/box-api.ts

- parseJsonSafe · function · L14-L22 — function parseJsonSafe(text: string): Any | undefined
- formatBoxError · function · L24-L28 — function formatBoxError(status: number, data: Any, fallback?: string): string
- BoxRequestOptions · interface · L30-L36 — interface BoxRequestOptions
- BoxRequestResult · interface · L38-L42 — interface BoxRequestResult
- getBoxAccessToken · function · L44-L112 — async function getBoxAccessToken(settings: BoxSettingsData): Promise<string>
- boxRequest · function · L114-L170 — async function boxRequest( settings: BoxSettingsData, options: BoxRequestOptions, ): Promise<BoxRequestResult>
- boxUploadFile · function · L172-L225 — async function boxUploadFile( settings: BoxSettingsData, opts: { fileName: string; parentId: string; data: Uint8Array; timeoutMs?: number }, ): Promise<BoxRequestResult>
- extractUserInfo · function · L227-L232 — function extractUserInfo(data: Any): { name?: string; userId?: string }
- testBoxConnection · function · L234-L251 — async function testBoxConnection( settings: BoxSettingsData, ): Promise<BoxConnectionTestResult>
