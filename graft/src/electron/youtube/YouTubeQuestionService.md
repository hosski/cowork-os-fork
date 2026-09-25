# src/electron/youtube/YouTubeQuestionService.ts

- formatTimestamp · function · L7-L16 — function formatTimestamp(ms: number): string
- buildExtractiveAnswer · function · L18-L30 — function buildExtractiveAnswer(question: string, sources: YouTubeSearchHit[]): string
- YouTubeQuestionService · class · L32-L128 — class YouTubeQuestionService
- constructor · method · L33-L37 — constructor( private readonly workspaceId: string, private readonly workspacePath: string, private readonly options: YouTubeIngestionOptions = {}, )
- ensureIngested · method · L39-L51 — async ensureIngested(input: { url: string; language?: string; force?: boolean })
- search · method · L53-L55 — search(input: { query: string; videoIds?: string[]; limit?: number }): YouTubeSearchHit[]
- ask · method · L57-L127 — async ask(input: { question: string; url?: string; videoIds?: string[]; language?: string; limit?: number; force?: boolean; }): Promise<YouTubeAskResult>
