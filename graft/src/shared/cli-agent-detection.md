# src/shared/cli-agent-detection.ts

- CliAgentType · type · L11-L11 — type CliAgentType = "codex-cli" | "codex-acpx" | "claude-cli" | "claude-acpx";
- detectCliAgentFromTitle · function · L35-L40 — function detectCliAgentFromTitle(title: string): CliAgentType | null
- detectCliAgentFromTask · function · L42-L48 — function detectCliAgentFromTask(task: Task): CliAgentType | null
- detectCliAgentFromEvents · function · L54-L94 — function detectCliAgentFromEvents(events: TaskEvent[]): CliAgentType | null
- isCliAgentChildTask · function · L100-L108 — function isCliAgentChildTask(task: Task, events?: TaskEvent[]): boolean
- resolveCliAgentType · function · L114-L116 — function resolveCliAgentType(task: Task, events?: TaskEvent[]): CliAgentType | null
- getCliAgentDisplayInfo · function · L121-L137 — function getCliAgentDisplayInfo(agentType: CliAgentType): { icon: string; name: string; badge: string; color: string; }
