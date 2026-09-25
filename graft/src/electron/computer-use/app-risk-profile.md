# src/electron/computer-use/app-risk-profile.ts

- AppRiskClass · type · L8-L14 — type AppRiskClass = | "browser" | "terminal_ide" | "finder" | "system_settings" | "trading" | "generic";
- AppRiskProfile · interface · L16-L22 — interface AppRiskProfile
- bundleStartsWithAny · function · L50-L53 — function bundleStartsWithAny(bundleId: string, prefixes: string[]): boolean
- classifyApp · function · L58-L121 — function classifyApp(bundleId: string, appName: string): AppRiskProfile
- formatAccessLevelForUi · function · L123-L134 — function formatAccessLevelForUi(level: AppAccessLevel): string
