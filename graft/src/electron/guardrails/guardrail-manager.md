# src/electron/guardrails/guardrail-manager.ts

- containsShellControlOperator · function · L95-L97 — function containsShellControlOperator(command: string): boolean
- GuardrailManager · class · L99-L439 — class GuardrailManager
- initialize · method · L107-L113 — static initialize(): void
- migrateFromLegacyFile · method · L118-L170 — private static migrateFromLegacyFile(): void
- loadSettings · method · L175-L195 — static loadSettings(): GuardrailSettings
- saveSettings · method · L200-L214 — static saveSettings(settings: GuardrailSettings): void
- clearCache · method · L219-L221 — static clearCache(): void
- getDefaults · method · L226-L228 — static getDefaults(): GuardrailSettings
- isCommandBlocked · method · L234-L260 — static isCommandBlocked(command: string): { blocked: boolean; pattern?: string }
- globToRegex · method · L266-L272 — private static globToRegex(pattern: string): RegExp
- isCommandTrusted · method · L278-L312 — static isCommandTrusted(command: string): { trusted: boolean; pattern?: string }
- isDomainAllowed · method · L318-L351 — static isDomainAllowed(url: string): boolean
- isFileSizeExceeded · method · L358-L375 — static isFileSizeExceeded(sizeInBytes: number): { exceeded: boolean; sizeMB: number; limitMB: number; }
- isTokenBudgetExceeded · method · L380-L396 — static isTokenBudgetExceeded(tokensUsed: number): { exceeded: boolean; used: number; limit: number; }
- isCostBudgetExceeded · method · L401-L417 — static isCostBudgetExceeded(costIncurred: number): { exceeded: boolean; cost: number; limit: number; }
- isIterationLimitExceeded · method · L422-L438 — static isIterationLimitExceeded(iterations: number): { exceeded: boolean; iterations: number; limit: number; }
