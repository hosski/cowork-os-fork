# src/electron/agent/skills/spreadsheet.ts

- SheetData · interface · L6-L13 — interface SheetData
- SpreadsheetOptions · interface · L15-L22 — interface SpreadsheetOptions
- SpreadsheetBuilder · class · L27-L179 — class SpreadsheetBuilder
- constructor · method · L28-L28 — constructor(private workspace: Workspace)
- create · method · L30-L123 — async create( outputPath: string, sheets: SheetData[], options: SpreadsheetOptions = {}, ): Promise<void>
- createCSV · method · L128-L145 — private async createCSV(outputPath: string, sheet: SheetData): Promise<void>
- read · method · L150-L178 — async read(inputPath: string): Promise<SheetData[]>
