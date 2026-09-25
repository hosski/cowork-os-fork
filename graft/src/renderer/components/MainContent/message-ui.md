# src/renderer/components/MainContent/message-ui.tsx

- DeferredMarkdown · function · L105-L121 — function DeferredMarkdown({ children, components, withBreaks = false, }: { children: string; components?: unknown; withBreaks?: boolean; })
- resolveSafeCollapsedBubbleHeight · function · L123-L135 — function resolveSafeCollapsedBubbleHeight( lineBottoms: number[], maxHeight = COLLAPSED_USER_BUBBLE_MAX_HEIGHT, minHeight = COLLAPSED_USER_BUBBLE_MIN_HEIGHT, ): number
- collectTextLineBottoms · function · L137-L158 — function collectTextLineBottoms(root: HTMLElement): number[]
- getSafeCollapsedUserBubbleHeight · function · L160-L162 — function getSafeCollapsedUserBubbleHeight(root: HTMLElement): number
- HighlightedCodePreview · function · L164-L176 — function HighlightedCodePreview({ code, language }: { code: string; language?: string })
- normalizeQuotedAssistantMarkdownPreview · function · L178-L190 — function normalizeQuotedAssistantMarkdownPreview( message: string, maxChars?: number, ): string
- summarizeQuotedAssistantMessage · function · L192-L199 — function summarizeQuotedAssistantMessage( message: string, maxChars = MAX_QUOTED_ASSISTANT_PREVIEW_CHARS, ): string
- createQuotedAssistantMessage · function · L201-L217 — function createQuotedAssistantMessage( message: string, eventId?: string, taskId?: string, ): QuotedAssistantMessage | null
- isLastAssistantMessageEvent · function · L219-L224 — function isLastAssistantMessageEvent( event: { id?: TaskEvent["id"] }, lastAssistantMessage?: { id?: TaskEvent["id"] } | null, ): boolean
- handleCopy · function · L230-L238 — handleCopy = async ()
- CollapsibleUserBubble · function · L324-L379 — function CollapsibleUserBubble({ children }: { children: React.ReactNode })
- stopCurrentAudio · function · L386-L407 — function stopCurrentAudio()
- handleClick · function · L420-L488 — handleClick = async ()
- normalizeCommitmentText · function · L541-L561 — normalizeCommitmentText = (value: unknown): string | null
- UserMessageText · function · L563-L581 — function UserMessageText({ text, integrationMentions, markdownComponents, }: { text: string; integrationMentions?: IntegrationMentionSelection[]; markdownComponents: Any; })
- getIntegrationMentionsSignature · function · L583-L587 — function getIntegrationMentionsSignature(mentions?: IntegrationMentionSelection[]): string
