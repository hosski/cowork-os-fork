# src/electron/gateway/channels/__tests__/email-client.test.ts

- encodeIso88599Text · function · L13-L22 — function encodeIso88599Text(value: string): string
- parseEmailResponse · function · L24-L30 — function parseEmailResponse( client: EmailClient, response: string, uid: number, ): EmailMessage | null
- EmailClientTestAccess · type · L32-L41 — type EmailClientTestAccess = EmailClient & { connected: boolean; imapSocket?: { destroyed?: boolean; destroy: () => void; write: (command: string) => void }; parseEmailResponse(response: string, uid: number): EmailMessage | null; connectImap(): Promise<void>; selectMailbox(): Promise<void>; disconnectImap(): Promise<void>; imapCommand(command: string): Promise<string>; fetchEmail(uid: number): Promise<EmailMessage | null>; };
- getTestAccess · function · L43-L45 — function getTestAccess(client: EmailClient): EmailClientTestAccess
