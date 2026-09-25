# src/electron/agent/tools/browser-use-approval-context.ts

- AnyRecord · type · L3-L3 — type AnyRecord = Record<string, unknown>;
- BrowserUseDomainApprovalDetails · interface · L5-L16 — interface BrowserUseDomainApprovalDetails
- BrowserUseApprovalTargetArgs · interface · L18-L22 — interface BrowserUseApprovalTargetArgs
- asRecord · function · L24-L26 — function asRecord(value: unknown): AnyRecord
- readString · function · L28-L31 — function readString(value: unknown, key: string): string
- parseHttpTarget · function · L33-L47 — function parseHttpTarget(rawUrl: unknown): { url: string; origin: string; domain: string } | null
- isBrowserUseToolName · function · L51-L56 — function isBrowserUseToolName(toolName: string): boolean
- resolveBrowserUseApprovalTarget · function · L58-L74 — function resolveBrowserUseApprovalTarget({ toolName, input, currentUrl, }: BrowserUseApprovalTargetArgs): { url: string; origin: string; domain: string } | null
- buildBrowserUseDomainApprovalDetails · function · L76-L94 — function buildBrowserUseDomainApprovalDetails( args: BrowserUseApprovalTargetArgs, ): BrowserUseDomainApprovalDetails | null
