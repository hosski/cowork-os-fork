# src/electron/utils/document-writer.ts

- textFromRuns · function · L18-L21 — function textFromRuns(runs: EditableDocumentRun[] | undefined, fallback = ""): string
- escapeXmlText · function · L23-L25 — function escapeXmlText(text: string): string
- decodeXmlText · function · L27-L34 — function decodeXmlText(text: string): string
- blockPlainText · function · L36-L41 — function blockPlainText(block: EditableDocumentBlock): string
- buildTextRuns · function · L43-L57 — function buildTextRuns(runs: EditableDocumentRun[] | undefined, fallback = ""): TextRun[]
- headingLevel · function · L59-L66 — function headingLevel(level: number | undefined): (typeof HeadingLevel)[keyof typeof HeadingLevel]
- blockToParagraphs · function · L68-L124 — function blockToParagraphs(block: EditableDocumentBlock): Array<Paragraph | Table>
- replaceTextRunsInXml · function · L126-L151 — function replaceTextRunsInXml(xml: string, text: string): string
- replaceTableCellsInXml · function · L153-L163 — function replaceTableCellsInXml(xml: string, rows: string[][]): string
- createParagraphXml · function · L165-L172 — function createParagraphXml(block: EditableDocumentBlock): string
- createTableXml · function · L174-L184 — function createTableXml(block: EditableDocumentBlock): string
- createBlockXml · function · L186-L189 — function createBlockXml(block: EditableDocumentBlock): string
- updateExistingBlockXml · function · L191-L196 — function updateExistingBlockXml(originalXml: string, block: EditableDocumentBlock): string
- patchExistingDocxBlocks · function · L198-L267 — async function patchExistingDocxBlocks( filePath: string, blocks: EditableDocumentBlock[], ): Promise<boolean>
- writeEditableDocumentBlocksToDocxFile · function · L269-L302 — async function writeEditableDocumentBlocksToDocxFile( filePath: string, blocks: EditableDocumentBlock[], ): Promise<void>
