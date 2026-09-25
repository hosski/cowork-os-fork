# src/electron/gateway/remote-command-registry.ts

- RemoteCommandActiveTaskPolicy · type · L1-L6 — type RemoteCommandActiveTaskPolicy = | "dispatch" | "cancelTask" | "unlinkTask" | "rejectWhileActive" | "taskFollowup";
- RemoteCommandDefinition · interface · L8-L17 — interface RemoteCommandDefinition
- NativeRemoteCommandDefinition · interface · L19-L26 — interface NativeRemoteCommandDefinition
- normalizeRemoteCommandName · function · L420-L426 — function normalizeRemoteCommandName(command: string): string
- resolveRemoteCommand · function · L428-L432 — function resolveRemoteCommand(command: string): RemoteCommandDefinition | undefined
- getCanonicalRemoteCommand · function · L434-L437 — function getCanonicalRemoteCommand(command: string): string | undefined
- listRemoteCommands · function · L439-L441 — function listRemoteCommands(): RemoteCommandDefinition[]
- listRemoteCommandCategories · function · L443-L449 — function listRemoteCommandCategories(): string[]
- listNativeRemoteCommands · function · L451-L476 — function listNativeRemoteCommands( names: readonly string[] = CORE_NATIVE_REMOTE_COMMAND_NAMES, ): NativeRemoteCommandDefinition[]
