# src/renderer/components/WebArtifactViewer.tsx

- WebArtifactViewerMode · type · L30-L30 — type WebArtifactViewerMode = "sidebar" | "fullscreen";
- WebSettingsTab · type · L31-L31 — type WebSettingsTab = Any;
- PendingWebAttachment · type · L32-L38 — type PendingWebAttachment = { id: string; path: string; name: string; size: number; mimeType?: string; };
- WebArtifactViewerProps · type · L40-L63 — type WebArtifactViewerProps = { filePath: string; workspacePath: string; mode: WebArtifactViewerMode; onClose: () => void; onFullscreen: () => void; onExitFullscreen: () => void; onSendMessage?: (message: string, images?: ImageAttachment[]) => Promise<void>; selectedModelLabel?: string; selectedModel?: string; selectedProvider?: LLMProviderType; selectedReasoningEffort?: LLMReasoningEffort; availableModels?: LLMModelInfo[]; availableProviders?: LLMProviderInfo[]; workspaceId?: string; onModelChange?: (selection: { providerType?: LLMProviderType; modelKey: string; reasoningEffort?: LLMReasoningEffort; }) => void; onOpenSettings?: (tab?: WebSettingsTab) => void; turnContext?: SpreadsheetTurnContext | null; refreshKey?: string | number | null; };
- ViewerData · type · L65-L65 — type ViewerData = NonNullable<FileViewerResult["data"]>;
- getWebViewerCacheKey · function · L69-L75 — function getWebViewerCacheKey(args: { filePath: string; workspacePath: string; refreshKey?: string | number | null; }): string
- getFileName · function · L77-L79 — function getFileName(filePath: string): string
- formatAttachmentSize · function · L81-L87 — function formatAttachmentSize(size: number): string
- isImageAttachment · function · L89-L91 — function isImageAttachment(attachment: PendingWebAttachment): boolean
- textFromHtml · function · L93-L100 — function textFromHtml(htmlContent: string): string
- WebArtifactViewer · function · L102-L559 — function WebArtifactViewer({ filePath, workspacePath, mode, onClose, onFullscreen, onExitFullscreen, onSendMessage, selectedModelLabel, selectedModel, selectedProvider, selectedReasoningEffort, availableModels = [], availableProviders = [], workspaceId, onModelChange, onOpenSettings, turnContext, refreshKey, }: WebArtifactViewerProps)
- handleCopyText · function · L216-L225 — handleCopyText = async ()
- handleOpenExternal · function · L227-L229 — handleOpenExternal = ()
- handleShowInFinder · function · L231-L233 — handleShowInFinder = ()
- handleFullscreenSend · function · L289-L309 — handleFullscreenSend = async ()
- renderBody · function · L311-L331 — renderBody = ()
