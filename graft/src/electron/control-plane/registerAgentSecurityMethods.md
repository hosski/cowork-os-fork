# src/electron/control-plane/registerAgentSecurityMethods.ts

- Scope · type · L9-L9 — type Scope = "admin" | "read" | "write" | "operator";
- invalid · function · L18-L20 — function invalid(message: string): never
- service · function · L22-L26 — function service()
- paramsObject · function · L28-L32 — function paramsObject(params: unknown): Record<string, unknown>
- boundedLimit · function · L34-L38 — function boundedLimit(value: unknown, fallback = 100): number
- requiredString · function · L40-L44 — function requiredString(params: unknown, key: string): string
- requireConfirmation · function · L46-L50 — function requireConfirmation(params: unknown, expected: string): void
- findingQuery · function · L52-L74 — function findingQuery(params: unknown): AgentSecurityFindingQuery
- registerAgentSecurityMethods · function · L76-L162 — function registerAgentSecurityMethods(input: { server: ControlPlaneServer; requireScope: (client: unknown, scope: Scope) => void; }): void
