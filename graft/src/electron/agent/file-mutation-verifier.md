# src/electron/agent/file-mutation-verifier.ts

- MutationRecord · interface · L1-L7 — interface MutationRecord
- FileMutationVerifier · class · L17-L84 — class FileMutationVerifier
- recordMutationResult · method · L20-L38 — recordMutationResult(opts: { toolName: string; input: unknown; succeeded: boolean; error?: string; }): void
- getFailedMutations · method · L40-L47 — getFailedMutations(): MutationRecord[]
- buildAdvisoryFooter · method · L49-L67 — buildAdvisoryFooter(): string | null
- reset · method · L69-L71 — reset(): void
- extractTargetPath · method · L73-L83 — private extractTargetPath(toolName: string, input: unknown): string | null
