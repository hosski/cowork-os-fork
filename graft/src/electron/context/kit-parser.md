# src/electron/context/kit-parser.ts

- ParsedKitDoc · interface · L8-L17 — interface ParsedKitDoc
- splitFrontmatter · function · L19-L44 — function splitFrontmatter(raw: string): { meta: Record<string, string>; body: string }
- sanitizeKitMarkdown · function · L46-L49 — function sanitizeKitMarkdown(raw: string): string
- truncateKitText · function · L51-L65 — function truncateKitText( text: string, maxChars: number, ): { value: string; truncated: boolean; }
- parseKitDocumentFromString · function · L67-L101 — function parseKitDocumentFromString( raw: string, contract: KitContract, file = contract.file, relPath?: string, ): ParsedKitDoc | null
- parseKitDocument · function · L103-L114 — function parseKitDocument( absPath: string, contract: KitContract, relPath?: string, ): ParsedKitDoc | null
