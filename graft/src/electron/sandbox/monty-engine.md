# src/electron/sandbox/monty-engine.ts

- MontyResourceLimits · type · L4-L10 — type MontyResourceLimits = { maxAllocations?: number; maxDurationSecs?: number; maxMemory?: number; gcInterval?: number; maxRecursionDepth?: number; };
- MontyRunError · type · L12-L17 — type MontyRunError = { kind: "load" | "syntax" | "typing" | "runtime" | "unknown"; message: string; display?: string; traceback?: unknown[]; };
- MontyRunResult · type · L19-L19 — type MontyRunResult = { ok: true; output: unknown } | { ok: false; error: MontyRunError };
- MontyModule · type · L21-L21 — type MontyModule = typeof import("@pydantic/monty");
- loadMontyModule · function · L25-L40 — async function loadMontyModule(): Promise<MontyModule>
- sha256Hex · function · L42-L44 — function sha256Hex(text: string): string
- montyValueToJs · function · L46-L78 — function montyValueToJs(value: unknown, seen = new WeakMap<object, unknown>()): unknown
- MontyStdlib · type · L80-L87 — type MontyStdlib = { json_parse: (text: unknown) => unknown; json_stringify: (value: unknown, options?: unknown) => string; json_extract: (text: unknown) => unknown[]; b64_encode: (text: unknown) => string; b64_decode: (b64: unknown) => string; sha256_hex: (text: unknown) => string; };
- createMontySafeStdlib · function · L89-L124 — function createMontySafeStdlib(): MontyStdlib
- MontyProgramCache · class · L126-L150 — class MontyProgramCache
- constructor · method · L129-L129 — constructor(private maxEntries = 32)
- get · method · L131-L137 — get(key: string): Buffer | undefined
- set · method · L139-L149 — set(key: string, dump: Buffer): void
- clampNumber · function · L152-L155 — function clampNumber(value: unknown, min: number, max: number): number | undefined
- clampMontyLimits · function · L157-L196 — function clampMontyLimits( requested: MontyResourceLimits | undefined, maxima: MontyResourceLimits, ): MontyResourceLimits | undefined
- RunMontyOptions · type · L198-L206 — type RunMontyOptions = { code: string; input?: unknown; scriptName?: string; limits?: MontyResourceLimits; externalFunctions?: Record<string, (...args: unknown[]) => unknown>; cache?: MontyProgramCache; cacheKey?: string; };
- runMontyCode · function · L208-L297 — async function runMontyCode(options: RunMontyOptions): Promise<MontyRunResult>
