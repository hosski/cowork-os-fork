# src/electron/utils/onedrive-api.ts

- parseJsonSafe · function · L10-L18 — function parseJsonSafe(text: string): Any | undefined
- formatGraphError · function · L20-L23 — function formatGraphError(status: number, data: Any, fallback?: string): string
- OneDriveRequestOptions · interface · L25-L32 — interface OneDriveRequestOptions
- OneDriveRequestResult · interface · L34-L38 — interface OneDriveRequestResult
- onedriveRequest · function · L40-L105 — async function onedriveRequest( settings: OneDriveSettingsData, options: OneDriveRequestOptions, ): Promise<OneDriveRequestResult>
- extractDriveOwner · function · L107-L113 — function extractDriveOwner(data: Any): { name?: string; userId?: string; driveId?: string }
- testOneDriveConnection · function · L115-L133 — async function testOneDriveConnection( settings: OneDriveSettingsData, ): Promise<OneDriveConnectionTestResult>
