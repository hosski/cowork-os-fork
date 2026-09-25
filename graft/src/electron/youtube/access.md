# src/electron/youtube/access.ts

- YouTubeIngestionOptions · interface · L10-L12 — interface YouTubeIngestionOptions
- createYouTubeIngestionOptions · function · L19-L31 — function createYouTubeIngestionOptions( workspace: Pick<Workspace, "path" | "permissions">, ): YouTubeIngestionOptions
- assertYouTubeIngestionAccess · function · L40-L63 — function assertYouTubeIngestionAccess( workspace: Pick<Workspace, "path" | "permissions">, rawInput: string, toolName: string, ): string
- assertYouTubeCacheAccess · function · L65-L75 — function assertYouTubeCacheAccess( workspace: Pick<Workspace, "path" | "permissions">, operation: "read" | "write", ): string
