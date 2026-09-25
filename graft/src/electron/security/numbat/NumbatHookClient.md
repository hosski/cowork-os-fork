# src/electron/security/numbat/NumbatHookClient.ts

- NumbatHookInvocation · interface · L17-L27 — interface NumbatHookInvocation
- buildChildEnvironment · function · L29-L45 — function buildChildEnvironment(): NodeJS.ProcessEnv
- parseControlResponse · function · L47-L66 — function parseControlResponse(raw: string): AgentSecurityHookResponse
- buildArgs · function · L68-L91 — function buildArgs(input: NumbatHookInvocation): string[]
- invokeNumbatHook · function · L93-L178 — async function invokeNumbatHook( input: NumbatHookInvocation, ): Promise<AgentSecurityHookResponse>
- finish · function · L116-L122 — finish = (error?: Error, response?: AgentSecurityHookResponse): void
