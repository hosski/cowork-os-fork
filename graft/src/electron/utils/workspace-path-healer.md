# src/electron/utils/workspace-path-healer.ts

- WorkspacePathHealOptions · interface · L6-L9 — interface WorkspacePathHealOptions
- WorkspacePathRepair · interface · L11-L15 — interface WorkspacePathRepair
- isDirectory · function · L17-L23 — function isDirectory(value: string): boolean
- isWorkspaceArtifactSkeleton · function · L25-L35 — function isWorkspaceArtifactSkeleton(workspacePath: string): boolean
- findMovedDesktopWorkspacePath · function · L37-L67 — function findMovedDesktopWorkspacePath( workspacePath: string, homeDir: string = os.homedir(), ): string | null
- healMovedDesktopWorkspacePaths · function · L69-L112 — function healMovedDesktopWorkspacePaths( workspaces: Workspace[], updatePath: (workspaceId: string, nextPath: string) => void, options: WorkspacePathHealOptions = {}, ): WorkspacePathRepair[]
