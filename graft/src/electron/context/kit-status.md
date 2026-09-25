# src/electron/context/kit-status.ts

- KitWorkspaceState · type · L14-L18 — type KitWorkspaceState = { version: number; bootstrapSeededAt?: number; onboardingCompletedAt?: number; };
- resolveWorkspaceStatePath · function · L28-L30 — function resolveWorkspaceStatePath(workspacePath: string): string
- readWorkspaceKitState · function · L32-L49 — async function readWorkspaceKitState(workspacePath: string): Promise<KitWorkspaceState>
- writeWorkspaceKitState · function · L51-L58 — async function writeWorkspaceKitState( workspacePath: string, state: KitWorkspaceState, ): Promise<void>
- ensureBootstrapLifecycleState · function · L60-L89 — async function ensureBootstrapLifecycleState( workspacePath: string, state?: KitWorkspaceState, ): Promise<{ state: KitWorkspaceState; bootstrapPresent: boolean; }>
- computeWorkspaceKitStatus · function · L91-L195 — async function computeWorkspaceKitStatus( workspacePath: string, workspaceId = workspacePath, ): Promise<WorkspaceKitStatus>
