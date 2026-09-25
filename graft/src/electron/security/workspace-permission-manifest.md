# src/electron/security/workspace-permission-manifest.ts

- WorkspacePermissionManifest · interface · L8-L11 — interface WorkspacePermissionManifest
- getWorkspacePermissionManifestPath · function · L13-L15 — function getWorkspacePermissionManifestPath(workspacePath: string): string
- loadWorkspacePermissionManifest · function · L17-L31 — function loadWorkspacePermissionManifest( workspacePath: string, ): WorkspacePermissionManifest
- filterTrustedManifestRules · function · L52-L61 — function filterTrustedManifestRules( manifestRules: PermissionRule[], workspaceDbRules: PermissionRule[], ): { rules: PermissionRule[]; droppedCount: number }
- appendWorkspacePermissionManifestRule · function · L63-L103 — function appendWorkspacePermissionManifestRule( workspacePath: string, rule: PermissionRule, ): { success: boolean; manifestPath: string; error?: string }
- removeWorkspacePermissionManifestRule · function · L105-L143 — function removeWorkspacePermissionManifestRule( workspacePath: string, rule: PermissionRule, ): { success: boolean; manifestPath: string; removed: boolean; error?: string }
- normalizeManifest · function · L145-L159 — function normalizeManifest(manifest: WorkspacePermissionManifest): WorkspacePermissionManifest
