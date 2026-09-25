# src/electron/cron/workspace-context.ts

- ScheduledRunDirectory · interface · L15-L19 — interface ScheduledRunDirectory
- PruneScheduledRunDirectoriesOptions · interface · L21-L28 — interface PruneScheduledRunDirectoriesOptions
- sanitizeSlug · function · L30-L39 — function sanitizeSlug(value: string, fallback: string): string
- isPathWithin · function · L41-L46 — function isPathWithin(parentPath: string, childPath: string): boolean
- formatRunTimestamp · function · L48-L57 — function formatRunTimestamp(nowMs: number): string
- getScheduledWorkspacesRoot · function · L59-L61 — function getScheduledWorkspacesRoot(userDataDir: string): string
- buildManagedScheduledWorkspacePath · function · L63-L71 — function buildManagedScheduledWorkspacePath( userDataDir: string, jobName: string, jobId: string, ): string
- isManagedScheduledWorkspacePath · function · L73-L80 — function isManagedScheduledWorkspacePath( workspacePath: string | null | undefined, userDataDir: string, ): boolean
- createScheduledRunDirectory · function · L82-L110 — function createScheduledRunDirectory( workspacePath: string, options: PruneScheduledRunDirectoriesOptions = {}, ): ScheduledRunDirectory
- pruneScheduledRunDirectories · function · L112-L188 — function pruneScheduledRunDirectories( runsRootPath: string, options: PruneScheduledRunDirectoriesOptions = {}, ): { removed: number; remaining: number }
