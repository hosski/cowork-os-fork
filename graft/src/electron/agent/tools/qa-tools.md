# src/electron/agent/tools/qa-tools.ts

- Any · type · L21-L21 — type Any = any;
- QATools · class · L23-L525 — class QATools
- constructor · method · L26-L32 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L34-L37 — setWorkspace(workspace: Workspace): void
- createQAService · method · L39-L59 — private createQAService(workspace: Workspace): PlaywrightQAService
- getToolDefinitions · method · L61-L244 — static getToolDefinitions(): LLMTool[]
- execute · method · L246-L272 — async execute(toolName: string, input: Record<string, Any>): Promise<string>
- handleQARun · method · L278-L345 — private async handleQARun(input: Record<string, Any>): Promise<string>
- handleQANavigate · method · L347-L380 — private async handleQANavigate(input: Record<string, Any>): Promise<string>
- handleQAInteract · method · L382-L418 — private async handleQAInteract(input: Record<string, Any>): Promise<string>
- handleQAScreenshot · method · L420-L448 — private async handleQAScreenshot(input: Record<string, Any>): Promise<string>
- handleQACheck · method · L450-L485 — private async handleQACheck(input: Record<string, Any>): Promise<string>
- handleQAReport · method · L487-L519 — private async handleQAReport(): Promise<string>
- handleQACleanup · method · L521-L524 — private async handleQACleanup(): Promise<string>
