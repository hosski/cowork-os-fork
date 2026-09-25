# src/electron/control-plane/registerWorkSessionMethods.ts

- Scope · type · L11-L11 — type Scope = "admin" | "read" | "write" | "operator";
- RequireScope · type · L12-L12 — type RequireScope = (client: unknown, scope: Scope) => void;
- record · function · L14-L18 — function record(value: unknown): Record<string, unknown>
- id · function · L20-L26 — function id(value: unknown, label: string, max = 256): string
- optionalId · function · L28-L31 — function optionalId(value: unknown, label: string, max = 256): string | undefined
- boundedLimit · function · L33-L39 — function boundedLimit(value: unknown, fallback = 1_000): number
- replayAssertions · function · L41-L64 — function replayAssertions(value: unknown): WorkSessionReplayAssertions | undefined
- list · function · L48-L58 — list = (key: string): string[] | undefined
- registerWorkSessionMethods · function · L67-L166 — function registerWorkSessionMethods(input: { server: ControlPlaneServer; db: Database.Database; agentDaemon: AgentDaemon; requireScope: RequireScope; }): void
