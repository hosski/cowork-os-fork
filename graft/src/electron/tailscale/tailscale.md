# src/electron/tailscale/tailscale.ts

- CachedStatus · interface · L21-L25 — interface CachedStatus
- TailscaleStatusJson · interface · L34-L55 — interface TailscaleStatusJson
- isExecutable · function · L85-L93 — async function isExecutable(filePath: string): Promise<boolean>
- verifyTailscaleBinary · function · L98-L107 — async function verifyTailscaleBinary(binaryPath: string): Promise<boolean>
- findTailscaleBinary · function · L116-L176 — async function findTailscaleBinary(): Promise<string | null>
- getTailscaleBinary · function · L181-L184 — async function getTailscaleBinary(): Promise<string>
- isTailscaleInstalled · function · L189-L192 — async function isTailscaleInstalled(): Promise<boolean>
- extractJson · function · L198-L209 — function extractJson<T>(output: string): T | null
- getTailscaleStatus · function · L214-L246 — async function getTailscaleStatus(): Promise<TailscaleStatusJson | null>
- getTailnetHostname · function · L252-L268 — async function getTailnetHostname(): Promise<string | null>
- execTailscaleCommand · function · L273-L302 — async function execTailscaleCommand( args: string[], options?: { timeout?: number }, ): Promise<{ stdout: string; stderr: string }>
- enableTailscaleServe · function · L311-L327 — async function enableTailscaleServe(port: number, urlPath = "/"): Promise<boolean>
- disableTailscaleServe · function · L334-L344 — async function disableTailscaleServe(): Promise<boolean>
- enableTailscaleFunnel · function · L353-L367 — async function enableTailscaleFunnel(port: number, urlPath = "/"): Promise<boolean>
- disableTailscaleFunnel · function · L374-L384 — async function disableTailscaleFunnel(): Promise<boolean>
- checkTailscaleFunnelAvailable · function · L390-L397 — async function checkTailscaleFunnelAvailable(): Promise<boolean>
- clearTailscaleCache · function · L402-L406 — function clearTailscaleCache(): void
