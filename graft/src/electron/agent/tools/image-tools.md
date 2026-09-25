# src/electron/agent/tools/image-tools.ts

- ImageTools · class · L27-L299 — class ImageTools
- constructor · method · L32-L38 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L44-L47 — setWorkspace(workspace: Workspace): void
- createImageGenerator · method · L49-L56 — private createImageGenerator(workspace: Workspace): ImageGenerator
- generateImage · method · L61-L160 — async generateImage( input: { prompt: string; provider?: ImageProvider | "auto"; model?: ImageModel; filename?: string; imageSize?: ImageSize; numberOfImages?: number; aspectRatio?: string; quality?: "auto" | "low" | "medium" | "high"; background?: "auto" | "transparent" | "opaque"; outputFormat?: "png" | "jpeg" | "webp" | "svg"; outputCompression?: number; seed?: number; referenceImages?: string[]; }, options?: { signal?: AbortSignal }, ): Promise<ImageGenerationResult>
- getImageGenerationRequestSignature · method · L162-L193 — private getImageGenerationRequestSignature(input: { prompt: string; provider?: ImageProvider | "auto"; model?: ImageModel; imageSize?: ImageSize; numberOfImages?: number; aspectRatio?: string; quality?: "auto" | "low" | "medium" | "high"; background?: "auto" | "transparent" | "opaque"; outputFormat?: "png" | "jpeg" | "webp" | "svg"; outputCompression?: number; seed?: number; referenceImages?: string[]; }): string
- isAvailable · method · L198-L200 — static isAvailable(): boolean
- getToolDefinitions · method · L205-L298 — static getToolDefinitions(): LLMTool[]
