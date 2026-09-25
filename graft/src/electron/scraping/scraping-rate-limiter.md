# src/electron/scraping/scraping-rate-limiter.ts

- ScrapingRateLimitSettings · interface · L1-L4 — interface ScrapingRateLimitSettings
- getScrapingRequestDelayMs · function · L9-L15 — function getScrapingRequestDelayMs(requestsPerMinute: unknown): number
- waitForScrapingSlot · function · L21-L48 — function waitForScrapingSlot( url: string, settings: ScrapingRateLimitSettings | undefined, sleep: (delayMs: number) => Promise<void> = (delayMs) => new Promise((resolve) => setTimeout(resolve, delayMs)), ): Promise<void>
- resetScrapingRateLimiterForTests · function · L50-L53 — function resetScrapingRateLimiterForTests(): void
