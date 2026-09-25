# src/renderer/components/GenericApprovalDialog.tsx

- ScopeKey · type · L10-L10 — type ScopeKey = "once" | "session" | "workspace" | "recurring" | "profile";
- ScopePair · interface · L12-L17 — interface ScopePair
- extractScopePairs · function · L28-L48 — function extractScopePairs( actions: { action: ApprovalResponseAction; label: string }[], ): ScopePair[] | null
- asRecord · function · L50-L54 — function asRecord(value: unknown): Record<string, unknown>
- readString · function · L56-L59 — function readString(record: Record<string, unknown>, key: string): string | null
- readParamString · function · L61-L63 — function readParamString(details: Record<string, unknown>, key: string): string | null
- toolNameForDetails · function · L65-L67 — function toolNameForDetails(details: Record<string, unknown>): string | null
- formatApprovalTypeLabel · function · L69-L79 — function formatApprovalTypeLabel(type: ApprovalType, toolName?: string | null): string
- titleForApproval · function · L81-L94 — function titleForApproval(type: ApprovalType, toolName?: string | null): string
- descriptionForApproval · function · L96-L110 — function descriptionForApproval( description: string, toolName?: string | null, appName?: string | null, ): string
- titleForType · function · L112-L139 — function titleForType(type: ApprovalType): string
- iconForType · function · L141-L162 — function iconForType(type: ApprovalType): string
- GenericApprovalDialogProps · interface · L164-L168 — interface GenericApprovalDialogProps
- GenericApprovalDialog · function · L170-L427 — function GenericApprovalDialog({ approval, onRespond, onApproveAllSession, }: GenericApprovalDialogProps)
