# src/electron/mailbox/MailboxProviderClient.ts

- MailboxProviderClient · interface · L12-L31 — interface MailboxProviderClient
- resolveMailboxProviderBackend · function · L33-L42 — function resolveMailboxProviderBackend(input: { provider: MailboxProvider; capabilities?: readonly string[]; }): MailboxProviderBackend
- getMailboxProviderCapabilities · function · L44-L100 — function getMailboxProviderCapabilities( backend: MailboxProviderBackend, ): MailboxProviderCapability[]
- mergeMailboxCapabilities · function · L102-L111 — function mergeMailboxCapabilities( stored: readonly string[] | undefined, backend: MailboxProviderBackend, ): MailboxProviderCapability[]
- isMailboxProviderCapability · function · L113-L134 — function isMailboxProviderCapability(value: string): value is MailboxProviderCapability
