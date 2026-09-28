/**
 * Rate Limiter Service
 *
 * Token bucket algorithm for API rate limiting.
 * Prevents hammering Anthropic API with burst requests.
 *
 * Config:
 * - Anthropic: 10 req/min (shared pool)
 * - Per-model buckets: Claude 3.5 Sonnet, Opus, Haiku
 * - Global bucket: across all models
 *
 * Usage:
 * - Before spawning agent: await rateLimiter.acquire(model)
 * - Blocks if bucket empty, releases after request completes
 */

export interface RateLimiterConfig {
  globalRPS: number; // Requests per second (global across all models)
  modelRPS: Map<string, number>; // Per-model limits
  refillIntervalMs: number; // How often to add tokens
  burstCapacity: number; // Max tokens in bucket
}

export class RateLimiter {
  private globalBucket: number;
  private modelBuckets: Map<string, number> = new Map();
  private globalCapacity: number;
  private modelCapacities: Map<string, number> = new Map();
  private config: RateLimiterConfig;
  private refillTimer: NodeJS.Timer | null = null;
  private waitQueue: Array<{
    model: string;
    resolve: () => void;
    reject: (err: Error) => void;
  }> = [];

  constructor(config: Partial<RateLimiterConfig> = {}) {
    this.config = {
      globalRPS: config.globalRPS ?? 10, // Anthropic's default
      modelRPS: config.modelRPS ?? new Map([
        ['claude-3-5-sonnet', 5],
        ['claude-3-opus', 3],
        ['claude-3-haiku', 10],
      ]),
      refillIntervalMs: config.refillIntervalMs ?? 1000, // 1 sec
      burstCapacity: config.burstCapacity ?? 20,
    };

    // Initialize buckets to capacity
    this.globalCapacity = this.config.burstCapacity;
    this.globalBucket = this.globalCapacity;

    for (const [model, rps] of this.config.modelRPS) {
      const capacity = Math.max(rps * 2, 5); // At least 5 tokens
      this.modelCapacities.set(model, capacity);
      this.modelBuckets.set(model, capacity);
    }
  }

  async initialize(): Promise<void> {
    console.log('[RateLimiter] Initialized');
    console.log(`  Global: ${this.config.globalRPS} req/sec`);
    console.log(`  Models:`, Array.from(this.config.modelRPS.entries()));

    // Start refill timer
    this.startRefill();
  }

  /**
   * Acquire a token for the given model.
   * Blocks if bucket empty; releases token after use.
   */
  async acquire(model: string, timeoutMs: number = 60000): Promise<() => void> {
    const deadline = Date.now() + timeoutMs;

    return new Promise((resolve, reject) => {
      const tryAcquire = () => {
        const now = Date.now();
        if (now > deadline) {
          reject(new Error(`[RateLimiter] Timeout waiting for token (model: ${model})`));
          return;
        }

        const globalToken = this.globalBucket > 0;
        const modelToken = (this.modelBuckets.get(model) ?? 0) > 0;

        if (globalToken && modelToken) {
          // Acquire from both buckets
          this.globalBucket--;
          this.modelBuckets.set(model, (this.modelBuckets.get(model) ?? 1) - 1);

          console.log(
            `[RateLimiter] Acquired token for ${model} (global: ${this.globalBucket}/${this.globalCapacity}, model: ${this.modelBuckets.get(model)}/${this.modelCapacities.get(model)})`
          );

          // Return release function
          resolve(() => {
            // Token is returned automatically on next refill
            // No explicit return; consumed token just counts down
          });
        } else {
          // Queue and retry later
          this.waitQueue.push({
            model,
            resolve: () => {
              if (this.globalBucket > 0 && (this.modelBuckets.get(model) ?? 0) > 0) {
                this.globalBucket--;
                this.modelBuckets.set(model, (this.modelBuckets.get(model) ?? 1) - 1);
                console.log(`[RateLimiter] Acquired (from queue) for ${model}`);
                resolve(() => {
                  // Release is implicit
                });
              } else {
                // Still waiting
                setTimeout(tryAcquire, 100);
              }
            },
            reject,
          });
        }
      };

      tryAcquire();
    });
  }

  /**
   * Refill buckets periodically
   */
  private startRefill(): void {
    if (this.refillTimer) clearInterval(this.refillTimer);

    this.refillTimer = setInterval(() => {
      // Refill global bucket
      const globalRefill = (this.config.globalRPS * this.config.refillIntervalMs) / 1000;
      this.globalBucket = Math.min(this.globalBucket + globalRefill, this.globalCapacity);

      // Refill model buckets
      for (const [model, rps] of this.config.modelRPS) {
        const refill = (rps * this.config.refillIntervalMs) / 1000;
        const capacity = this.modelCapacities.get(model) ?? 5;
        const current = this.modelBuckets.get(model) ?? 0;
        this.modelBuckets.set(model, Math.min(current + refill, capacity));
      }

      // Process wait queue
      const remaining: typeof this.waitQueue = [];
      for (const waiter of this.waitQueue) {
        if (this.globalBucket > 0 && (this.modelBuckets.get(waiter.model) ?? 0) > 0) {
          waiter.resolve();
        } else {
          remaining.push(waiter);
        }
      }
      this.waitQueue = remaining;
    }, this.config.refillIntervalMs);
  }

  /**
   * Get current bucket state (for monitoring)
   */
  getState(): {
    global: { current: number; capacity: number };
    models: Array<{ model: string; current: number; capacity: number }>;
    queueLength: number;
  } {
    return {
      global: { current: this.globalBucket, capacity: this.globalCapacity },
      models: Array.from(this.config.modelRPS.keys()).map((model) => ({
        model,
        current: this.modelBuckets.get(model) ?? 0,
        capacity: this.modelCapacities.get(model) ?? 5,
      })),
      queueLength: this.waitQueue.length,
    };
  }

  /**
   * Shutdown (clear timer)
   */
  async close(): Promise<void> {
    if (this.refillTimer) {
      clearInterval(this.refillTimer);
      this.refillTimer = null;
    }

    // Reject any pending waiters
    for (const waiter of this.waitQueue) {
      waiter.reject(new Error('[RateLimiter] Service shutting down'));
    }
    this.waitQueue = [];

    console.log('[RateLimiter] Shutdown complete');
  }
}

// Export singleton
let rateLimiter: RateLimiter | null = null;

export async function getRateLimiter(config?: Partial<RateLimiterConfig>): Promise<RateLimiter> {
  if (!rateLimiter) {
    rateLimiter = new RateLimiter(config);
    await rateLimiter.initialize();
  }
  return rateLimiter;
}
