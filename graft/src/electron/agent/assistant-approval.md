# src/electron/agent/assistant-approval.ts

- normalizeText · function · L24-L28 — function normalizeText(value: unknown, maxLength = 480): string
- getToolName · function · L30-L34 — function getToolName(details: unknown): string
- shouldUseAssistantApprovalInput · function · L43-L70 — function shouldUseAssistantApprovalInput( approvalType: string, details: unknown, options?: { allowAutoApprove?: boolean; requireExplicitApproval?: boolean }, ): boolean
- isHighImpactApprovalDecision · function · L78-L102 — function isHighImpactApprovalDecision(approvalType: string, details?: unknown): boolean
- buildAssistantApprovalRequest · function · L104-L143 — function buildAssistantApprovalRequest( approvalType: string, description: string, details?: unknown, ): RequestUserInputArgs
- buildAssistantApprovalMessage · function · L145-L153 — function buildAssistantApprovalMessage( approvalType: string, description: string, details?: unknown, ): string
- isAssistantApprovalInputRequest · function · L155-L159 — function isAssistantApprovalInputRequest(request: InputRequest | undefined): boolean
- parseAssistantApprovalAnswer · function · L161-L166 — function parseAssistantApprovalAnswer( answers: InputRequest["answers"] | undefined, ): boolean
