# src/electron/agent/executor-prompt-sections.ts

- PromptSection · interface · L6-L17 — interface PromptSection
- PromptCompositionResult · interface · L19-L25 — interface PromptCompositionResult
- hashPromptSectionInput · function · L27-L31 — function hashPromptSectionInput(value: unknown): string
- buildPromptSectionCacheKey · function · L33-L42 — function buildPromptSectionCacheKey(section: PromptSection): string | null
- resolvePromptSections · function · L44-L70 — async function resolvePromptSections( sections: PromptSection[], sessionCache?: Map<string, string | null>, ): Promise<PromptSection[]>
- buildModeDomainContract · function · L99-L119 — function buildModeDomainContract( executionMode: ExecutionMode, taskDomain: TaskDomain, ): string
- budgetSection · function · L121-L133 — function budgetSection(section: PromptSection, truncatedSections: string[]): string
- composePromptSections · function · L135-L217 — function composePromptSections( sections: PromptSection[], totalBudgetTokens?: number, ): PromptCompositionResult
