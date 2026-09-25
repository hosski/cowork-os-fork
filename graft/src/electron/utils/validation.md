# src/electron/utils/validation.ts

- isValidWorkspaceId · function · L351-L352 — isValidWorkspaceId = (workspaceId: string): boolean
- DiscordSupervisorConfigRefinementValue · type · L1380-L1386 — type DiscordSupervisorConfigRefinementValue = { enabled?: boolean; coordinationChannelId?: string; workerAgentRoleId?: string; supervisorAgentRoleId?: string; peerBotUserIds?: string[]; };
- addDiscordSupervisorConfigRefinement · function · L1388-L1424 — function addDiscordSupervisorConfigRefinement( schema: z.ZodObject<z.ZodRawShape>, ): z.ZodObject<z.ZodRawShape>
- getOptionalString · function · L1621-L1623 — getOptionalString = (value: unknown): string | undefined
- isSafeLoomMailboxFolder · function · L1625-L1634 — isSafeLoomMailboxFolder = (value: unknown): boolean
- EmailSchemaMode · type · L1671-L1671 — type EmailSchemaMode = keyof typeof EMAIL_FIELD_KEY_MAP;
- _EmailFieldKeys · type · L1672-L1672 — type _EmailFieldKeys = (typeof EMAIL_FIELD_KEY_MAP)[EmailSchemaMode];
- createEmailTransportSchema · function · L1709-L1714 — createEmailTransportSchema = (mode: EmailSchemaMode): z.ZodObject<z.ZodRawShape>
- createEmailAddExtras · function · L1716-L1731 — createEmailAddExtras = (): z.ZodRawShape
- createEmailUpdateExtras · function · L1733-L1766 — createEmailUpdateExtras = (): z.ZodRawShape
- validateEmailChannelConfigByProtocol · function · L1768-L1875 — validateEmailChannelConfigByProtocol = ( data: Record<string, unknown>, ctx: z.RefinementCtx, fieldMap: { protocol: "protocol" | "emailProtocol"; authMethod: string; oauthProvider: string; oauthClientId: string; accessToken: string; refreshToken: string; email: string; password: string; imapHost: string; smtpHost: string; loomBaseUrl: string; loomAccessToken: string; }, ): void
- getAllowedHealthImportRoots · function · L2755-L2768 — function getAllowedHealthImportRoots(): string[]
- isPathAllowedForHealthImport · function · L2770-L2774 — function isPathAllowedForHealthImport(filePath: string): boolean
- normalizeCommunicationStyleInput · function · L2920-L2943 — function normalizeCommunicationStyleInput(value: unknown): unknown
- validateInput · function · L3143-L3155 — function validateInput<T>(schema: z.ZodSchema<T>, input: unknown, context?: string): T
