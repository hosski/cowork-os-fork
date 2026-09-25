# src/electron/agent/llm/model-capability-profile.ts

- ModelCapabilityState · type · L1-L1 — type ModelCapabilityState = "verified" | "unsupported" | "unknown";
- ModelCapabilityName · type · L2-L9 — type ModelCapabilityName = | "tools" | "multiple_tool_calls" | "images" | "streaming" | "reasoning" | "structured_output" | "context_limit";
- ModelCapabilityKey · interface · L11-L17 — interface ModelCapabilityKey
- ModelCapabilityEvidence · interface · L19-L23 — interface ModelCapabilityEvidence
- ModelCapabilityProfile · interface · L25-L29 — interface ModelCapabilityProfile
- normalizeModelCapabilityKey · function · L41-L51 — function normalizeModelCapabilityKey(input: ModelCapabilityKey): ModelCapabilityKey
- modelCapabilityKey · function · L53-L62 — function modelCapabilityKey(input: ModelCapabilityKey): string
- createUnknownModelCapabilityProfile · function · L64-L75 — function createUnknownModelCapabilityProfile( input: ModelCapabilityKey, ): ModelCapabilityProfile
- ModelCapabilityRegistry · class · L77-L108 — class ModelCapabilityRegistry
- getOrCreate · method · L80-L88 — getOrCreate(key: ModelCapabilityKey): ModelCapabilityProfile
- record · method · L90-L103 — record( key: ModelCapabilityKey, capability: ModelCapabilityName, state: Exclude<ModelCapabilityState, "unknown">, evidence: Omit<ModelCapabilityEvidence, "observedAt"> & { observedAt?: number }, ): ModelCapabilityProfile
- clear · method · L105-L107 — clear(): void
