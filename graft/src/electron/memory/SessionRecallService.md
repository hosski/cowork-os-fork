# src/electron/memory/SessionRecallService.ts

- SessionRecallResult · interface · L9-L16 — interface SessionRecallResult
- compareRecallResults · function · L18-L25 — function compareRecallResults(a: SessionRecallResult, b: SessionRecallResult): number
- checkpointsDir · function · L27-L29 — function checkpointsDir(workspacePath: string): string
- summarizePayload · function · L31-L38 — function summarizePayload(payload: unknown): string
- mapSpanResult · function · L40-L49 — function mapSpanResult(entry: TranscriptSearchResult): SessionRecallResult
- SessionRecallService · class · L51-L144 — class SessionRecallService
- search · method · L52-L87 — static async search(params: { workspacePath: string; query: string; taskId?: string; limit?: number; includeCheckpoints?: boolean; readGuard?: TranscriptReadGuard; }): Promise<SessionRecallResult[]>
- searchCheckpoints · method · L89-L143 — private static async searchCheckpoints(params: { workspacePath: string; query: string; taskId?: string; limit: number; readGuard?: TranscriptReadGuard; }): Promise<SessionRecallResult[]>
