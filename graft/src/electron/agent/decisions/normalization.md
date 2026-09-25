# src/electron/agent/decisions/normalization.ts

- isRecord · function · L16-L18 — function isRecord(value: unknown): value is Record<string, unknown>
- ownProperty · function · L20-L22 — function ownProperty(value: object, key: string): boolean
- responseError · function · L24-L30 — function responseError(providerName: string, detail: string): DecisionClientError
- requiredRecord · function · L32-L39 — function requiredRecord( value: unknown, path: string, providerName: string, ): Record<string, unknown>
- requiredString · function · L41-L46 — function requiredString(value: unknown, path: string, providerName: string): string
- requiredNumber · function · L48-L53 — function requiredNumber(value: unknown, path: string, providerName: string): number
- probabilityMap · function · L55-L70 — function probabilityMap( value: unknown, path: string, providerName: string, ): Record<string, number>
- contentRecord · function · L72-L86 — function contentRecord( value: unknown, path: string, providerName: string, ): Record<string, JevContent>
- isContent · function · L88-L90 — function isContent(value: unknown): value is JevContent
- normalizeAnswer · function · L92-L142 — function normalizeAnswer( value: unknown, expectedType: JevQuestion["type"] | undefined, path: string, providerName: string, ): JevAnswer
- usageNumber · function · L144-L151 — function usageNumber( usage: Record<string, unknown>, snakeName: string, camelName: string, providerName: string, ): number
- normalizeUsage · function · L153-L175 — function normalizeUsage(value: unknown, providerName: string): JevUsage
- normalizeProvider · function · L177-L182 — function normalizeProvider(value: unknown, providerName: string): JevResponse["provider"]
- unwrapResponse · function · L184-L192 — function unwrapResponse(value: unknown): Record<string, unknown>
- normalizeJevResponse · function · L194-L231 — function normalizeJevResponse( value: unknown, request: JevRequestPayload, providerName: string, ): JevResponse
