# src/electron/chronicle/ChronicleSelector.ts

- normalizeText · function · L3-L8 — function normalizeText(value: unknown): string
- tokenize · function · L10-L15 — function tokenize(value: string): string[]
- queryOverlapScore · function · L17-L26 — function queryOverlapScore(haystack: string, queryTokens: string[]): number
- getRecencyScore · function · L28-L32 — function getRecencyScore(capturedAt: number): number
- hasScreenReference · function · L34-L38 — function hasScreenReference(query: string): boolean
- ChronicleSelector · class · L40-L91 — class ChronicleSelector
- rank · method · L41-L84 — static rank( frames: ChronicleBufferedFrame[], query: string, limit = 5, ): ChronicleResolvedContext[]
- shouldFallback · method · L86-L90 — static shouldFallback(results: ChronicleResolvedContext[], query: string): boolean
