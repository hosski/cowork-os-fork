# src/electron/utils/x-cli.ts

- sanitizeTokenList · function · L14-L20 — function sanitizeTokenList(values?: string[]): string[]
- parseJsonSafe · function · L22-L43 — function parseJsonSafe(text: string): Any | undefined
- dedupeBirdOutputDetail · function · L45-L61 — function dedupeBirdOutputDetail(stderr: string, stdout: string, baseMessage: string): string
- buildGlobalArgs · function · L63-L98 — function buildGlobalArgs(settings: XSettingsData): string[]
- XCommandResult · interface · L100-L105 — interface XCommandResult
- runBirdCommand · function · L107-L152 — async function runBirdCommand( settings: XSettingsData, args: string[], options?: { json?: boolean; timeoutMs?: number }, ): Promise<XCommandResult>
- checkBirdInstalled · function · L154-L171 — async function checkBirdInstalled(): Promise<{ installed: boolean; version?: string }>
- extractUsername · function · L173-L191 — function extractUsername(data: Any, stdout?: string): { username?: string; userId?: string }
- testXConnection · function · L193-L208 — async function testXConnection(settings: XSettingsData): Promise<XConnectionTestResult>
