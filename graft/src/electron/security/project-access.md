# src/electron/security/project-access.ts

- ProjectAccessConfig · type · L4-L7 — type ProjectAccessConfig = { allow: Set<string>; deny: Set<string>; };
- ProjectAccessCheckResult · type · L9-L12 — type ProjectAccessCheckResult = { allowed: boolean; reason?: string; };
- getWorkspaceRelativePosixPath · function · L14-L28 — function getWorkspaceRelativePosixPath( workspacePath: string, absolutePath: string, ): string | null
- getProjectIdFromWorkspaceRelPath · function · L30-L36 — function getProjectIdFromWorkspaceRelPath(relPosixPath: string): string | null
- parseAccessMarkdown · function · L38-L75 — function parseAccessMarkdown(markdown: string): ProjectAccessConfig
- checkProjectAccessFromMarkdown · function · L77-L98 — function checkProjectAccessFromMarkdown(params: { markdown: string; agentRoleId: string | null; }): ProjectAccessCheckResult
- checkProjectAccess · function · L100-L122 — async function checkProjectAccess(params: { workspacePath: string; projectId: string; agentRoleId: string | null; }): Promise<ProjectAccessCheckResult>
