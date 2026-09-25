# src/electron/agent/runtime/turn-transcript-normalizer.ts

- TurnTranscriptIssueKind · type · L3-L8 — type TurnTranscriptIssueKind = | "orphan_tool_result" | "missing_tool_result" | "duplicate_tool_use" | "duplicate_tool_result" | "mixed_tool_result_user_message";
- TurnTranscriptIssue · interface · L10-L15 — interface TurnTranscriptIssue
- NormalizedTurnTranscript · interface · L17-L21 — interface NormalizedTurnTranscript
- isToolUseBlock · function · L23-L27 — function isToolUseBlock(block: unknown): block is LLMToolUse
- isToolResultBlock · function · L29-L33 — function isToolResultBlock(block: unknown): block is LLMToolResult
- isToolResultOnlyUserMessage · function · L35-L43 — function isToolResultOnlyUserMessage(message: LLMMessage | undefined): boolean
- cloneMessage · function · L45-L52 — function cloneMessage(message: LLMMessage): LLMMessage
- collectAssistantToolUseIds · function · L54-L62 — function collectAssistantToolUseIds(message: LLMMessage): string[]
- splitUserToolResultMessage · function · L64-L82 — function splitUserToolResultMessage(message: LLMMessage): { toolResults: LLMToolResult[]; trailingContent: LLMContent[]; }
- normalizeTurnTranscript · function · L84-L241 — function normalizeTurnTranscript(messages: LLMMessage[]): NormalizedTurnTranscript
- assertNormalizedTurnTranscript · function · L243-L258 — function assertNormalizedTurnTranscript( messages: LLMMessage[], logger?: (message: string) => void, ): LLMMessage[]
