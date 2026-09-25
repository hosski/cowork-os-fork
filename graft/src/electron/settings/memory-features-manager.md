# src/electron/settings/memory-features-manager.ts

- isEnabled · function · L40-L42 — function isEnabled(value: boolean | undefined): boolean
- normalizeDurableContextMode · function · L44-L48 — function normalizeDurableContextMode( value: MemoryFeaturesSettings["durableContextMode"], ): "off" | "experimental" | "on"
- normalizePositiveNumber · function · L50-L53 — function normalizePositiveNumber(value: unknown, fallback: number): number
- normalizeSettings · function · L55-L101 — function normalizeSettings(settings: MemoryFeaturesSettings): MemoryFeaturesSettings
- normalizeMemoryWriteApprovalMode · function · L103-L115 — function normalizeMemoryWriteApprovalMode( value: MemoryFeaturesSettings["memoryWriteApprovalMode"], ): NonNullable<MemoryFeaturesSettings["memoryWriteApprovalMode"]>
- MemoryFeaturesManager · class · L117-L170 — class MemoryFeaturesManager
- initialize · method · L120-L123 — static initialize(): void
- loadSettings · method · L125-L149 — static loadSettings(): MemoryFeaturesSettings
- saveSettings · method · L151-L165 — static saveSettings(settings: MemoryFeaturesSettings): void
- clearCache · method · L167-L169 — static clearCache(): void
