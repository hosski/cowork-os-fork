# src/electron/agent/executor-lifecycle-mutex.ts

- ReleaseFn · type · L1-L1 — type ReleaseFn = () => void;
- LifecycleMutex · class · L7-L42 — class LifecycleMutex
- isLocked · method · L12-L14 — get isLocked(): boolean
- waitForIdle · method · L21-L23 — async waitForIdle(): Promise<void>
- runExclusive · method · L25-L41 — async runExclusive<T>(operation: () => Promise<T>): Promise<T>
