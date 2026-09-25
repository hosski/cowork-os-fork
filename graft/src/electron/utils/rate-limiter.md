# src/electron/utils/rate-limiter.ts

- RateLimitEntry · interface · L6-L9 — interface RateLimitEntry
- RateLimitConfig · interface · L11-L14 — interface RateLimitConfig
- RateLimiter · class · L28-L105 — class RateLimiter
- configure · method · L35-L37 — configure(channel: string, config: RateLimitConfig): void
- check · method · L43-L65 — check(channel: string): boolean
- getRemaining · method · L70-L79 — getRemaining(channel: string): number
- getResetTime · method · L84-L90 — getResetTime(channel: string): number
- reset · method · L95-L97 — reset(channel: string): void
- resetAll · method · L102-L104 — resetAll(): void
- withRateLimit · function · L113-L128 — function withRateLimit<T extends (...args: Any[]) => Promise<Any>>( channel: string, handler: T, config: RateLimitConfig = RATE_LIMIT_CONFIGS.standard, ): T
