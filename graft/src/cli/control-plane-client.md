# src/cli/control-plane-client.ts

- ControlPlaneConnectionOptions · interface · L4-L9 — interface ControlPlaneConnectionOptions
- ControlPlaneFrame · interface · L11-L21 — interface ControlPlaneFrame
- ControlPlaneRequestError · class · L23-L33 — class ControlPlaneRequestError extends Error
- constructor · method · L27-L32 — constructor(message: string, code?: string, details?: unknown)
- ControlPlaneClient · class · L35-L120 — class ControlPlaneClient
- constructor · method · L40-L42 — constructor(private readonly options: ControlPlaneConnectionOptions)
- connect · method · L44-L60 — async connect(): Promise<void>
- onEvent · method · L62-L65 — onEvent(listener: (frame: ControlPlaneFrame) => void): () => void
- request · method · L67-L106 — async request<T = unknown>( method: string, params?: unknown, timeoutMs = this.timeoutMs, ): Promise<T>
- onMessage · function · L81-L97 — onMessage = (data: WebSocket.RawData)
- close · method · L108-L112 — close(): void
- requireSocket · method · L114-L119 — private requireSocket(): WebSocket
- waitForOpen · function · L122-L146 — function waitForOpen(ws: WebSocket, timeoutMs: number): Promise<void>
- onOpen · function · L129-L132 — onOpen = ()
- onError · function · L133-L136 — onError = (error: Error)
- cleanup · function · L137-L141 — cleanup = ()
- parseFrame · function · L148-L157 — function parseFrame(raw: string): ControlPlaneFrame | null
