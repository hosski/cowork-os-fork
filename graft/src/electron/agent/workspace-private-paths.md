# src/electron/agent/workspace-private-paths.ts

- GitDirInfo · interface · L12-L15 — interface GitDirInfo
- toPosixPath · function · L17-L19 — function toPosixPath(value: string): string
- resolveGitDir · function · L21-L39 — function resolveGitDir(repoRoot: string, gitPath: string): string | null
- findGitDir · function · L41-L59 — function findGitDir( startPath: string, canRead?: (candidatePath: string) => boolean, ): GitDirInfo | null
- buildExcludeEntry · function · L61-L74 — function buildExcludeEntry( repoRoot: string, workspacePath: string, workspaceRelativePath: string, ): string | null
- ensureCoWorkPrivatePathsExcluded · function · L76-L123 — function ensureCoWorkPrivatePathsExcluded( workspacePath: string, relativePaths: string[] = DEFAULT_LOCAL_EXCLUDE_PATHS, options: { canRead?: (candidatePath: string) => boolean; canWrite?: (candidatePath: string) => boolean; } = {}, ): void
- isCoWorkPrivateGeneratedPath · function · L125-L133 — function isCoWorkPrivateGeneratedPath(relativePath: string): boolean
