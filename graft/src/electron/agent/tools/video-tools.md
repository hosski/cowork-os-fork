# src/electron/agent/tools/video-tools.ts

- VideoTools · class · L27-L297 — class VideoTools
- constructor · method · L30-L36 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L38-L41 — setWorkspace(workspace: Workspace): void
- createVideoGenerator · method · L43-L77 — private createVideoGenerator(workspace: Workspace): VideoGenerator
- generateVideo · method · L84-L129 — async generateVideo(input: { prompt: string; mode?: VideoGenerationMode; provider?: VideoProvider | "auto"; model?: string; duration?: number; aspectRatio?: VideoAspectRatio; resolution?: VideoResolution; referenceImagePath?: string; referenceVideoPath?: string; filename?: string; })
- getVideoGenerationJob · method · L135-L158 — async getVideoGenerationJob(input: { jobId: string; provider: VideoProvider; filename?: string; })
- cancelVideoGenerationJob · method · L163-L165 — async cancelVideoGenerationJob(input: { jobId: string; provider: VideoProvider })
- isAvailable · method · L167-L169 — static isAvailable(): boolean
- getToolDefinitions · method · L171-L296 — static getToolDefinitions(): LLMTool[]
