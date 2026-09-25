# src/electron/agent/tools/glob-tools.ts

- GlobTools · class · L12-L412 — class GlobTools
- constructor · method · L40-L44 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L49-L51 — setWorkspace(workspace: Workspace): void
- getToolDefinitions · method · L56-L86 — static getToolDefinitions(): LLMTool[]
- glob · method · L91-L184 — async glob(input: { pattern: string; path?: string; maxResults?: number }): Promise<{ success: boolean; pattern: string; matches: Array<{ path: string; size: number; modified: string }>; totalMatches: number; truncated: boolean; error?: string; }>
- isWithinWorkspace · method · L186-L189 — private isWithinWorkspace(basePath: string, workspacePath: string): boolean
- findMatches · method · L194-L221 — private async findMatches( basePath: string, pattern: string, maxResults: number, ): Promise<{ matches: Array<{ path: string; size: number; mtime: number }>; scanTruncated: boolean; }>
- walkDirectory · method · L226-L316 — private async walkDirectory( currentPath: string, basePath: string, regex: RegExp, matches: Array<{ path: string; size: number; mtime: number }>, maxMatchBuffer: number, scanState: { filesScanned: number; directoriesScanned: number; maxFilesScanned: number; maxDirectoriesScanned: number; startedAtMs: number; scanTruncated: boolean; }, depth: number = 0, ): Promise<void>
- getTraversalLimits · method · L318-L324 — private getTraversalLimits(maxResults: number): { maxFiles: number; maxDirectories: number }
- shouldSkipDirectory · method · L326-L336 — private shouldSkipDirectory(currentPath: string, basePath: string, depth: number): boolean
- isGeneratedSearchRoot · method · L338-L352 — private isGeneratedSearchRoot(basePath: string, workspacePath: string): boolean
- globToRegex · method · L357-L388 — private globToRegex(pattern: string): RegExp
- expandBraces · method · L393-L411 — private expandBraces(pattern: string): string[]
