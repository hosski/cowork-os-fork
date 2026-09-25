# src/renderer/utils/selected-task-restoration.ts

- selectedTaskStorageKey · function · L5-L8 — function selectedTaskStorageKey(workspaceId: string): string
- StorageLike · type · L10-L10 — type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;
- defaultStorage · function · L12-L18 — function defaultStorage(): StorageLike | undefined
- readPersistedSelectedTaskId · function · L20-L31 — function readPersistedSelectedTaskId( workspaceId: string, storage: StorageLike | undefined = defaultStorage(), ): string | null
- persistSelectedTaskId · function · L33-L47 — function persistSelectedTaskId( workspaceId: string, taskId: string | null, storage: StorageLike | undefined = defaultStorage(), ): void
- canRestoreSelectedTask · function · L49-L54 — function canRestoreSelectedTask( task: Task | null | undefined, workspaceId: string, ): boolean
