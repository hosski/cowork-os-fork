# src/electron/agent/tools/document-tools.ts

- ExternalFileApprovalRequester · type · L29-L34 — type ExternalFileApprovalRequester = ( taskId: string, type: "external_file_access", description: string, details: Record<string, unknown>, ) => Promise<boolean>;
- ExternalFileApprovalConsumer · type · L35-L39 — type ExternalFileApprovalConsumer = ( taskId: string, filePath: string, operation: AccessFilesystemOperation, ) => boolean;
- sanitizeFilename · function · L41-L44 — function sanitizeFilename(raw: string, maxLen = 80): string
- DocumentTools · class · L46-L838 — class DocumentTools
- constructor · method · L50-L69 — constructor( workspace: string | Pick<Workspace, "path" | "permissions" | "isTemp">, private taskId: string, private registerArtifact?: ( taskId: string, filePath: string, mimeType: string, metadata?: Record<string, unknown>, ) => void, private requestExternalFileApproval?: ExternalFileApprovalRequester, private consumeExternalFileApproval?: ExternalFileApprovalConsumer, )
- setWorkspace · method · L73-L81 — setWorkspace(workspace: { path: string; permissions?: WorkspacePermissions; isTemp?: boolean; }): void
- assertPathAllowed · method · L83-L145 — private async assertPathAllowed( requestedPath: string, operation: "read" | "write", label = "document file", ): Promise<string>
- normalizePresentationAssets · method · L147-L164 — private async normalizePresentationAssets(assets: unknown): Promise<Any[]>
- normalizePresentationSlides · method · L166-L188 — private async normalizePresentationSlides(slides: unknown): Promise<Any[]>
- getToolDefinitions · method · L192-L585 — static getToolDefinitions(): LLMTool[]
- compileLatex · method · L589-L635 — async compileLatex(input: Any): Promise<Any>
- generateDocument · method · L637-L660 — async generateDocument(input: Any): Promise<Any>
- generatePresentation · method · L662-L697 — async generatePresentation(input: Any): Promise<Any>
- generateSpreadsheet · method · L699-L736 — async generateSpreadsheet(input: Any): Promise<Any>
- generateEPUB · method · L738-L763 — async generateEPUB(input: Any): Promise<Any>
- generateLandingPage · method · L765-L792 — async generateLandingPage(input: Any): Promise<Any>
- generateNarrationAudio · method · L794-L837 — async generateNarrationAudio(input: Any): Promise<Any>
- formatBytes · function · L840-L844 — function formatBytes(bytes: number): string
