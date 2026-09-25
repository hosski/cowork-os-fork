# src/renderer/utils/placeholderEngine.ts

- Persona · type · L20-L40 — type Persona = | "universal" | "engineering" | "trading" | "education" | "marketing" | "design" | "product" | "founder" | "sales" | "hr" | "legal" | "data" | "research" | "operations" | "support" | "personal" | "healthcare" | "realestate" | "creative" | "writing";
- TaggedPlaceholder · interface · L44-L47 — interface TaggedPlaceholder
- UserSignals · interface · L815-L826 — interface UserSignals
- PersonaScores · interface · L828-L832 — interface PersonaScores
- detectPersonas · function · L839-L884 — function detectPersonas(signals: UserSignals): PersonaScores
- buildPlaceholders · function · L899-L972 — function buildPlaceholders( personaResult: PersonaScores, dynamicPrompts: string[], pluginPrompts: string[], ): string[]
- add · function · L926-L931 — add = (text: string)
- buildDynamicPrompts · function · L980-L1006 — function buildDynamicPrompts(signals: UserSignals): string[]
- shuffle · function · L1010-L1016 — function shuffle<T>(arr: T[]): T[]
