# src/electron/supervisor/__tests__/DiscordSupervisorService.test.ts

- FakeAgentDaemon · class · L12-L16 — class FakeAgentDaemon extends EventEmitter
- createTask · method · L13-L15 — async createTask(): Promise<{ id: string }>
- createWorkspace · function · L18-L33 — function createWorkspace(id = "workspace-1"): Workspace
- createDiscordChannel · function · L35-L56 — function createDiscordChannel(): Channel
- createExchange · function · L58-L82 — function createExchange(overrides: Partial<SupervisorExchange> = {}): SupervisorExchange
- createService · function · L84-L195 — function createService(overrides?: { workspace?: Workspace; channel?: Channel; exchanges?: SupervisorExchange[]; messages?: SupervisorExchangeMessage[]; })
