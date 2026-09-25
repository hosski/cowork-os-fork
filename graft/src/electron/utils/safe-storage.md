# src/electron/utils/safe-storage.ts

- SafeStorageLike · type · L11-L15 — type SafeStorageLike = { isEncryptionAvailable: () => boolean; encryptString: (plaintext: string) => Buffer; decryptString: (ciphertext: Buffer) => string; };
- getSafeStorage · function · L17-L38 — function getSafeStorage(): SafeStorageLike | null
