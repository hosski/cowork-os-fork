# src/renderer/components/HighlightedCode.tsx

- escapeHtml · function · L41-L48 — function escapeHtml(text: string): string
- sanitizeHighlightedHtml · function · L50-L105 — function sanitizeHighlightedHtml(html: string): string
- appendSanitized · function · L64-L98 — appendSanitized = (node: ChildNode, parent: HTMLElement): void
- highlightCode · function · L107-L121 — function highlightCode(code: string, language?: string): string | null
- HighlightedCodeBlock · function · L123-L149 — function HighlightedCodeBlock({ code, language, className, codeProps, }: { code: string; language?: string; className?: string; codeProps?: Record<string, unknown>; })
- HighlightedCodePreview · function · L151-L165 — function HighlightedCodePreview({ code, language }: { code: string; language?: string })
