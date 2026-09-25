# src/renderer/components/MailComposeFrame.tsx

- MailComposeFrameProps · type · L20-L22 — type MailComposeFrameProps = { frame: ChatInlineFrame; };
- AutoMailComposeFrameProps · type · L24-L30 — type AutoMailComposeFrameProps = { eventId?: string; taskId?: string; assistantMessage: string; sourceUserMessage?: string; allowCreate: boolean; };
- EditableDraftState · type · L32-L39 — type EditableDraftState = { to: string; cc: string; bcc: string; subject: string; bodyText: string; identityId: string; };
- recipientToString · function · L41-L45 — function recipientToString(recipient: MailboxRecipientInput): string
- formatRecipients · function · L47-L49 — function formatRecipients(recipients: readonly MailboxRecipientInput[] = []): string
- parseRecipientToken · function · L51-L62 — function parseRecipientToken(token: string): MailboxRecipientInput | null
- parseRecipients · function · L64-L69 — function parseRecipients(value: string): MailboxRecipientInput[]
- editableFromDraft · function · L71-L80 — function editableFromDraft(draft: MailboxComposeDraft): EditableDraftState
- buildDraftPatch · function · L82-L92 — function buildDraftPatch(editable: EditableDraftState): MailboxComposeDraftPatch
- draftStatusIsLocked · function · L96-L98 — function draftStatusIsLocked(status: MailboxComposeDraftStatus): boolean
- draftStatusIsTransient · function · L100-L102 — function draftStatusIsTransient(status: MailboxComposeDraftStatus): boolean
- providerLabel · function · L104-L117 — function providerLabel(provider?: MailboxProvider): string
- statusLabel · function · L119-L139 — function statusLabel(status: MailboxComposeDraftStatus): string
- findAccount · function · L141-L148 — function findAccount( frame: ChatInlineFrame, draft: MailboxComposeDraft | null, clientState: MailboxClientState | null, ): MailboxAccount | undefined
- identitiesForAccount · function · L150-L156 — function identitiesForAccount( account: MailboxAccount | undefined, clientState: MailboxClientState | null, ): MailboxIdentity[]
