# src/electron/agent/tools/__tests__/spawn-agent.test.ts

- resolveModelPreference · function · L22-L56 — function resolveModelPreference(preference: string | undefined, currentModelKey?: string): string
- generateTaskTitle · function · L58-L64 — function generateTaskTitle(prompt: string): string
- validateSpawnInput · function · L66-L77 — function validateSpawnInput(input: { prompt?: string; max_turns?: number }): { valid: boolean; error?: string; }
- canSpawnAtDepth · function · L79-L81 — function canSpawnAtDepth(currentDepth: number, maxDepth: number = 3): boolean
- createMockTask · function · L84-L97 — function createMockTask(overrides: Partial<Task> = {}): Task
- isTerminalStatus · function · L389-L391 — function isTerminalStatus(status: Task["status"]): boolean
- summarizeAgentStatuses · function · L407-L442 — function summarizeAgentStatuses(tasks: Task[]): { total: number; pending: number; executing: number; completed: number; failed: number; }
- formatAgentList · function · L476-L490 — function formatAgentList(tasks: Task[]): Array<{ task_id: string; title: string; status: string; agentType?: AgentType; modelKey?: string; }>
