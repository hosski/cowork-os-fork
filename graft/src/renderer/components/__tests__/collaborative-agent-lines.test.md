# src/renderer/components/__tests__/collaborative-agent-lines.test.ts

- render · function · L8-L10 — function render(element: React.ReactElement): string
- makeRun · function · L12-L21 — function makeRun(overrides: Partial<AgentTeamRun> = {}): AgentTeamRun
- makeTask · function · L23-L35 — function makeTask(overrides: Partial<Task> = {}): Task
- makeEvent · function · L37-L52 — function makeEvent( type: TaskEvent["type"], timestamp: number, payload: Record<string, unknown>, overrides: Partial<TaskEvent> = {}, ): TaskEvent
- renderLines · function · L54-L64 — function renderLines(childTask: Task, childEvents: TaskEvent[]): string
