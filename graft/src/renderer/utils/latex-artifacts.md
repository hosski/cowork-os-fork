# src/renderer/utils/latex-artifacts.ts

- LatexPdfPair · type · L4-L7 — type LatexPdfPair = { sourcePath: string; pdfPath: string; };
- normalizePath · function · L12-L14 — function normalizePath(raw: unknown): string
- dirname · function · L16-L19 — function dirname(filePath: string): string
- basenameWithoutExt · function · L21-L25 — function basenameWithoutExt(filePath: string): string
- sameStemAndFolder · function · L27-L29 — function sameStemAndFolder(left: string, right: string): boolean
- findLatexPdfPair · function · L31-L97 — function findLatexPdfPair( events: TaskEvent[] | undefined, outputSummary?: TaskOutputSummary | null, ): LatexPdfPair | null
- addPath · function · L39-L50 — addPath = (rawPath: unknown)
