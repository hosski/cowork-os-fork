# src/electron/context/kit-linter.ts

- KitLintIssue · interface · L4-L8 — interface KitLintIssue
- parseUpdatedDate · function · L10-L14 — function parseUpdatedDate(value: string | undefined): number | null
- getKitDocAgeDays · function · L16-L22 — function getKitDocAgeDays(doc: ParsedKitDoc, now = new Date()): number | null
- isKitDocStale · function · L24-L29 — function isKitDocStale(doc: ParsedKitDoc, contract: KitContract, now = new Date()): boolean
- lintKitDoc · function · L31-L97 — function lintKitDoc( doc: ParsedKitDoc, contract: KitContract, now = new Date(), ): KitLintIssue[]
