# src/renderer/components/MarkdownImagePreview.tsx

- MarkdownImagePreviewProps · type · L4-L9 — type MarkdownImagePreviewProps = { src?: string; alt?: string; title?: string; workspacePath?: string; };
- normalizeFileSrc · function · L14-L26 — function normalizeFileSrc(src: string): string
- isLocalImageSrc · function · L28-L33 — function isLocalImageSrc(src: string): boolean
- MarkdownImagePreview · function · L35-L166 — function MarkdownImagePreview({ src = "", alt = "", title, workspacePath, }: MarkdownImagePreviewProps)
- handleKeyDown · function · L97-L99 — handleKeyDown = (event: KeyboardEvent)
