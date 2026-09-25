# src/shared/message-shortcuts.ts

- MessageAppShortcutName · type · L1-L12 — type MessageAppShortcutName = | "schedule" | "clear" | "plan" | "cost" | "goal" | "multitask" | "compact" | "side" | "doctor" | "undo" | "review";
- MessageAppShortcutAction · type · L14-L22 — type MessageAppShortcutAction = | "insert" | "clear" | "plan" | "cost" | "side" | "diagnostic" | "safe-workflow" | "review";
- MessageAppShortcut · interface · L24-L29 — interface MessageAppShortcut
- isValidSlashCommandName · function · L104-L106 — function isValidSlashCommandName(value: string): boolean
- normalizeSlashCommandName · function · L108-L113 — function normalizeSlashCommandName(value: string): string
- getMessageAppShortcut · function · L115-L118 — function getMessageAppShortcut(name: string): MessageAppShortcut | undefined
- parseLeadingMessageAppShortcut · function · L120-L135 — function parseLeadingMessageAppShortcut(input: string): { matched: boolean; shortcut?: MessageAppShortcut; args?: string; }
