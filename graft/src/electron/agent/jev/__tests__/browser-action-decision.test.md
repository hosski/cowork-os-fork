# src/electron/agent/jev/__tests__/browser-action-decision.test.ts

- candidate · function · L13-L22 — function candidate( action: Record<string, unknown>, overrides: Partial<BrowserActionCandidate> = {}, ): BrowserActionCandidate
- response · function · L24-L72 — function response( choice: string, indexes: readonly number[] = [0, 1], values: Partial<{ choiceConfidence: number; choiceProbability: number; stateSufficient: number; snapshotCurrent: number; sensitiveAction: number; destructiveAction: number; candidateProbabilities: Record<number, number>; }> = {}, ): JevResponse
- input · function · L74-L83 — function input( provider: BrowserActionDecisionCallback, candidates: readonly BrowserActionCandidate[] = [ candidate({ kind: "click", ref: "button-save" }), candidate({ kind: "fill", ref: "search", value: "invoices" }), ], options?: BrowserActionSelectorInput["options"], ): BrowserActionSelectorInput
