# src/electron/utils/temp-workspace-scope.ts

- TempWorkspaceScope · type · L4-L4 — type TempWorkspaceScope = "ui" | "gateway" | "hooks" | "tray";
- sanitizeTempWorkspaceKey · function · L9-L15 — function sanitizeTempWorkspaceKey(raw: string): string
- createScopedTempWorkspaceIdentity · function · L17-L29 — function createScopedTempWorkspaceIdentity( scope: TempWorkspaceScope, key: string, ): { scope: TempWorkspaceScope; key: string; slug: string; workspaceId: string }
- getScopedTempWorkspacePath · function · L31-L40 — function getScopedTempWorkspacePath( tempWorkspaceRoot: string, scope: TempWorkspaceScope, key: string, ): string
- parseTempWorkspaceScope · function · L42-L54 — function parseTempWorkspaceScope( workspaceId: string | null | undefined, ): TempWorkspaceScope | "legacy" | null
- isTempWorkspaceInScope · function · L56-L61 — function isTempWorkspaceInScope( workspaceId: string | null | undefined, scope: TempWorkspaceScope, ): boolean
