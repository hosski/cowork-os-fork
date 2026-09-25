# src/electron/agent/task-kickoff-summary.ts

- cleanDescription · function · L49-L58 — function cleanDescription(value: unknown): string
- toGerundPhrase · function · L60-L67 — function toGerundPhrase(description: string): string | null
- fallbackActionForTool · function · L69-L83 — function fallbackActionForTool(toolName: string): string
- buildTaskKickoffSummary · function · L85-L108 — function buildTaskKickoffSummary(args: { currentStepDescription?: string | null; planSteps?: PlanStep[]; firstToolName?: string; }): string
- responseHasAssistantText · function · L110-L121 — function responseHasAssistantText(content: unknown): boolean
- taskSessionKickoffIsSettled · function · L123-L140 — function taskSessionKickoffIsSettled(events: TaskEvent[]): boolean
