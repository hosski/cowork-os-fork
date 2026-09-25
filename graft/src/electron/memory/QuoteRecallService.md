# src/electron/memory/QuoteRecallService.ts

- normalizeText · function · L28-L30 — function normalizeText(value: unknown): string
- normalizeQueryTokens · function · L32-L42 — function normalizeQueryTokens(query: string): string[]
- stringifyPayload · function · L44-L73 — function stringifyPayload(payload: unknown): string
- buildExcerpt · function · L75-L93 — function buildExcerpt(text: string, query: string, maxChars = MAX_EXCERPT_CHARS): string
- lexicalCoverageScore · function · L95-L110 — function lexicalCoverageScore(text: string, query: string): { score: number; exact: boolean }
- recencyScore · function · L112-L117 — function recencyScore(timestamp: number): number
- buildRankingReason · function · L119-L136 — function buildRankingReason(parts: { sourceType: VerbatimQuoteSourceType; exact: boolean; upstreamScore?: number; timestamp: number; }): string
- scoreQuoteCandidate · function · L138-L161 — function scoreQuoteCandidate(params: { sourceType: VerbatimQuoteSourceType; text: string; query: string; timestamp: number; upstreamScore?: number; }): { score: number; rankingReason: string }
- compareQuoteResults · function · L163-L170 — function compareQuoteResults(a: VerbatimQuoteSearchResult, b: VerbatimQuoteSearchResult): number
- mapTranscriptSpan · function · L172-L201 — function mapTranscriptSpan( entry: TranscriptSearchResult, query: string, ): VerbatimQuoteSearchResult | null
- mapTaskEvent · function · L203-L230 — function mapTaskEvent(entry: TaskEvent, query: string): VerbatimQuoteSearchResult | null
- readMarkdownExcerpt · function · L232-L269 — async function readMarkdownExcerpt( workspacePath: string, filePath: string, startLine?: number, endLine?: number, readGuard?: MarkdownMemoryReadGuard, ): Promise<string>
- QuoteRecallService · class · L271-L426 — class QuoteRecallService
- search · method · L272-L425 — static async search(params: { db: Database.Database; workspaceId: string; workspacePath: string; query: string; taskId?: string; limit?: number; sourceTypes?: VerbatimQuoteSourceType[]; includeWorkspaceNotes?: boolean; readGuard?: MarkdownMemoryReadGuard; }): Promise<VerbatimQuoteSearchResult[]>
- allowSource · function · L292-L293 — allowSource = (sourceType: VerbatimQuoteSourceType): boolean
