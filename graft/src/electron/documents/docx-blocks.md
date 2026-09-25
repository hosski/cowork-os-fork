# src/electron/documents/docx-blocks.ts

- DocxBlockKind · type · L3-L3 — type DocxBlockKind = "heading" | "paragraph" | "table";
- ParsedDocxBlock · interface · L5-L15 — interface ParsedDocxBlock
- decodeXmlText · function · L17-L24 — function decodeXmlText(text: string): string
- extractTextRuns · function · L26-L34 — function extractTextRuns(xml: string): string
- parseTableRows · function · L36-L51 — function parseTableRows(tableXml: string): string[][]
- parseTopLevelElements · function · L53-L70 — function parseTopLevelElements( bodyXml: string, ): Array<{ kind: "paragraph" | "table"; xml: string; start: number; end: number }>
- parseDocxBlocksFromXml · function · L72-L118 — function parseDocxBlocksFromXml(xmlContent: string): ParsedDocxBlock[]
- parseDocxBlocksFromBuffer · function · L120-L128 — async function parseDocxBlocksFromBuffer(buffer: Buffer): Promise<ParsedDocxBlock[]>
