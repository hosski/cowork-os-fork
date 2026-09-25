# src/shared/approval-command-preview.ts

- ApprovalCommandPreview · interface · L1-L4 — interface ApprovalCommandPreview
- ApprovalCommandPreviewOptions · interface · L6-L10 — interface ApprovalCommandPreviewOptions
- pluralize · function · L16-L18 — function pluralize(count: number, singular: string, plural: string): string
- collapseHeredocBodies · function · L20-L68 — function collapseHeredocBodies( lines: string[], heredocPreviewLines: number, ): { lines: string[]; truncated: boolean }
- buildApprovalCommandPreview · function · L70-L103 — function buildApprovalCommandPreview( command: string, options: ApprovalCommandPreviewOptions = {}, ): ApprovalCommandPreview
