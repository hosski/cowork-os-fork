# src/electron/cron/store.ts

- getCronDir · function · L16-L21 — function getCronDir(): string
- getCronStorePath · function · L23-L28 — function getCronStorePath(): string
- resolveCronStorePath · function · L37-L46 — function resolveCronStorePath(storePath?: string): string
- loadCronStore · function · L52-L92 — async function loadCronStore(storePath: string): Promise<CronStoreFile>
- loadCronStoreSync · function · L97-L136 — function loadCronStoreSync(storePath: string): CronStoreFile
- saveCronStore · function · L142-L162 — async function saveCronStore(storePath: string, store: CronStoreFile): Promise<void>
- saveCronStoreSync · function · L167-L187 — function saveCronStoreSync(storePath: string, store: CronStoreFile): void
