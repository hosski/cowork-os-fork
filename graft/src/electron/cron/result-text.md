# src/electron/cron/result-text.ts

- Any · type · L4-L4 — type Any = Record<string, unknown>;
- normalizeText · function · L40-L42 — function normalizeText(value: unknown): string
- isFailureLike · function · L44-L46 — function isFailureLike(text: string): boolean
- isNoiseMessage · function · L48-L52 — function isNoiseMessage(text: string): boolean
- pushCandidate · function · L54-L72 — function pushCandidate( text: string, bucket: { bestNonFailure: string; lastNonFailure: string; bestFailure: string; lastFailure: string; }, ): void
- pickBestCandidate · function · L74-L83 — function pickBestCandidate(bucket: { bestNonFailure: string; lastNonFailure: string; bestFailure: string; lastFailure: string; }): string
- resolveTaskResultText · function · L91-L205 — function resolveTaskResultText(opts: { summary?: string | null; semanticSummary?: string | null; verificationVerdict?: string | null; verificationReport?: string | null; events?: TaskEvent[] | null; }): string | undefined
