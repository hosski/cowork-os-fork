# src/electron/agent/tools/read-files.ts

- ReadFilesInput · type · L4-L10 — type ReadFilesInput = { patterns: string[]; path?: string; maxFiles?: number; maxResults?: number; maxTotalChars?: number; };
- ReadFilesResult · type · L12-L33 — type ReadFilesResult = { success: boolean; basePath: string; includePatterns: string[]; excludePatterns: string[]; totalMatched: number; included: number; skipped: number; truncated: boolean; files: Array<{ path: string; size: number; truncated?: boolean; format?: string; content: string; }>; skippedFiles: Array<{ path: string; reason: string; }>; warnings: string[]; };
- clampInt · function · L35-L39 — function clampInt(value: unknown, fallback: number, min: number, max: number): number
- splitPatterns · function · L41-L56 — function splitPatterns(patterns: string[]): { include: string[]; exclude: string[] }
- readFilesByPatterns · function · L58-L193 — async function readFilesByPatterns( input: ReadFilesInput, deps: { globTools: GlobTools; fileTools: FileTools }, ): Promise<ReadFilesResult>
