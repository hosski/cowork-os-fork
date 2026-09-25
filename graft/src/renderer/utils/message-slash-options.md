# src/renderer/utils/message-slash-options.ts

- PluginSlashCommandAlias · type · L11-L15 — type PluginSlashCommandAlias = { name: string; description?: string; skillId: string; };
- SkillSlashCommandOption · type · L17-L27 — type SkillSlashCommandOption = { kind: "skill"; id: string; commandName: string; name: string; description: string; icon: string; hasRequiredParams: boolean; hasOptionalParams: boolean; skill: CustomSkill; };
- AppSlashCommandOption · type · L29-L37 — type AppSlashCommandOption = { kind: "app"; id: string; commandName: string; name: string; description: string; icon: string; shortcut: MessageAppShortcut; };
- BuiltinSlashCommandOption · type · L39-L47 — type BuiltinSlashCommandOption = { kind: "builtin"; id: string; commandName: string; name: string; description: string; icon: string; command: string; };
- SlashCommandOption · type · L49-L52 — type SlashCommandOption = | AppSlashCommandOption | SkillSlashCommandOption | BuiltinSlashCommandOption;
- SlashCommandTextTarget · type · L54-L57 — type SlashCommandTextTarget = { start: number; end: number; };
- applySlashCommandSelection · function · L59-L78 — function applySlashCommandSelection(params: { value: string; target: SlashCommandTextTarget; commandName: string; }): { nextValue: string; cursorPosition: number }
- skillHasRequiredParams · function · L80-L82 — function skillHasRequiredParams(skill: CustomSkill): boolean
- skillHasOptionalParams · function · L84-L86 — function skillHasOptionalParams(skill: CustomSkill): boolean
- buildMessageSlashOptions · function · L88-L188 — function buildMessageSlashOptions(params: { query: string; customSkills: CustomSkill[]; pluginSlashCommands: PluginSlashCommandAlias[]; includeOnboarding: boolean; limit?: number; }): SlashCommandOption[]
- resolveSlashSelectedIndex · function · L190-L193 — function resolveSlashSelectedIndex(optionCount: number, requestedIndex: number): number
