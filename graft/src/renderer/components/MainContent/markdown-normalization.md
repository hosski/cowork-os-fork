# src/renderer/components/MainContent/markdown-normalization.ts

- stripHttpScheme · function · L83-L83 — stripHttpScheme = (value: string): string
- stripHtmlTags · function · L87-L92 — stripHtmlTags = (value: string): string
- extractDomainFromUrl · function · L94-L109 — extractDomainFromUrl = (raw: string): string
- isXComLink · function · L111-L126 — function isXComLink(raw: string): boolean
- looksLikeLocalFilePath · function · L128-L148 — looksLikeLocalFilePath = (value: string): boolean
- protectGlobTokens · function · L162-L164 — function protectGlobTokens(text: string): string
- transformOutsideFencedCodeBlocks · function · L166-L174 — function transformOutsideFencedCodeBlocks( text: string, transform: (segment: string) => string, ): string
- escapeMarkdownLinkText · function · L176-L178 — function escapeMarkdownLinkText(text: string): string
- escapeMarkdownHref · function · L180-L182 — function escapeMarkdownHref(href: string): string
- autolinkJsonPathPayloadLines · function · L184-L206 — function autolinkJsonPathPayloadLines(text: string): string
- normalizeSourcesSection · function · L213-L254 — function normalizeSourcesSection(text: string): string
- normalizeMarkdownForDisplay · function · L256-L264 — function normalizeMarkdownForDisplay(text: string): string
- normalizeTimelineTitleMarkdownForDisplay · function · L266-L277 — function normalizeTimelineTitleMarkdownForDisplay(text: string): string
- hasDisplayableAssistantText · function · L284-L286 — function hasDisplayableAssistantText(message: string): boolean
- cleanAssistantMessageForDisplay · function · L288-L295 — function cleanAssistantMessageForDisplay(message: string): string
