# src/electron/utils/pdf-parser.ts

- LegacyPdfParseResult · type · L1-L5 — type LegacyPdfParseResult = { text: string; numpages?: number; info?: { Title?: string; Author?: string }; };
- LegacyPdfParseFn · type · L7-L7 — type LegacyPdfParseFn = (dataBuffer: Buffer) => Promise<LegacyPdfParseResult>;
- V2TextResult · type · L9-L12 — type V2TextResult = { text?: string; total?: number; };
- V2InfoResult · type · L14-L17 — type V2InfoResult = { total?: number; info?: { Title?: string; Author?: string }; };
- V2ParserInstance · type · L19-L23 — type V2ParserInstance = { getText: () => Promise<V2TextResult>; getInfo?: () => Promise<V2InfoResult>; destroy?: () => Promise<void> | void; };
- V2ParserCtor · type · L25-L25 — type V2ParserCtor = new (params: { data: Uint8Array }) => V2ParserInstance;
- PdfParseModuleShape · type · L27-L32 — type PdfParseModuleShape = | LegacyPdfParseFn | { default?: LegacyPdfParseFn; PDFParse?: V2ParserCtor; };
- PdfParseRuntime · type · L34-L37 — type PdfParseRuntime = { legacyPdfParseFn: LegacyPdfParseFn | null; pdfParseV2Ctor?: V2ParserCtor; };
- getPdfParseRuntime · function · L42-L70 — function getPdfParseRuntime(): PdfParseRuntime
- parsePdfBuffer · function · L75-L115 — async function parsePdfBuffer(dataBuffer: Buffer): Promise<LegacyPdfParseResult>
