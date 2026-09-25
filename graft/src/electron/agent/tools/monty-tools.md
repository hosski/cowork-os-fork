# src/electron/agent/tools/monty-tools.ts

- MontyRunInput · type · L18-L22 — type MontyRunInput = { code: string; inputs?: unknown; limits?: MontyResourceLimits; };
- MontyTransformRunInput · type · L24-L28 — type MontyTransformRunInput = { name: string; inputs?: unknown; limits?: MontyResourceLimits; };
- MontyListTransformsInput · type · L30-L32 — type MontyListTransformsInput = { // reserved for future options };
- MontyTransformFileInput · type · L34-L41 — type MontyTransformFileInput = { transform: string; inputPath: string; outputPath?: string; overwrite?: boolean; maxInputBytes?: number; limits?: MontyResourceLimits; };
- ExtractJsonInput · type · L43-L48 — type ExtractJsonInput = { text: string; mode?: "first" | "all"; allowRepair?: boolean; maxResults?: number; };
- sanitizeTransformName · function · L66-L76 — function sanitizeTransformName(name: string): string
- parseTransformHeader · function · L78-L92 — function parseTransformHeader(snippet: string): { name?: string; description?: string }
- MontyTools · class · L94-L479 — class MontyTools
- constructor · method · L97-L102 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, private fileTools: FileTools, )
- setWorkspace · method · L104-L106 — setWorkspace(workspace: Workspace): void
- getToolDefinitions · method · L108-L247 — static getToolDefinitions(): LLMTool[]
- montyRun · method · L249-L276 — async montyRun(input: MontyRunInput): Promise<Any>
- listTransforms · method · L278-L331 — async listTransforms(_input?: MontyListTransformsInput): Promise<Any>
- loadTransformCode · method · L333-L345 — private async loadTransformCode( name: string, ): Promise<{ id: string; absPath: string; code: string }>
- runTransform · method · L347-L374 — async runTransform(input: MontyTransformRunInput): Promise<Any>
- transformFile · method · L376-L452 — async transformFile(input: MontyTransformFileInput): Promise<Any>
- extractJson · method · L454-L478 — async extractJson(input: ExtractJsonInput): Promise<Any>
