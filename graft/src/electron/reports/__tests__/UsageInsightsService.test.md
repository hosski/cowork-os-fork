# src/electron/reports/__tests__/UsageInsightsService.test.ts

- isLlmErrorQuery · function · L8-L10 — function isLlmErrorQuery(sql: string): boolean
- isLlmUsageQuery · function · L12-L14 — function isLlmUsageQuery(sql: string): boolean
- isPricingQuery · function · L16-L18 — function isPricingQuery(sql: string): boolean
- isGlobalLlmUsageQuery · function · L20-L22 — function isGlobalLlmUsageQuery(sql: string): boolean
- isGlobalLlmErrorQuery · function · L24-L26 — function isGlobalLlmErrorQuery(sql: string): boolean
- makeRoutingPayload · function · L28-L30 — function makeRoutingPayload(activeProvider: string): string
- makeAgentConfig · function · L32-L34 — function makeAgentConfig(providerType: string): string
- makeProviderLogPayload · function · L36-L40 — function makeProviderLogPayload(providerType: string): string
- endOfLocalDay · function · L42-L46 — function endOfLocalDay(timestamp: number): number
- defaultMockDb · function · L48-L138 — function defaultMockDb(overrides: { llmRows?: unknown[]; globalLlmRows?: unknown[]; jevRows?: unknown[]; toolRows?: unknown[]; statusRows?: unknown[]; personaRows?: unknown[]; personaCostRows?: unknown[]; feedbackRows?: unknown[]; retryRow?: unknown; llmErrorResult?: { c: number }; globalLlmErrorResult?: { c: number }; pricingRows?: unknown[]; awuCount?: number; awuTaskRows?: unknown[]; })
- isTailRange · function · L981-L986 — isTailRange = (params: unknown[]): boolean
