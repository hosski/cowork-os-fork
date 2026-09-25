# src/shared/spreadsheet-workbook.ts

- SpreadsheetWorkbookFormat · type · L3-L3 — type SpreadsheetWorkbookFormat = "xlsx" | "xlsm" | "csv" | "tsv";
- SpreadsheetCellValueType · type · L5-L12 — type SpreadsheetCellValueType = | "blank" | "string" | "number" | "boolean" | "date" | "formula" | "error";
- SpreadsheetCellPosition · interface · L14-L17 — interface SpreadsheetCellPosition
- SpreadsheetCellRange · interface · L19-L22 — interface SpreadsheetCellRange
- SpreadsheetCellInput · interface · L24-L27 — interface SpreadsheetCellInput
- SpreadsheetCellData · interface · L29-L35 — interface SpreadsheetCellData extends SpreadsheetPreviewCell
- SpreadsheetSheetMeta · interface · L37-L50 — interface SpreadsheetSheetMeta
- SpreadsheetCapabilities · interface · L52-L58 — interface SpreadsheetCapabilities
- SpreadsheetCompatibilityWarning · interface · L60-L64 — interface SpreadsheetCompatibilityWarning
- SpreadsheetWorkbookSession · interface · L66-L75 — interface SpreadsheetWorkbookSession
- SpreadsheetViewport · interface · L77-L86 — interface SpreadsheetViewport
- SpreadsheetOpenWorkbookResult · interface · L88-L94 — interface SpreadsheetOpenWorkbookResult
- SpreadsheetViewportRequest · interface · L96-L103 — interface SpreadsheetViewportRequest
- SpreadsheetViewportResult · interface · L105-L109 — interface SpreadsheetViewportResult
- SpreadsheetPatch · type · L111-L160 — type SpreadsheetPatch = | { type: "setCell"; sheetId: string; row: number; column: number; input: SpreadsheetCellInput; } | { type: "setRange"; sheetId: string; startRow: number; startColumn: number; values: SpreadsheetCellInput[][]; } | { type: "insertRows"; sheetId: string; beforeRow: number; count: number; } | { type: "deleteRows"; sheetId: string; row: number; count: number; } | { type: "insertColumns"; sheetId: string; beforeColumn: number; count: number; } | { type: "deleteColumns"; sheetId: string; column: number; count: number; } | { type: "resizeColumn"; sheetId: string; column: number; width: number; } | { type: "renameSheet"; sheetId: string; name: string; };
- SpreadsheetApplyPatchesResult · interface · L162-L167 — interface SpreadsheetApplyPatchesResult
- SpreadsheetSaveWorkbookResult · interface · L169-L176 — interface SpreadsheetSaveWorkbookResult
