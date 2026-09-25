# src/electron/agent/path-alias.ts

- WorkspacePathAliasMatch · interface · L7-L14 — interface WorkspacePathAliasMatch
- TaskRootPathRewriteMatch · interface · L16-L23 — interface TaskRootPathRewriteMatch
- normalizeAliasRoot · function · L25-L35 — function normalizeAliasRoot(value: string): string
- isWithinWorkspace · function · L37-L40 — function isWithinWorkspace(absolutePath: string, workspaceRoot: string): boolean
- detectWorkspacePathAlias · function · L42-L84 — function detectWorkspacePathAlias( inputPath: string, workspacePath: string, aliasRoots: readonly string[] = DEFAULT_WORKSPACE_ALIAS_ROOTS, ): WorkspacePathAliasMatch | null
- shouldRewriteWorkspaceAliasPath · function · L86-L94 — function shouldRewriteWorkspaceAliasPath( match: WorkspacePathAliasMatch, policy: WorkspacePathAliasPolicy, opts?: { requireSourceMissing?: boolean }, ): boolean
- isWorkspaceAliasFailureMessage · function · L96-L104 — function isWorkspaceAliasFailureMessage(message: string): boolean
- normalizeWorkspaceRelativePath · function · L106-L112 — function normalizeWorkspaceRelativePath(value: string): string
- isNormalizedPathWithinWorkspace · function · L114-L117 — function isNormalizedPathWithinWorkspace(candidatePath: string, workspaceRoot: string): boolean
- detectTaskRootPathRewrite · function · L119-L159 — function detectTaskRootPathRewrite( inputPath: string, workspacePath: string, pinnedRoot: string, _opts?: { requireSourceMissing?: boolean }, ): TaskRootPathRewriteMatch | null
