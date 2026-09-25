# src/shared/tool-call-text-sanitizer.ts

- ToolCallTextSanitizationResult · interface · L1-L5 — interface ToolCallTextSanitizationResult
- maskMarkdownCodeExamples · function · L76-L92 — function maskMarkdownCodeExamples(input: string): string
- isToolCallExplanationContext · function · L94-L97 — function isToolCallExplanationContext(input: string, matchIndex: number): boolean
- hasStructuredToolCallPrefix · function · L99-L111 — function hasStructuredToolCallPrefix(input: string, allowPartial: boolean): boolean
- hasStructuredInvokeCall · function · L113-L129 — function hasStructuredInvokeCall(input: string): boolean
- UnexecutedToolCallDetectionOptions · interface · L131-L134 — interface UnexecutedToolCallDetectionOptions
- responseLooksLikeUnexecutedToolCall · function · L142-L154 — function responseLooksLikeUnexecutedToolCall( raw: string, options: UnexecutedToolCallDetectionOptions = {}, ): boolean
- looksLikePlainToolTranscript · function · L156-L166 — function looksLikePlainToolTranscript(input: string): boolean
- stripFencedToolBlocks · function · L168-L179 — function stripFencedToolBlocks(input: string): { text: string; removed: number }
- looksLikePlainToolTranscriptLine · function · L181-L193 — function looksLikePlainToolTranscriptLine(line: string): boolean
- stripLeadingPlainToolTranscriptLines · function · L195-L211 — function stripLeadingPlainToolTranscriptLines(input: string): { text: string; removed: number }
- stripLeadingPlainToolTranscriptPrefix · function · L213-L238 — function stripLeadingPlainToolTranscriptPrefix(input: string): { text: string; removed: number }
- stripEmptyObjectThenInlineTranscriptPrefix · function · L240-L270 — function stripEmptyObjectThenInlineTranscriptPrefix(input: string): { text: string; removed: number; }
- sanitizeToolCallTextFromAssistant · function · L272-L335 — function sanitizeToolCallTextFromAssistant(raw: string): ToolCallTextSanitizationResult
