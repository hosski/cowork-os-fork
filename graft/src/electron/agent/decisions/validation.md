# src/electron/agent/decisions/validation.ts

- isPlainObject · function · L13-L17 — function isPlainObject(value: unknown): value is Record<string, unknown>
- isJsonValue · function · L19-L36 — function isJsonValue(value: unknown, seen: Set<object>): value is JevJsonValue
- isContent · function · L38-L42 — function isContent(value: unknown): value is JevContent
- validationError · function · L44-L46 — function validationError(message: string): DecisionClientError
- assertContent · function · L48-L54 — function assertContent(value: unknown, path: string): asserts value is JevContent
- assertQuestion · function · L56-L97 — function assertQuestion(question: unknown, path: string): asserts question is JevQuestion
- validateJevRequest · function · L99-L117 — function validateJevRequest(request: JevRequest): void
- createJevRequestPayload · function · L119-L131 — function createJevRequestPayload( request: JevRequest, defaultModel: string, ): JevRequestPayload
- isJsonCompatible · function · L133-L135 — function isJsonCompatible(value: unknown): value is JevJsonValue
