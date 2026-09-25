# src/electron/utils/loom.ts

- EmailProtocol · type · L5-L5 — type EmailProtocol = "imap-smtp" | "loom";
- isLocalhostHost · function · L9-L11 — function isLocalhostHost(hostname: string): boolean
- isSecureOrLocalLoomUrl · function · L13-L21 — function isSecureOrLocalLoomUrl(rawUrl: string): boolean
- assertSafeLoomBaseUrl · function · L23-L36 — function assertSafeLoomBaseUrl(rawBaseUrl: string): URL
- normalizeLoomBaseUrl · function · L38-L43 — function normalizeLoomBaseUrl(raw: string | URL): URL
- normalizeEmailProtocol · function · L45-L51 — function normalizeEmailProtocol(rawProtocol: unknown): EmailProtocol
- assertSafeLoomMailboxFolder · function · L55-L62 — function assertSafeLoomMailboxFolder(rawFolder: unknown): string
