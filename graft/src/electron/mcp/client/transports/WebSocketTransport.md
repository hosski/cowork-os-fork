# src/electron/mcp/client/transports/WebSocketTransport.ts

- PendingRequest · interface · L19-L23 — interface PendingRequest
- WebSocketTransport · class · L25-L387 — class WebSocketTransport extends EventEmitter implements MCPTransport
- constructor · method · L41-L44 — constructor(config: MCPServerConfig)
- connect · method · L49-L137 — async connect(): Promise<void>
- disconnect · method · L142-L177 — async disconnect(): Promise<void>
- sendRequest · method · L182-L211 — async sendRequest(method: string, params?: Record<string, Any>): Promise<Any>
- send · method · L216-L226 — async send(message: JSONRPCRequest | JSONRPCNotification): Promise<void>
- onMessage · method · L231-L233 — onMessage(handler: (message: JSONRPCResponse | JSONRPCNotification) => void): void
- onClose · method · L238-L240 — onClose(handler: (error?: Error) => void): void
- onError · method · L245-L247 — onError(handler: (error: Error) => void): void
- isConnected · method · L252-L254 — isConnected(): boolean
- handleMessage · method · L259-L284 — private handleMessage(data: string): void
- buildWebSocketUrl · method · L289-L305 — private buildWebSocketUrl(url: string): string
- addAuthHeaders · method · L310-L334 — private addAuthHeaders(headers: Record<string, string>): void
- startPingPong · method · L339-L353 — private startPingPong(): void
- stopPingPong · method · L358-L367 — private stopPingPong(): void
- cleanup · method · L372-L386 — private cleanup(): void
