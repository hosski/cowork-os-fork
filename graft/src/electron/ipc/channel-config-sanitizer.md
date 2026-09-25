# src/electron/ipc/channel-config-sanitizer.ts

- PublicChannelPayload · type · L4-L7 — type PublicChannelPayload = Omit<Channel, "config" | "securityConfig"> & { securityMode: Channel["securityConfig"]["mode"]; config?: Record<string, unknown>; };
- getHiddenKeysRegex · function · L12-L12 — getHiddenKeysRegex = (): RegExp
- sanitizeChannelConfig · function · L14-L47 — sanitizeChannelConfig = ( type: string, config: unknown, ): Record<string, unknown> | undefined
- toPublicChannel · function · L49-L64 — toPublicChannel = ( channel: Channel, statusOverride?: Channel["status"], ): PublicChannelPayload
