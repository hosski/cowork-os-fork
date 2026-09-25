# src/shared/dev-log.ts

- DevLogProcess · type · L1-L1 — type DevLogProcess = "dev-wrapper" | "react" | "electron";
- DevLogStream · type · L2-L2 — type DevLogStream = "stdout" | "stderr";
- DevLogLevel · type · L3-L3 — type DevLogLevel = "error" | "warn" | "info" | "debug";
- DevLogEvent · interface · L5-L22 — interface DevLogEvent
- DevLogRunManifestEntry · interface · L24-L36 — interface DevLogRunManifestEntry
- parseDevLogJsonLine · function · L42-L61 — function parseDevLogJsonLine(line: string): DevLogEvent | null
- isDevLogFailureEvent · function · L63-L66 — function isDevLogFailureEvent(event: DevLogEvent): boolean
- formatDevLogEventForEvidence · function · L68-L71 — function formatDevLogEventForEvidence(event: DevLogEvent): string
- buildDevLogStructuredSignature · function · L73-L75 — function buildDevLogStructuredSignature(event: DevLogEvent): string
