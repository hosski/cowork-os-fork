# src/electron/agent/debug/DebugRuntimeServer.ts

- DebugIngestEntry · type · L12-L18 — type DebugIngestEntry = { taskId: string; line: string; rawBody: string; contentType: string; receivedAt: number; };
- SessionRecord · type · L20-L23 — type SessionRecord = { token: string; onIngest: (entry: DebugIngestEntry) => void; };
- getListenPort · function · L30-L32 — function getListenPort(): number
- ensureDebugRuntimeServer · function · L34-L57 — async function ensureDebugRuntimeServer(): Promise<number>
- readBody · function · L59-L66 — function readBody(req: http.IncomingMessage): Promise<Buffer>
- handleRequest · function · L68-L131 — async function handleRequest(req: http.IncomingMessage, res: http.ServerResponse): Promise<void>
- openDebugRuntimeSession · function · L136-L146 — async function openDebugRuntimeSession( taskId: string, onIngest: (entry: DebugIngestEntry) => void, ): Promise<{ baseUrl: string; token: string; ingestUrl: string }>
- closeDebugRuntimeSession · function · L148-L150 — function closeDebugRuntimeSession(taskId: string): void
- getDebugRuntimeListenPort · function · L152-L154 — function getDebugRuntimeListenPort(): number
