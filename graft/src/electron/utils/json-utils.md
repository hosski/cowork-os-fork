# src/electron/utils/json-utils.ts

- JsonStringifyOptions · type · L1-L5 — type JsonStringifyOptions = { indent?: number; sortKeys?: boolean; maxOutputChars?: number; };
- isPlainObject · function · L7-L11 — function isPlainObject(value: unknown): value is Record<string, unknown>
- sortKeysDeep · function · L13-L32 — function sortKeysDeep(value: unknown, seen: WeakSet<object>): unknown
- stableJsonStringify · function · L34-L56 — function stableJsonStringify(value: unknown, options?: JsonStringifyOptions): string
- JsonExtractOptions · type · L58-L62 — type JsonExtractOptions = { maxResults?: number; allowRepair?: boolean; maxCandidateChars?: number; };
- extractFencedBlocks · function · L64-L78 — function extractFencedBlocks(text: string): string[]
- scanBalancedJsonCandidates · function · L80-L163 — function scanBalancedJsonCandidates(text: string, maxCandidateChars: number): string[]
- reset · function · L90-L96 — reset = ()
- repairJsonString · function · L165-L180 — function repairJsonString(text: string): string
- tryParseJson · function · L182-L198 — function tryParseJson(text: string, allowRepair: boolean): unknown | undefined
- extractJsonValues · function · L200-L233 — function extractJsonValues(text: string, options?: JsonExtractOptions): unknown[]
- consider · function · L212-L220 — consider = (candidate: string)
