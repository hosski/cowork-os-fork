# src/renderer/utils/composer-draft-owner.ts

- TaskOwner · type · L3-L3 — type TaskOwner = Pick<Task, "id" | "workspaceId">;
- ComposerDraftOwnerContext · interface · L5-L9 — interface ComposerDraftOwnerContext
- resolveComposerDraftOwnerContext · function · L18-L38 — function resolveComposerDraftOwnerContext(input: { currentWorkspaceId?: string | null; selectedTaskId?: string | null; selectedTask?: TaskOwner | null; remoteTask?: TaskOwner | null; }): ComposerDraftOwnerContext
