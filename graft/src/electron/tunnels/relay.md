# src/electron/tunnels/relay.ts

- RelayTunnelRecord · interface · L12-L19 — interface RelayTunnelRecord
- RelaySession · interface · L21-L34 — interface RelaySession
- HttpError · class · L38-L45 — class HttpError extends Error
- constructor · method · L39-L44 — constructor( public readonly status: number, message: string, )
- TunnelRelayServer · interface · L47-L52 — interface TunnelRelayServer
- startTunnelRelayServer · function · L54-L137 — async function startTunnelRelayServer( options: { port?: number; host?: string; adminToken?: string; allowUnauthenticatedAdmin?: boolean; } = {}, ): Promise<TunnelRelayServer>
- handleHttpRequest · function · L139-L232 — async function handleHttpRequest( req: http.IncomingMessage, res: http.ServerResponse, records: Map<string, RelayTunnelRecord>, sessions: Map<string, RelaySession>, auth: { adminToken?: string; allowUnauthenticatedAdmin: boolean }, ): Promise<void>
- handleClientMessage · function · L234-L261 — function handleClientMessage(session: RelaySession, raw: string): void
- forwardToClient · function · L263-L289 — function forwardToClient( session: RelaySession, payload: JSONRPCRequest, caller?: string, ): Promise<JSONRPCResponse>
- readJsonBody · function · L291-L304 — async function readJsonBody(req: http.IncomingMessage): Promise<Any>
- requireAdmin · function · L306-L317 — function requireAdmin( req: http.IncomingMessage, auth: { adminToken?: string; allowUnauthenticatedAdmin: boolean }, ): void
- isStatusAuthorized · function · L319-L327 — function isStatusAuthorized( req: http.IncomingMessage, record: RelayTunnelRecord, auth: { adminToken?: string; allowUnauthenticatedAdmin: boolean }, ): boolean
- readBearer · function · L329-L333 — function readBearer(value: string | string[] | undefined): string | undefined
- sendJson · function · L335-L338 — function sendJson(res: http.ServerResponse, status: number, body: unknown): void
- generateRelayToken · function · L340-L342 — function generateRelayToken(prefix: string): string
- sanitizeRelayPolicy · function · L344-L376 — function sanitizeRelayPolicy(value: unknown): SecureMcpTunnelPolicy
- clampInt · function · L378-L381 — function clampInt(value: unknown, min: number, max: number, fallback: number): number
- isRecord · function · L383-L385 — function isRecord(value: unknown): value is Record<string, Any>
