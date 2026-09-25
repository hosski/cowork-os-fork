# src/electron/ipc/agent-security-handlers.ts

- service · function · L16-L20 — function service()
- boundedLimit · function · L22-L26 — function boundedLimit(value: unknown, fallback = 100): number
- validateAgentName · function · L28-L32 — function validateAgentName(value: unknown): string
- confirmSecurityMutation · function · L34-L59 — async function confirmSecurityMutation( event: IpcMainInvokeEvent, action: "install" | "uninstall" | "prune", target?: string, ): Promise<void>
- setupAgentSecurityHandlers · function · L61-L133 — function setupAgentSecurityHandlers(): void
