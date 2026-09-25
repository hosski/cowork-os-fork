# src/electron/agent/tool-semantics.ts

- ToolArtifactKind · type · L3-L3 — type ToolArtifactKind = "none" | "document" | "spreadsheet" | "presentation" | "file";
- ToolSemantics · interface · L5-L12 — interface ToolSemantics
- stripToolNamespace · function · L133-L142 — function stripToolNamespace(toolName: string): string
- normalizeToolName · function · L144-L162 — function normalizeToolName(toolName: string): { original: string; stripped: string; canonicalName: string; modified: boolean; aliasMatched: boolean; }
- getToolSemantics · function · L164-L167 — function getToolSemantics(toolName: string): ToolSemantics | null
- canonicalizeToolName · function · L169-L171 — function canonicalizeToolName(toolName: string): string
- isCanonicalWriteToolName · function · L187-L189 — function isCanonicalWriteToolName(toolName: string): boolean
- isFileMutationToolName · function · L191-L194 — function isFileMutationToolName(toolName: string): boolean
- isArtifactGenerationToolName · function · L196-L204 — function isArtifactGenerationToolName(toolName: string): boolean
- getToolDedupeClass · function · L206-L209 — function getToolDedupeClass(toolName: string): string
- getAllToolSemantics · function · L211-L213 — function getAllToolSemantics(): ToolSemantics[]
- getAliasesForCanonicalTool · function · L215-L218 — function getAliasesForCanonicalTool(canonicalName: string): string[]
- hasSemanticsAlias · function · L220-L223 — function hasSemanticsAlias(toolName: string): boolean
