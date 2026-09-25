# src/electron/mcp/host/CoWorkHostProvider.ts

- ToolDelegate · type · L12-L15 — type ToolDelegate = { getTools(): MCPTool[]; executeTool(name: string, args: Record<string, Any>): Promise<Any>; };
- toJsonResource · function · L17-L27 — function toJsonResource(uri: string, value: unknown): MCPResourceReadResult
- isTextLikeMimeType · function · L29-L37 — function isTextLikeMimeType(mimeType: string): boolean
- CoWorkHostProvider · class · L39-L190 — class CoWorkHostProvider
- constructor · method · L40-L48 — constructor( private deps: { workspaceRepo: WorkspaceRepository; taskRepo: TaskRepository; taskEventRepo: TaskEventRepository; artifactRepo: ArtifactRepository; toolDelegate: ToolDelegate; }, )
- getTools · method · L50-L52 — getTools(): MCPTool[]
- executeTool · method · L54-L56 — async executeTool(name: string, args: Record<string, Any>): Promise<Any>
- getResources · method · L58-L117 — getResources(): MCPResource[]
- readResource · method · L119-L189 — async readResource(uri: string): Promise<MCPResourceReadResult>
