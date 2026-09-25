# src/electron/utils/logger.ts

- LogLevel · type · L1-L1 — type LogLevel = "error" | "warn" | "info" | "debug";
- LogMethod · type · L3-L3 — type LogMethod = (...args: unknown[]) => void;
- LogObserver · type · L4-L4 — type LogObserver = (event: { component: string; level: LogLevel; args: unknown[] }) => void;
- normalizeLevel · function · L17-L24 — function normalizeLevel(raw: string | undefined): LogLevel
- parseComponentFilter · function · L26-L34 — function parseComponentFilter(raw: string | undefined): Set<string> | null
- shouldLog · function · L39-L49 — function shouldLog(component: string, level: LogLevel): boolean
- prefixComponent · function · L51-L65 — function prefixComponent(component: string, args: unknown[]): unknown[]
- emit · function · L67-L79 — function emit(component: string, level: LogLevel, method: LogMethod, args: unknown[]): void
- ComponentLogger · interface · L81-L87 — interface ComponentLogger
- createLogger · function · L89-L97 — function createLogger(component: string): ComponentLogger
- setLogObserver · function · L99-L101 — function setLogObserver(observer: LogObserver | null): void
