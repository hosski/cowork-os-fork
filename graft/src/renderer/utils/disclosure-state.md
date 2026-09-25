# src/renderer/utils/disclosure-state.ts

- DisclosureIntent · type · L1-L1 — type DisclosureIntent = "auto" | "expanded" | "collapsed";
- DisclosureScope · type · L2-L2 — type DisclosureScope = "group" | "activity";
- DisclosureIntentState · interface · L4-L7 — interface DisclosureIntentState
- DisclosureIntentAction · type · L9-L23 — type DisclosureIntentAction = | { type: "set"; scope: DisclosureScope; id: string; intent: DisclosureIntent; } | { type: "toggle"; scope: DisclosureScope; id: string; isCurrent?: boolean; } | { type: "restore"; state: DisclosureIntentState } | { type: "reset" };
- scopeKey · function · L32-L34 — function scopeKey(scope: DisclosureScope): keyof DisclosureIntentState
- withBoundedEntry · function · L36-L50 — function withBoundedEntry( entries: Record<string, DisclosureIntent>, id: string, intent: DisclosureIntent, ): Record<string, DisclosureIntent>
- resolveDisclosureExpanded · function · L52-L64 — function resolveDisclosureExpanded(args: { intent?: DisclosureIntent; isCurrent?: boolean; /** * Controls whether an uncustomized current item opens automatically. Summary * mode uses false so the live activity stays compact until the user opens it. */ defaultExpanded?: boolean; }): boolean
- disclosureIntentReducer · function · L66-L90 — function disclosureIntentReducer( state: DisclosureIntentState, action: DisclosureIntentAction, ): DisclosureIntentState
- getDisclosureIntent · function · L92-L98 — function getDisclosureIntent( state: DisclosureIntentState, scope: DisclosureScope, id: string, ): DisclosureIntent
