# src/electron/media/media-protocol.ts

- MediaTokenRecord · type · L19-L24 — type MediaTokenRecord = { resolvedPath: string; workspaceRoot: string; mimeType: string; expiresAt: number; };
- purgeExpiredTokens · function · L28-L34 — function purgeExpiredTokens(now = Date.now()): void
- isPathWithinWorkspace · function · L36-L41 — function isPathWithinWorkspace(resolvedPath: string, workspaceRoot: string): boolean
- isSupportedMediaFile · function · L43-L46 — function isSupportedMediaFile(resolvedPath: string, mimeType: string): boolean
- createErrorResponse · function · L48-L56 — function createErrorResponse(statusCode: number, message: string): Response
- parseRangeHeader · function · L58-L95 — function parseRangeHeader( rangeHeader: string, size: number, ): { start: number; end: number } | null
- registerMediaScheme · function · L97-L110 — function registerMediaScheme(): void
- createMediaPlaybackUrl · function · L112-L122 — function createMediaPlaybackUrl(params: { resolvedPath: string; workspaceRoot: string; mimeType: string; }): string
- createLocalPreviewFileUrl · function · L124-L134 — function createLocalPreviewFileUrl(params: { resolvedPath: string; rootPath: string; mimeType: string; }): string
- createTokenizedMediaUrl · function · L136-L163 — function createTokenizedMediaUrl(params: { resolvedPath: string; workspaceRoot: string; mimeType: string; }): string
- registerMediaProtocol · function · L165-L251 — function registerMediaProtocol(): void
