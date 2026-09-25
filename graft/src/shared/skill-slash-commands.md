# src/shared/skill-slash-commands.ts

- SkillSlashCommandName · type · L11-L11 — type SkillSlashCommandName = "simplify" | "batch" | "llm-wiki";
- SkillSlashExternalMode · type · L12-L12 — type SkillSlashExternalMode = "confirm" | "execute" | "none";
- SkillSlashScope · type · L13-L13 — type SkillSlashScope = "current" | "workspace" | "path";
- SkillSlashLlmWikiMode · type · L14-L14 — type SkillSlashLlmWikiMode = "auto" | "init" | "ingest" | "query" | "lint" | "refresh";
- SkillSlashLlmWikiObsidianMode · type · L15-L15 — type SkillSlashLlmWikiObsidianMode = "auto" | "on" | "off";
- ParsedSkillSlashCommand · interface · L17-L30 — interface ParsedSkillSlashCommand
- SkillSlashParseResult · interface · L32-L36 — interface SkillSlashParseResult
- InlineSkillSlashParseResult · interface · L38-L40 — interface InlineSkillSlashParseResult extends SkillSlashParseResult
- tokenizeArgs · function · L42-L99 — function tokenizeArgs(input: string): string[]
- splitLongFlagToken · function · L101-L117 — function splitLongFlagToken(token: string): { key: string; inlineValue: string | null } | null
- parseCommandTail · function · L119-L312 — function parseCommandTail(commandName: string, tail: string, raw: string): SkillSlashParseResult
- consumeFlagValue · function · L146-L155 — consumeFlagValue = (): string | null
- parseLeadingSkillSlashCommand · function · L314-L321 — function parseLeadingSkillSlashCommand(input: string): SkillSlashParseResult
- parseInlineSkillSlashChain · function · L323-L365 — function parseInlineSkillSlashChain(input: string): InlineSkillSlashParseResult
