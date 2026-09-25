# src/electron/agent/tools/youtube-tools.ts

- YouTubeTools · class · L11-L225 — class YouTubeTools
- constructor · method · L12-L16 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L18-L20 — setWorkspace(workspace: Workspace): void
- workspacePath · method · L22-L25 — private get workspacePath(): string
- workspaceId · method · L27-L30 — private get workspaceId(): string
- ingestVideo · method · L32-L49 — async ingestVideo(input: { url: string; language?: string; force?: boolean })
- askVideo · method · L51-L69 — async askVideo(input: { question: string; videoIds?: string[]; limit?: number })
- askOrIngestVideo · method · L71-L92 — async askOrIngestVideo(input: { question: string; url: string; videoIds?: string[]; language?: string; limit?: number; force?: boolean; })
- searchSegments · method · L94-L101 — searchSegments(input: { query: string; videoIds?: string[]; limit?: number })
- listVideos · method · L103-L108 — listVideos(input: { limit?: number } = {})
- getToolDefinitions · method · L110-L224 — static getToolDefinitions(): LLMTool[]
