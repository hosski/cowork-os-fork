# src/electron/control-plane/__tests__/node-manager.test.ts

- createMockSocket · function · L11-L23 — createMockSocket = (readyState: number = WebSocket.OPEN): WebSocket
- createMockNodeClient · function · L26-L56 — createMockNodeClient = ( options: { id?: string; displayName?: string; platform?: "ios" | "android" | "macos"; capabilities?: string[]; commands?: string[]; permissions?: Record<string, boolean>; isForeground?: boolean; } = {}, ): ControlPlaneClient
- createMockServer · function · L59-L68 — createMockServer = (nodes: ControlPlaneClient[] = [])
