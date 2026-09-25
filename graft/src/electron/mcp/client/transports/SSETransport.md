# src/electron/mcp/client/transports/SSETransport.ts

- PendingRequest · interface · L19-L23 — interface PendingRequest
- SSETransport · class · L25-L363 — class SSETransport extends EventEmitter implements MCPTransport
- constructor · method · L36-L39 — constructor(config: MCPServerConfig)
- connect · method · L44-L114 — async connect(): Promise<void>
- disconnect · method · L119-L133 — async disconnect(): Promise<void>
- sendRequest · method · L138-L166 — async sendRequest(method: string, params?: Record<string, Any>): Promise<Any>
- send · method · L171-L177 — async send(message: JSONRPCRequest | JSONRPCNotification): Promise<void>
- postMessage · method · L182-L225 — private async postMessage(message: JSONRPCRequest | JSONRPCNotification): Promise<void>
- onMessage · method · L230-L232 — onMessage(handler: (message: JSONRPCResponse | JSONRPCNotification) => void): void
- onClose · method · L237-L239 — onClose(handler: (error?: Error) => void): void
- onError · method · L244-L246 — onError(handler: (error: Error) => void): void
- isConnected · method · L251-L254 — isConnected(): boolean
- handleMessage · method · L259-L266 — private handleMessage(data: string): void
- handleJsonRpcResponse · method · L271-L290 — private handleJsonRpcResponse(message: Any): void
- buildUrl · method · L295-L313 — private buildUrl(baseUrl: string, path: string): string
- addAuthHeaders · method · L318-L342 — private addAuthHeaders(headers: Record<string, string>): void
- cleanup · method · L347-L362 — private cleanup(): void
