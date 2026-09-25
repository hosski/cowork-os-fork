# src/electron/utils/notion-api.ts

- getNotionVersion · function · L11-L13 — function getNotionVersion(settings: NotionSettingsData): string
- parseJsonSafe · function · L15-L23 — function parseJsonSafe(text: string): Any | undefined
- formatNotionError · function · L25-L28 — function formatNotionError(status: number, data: Any, fallback?: string): string
- NotionRequestOptions · interface · L30-L35 — interface NotionRequestOptions
- NotionRequestResult · interface · L37-L41 — interface NotionRequestResult
- notionRequest · function · L43-L93 — async function notionRequest( settings: NotionSettingsData, options: NotionRequestOptions, ): Promise<NotionRequestResult>
- extractUserInfo · function · L95-L100 — function extractUserInfo(data: Any): { name?: string; userId?: string }
- testNotionConnection · function · L102-L119 — async function testNotionConnection( settings: NotionSettingsData, ): Promise<NotionConnectionTestResult>
