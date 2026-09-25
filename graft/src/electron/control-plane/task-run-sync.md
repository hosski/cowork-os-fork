# src/electron/control-plane/task-run-sync.ts

- attachControlPlaneTaskLifecycleSync · function · L5-L41 — function attachControlPlaneTaskLifecycleSync(options: { agentDaemon: AgentDaemon; db: Database.Database; log?: (...args: unknown[]) => void; }): () => void
- sync · function · L11-L18 — sync = (event: { taskId?: string })
- syncStatus · function · L20-L30 — syncStatus = (event: { taskId?: string; payload?: { status?: string } })
