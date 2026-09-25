# src/electron/agent/runtime/worker-role-registry.ts

- getReadOnlyExecutionToolRestrictions · function · L103-L105 — function getReadOnlyExecutionToolRestrictions(): string[]
- getWorkerRoleSpec · function · L219-L221 — function getWorkerRoleSpec(kind: WorkerRoleKind): WorkerRoleSpec
- resolveWorkerRoleKind · function · L223-L236 — function resolveWorkerRoleKind(value?: string | null): WorkerRoleKind | undefined
- resolveDelegationWorkerRoleInput · function · L238-L246 — function resolveDelegationWorkerRoleInput( value?: string | null, ): DelegationWorkerRole | undefined
- resolveDefaultWorkerRoleKind · function · L248-L250 — function resolveDefaultWorkerRoleKind(): WorkerRoleKind
- inferWorkerRoleKindFromPrompt · function · L252-L291 — function inferWorkerRoleKindFromPrompt(prompt: string): WorkerRoleKind
- resolveDelegationWorkerRole · function · L293-L300 — function resolveDelegationWorkerRole(params: { requestedRole?: string | null; prompt: string; }): WorkerRoleKind
- resolveWorkerRoleAgentConfig · function · L302-L348 — function resolveWorkerRoleAgentConfig( workerRole: WorkerRoleKind, agentConfig?: AgentConfig, ): AgentConfig
- buildWorkerRolePrompt · function · L350-L378 — function buildWorkerRolePrompt( workerRole: WorkerRoleKind, context: WorkerPromptContext, ): string
- parseVerificationVerdict · function · L380-L392 — function parseVerificationVerdict(summary: string): VerificationVerdict
- buildWorkerRoleInstructionPrefix · function · L394-L397 — function buildWorkerRoleInstructionPrefix(workerRole: WorkerRoleKind): string
