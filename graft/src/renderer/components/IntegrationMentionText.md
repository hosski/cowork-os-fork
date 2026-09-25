# src/renderer/components/IntegrationMentionText.tsx

- IntegrationMentionTextPart · type · L5-L7 — type IntegrationMentionTextPart = | { type: "text"; key: string; text: string } | { type: "mention"; key: string; mention: IntegrationMentionSelection; text: string };
- hasMentionBoundary · function · L9-L13 — function hasMentionBoundary(text: string, start: number, end: number): boolean
- buildIntegrationMentionTextParts · function · L15-L59 — function buildIntegrationMentionTextParts( text: string, mentions?: IntegrationMentionSelection[], ): IntegrationMentionTextPart[]
- hasRenderableIntegrationMentions · function · L61-L66 — function hasRenderableIntegrationMentions( text: string, mentions?: IntegrationMentionSelection[], ): boolean
- IntegrationMentionText · function · L68-L99 — function IntegrationMentionText({ text, mentions, }: { text: string; mentions?: IntegrationMentionSelection[]; })
