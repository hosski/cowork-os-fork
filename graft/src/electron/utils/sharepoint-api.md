# src/electron/utils/sharepoint-api.ts

- parseJsonSafe · function · L10-L18 — function parseJsonSafe(text: string): Any | undefined
- formatGraphError · function · L20-L23 — function formatGraphError(status: number, data: Any, fallback?: string): string
- SharePointRequestOptions · interface · L25-L32 — interface SharePointRequestOptions
- SharePointRequestResult · interface · L34-L38 — interface SharePointRequestResult
- sharepointRequest · function · L40-L105 — async function sharepointRequest( settings: SharePointSettingsData, options: SharePointRequestOptions, ): Promise<SharePointRequestResult>
- extractUserInfo · function · L107-L112 — function extractUserInfo(data: Any): { name?: string; userId?: string }
- testSharePointConnection · function · L114-L131 — async function testSharePointConnection( settings: SharePointSettingsData, ): Promise<SharePointConnectionTestResult>
