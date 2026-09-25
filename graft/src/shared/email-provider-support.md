# src/shared/email-provider-support.ts

- normalizeEmailDomain · function · L4-L13 — function normalizeEmailDomain(email: string | undefined): string | null
- isMicrosoftConsumerEmailDomain · function · L15-L27 — function isMicrosoftConsumerEmailDomain(domain: string | null | undefined): boolean
- isMicrosoftConsumerEmailAddress · function · L29-L31 — function isMicrosoftConsumerEmailAddress(email: string | undefined): boolean
- getUnsupportedManualEmailSetupMessage · function · L33-L43 — function getUnsupportedManualEmailSetupMessage(config: { email?: string; imapHost?: string; smtpHost?: string; }): string | null
