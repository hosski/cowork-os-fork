# src/shared/context-compaction.ts

- ContextCompactionTrigger · type · L10-L14 — type ContextCompactionTrigger = | "automatic" | "manual" | "continuation" | "capacity_recovery";
- ContextCompactionPhase · type · L16-L16 — type ContextCompactionPhase = "pre_turn" | "mid_turn" | "post_turn" | "manual";
- ContextCompactionStatus · type · L18-L18 — type ContextCompactionStatus = "started" | "completed" | "failed" | "interrupted";
- ContextCompactionEventType · type · L20-L23 — type ContextCompactionEventType = | "context_compaction_started" | "context_compaction_completed" | "context_compaction_failed";
- ContextCompactionEventPayload · interface · L25-L58 — interface ContextCompactionEventPayload
- ContextCompactionPolicyInput · interface · L66-L72 — interface ContextCompactionPolicyInput
- ContextCompactionPolicy · interface · L74-L82 — interface ContextCompactionPolicy
- clampRatio · function · L84-L87 — function clampRatio(value: number | undefined, fallback: number): number
- resolveContextCompactionPolicy · function · L94-L120 — function resolveContextCompactionPolicy( input: ContextCompactionPolicyInput, ): ContextCompactionPolicy
- isContextCompactionEventType · function · L122-L128 — function isContextCompactionEventType(value: unknown): value is ContextCompactionEventType
- isContextCompactionEventPayload · function · L130-L160 — function isContextCompactionEventPayload( value: unknown, ): value is ContextCompactionEventPayload
- compactPreview · function · L162-L169 — function compactPreview(value: unknown, maxCharacters = 360): string | undefined
