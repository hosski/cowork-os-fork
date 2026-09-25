# src/renderer/components/PresentationViewer.tsx

- PresentationPreview · type · L7-L9 — type PresentationPreview = NonNullable< NonNullable<FileViewerResult["data"]>["presentationPreview"] >;
- PresentationViewerProps · type · L11-L20 — type PresentationViewerProps = { fileName: string; sizeLabel?: string; preview: PresentationPreview; onOpenExternal: () => void; onShowInFinder: () => void; showExternalActions?: boolean; extraActions?: ReactNode; className?: string; };
- PresentationViewer · function · L24-L209 — function PresentationViewer({ fileName, sizeLabel, preview, onOpenExternal, onShowInFinder, showExternalActions = true, extraActions, className, }: PresentationViewerProps)
- getSlideImageSource · function · L42-L43 — getSlideImageSource = (slide: PresentationPreview["slides"][number] | null | undefined)
- handleKeyDown · function · L46-L53 — handleKeyDown = (event: KeyboardEvent)
- goBack · function · L72-L72 — goBack = ()
- goForward · function · L73-L74 — goForward = ()
