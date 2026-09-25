# src/electron/agent/tools/grep-tools.ts

- GrepTools · class · L20-L658 — class GrepTools
- constructor · method · L21-L25 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L30-L32 — setWorkspace(workspace: Workspace): void
- getToolDefinitions · method · L37-L86 — static getToolDefinitions(): LLMTool[]
- grep · method · L91-L309 — async grep(input: { pattern: string; path?: string; glob?: string; ignoreCase?: boolean; contextLines?: number; maxResults?: number; outputMode?: "content" | "files_only" | "count"; }): Promise<{ success: boolean; pattern: string; matches: Array<{ file: string; line?: number; content?: string; context?: { before: string[]; after: string[] }; count?: number; }>; totalMatches: number; filesSearched: number; truncated: boolean; error?: string; warning?: string; }>
- applyOutputBudget · method · L311-L349 — private applyOutputBudget< T extends Array<{ file: string; line?: number; content?: string; context?: { before: string[]; after: string[] }; count?: number; }>, >(matches: T): { matches: T; truncated: boolean }
- findFilesToSearch · method · L354-L366 — private async findFilesToSearch( basePath: string, globPattern: string | undefined, agentRoleId: string | null, projectAccessCache: Map<string, boolean>, ): Promise<string[]>
- walkDirectory · method · L371-L475 — private async walkDirectory( currentPath: string, basePath: string, files: string[], globRegex: RegExp | null, agentRoleId: string | null, projectAccessCache: Map<string, boolean>, depth: number = 0, ): Promise<void>
- isDeniedByProjectAccess · method · L477-L498 — private async isDeniedByProjectAccess( absolutePath: string, agentRoleId: string | null, cache: Map<string, boolean>, ): Promise<boolean>
- isBinaryFile · method · L503-L549 — private isBinaryFile(filename: string): boolean
- globToRegex · method · L554-L559 — private globToRegex(pattern: string): RegExp
- expandBraces · method · L564-L578 — private expandBraces(pattern: string): string[]
- isDocumentHeavyWorkspace · method · L583-L605 — private async isDocumentHeavyWorkspace(): Promise<boolean>
- globPatternToRegex · method · L610-L657 — private globPatternToRegex(pattern: string): string
