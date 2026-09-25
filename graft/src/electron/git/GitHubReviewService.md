# src/electron/git/GitHubReviewService.ts

- GhPrView · type · L9-L14 — type GhPrView = { number?: number; url?: string; headRefName?: string; baseRefName?: string; };
- GhReviewThread · type · L16-L23 — type GhReviewThread = { id?: string; isResolved?: boolean; isOutdated?: boolean; comments?: { nodes?: GhReviewComment[]; }; };
- GhReviewComment · type · L25-L36 — type GhReviewComment = { id?: string; author?: { login?: string }; body?: string; path?: string; line?: number | null; originalLine?: number | null; diffHunk?: string; url?: string; createdAt?: string; updatedAt?: string; };
- GhReviewThreadsResponse · type · L38-L53 — type GhReviewThreadsResponse = { data?: { repository?: { pullRequest?: { reviewThreads?: { nodes?: GhReviewThread[]; pageInfo?: { hasNextPage?: boolean; endCursor?: string | null; }; }; }; }; }; errors?: Array<{ message?: string }>; };
- GitHubReviewService · class · L90-L265 — class GitHubReviewService
- getReviewSummary · method · L91-L116 — static async getReviewSummary(workspacePath: string): Promise<GithubPullRequestReviewSummary>
- buildAddressPrompt · method · L118-L160 — static buildAddressPrompt(summary: GithubPullRequestReviewSummary, threadIds: string[]): string
- resolveRepository · method · L162-L167 — private static async resolveRepository(repoRoot: string): Promise<string>
- getPrView · method · L169-L173 — private static async getPrView(repoRoot: string): Promise<GhPrView>
- getReviewThreads · method · L175-L220 — private static async getReviewThreads( repoRoot: string, repository: string, prNumber: number, ): Promise<GhReviewThread[]>
- normalizeThreads · method · L222-L264 — private static normalizeThreads(input: { repository: string; prNumber?: number; prUrl?: string; threads: GhReviewThread[]; }): GithubPullRequestReviewThread[]
- normalizeThreadState · function · L267-L272 — function normalizeThreadState(thread: GhReviewThread): GithubReviewThreadState
- parseTimestamp · function · L274-L278 — function parseTimestamp(value?: string): number
- indentBlock · function · L280-L285 — function indentBlock(value: string, prefix: string): string
- execGh · function · L287-L302 — function execGh(args: string[], cwd: string): Promise<{ stdout: string; stderr: string }>
