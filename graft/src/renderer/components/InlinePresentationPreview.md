# src/renderer/components/InlinePresentationPreview.tsx

- InlinePresentationPreviewProps · type · L5-L9 — type InlinePresentationPreviewProps = { filePath: string; workspacePath: string; onOpenViewer?: (path: string) => void; };
- PresentationPreview · type · L11-L13 — type PresentationPreview = NonNullable< NonNullable<FileViewerResult["data"]>["presentationPreview"] >;
- formatFileSize · function · L17-L23 — function formatFileSize(bytes: number): string
- getFirstMeaningfulSlide · function · L25-L33 — function getFirstMeaningfulSlide(preview: PresentationPreview | null)
- InlinePresentationPreview · function · L35-L172 — function InlinePresentationPreview({ filePath, workspacePath, onOpenViewer, }: InlinePresentationPreviewProps)
- run · function · L49-L78 — run = async ()
- handleOpen · function · L98-L102 — handleOpen = ()
