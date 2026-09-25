# src/renderer/utils/pretext-adapter.ts

- isPretextEnabled · function · L18-L25 — function isPretextEnabled(): boolean
- getResolvedFont · function · L35-L42 — function getResolvedFont(el?: HTMLElement): { fontFamily: string; fontSize: number }
- toCssFontString · function · L45-L47 — function toCssFontString(font: { fontFamily: string; fontSize: number }): string
- getEstimatedHeight · function · L55-L64 — function getEstimatedHeight(): number
- PretextMeasurer · class · L70-L117 — class PretextMeasurer
- constructor · method · L75-L78 — constructor(font: { fontFamily: string; fontSize: number })
- prepare · method · L81-L92 — prepare(texts: string[]): void
- getHeight · method · L95-L105 — getHeight(text: string, width: number, lineHeight?: number): number
- getHeights · method · L108-L110 — getHeights(texts: string[], width: number, lineHeight?: number): number[]
- invalidate · method · L113-L116 — invalidate(): void
- getGlobalMeasurer · function · L125-L130 — function getGlobalMeasurer(): PretextMeasurer
- invalidateGlobalMeasurer · function · L132-L137 — function invalidateGlobalMeasurer(): void
