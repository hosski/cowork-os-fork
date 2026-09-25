# src/electron/agent/citation/CitationTracker.ts

- extractDomain · function · L12-L19 — function extractDomain(url: string): string
- CitationTracker · class · L21-L108 — class CitationTracker
- constructor · method · L25-L25 — constructor(private readonly taskId: string)
- addFromSearch · method · L31-L42 — addFromSearch(results: Array<{ title?: string; url?: string; snippet?: string }>): void
- addFromFetch · method · L47-L55 — addFromFetch(url: string, title?: string): void
- getCitations · method · L58-L60 — getCitations(): Citation[]
- getBundle · method · L63-L65 — getBundle(): CitationBundle
- count · method · L68-L70 — get count(): number
- formatForPrompt · method · L77-L86 — formatForPrompt(): string
- addOne · method · L90-L107 — private addOne(input: { url: string; title: string; snippet: string; sourceTool: string }): void
