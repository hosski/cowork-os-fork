# src/renderer/components/DOCXDocumentSurface.tsx

- DOCXDocumentSurfaceProps · type · L4-L8 — type DOCXDocumentSurfaceProps = { blocks: DocumentEditorDocxBlock[]; selection: DocxBlockSelection | null; onSelectionChange: (selection: DocxBlockSelection | null) => void; };
- DOCXDocumentSurface · function · L10-L89 — function DOCXDocumentSurface({ blocks, selection, onSelectionChange, }: DOCXDocumentSurfaceProps)
- handlePointerUp · function · L19-L19 — handlePointerUp = ()
- updateSelection · function · L26-L36 — updateSelection = (startIndex: number, endIndex: number)
