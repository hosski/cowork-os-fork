# src/electron/youtube/YouTubeTranscriptStore.ts

- TranscriptDatabase · type · L6-L6 — type TranscriptDatabase = Pick<import("better-sqlite3").Database, "exec" | "prepare">;
- hashText · function · L8-L10 — function hashText(text: string): string
- buildYouTubeTranscriptFtsQuery · function · L46-L53 — function buildYouTubeTranscriptFtsQuery(query: string): string
- normalizeSegmentText · function · L55-L59 — function normalizeSegmentText(text: string): string
- normalizeWorkspaceId · function · L61-L65 — function normalizeWorkspaceId(workspaceId: string): string
- YouTubeTranscriptStore · class · L67-L336 — class YouTubeTranscriptStore
- setDatabaseForTests · method · L71-L74 — static setDatabaseForTests(db: TranscriptDatabase | null): void
- getDatabase · method · L76-L83 — private static getDatabase(): TranscriptDatabase | null
- ensureSchema · method · L85-L150 — private static ensureSchema(db: TranscriptDatabase): boolean
- saveVideo · method · L152-L184 — static saveVideo(workspaceId: string, video: YouTubeVideoMetadata): void
- saveSegments · method · L186-L231 — static saveSegments( workspaceId: string, videoId: string, segments: YouTubeTranscriptSegment[], ): void
- getVideo · method · L233-L252 — static getVideo(workspaceId: string, videoId: string): YouTubeVideoMetadata | null
- listVideos · method · L254-L271 — static listVideos(workspaceId: string, limit = 50): YouTubeVideoMetadata[]
- hasSegments · method · L273-L285 — static hasSegments(workspaceId: string, videoId: string): boolean
- search · method · L287-L335 — static search(params: { workspaceId: string; query: string; videoIds?: string[]; limit?: number; }): YouTubeSearchHit[]
