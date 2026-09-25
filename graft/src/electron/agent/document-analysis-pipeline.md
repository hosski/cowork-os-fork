# src/electron/agent/document-analysis-pipeline.ts

- DocumentAnalysisSource · interface · L17-L22 — interface DocumentAnalysisSource
- DocumentAnalysisChunk · interface · L24-L30 — interface DocumentAnalysisChunk
- DocumentAnalysisReadGuard · type · L32-L32 — type DocumentAnalysisReadGuard = (candidatePath: string) => boolean;
- normalizeForMatch · function · L34-L41 — function normalizeForMatch(value: string): string
- isOfficeLockFile · function · L43-L45 — function isOfficeLockFile(name: string): boolean
- collectDocuments · function · L47-L77 — async function collectDocuments( root: string, maxDepth = 4, readGuard?: DocumentAnalysisReadGuard, ): Promise<string[]>
- visit · function · L53-L74 — visit = async (directory: string, depth: number): Promise<void>
- discoverDocumentForAnalysis · function · L80-L107 — async function discoverDocumentForAnalysis( workspacePath: string, taskText: string, readGuard?: DocumentAnalysisReadGuard, ): Promise<string | null>
- extractDocumentForAnalysis · function · L109-L155 — async function extractDocumentForAnalysis( workspacePath: string, documentPath: string, readGuard?: DocumentAnalysisReadGuard, ): Promise<DocumentAnalysisSource>
- splitDocumentForAnalysis · function · L161-L198 — function splitDocumentForAnalysis( text: string, maxChars = 24_000, overlapChars = 400, ): DocumentAnalysisChunk[]
