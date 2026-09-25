# src/electron/gateway/remote-command-normalizer.ts

- RemoteCommandNormalizationSource · type · L4-L4 — type RemoteCommandNormalizationSource = "plain" | "slash" | "natural";
- RemoteCommandNormalizationResult · interface · L6-L10 — interface RemoteCommandNormalizationResult
- normalizeRemoteIncomingCommand · function · L12-L31 — function normalizeRemoteIncomingCommand(input: { channelType: ChannelType; text: string; naturalCommandText?: string | null; }): RemoteCommandNormalizationResult
- normalizeSlashText · function · L33-L49 — function normalizeSlashText( text: string, source: RemoteCommandNormalizationSource, ): RemoteCommandNormalizationResult
