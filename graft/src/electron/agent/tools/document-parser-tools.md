# src/electron/agent/tools/document-parser-tools.ts

- ParseDocumentInput · interface · L33-L41 — interface ParseDocumentInput
- ParseDocumentResult · interface · L43-L63 — interface ParseDocumentResult
- calculateDocumentWindow · function · L70-L99 — function calculateDocumentWindow(input: { total: number; start: number; maxChars: number; prefixLength: number; }): { end: number; note: string }
- noteFor · function · L79-L79 — noteFor = (end: number)
- DocumentParserTools · class · L101-L400 — class DocumentParserTools
- constructor · method · L102-L106 — constructor( private workspace: Workspace, private daemon?: AgentDaemon, private taskId?: string, )
- parseDocument · method · L108-L202 — async parseDocument(input: ParseDocumentInput): Promise<ParseDocumentResult>
- resolveRequestedPath · method · L204-L264 — private async resolveRequestedPath(requestedPath: string): Promise<string>
- parsePdf · method · L266-L287 — private async parsePdf(filePath: string): Promise<{ text: string; pdf_extraction: NonNullable<ParseDocumentResult["pdf_extraction"]>; }>
- parseDocx · method · L289-L294 — private async parseDocx(filePath: string): Promise<string>
- parseXlsx · method · L296-L325 — private async parseXlsx(filePath: string, format: "text" | "structured"): Promise<string>
- parsePptx · method · L327-L330 — private async parsePptx(filePath: string): Promise<string>
- parseCsv · method · L332-L352 — private async parseCsv( filePath: string, format: "text" | "structured", _maxChars: number, ): Promise<string>
- parseJson · method · L354-L362 — private async parseJson(filePath: string): Promise<string>
- getToolDefinitions · method · L364-L399 — static getToolDefinitions(): LLMTool[]
