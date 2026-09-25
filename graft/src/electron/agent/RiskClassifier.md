# src/electron/agent/RiskClassifier.ts

- RiskContext · interface · L15-L20 — interface RiskContext
- RiskClassification · interface · L22-L27 — interface RiskClassification
- RiskClassifier · class · L77-L159 — class RiskClassifier
- classify · method · L81-L135 — static classify( toolName: string, toolInput: Record<string, unknown>, _ctx: RiskContext = {}, ): RiskClassification
- shouldRequireConfirmation · method · L145-L158 — static shouldRequireConfirmation( classification: RiskClassification, settings: Pick<GuardrailSettings, "hitlEnabled" | "hitlRiskThreshold">, ): boolean
