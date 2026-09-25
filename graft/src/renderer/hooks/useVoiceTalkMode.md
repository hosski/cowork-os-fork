# src/renderer/hooks/useVoiceTalkMode.ts

- TalkModeState · type · L5-L5 — type TalkModeState = "off" | "idle" | "listening" | "processing" | "speaking";
- UseVoiceTalkModeOptions · interface · L7-L14 — interface UseVoiceTalkModeOptions
- UseVoiceTalkModeReturn · interface · L16-L33 — interface UseVoiceTalkModeReturn
- useVoiceTalkMode · function · L50-L363 — function useVoiceTalkMode(options: UseVoiceTalkModeOptions): UseVoiceTalkModeReturn
- loadSettings · function · L73-L83 — loadSettings = async ()
- startVadMonitoring · function · L196-L204 — startVadMonitoring = async ()
- normalizeKey · function · L248-L251 — normalizeKey = (key: string)
- handleKeyDown · function · L253-L268 — handleKeyDown = async (e: KeyboardEvent)
- handleKeyUp · function · L270-L280 — handleKeyUp = (e: KeyboardEvent)
- playAudioData · function · L367-L396 — function playAudioData(audioData: number[], volume: number): Promise<void>
