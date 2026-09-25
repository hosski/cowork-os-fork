# src/renderer/components/JsonlPreview.tsx

- JsonlRecord · type · L1-L4 — type JsonlRecord = { lineNumber: number; value: unknown; };
- toDisplayText · function · L22-L37 — function toDisplayText(value: unknown, maxLength = 180): string
- readStringField · function · L39-L46 — function readStringField(record: Record<string, unknown>, keys: string[]): string
- getLevelTone · function · L48-L55 — function getLevelTone(level: string): string
- parseJsonlPreview · function · L57-L76 — function parseJsonlPreview(content: string): JsonlRecord[] | null
- JsonlPreview · function · L78-L150 — function JsonlPreview({ content, truncated }: { content: string; truncated?: boolean })
