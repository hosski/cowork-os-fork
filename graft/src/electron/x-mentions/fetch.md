# src/electron/x-mentions/fetch.ts

- XMentionFailureCode · type · L14-L14 — type XMentionFailureCode = "timeout" | "unsupported_json" | "auth" | "cli" | "unknown";
- XMentionFailure · interface · L16-L19 — interface XMentionFailure
- normalizeFetchCount · function · L21-L24 — function normalizeFetchCount(value: number): number
- resolveMentionsTimeoutMs · function · L26-L32 — function resolveMentionsTimeoutMs(settings: XSettingsData): number
- isTimeoutError · function · L34-L37 — function isTimeoutError(error: unknown): boolean
- classifyXMentionFailure · function · L39-L59 — function classifyXMentionFailure(error: unknown): XMentionFailure
- fetchMentionsWithRetry · function · L61-L98 — async function fetchMentionsWithRetry( settings: XSettingsData, fetchCount: number, ): Promise<Awaited<ReturnType<typeof runBirdCommand>>>
