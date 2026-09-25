# src/renderer/components/IntegrationMentionIcon.tsx

- IconNode · type · L3-L6 — type IconNode = { tag: "circle" | "line" | "path" | "polygon" | "polyline" | "rect"; attrs: Record<string, string | number>; };
- IntegrationIconMeta · type · L8-L13 — type IntegrationIconMeta = { glyph: string; bg: string; fg?: string; nodes?: IconNode[]; };
- fallbackGlyph · function · L250-L254 — function fallbackGlyph(label: string): string
- getIntegrationMentionIconMeta · function · L256-L264 — function getIntegrationMentionIconMeta(iconKey: string | undefined, label: string)
- SvgIcon · function · L266-L282 — function SvgIcon({ nodes }: { nodes: IconNode[] })
- appendSvgIcon · function · L284-L305 — function appendSvgIcon(target: HTMLElement, nodes: IconNode[])
- renderIntegrationMentionIconContent · function · L307-L321 — function renderIntegrationMentionIconContent( target: HTMLElement, iconKey: string | undefined, label: string, )
- IntegrationMentionIcon · function · L323-L342 — function IntegrationMentionIcon({ iconKey, label, size = "sm", }: { iconKey?: string; label: string; size?: "xs" | "sm"; })
