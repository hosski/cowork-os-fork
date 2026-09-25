# src/electron/control-plane/protocol.ts

- FrameTypeValue · type · L19-L19 — type FrameTypeValue = (typeof FrameType)[keyof typeof FrameType];
- ErrorShape · interface · L24-L28 — interface ErrorShape
- RequestFrame · interface · L33-L38 — interface RequestFrame
- ResponseFrame · interface · L43-L49 — interface ResponseFrame
- EventFrame · interface · L54-L60 — interface EventFrame
- Frame · type · L65-L65 — type Frame = RequestFrame | ResponseFrame | EventFrame;
- ErrorCode · type · L94-L94 — type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
- parseFrame · function · L102-L134 — function parseFrame(data: string): Frame | null
- serializeFrame · function · L139-L141 — function serializeFrame(frame: Frame): string
- createRequestFrame · function · L146-L153 — function createRequestFrame(method: string, params?: unknown): RequestFrame
- createResponseFrame · function · L158-L165 — function createResponseFrame(requestId: string, payload?: unknown): ResponseFrame
- createErrorResponse · function · L170-L182 — function createErrorResponse( requestId: string, code: ErrorCode, message: string, details?: unknown, ): ResponseFrame
- createEventFrame · function · L187-L203 — function createEventFrame( event: string, payload?: unknown, seq?: number, stateVersion?: string, ): EventFrame
