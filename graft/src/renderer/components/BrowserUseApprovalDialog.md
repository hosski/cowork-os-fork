# src/renderer/components/BrowserUseApprovalDialog.tsx

- BrowserUseApprovalDetails · interface · L4-L9 — interface BrowserUseApprovalDetails
- BrowserUseApprovalDialogProps · interface · L11-L14 — interface BrowserUseApprovalDialogProps
- KeyboardTargetInfo · interface · L16-L21 — interface KeyboardTargetInfo
- readDetails · function · L23-L29 — function readDetails(approval: ApprovalRequest): BrowserUseApprovalDetails
- normalizeTargetLabel · function · L31-L46 — function normalizeTargetLabel(details: BrowserUseApprovalDetails): string
- isBrowserUseDomainApproval · function · L48-L50 — function isBrowserUseDomainApproval(approval: ApprovalRequest): boolean
- getBrowserUseApprovalAction · function · L52-L54 — function getBrowserUseApprovalAction(alwaysAllow: boolean): ApprovalResponseAction
- shouldIgnoreBrowserUseApprovalKeyboardShortcut · function · L56-L67 — function shouldIgnoreBrowserUseApprovalKeyboardShortcut( key: string, target?: KeyboardTargetInfo | null, ): boolean
- getKeyboardTargetInfo · function · L69-L90 — function getKeyboardTargetInfo(target: EventTarget | null): KeyboardTargetInfo
- getBrowserUseApprovalKeyboardAction · function · L92-L101 — function getBrowserUseApprovalKeyboardAction( key: string, alwaysAllow: boolean, target?: KeyboardTargetInfo | null, ): ApprovalResponseAction | null
- BrowserUseApprovalDialog · function · L103-L186 — function BrowserUseApprovalDialog({ approval, onRespond }: BrowserUseApprovalDialogProps)
- handleKeyDown · function · L123-L134 — handleKeyDown = (event: KeyboardEvent)
