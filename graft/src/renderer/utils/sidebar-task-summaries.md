# src/renderer/utils/sidebar-task-summaries.ts

- hasFullTaskPrompt · function · L5-L7 — function hasFullTaskPrompt(task: Task | undefined): boolean
- shouldHydrateTaskSummary · function · L9-L15 — function shouldHydrateTaskSummary(task: Task | undefined): boolean
- getTaskHydrationAttemptKey · function · L17-L19 — function getTaskHydrationAttemptKey(taskId: string, task: Task | undefined): string
- getTaskIdFromHydrationAttemptKey · function · L21-L24 — function getTaskIdFromHydrationAttemptKey(key: string): string
- hasTaskHydrationAttempted · function · L26-L32 — function hasTaskHydrationAttempted( keys: ReadonlySet<string>, taskId: string, task: Task | undefined, ): boolean
- recordTaskHydrationAttemptSuccess · function · L34-L42 — function recordTaskHydrationAttemptSuccess( keys: Set<string>, taskId: string, task: Task | undefined, activeTaskIds: ReadonlySet<string>, ): void
- pruneTaskHydrationAttemptKeys · function · L44-L60 — function pruneTaskHydrationAttemptKeys( keys: Set<string>, activeTaskIds: ReadonlySet<string>, maxEntries = SELECTED_TASK_HYDRATION_ATTEMPT_CACHE_MAX, ): void
- mergeSidebarTaskSummariesWithExisting · function · L62-L95 — function mergeSidebarTaskSummariesWithExisting( existingTasks: Task[], summaries: Task[], ): Task[]
- mergeSidebarInitialPageWithSelectedTask · function · L97-L109 — function mergeSidebarInitialPageWithSelectedTask( existingTasks: Task[], summaries: Task[], selectedTaskId: string | null, ): Task[]
