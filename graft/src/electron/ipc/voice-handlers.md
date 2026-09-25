# src/electron/ipc/voice-handlers.ts

- VoiceActionService · type · L8-L11 — type VoiceActionService = Pick< VoiceService, "getCapabilities" | "getState" | "speak" | "stopSpeaking" | "transcribe" >;
- VoiceActionHandlerOptions · interface · L13-L16 — interface VoiceActionHandlerOptions
- errorMessage · function · L18-L20 — function errorMessage(error: unknown): string
- setupVoiceActionHandlers · function · L22-L62 — function setupVoiceActionHandlers(options: VoiceActionHandlerOptions = {}): void
