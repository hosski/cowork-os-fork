# src/electron/ipc/__tests__/subconscious-improvement-handlers.test.ts

- ImprovementEligibilityOverrides · type · L39-L41 — type ImprovementEligibilityOverrides = Omit<Partial<ImprovementEligibility>, "checks"> & { checks?: Partial<ImprovementEligibility["checks"]>; };
- makeEligibility · function · L43-L58 — function makeEligibility(overrides: ImprovementEligibilityOverrides = {}): ImprovementEligibility
