# src/electron/utils/spreadsheet-preview.ts

- ExcelCellValue · type · L10-L10 — type ExcelCellValue = ExcelJS.CellValue;
- argbToCssColor · function · L15-L21 — function argbToCssColor(argb?: string): string | undefined
- getFormulaDisplayValue · function · L23-L29 — function getFormulaDisplayValue(value: ExcelCellValue): string | null
- getCellDisplayValue · function · L31-L51 — function getCellDisplayValue(cell: ExcelJS.Cell): string
- getCellFormula · function · L53-L57 — function getCellFormula(cell: ExcelJS.Cell): string | undefined
- isStyled · function · L59-L67 — function isStyled(cell: ExcelJS.Cell): boolean
- buildSpreadsheetPreviewFromFile · function · L69-L134 — async function buildSpreadsheetPreviewFromFile( filePath: string, ): Promise<SpreadsheetPreview>
- parseDelimitedRows · function · L136-L192 — function parseDelimitedRows(text: string, delimiter: string): string[][]
- escapeDelimitedCell · function · L194-L197 — function escapeDelimitedCell(value: string, delimiter: string): string
- buildDelimitedSpreadsheetPreview · function · L199-L236 — function buildDelimitedSpreadsheetPreview( content: string, options: { delimiter: "," | "\t"; sheetName?: string; }, ): SpreadsheetPreview
- spreadsheetPreviewToDelimitedText · function · L238-L254 — function spreadsheetPreviewToDelimitedText( preview: SpreadsheetPreview, delimiter: "," | "\t", ): string
- writeDelimitedSpreadsheetPreviewToFile · function · L256-L318 — async function writeDelimitedSpreadsheetPreviewToFile( filePath: string, preview: SpreadsheetPreview, delimiter: "," | "\t", ): Promise<SpreadsheetPreview>
- getPreviewCellInput · function · L320-L328 — function getPreviewCellInput(cell: SpreadsheetPreviewCell): ExcelJS.CellValue
- writeSpreadsheetPreviewToFile · function · L330-L375 — async function writeSpreadsheetPreviewToFile( filePath: string, preview: SpreadsheetPreview, ): Promise<SpreadsheetPreview>
- spreadsheetPreviewToTsv · function · L377-L387 — function spreadsheetPreviewToTsv(preview: SpreadsheetPreview): string
