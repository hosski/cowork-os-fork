# src/renderer/utils/task-completion-ux.ts

- normalizePathForCompare · function · L5-L7 — function normalizePathForCompare(raw: string): string
- getAllOutputPathsFromSummary · function · L10-L27 — function getAllOutputPathsFromSummary( summary: TaskOutputSummary | null | undefined, ): string[]
- CompletionToastDecision · interface · L29-L33 — interface CompletionToastDecision
- shouldShowPersistentNeedsUserActionBanner · function · L35-L60 — function shouldShowPersistentNeedsUserActionBanner( payload: | { terminalStatus?: string; pendingChecklist?: unknown; verificationMessage?: unknown; verificationOutcome?: unknown; } | null | undefined, ): boolean
- shouldShowCompletionToast · function · L67-L93 — function shouldShowCompletionToast( taskId: string, outputSummary: TaskOutputSummary | null | undefined, notifiedPathsByTask: Map<string, Set<string>>, ): CompletionToastDecision
- recordCompletionToastShown · function · L96-L108 — function recordCompletionToastShown( taskId: string, pathsToRecord: string[], notifiedPathsByTask: Map<string, Set<string>>, hadOutputs: boolean, ): void
- CompletionViewContext · interface · L110-L114 — interface CompletionViewContext
- CompletionPanelDecision · interface · L116-L119 — interface CompletionPanelDecision
- CompletionToastActionDependencies · interface · L121-L128 — interface CompletionToastActionDependencies
- buildCompletionOutputMessage · function · L130-L140 — function buildCompletionOutputMessage(summary: TaskOutputSummary): string
- shouldTrackUnseenCompletion · function · L142-L146 — function shouldTrackUnseenCompletion( context: Pick<CompletionViewContext, "isMainView" | "isSelectedTask">, ): boolean
- decideCompletionPanelBehavior · function · L148-L158 — function decideCompletionPanelBehavior( context: CompletionViewContext, ): CompletionPanelDecision
- addUniqueTaskId · function · L160-L162 — function addUniqueTaskId(taskIds: string[], taskId: string): string[]
- removeTaskId · function · L164-L166 — function removeTaskId(taskIds: string[], taskId: string): string[]
- shouldClearUnseenOutputBadges · function · L168-L173 — function shouldClearUnseenOutputBadges( isMainView: boolean, rightPanelCollapsed: boolean, ): boolean
- shouldNotifyForTaskCompletionTerminalStatus · function · L175-L177 — function shouldNotifyForTaskCompletionTerminalStatus(terminalStatus?: string): boolean
- createCompletionOutputToastActions · function · L179-L216 — function createCompletionOutputToastActions( primaryOutputPath: string | undefined, dependencies: CompletionToastActionDependencies, ): NonNullable<ToastNotification["actions"]>
- buildTaskCompletionToast · function · L218-L274 — function buildTaskCompletionToast(options: { taskId: string; taskTitle?: string; outputSummary?: TaskOutputSummary | null; actionDependencies?: CompletionToastActionDependencies; terminalStatus?: | "ok" | "partial_success" | "needs_user_action" | "awaiting_approval" | "awaiting_verification" | "resume_available" | "failed" | string; }): Omit<ToastNotification, "id">
