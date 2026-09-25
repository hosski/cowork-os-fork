# src/electron/memory/PlaybookService.ts

- ErrorCategory · type · L7-L15 — type ErrorCategory = | "tool_failure" | "wrong_approach" | "missing_context" | "permission_denied" | "timeout" | "rate_limit" | "user_correction" | "unknown";
- PlaybookEntry · interface · L17-L24 — interface PlaybookEntry
- PlaybookCaptureOptions · interface · L26-L29 — interface PlaybookCaptureOptions
- scorePromptOverlap · function · L35-L44 — function scorePromptOverlap(prompt: string, text: string): number
- PlaybookService · class · L58-L304 — class PlaybookService
- captureMailboxPattern · method · L62-L93 — static async captureMailboxPattern( workspaceId: string, input: { title: string; summary: string; evidenceRefs?: string[]; payload?: Record<string, unknown>; }, ): Promise<void>
- captureOutcome · method · L98-L151 — static async captureOutcome( workspaceId: string, taskId: string, taskTitle: string, taskPrompt: string, outcome: "success" | "failure", planSummary: string, toolsUsed: string[], errorMessage?: string, destinationHints: string[] = [], options: PlaybookCaptureOptions = {}, ): Promise<void>
- getPlaybookForContext · method · L162-L197 — static getPlaybookForContext(workspaceId: string, taskPrompt: string, maxEntries = 3): string
- reinforceEntry · method · L204-L256 — static async reinforceEntry( workspaceId: string, taskPrompt: string, toolsUsed: string[], destinationHints: string[] = [], options: PlaybookCaptureOptions = {}, ): Promise<void>
- classifyError · method · L262-L303 — static classifyError(errorMessage: string): ErrorCategory
