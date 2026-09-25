# src/electron/tailscale/exposure.ts

- TailscaleExposureConfig · interface · L22-L34 — interface TailscaleExposureConfig
- TailscaleExposureResult · interface · L39-L52 — interface TailscaleExposureResult
- ActiveExposure · interface · L57-L62 — interface ActiveExposure
- getExposureStatus · function · L69-L89 — function getExposureStatus(): { active: boolean; mode?: TailscaleMode; hostname?: string; httpsUrl?: string; wssUrl?: string; startedAt?: number; }
- startTailscaleExposure · function · L97-L209 — async function startTailscaleExposure( config: TailscaleExposureConfig, ): Promise<TailscaleExposureResult>
- cleanup · function · L184-L200 — cleanup = async ()
- stopTailscaleExposure · function · L214-L232 — async function stopTailscaleExposure(): Promise<void>
- checkTailscaleAvailability · function · L237-L262 — async function checkTailscaleAvailability(): Promise<{ installed: boolean; funnelAvailable: boolean; hostname: string | null; }>
