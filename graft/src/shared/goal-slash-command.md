# src/shared/goal-slash-command.ts

- GoalSlashCommandAction · type · L3-L3 — type GoalSlashCommandAction = "start" | "status" | "pause" | "resume" | "clear";
- ParsedGoalSlashCommand · interface · L5-L12 — interface ParsedGoalSlashCommand
- clampInteger · function · L16-L19 — function clampInteger(value: number, min: number, max: number): number
- readNumberFlag · function · L21-L31 — function readNumberFlag(tokens: string[], index: number): { value?: number; nextIndex: number }
- parseLeadingGoalSlashCommand · function · L33-L84 — function parseLeadingGoalSlashCommand(input: string): ParsedGoalSlashCommand
- buildPersistentGoalPrompt · function · L86-L104 — function buildPersistentGoalPrompt(objective: string, context?: string): string
- buildPersistentGoalAgentConfig · function · L106-L142 — function buildPersistentGoalAgentConfig( parsed: ParsedGoalSlashCommand, now: number, base?: AgentConfig, ): AgentConfig
