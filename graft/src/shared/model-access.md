# src/shared/model-access.ts

- ModelAccessKind · type · L4-L11 — type ModelAccessKind = | "account" | "api" | "gateway" | "cloud" | "local" | "mixed" | "orchestration";
- ModelAccessGroup · type · L13-L13 — type ModelAccessGroup = "accounts" | "apis" | "gateways" | "local" | "orchestration";
- ModelAccessReleaseStatus · type · L15-L15 — type ModelAccessReleaseStatus = "stable" | "experimental";
- ModelAccessDescriptor · interface · L17-L25 — interface ModelAccessDescriptor
- getModelAccessDescriptor · function · L122-L135 — function getModelAccessDescriptor(providerType: LLMProviderType): ModelAccessDescriptor
- groupProvidersByModelAccess · function · L137-L153 — function groupProvidersByModelAccess<T extends { type: LLMProviderType }>( providers: T[], ): Record<ModelAccessGroup, T[]>
