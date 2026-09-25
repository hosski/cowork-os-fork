# src/electron/agent/tools/visual-tools.ts

- VisualAnnotatorTarget · type · L24-L29 — type VisualAnnotatorTarget = { kind?: string; // e.g. "blog_cover", "infographic", "social_story" usage?: string; // where it will be used (platform, context) size?: string; // e.g. "1200x630", "1080x1920" style?: string; // e.g. "minimal", "editorial", "flat infographic" };
- VisualAnnotationPayloadV1 · type · L31-L60 — type VisualAnnotationPayloadV1 = { version: 1; kind: "visual_annotation"; image: { filename: string; originalPath?: string; iteration?: number; naturalWidth?: number; naturalHeight?: number; }; target?: VisualAnnotatorTarget; notes: { global: string; }; annotations: Array<{ id: string; type: "rect" | "pen"; note?: string; color: string; strokeWidth: number; // normalized to the *natural* image size, in [0,1] data: | { x: number; y: number; w: number; h: number } | { points: Array<{ x: number; y: number }> }; createdAt: number; }>; export: { markdown: string; }; };
- AnnotatorBootstrap · type · L62-L71 — type AnnotatorBootstrap = { version: 1; sessionId: string; title: string; imageFilename: string; originalImagePath?: string; iteration?: number; target?: VisualAnnotatorTarget; instructions?: string; };
- resolveReadableImagePath · function · L73-L101 — async function resolveReadableImagePath( workspace: Workspace, inputPath: string, approvalHandlers: WorkspaceFilesystemApprovalHandlers = {}, ): Promise<string>
- safeJsonForHtml · function · L103-L106 — function safeJsonForHtml(value: unknown): string
- renderVisualAnnotatorHtml · function · L108-L858 — function renderVisualAnnotatorHtml(bootstrap: AnnotatorBootstrap): string
- VisualTools · class · L860-L1147 — class VisualTools
- constructor · method · L863-L869 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L871-L873 — setWorkspace(workspace: Workspace): void
- getFileApprovalHandlers · method · L875-L908 — private getFileApprovalHandlers(): WorkspaceFilesystemApprovalHandlers
- getOrCreateSession · method · L910-L926 — private async getOrCreateSession(input: { sessionId?: string; title?: string; }): Promise<{ sessionId: string; sessionDir: string }>
- stageImage · method · L928-L947 — private async stageImage(sessionDir: string, sourceAbsPath: string): Promise<string>
- openImageAnnotator · method · L949-L1006 — async openImageAnnotator(input: { imagePath: string; sessionId?: string; title?: string; iteration?: number; target?: VisualAnnotatorTarget; instructions?: string; }): Promise<{ sessionId: string; sessionDir: string; imageFilename: string }>
- updateImageAnnotator · method · L1008-L1064 — async updateImageAnnotator(input: { sessionId: string; imagePath: string; title?: string; iteration?: number; target?: VisualAnnotatorTarget; instructions?: string; }): Promise<{ success: boolean; sessionId: string; imageFilename: string }>
- getToolDefinitions · method · L1066-L1146 — static getToolDefinitions(): LLMTool[]
