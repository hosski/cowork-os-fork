# src/electron/chronicle/ChronicleSourceResolver.ts

- ChronicleFrontmostContext · interface · L7-L12 — interface ChronicleFrontmostContext
- escapeAppleScriptString · function · L14-L16 — function escapeAppleScriptString(value: string): string
- runAppleScript · function · L18-L26 — async function runAppleScript(lines: string[]): Promise<string>
- resolveFrontmostApp · function · L28-L54 — async function resolveFrontmostApp(): Promise<{ appName: string; bundleId: string; windowTitle: string; }>
- resolveBrowserSource · function · L56-L87 — async function resolveBrowserSource(appName: string): Promise<ChronicleSourceReference | null>
- resolveFinderSource · function · L89-L99 — async function resolveFinderSource(): Promise<ChronicleSourceReference | null>
- ChronicleSourceResolver · class · L101-L121 — class ChronicleSourceResolver
- resolveFrontmostContext · method · L102-L120 — static async resolveFrontmostContext(): Promise<ChronicleFrontmostContext>
