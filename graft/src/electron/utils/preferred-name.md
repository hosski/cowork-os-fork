# src/electron/utils/preferred-name.ts

- collapseWhitespace · function · L57-L61 — function collapseWhitespace(value: string): string
- normalizeToken · function · L63-L65 — function normalizeToken(token: string): string
- tokenizeName · function · L67-L76 — function tokenizeName(rawName: string, maxTokens: number): string[]
- joinNameTokens · function · L78-L80 — function joinNameTokens(tokens: string[]): string
- normalizePreferredNameCandidate · function · L82-L84 — function normalizePreferredNameCandidate(rawName: string, maxTokens = 3): string
- isLikelyPreferredName · function · L86-L104 — function isLikelyPreferredName(name: string): boolean
- sanitizeInferredPreferredName · function · L106-L110 — function sanitizeInferredPreferredName(name: string | null | undefined): string | undefined
- sanitizeStoredPreferredName · function · L112-L133 — function sanitizeStoredPreferredName(name: string | null | undefined): string | undefined
- sanitizePreferredName · function · L135-L137 — function sanitizePreferredName(name: string | null | undefined): string | undefined
- extractPreferredNameFromMessage · function · L139-L157 — function extractPreferredNameFromMessage(message: string): string | null
- sanitizePreferredNameMemoryLine · function · L159-L169 — function sanitizePreferredNameMemoryLine(line: string): string | null
