# src/electron/acp/handler.ts

- ACPHandlerDeps · interface · L30-L82 — interface ACPHandlerDeps
- getACPRegistry · function · L95-L100 — function getACPRegistry(db?: Database.Database): ACPAgentRegistry
- requireAuth · function · L104-L108 — function requireAuth(client: ControlPlaneClient): void
- requireScopedAuth · function · L110-L119 — function requireScopedAuth( client: ControlPlaneClient, deps: ACPHandlerDeps, scope: "admin" | "read" | "write" | "operator", ): void
- hasElevatedAccess · function · L121-L123 — function hasElevatedAccess(client: ControlPlaneClient): boolean
- getRequesterId · function · L125-L127 — function getRequesterId(client: ControlPlaneClient): string
- enforceTaskAccess · function · L129-L137 — function enforceTaskAccess(client: ControlPlaneClient, task: ACPTask): void
- mapRowToTask · function · L139-L156 — function mapRowToTask(row: Record<string, unknown>): ACPTask
- loadPersistedTasks · function · L158-L175 — function loadPersistedTasks(db?: Database.Database): void
- persistTask · function · L177-L213 — function persistTask(db: Database.Database | undefined, task: ACPTask): void
- syncTaskStatus · function · L215-L286 — async function syncTaskStatus( task: ACPTask, deps: ACPHandlerDeps, reg: ACPAgentRegistry, ): Promise<ACPTask>
- requireString · function · L288-L296 — function requireString(value: unknown, field: string): string
- registerACPMethods · function · L304-L653 — function registerACPMethods(server: ControlPlaneServer, deps: ACPHandlerDeps): void
- shutdownACP · function · L658-L664 — function shutdownACP(): void
