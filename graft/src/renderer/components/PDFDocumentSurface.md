# src/renderer/components/PDFDocumentSurface.tsx

- PdfPageRender · type · L4-L7 — type PdfPageRender = { width: number; height: number; };
- PdfTextItem · type · L9-L15 — type PdfTextItem = { str: string; x: number; y: number; width: number; height: number; };
- PDFDocumentSurfaceProps · type · L17-L25 — type PDFDocumentSurfaceProps = { fileName: string; pdfDataBase64: string; selection: PdfRegionSelection | null; onSelectionChange: (selection: PdfRegionSelection | null) => void; readOnly?: boolean; visiblePageIndex?: number | null; onPageCountChange?: (pageCount: number) => void; };
- DraftSelection · type · L27-L33 — type DraftSelection = { pageIndex: number; x: number; y: number; w: number; h: number; };
- base64ToUint8Array · function · L35-L42 — function base64ToUint8Array(base64: string): Uint8Array
- normalizeRect · function · L44-L50 — function normalizeRect(x1: number, y1: number, x2: number, y2: number)
- PDFDocumentSurface · function · L52-L310 — function PDFDocumentSurface({ fileName, pdfDataBase64, selection, onSelectionChange, readOnly = false, visiblePageIndex = null, onPageCountChange, }: PDFDocumentSurfaceProps)
- renderPdf · function · L74-L151 — renderPdf = async ()
- getSelectionExcerpt · function · L172-L200 — getSelectionExcerpt = (pageIndex: number, rect: DraftSelection): string
- updateDraft · function · L202-L213 — updateDraft = (pageIndex: number, clientX: number, clientY: number)
- commitDraft · function · L215-L240 — commitDraft = ()
