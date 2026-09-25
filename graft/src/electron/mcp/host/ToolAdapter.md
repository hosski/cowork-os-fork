# src/electron/mcp/host/ToolAdapter.ts

- LLMTool · interface · L12-L20 — interface LLMTool
- ToolRegistry · interface · L23-L26 — interface ToolRegistry
- ToolAdapter · class · L31-L143 — class ToolAdapter implements ToolProvider
- constructor · method · L36-L55 — constructor( registry: ToolRegistry, options: { // Only expose these tools (if specified) exposedTools?: string[]; // Exclude these tools from exposure excludedTools?: string[]; } = {}, )
- getTools · method · L60-L67 — getTools(): MCPTool[]
- executeTool · method · L72-L81 — async executeTool(name: string, args: Record<string, Any>): Promise<Any>
- shouldExposePlugin · method · L86-L94 — private shouldExposePlugin(name: string): boolean
- convertTool · method · L99-L109 — private convertTool(tool: LLMTool): MCPTool
- exposeTool · method · L114-L117 — exposeTool(name: string): void
- hideTool · method · L122-L125 — hideTool(name: string): void
- getAvailableToolNames · method · L130-L135 — getAvailableToolNames(): string[]
- getAllToolNames · method · L140-L142 — getAllToolNames(): string[]
