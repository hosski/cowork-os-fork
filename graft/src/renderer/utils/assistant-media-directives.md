# src/renderer/utils/assistant-media-directives.ts

- AssistantMediaDirective · type · L1-L4 — type AssistantMediaDirective = { type: "video" | "html" | "frame"; path: string; };
- decodeQuotedValue · function · L14-L17 — function decodeQuotedValue(value: string): string
- decodeHtmlAttrValue · function · L19-L28 — function decodeHtmlAttrValue(value: string): string
- parseDirectiveLine · function · L30-L68 — function parseDirectiveLine( line: string, type: AssistantMediaDirective["type"], ): AssistantMediaDirective | null
- parseRichFrameTagLine · function · L70-L87 — function parseRichFrameTagLine(line: string): AssistantMediaDirective | null
- extractAssistantMediaDirectives · function · L89-L116 — function extractAssistantMediaDirectives(message: string): AssistantMediaDirective[]
- hasAssistantMediaDirective · function · L118-L120 — function hasAssistantMediaDirective(message: string): boolean
