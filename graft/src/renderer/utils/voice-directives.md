# src/renderer/utils/voice-directives.ts

- VoiceDirective · interface · L13-L26 — interface VoiceDirective
- parseVoiceDirectives · function · L35-L73 — function parseVoiceDirectives(message: string): VoiceDirective
- parseDirectiveParams · function · L78-L102 — function parseDirectiveParams(paramString: string): VoiceDirective["params"]
- stripMarkdownForSpeech · function · L107-L135 — function stripMarkdownForSpeech(text: string): string
- shouldSpeak · function · L140-L161 — function shouldSpeak( message: string, responseMode: "auto" | "manual" | "smart", voiceEnabled: boolean, ): boolean
- getTextForSpeech · function · L166-L169 — function getTextForSpeech(message: string): string
