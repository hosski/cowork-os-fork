# src/renderer/components/InlineHtmlPreview.tsx

- InlineHtmlPreviewVariant · type · L10-L10 — type InlineHtmlPreviewVariant = "default" | "frame";
- InlineHtmlPreviewProps · type · L12-L22 — type InlineHtmlPreviewProps = { filePath: string; workspacePath: string; title?: string; className?: string; variant?: InlineHtmlPreviewVariant; frameHeight?: string; aspectRatio?: string; showChrome?: boolean; onOpenViewer?: (path: string) => void; };
- InlineHtmlSourcePreviewProps · type · L24-L32 — type InlineHtmlSourcePreviewProps = { htmlContent: string; title?: string; className?: string; variant?: InlineHtmlPreviewVariant; frameHeight?: string; aspectRatio?: string; showChrome?: boolean; };
- formatFileSize · function · L34-L41 — formatFileSize = (bytes: number): string
- extractHtmlTitle · function · L43-L57 — function extractHtmlTitle(htmlContent: string): string
- normalizeCssLength · function · L59-L66 — function normalizeCssLength(value?: string): string | undefined
- normalizeAspectRatio · function · L68-L74 — function normalizeAspectRatio(value?: string): string | undefined
- getCurrentRichFrameTheme · function · L76-L79 — function getCurrentRichFrameTheme(): RichFrameTheme
- getCurrentRichFrameHostBackground · function · L81-L83 — function getCurrentRichFrameHostBackground(): string
- useRichFrameDesignOptions · function · L85-L108 — function useRichFrameDesignOptions(enabled: boolean): RichFrameDesignOptions
- updateOptions · function · L95-L99 — updateOptions = ()
- buildFrameStyle · function · L110-L126 — function buildFrameStyle({ frameHeight, aspectRatio, }: { frameHeight?: string; aspectRatio?: string; }): CSSProperties | undefined
- InlineHtmlHeader · function · L128-L174 — function InlineHtmlHeader({ displayTitle, subtitle, onOpen, }: { displayTitle: string; subtitle?: string; onOpen?: () => void; })
- InlineHtmlSourcePreview · function · L176-L213 — function InlineHtmlSourcePreview({ htmlContent, title, className = "", variant = "default", frameHeight, aspectRatio, showChrome = false, }: InlineHtmlSourcePreviewProps)
- InlineHtmlPreview · function · L215-L323 — function InlineHtmlPreview({ filePath, workspacePath, title, className = "", variant = "default", frameHeight, aspectRatio, showChrome = false, onOpenViewer, }: InlineHtmlPreviewProps)
- run · function · L248-L271 — run = async ()
- handleOpen · function · L284-L294 — handleOpen = async ()
