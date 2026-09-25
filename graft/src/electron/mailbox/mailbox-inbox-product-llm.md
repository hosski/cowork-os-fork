# src/electron/mailbox/mailbox-inbox-product-llm.ts

- chooseMailboxModel · function · L8-L19 — function chooseMailboxModel(): { providerType: string; modelKey: string; modelId: string } | null
- extractJsonObject · function · L21-L26 — function extractJsonObject(text: string): string
- mailboxLlmQuickReplies · function · L28-L118 — async function mailboxLlmQuickReplies(input: { workspaceId: string; threadId: string; subject: string; summary: string; latestSnippet: string; }): Promise<{ suggestions: string[]; error?: string }>
- SimilarThreadCandidate · type · L120-L120 — type SimilarThreadCandidate = { threadId: string; subject: string; snippet: string };
- mailboxLlmSimilarThreadIds · function · L122-L238 — async function mailboxLlmSimilarThreadIds(input: { workspaceId: string; seedThreadId: string; seedSubject: string; seedSnippet: string; seedSummary: string; viewName: string; instructions: string; candidates: SimilarThreadCandidate[]; }): Promise<{ threadIds: string[]; rationale?: string; error?: string }>
