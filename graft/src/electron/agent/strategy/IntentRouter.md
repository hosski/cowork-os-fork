# src/electron/agent/strategy/IntentRouter.ts

- RoutedIntent · type · L3-L3 — type RoutedIntent = TaskStrategyIntent;
- TaskComplexity · type · L5-L5 — type TaskComplexity = "low" | "medium" | "high";
- IntentRoute · interface · L7-L15 — interface IntentRoute
- IntentScores · interface · L17-L24 — interface IntentScores
- clamp · function · L26-L28 — function clamp(value: number, min: number, max: number): number
- IntentRouter · class · L30-L535 — class IntentRouter
- hasDocumentAnalysisSignal · method · L31-L46 — private static hasDocumentAnalysisSignal(text: string): boolean
- normalizeSkillInvocationQuery · method · L48-L53 — private static normalizeSkillInvocationQuery(text: string): string
- queryContainsSkillInvocationPhrase · method · L55-L68 — private static queryContainsSkillInvocationPhrase(query: string, phrase: string): boolean
- isExplicitSkillInvocation · method · L70-L79 — private static isExplicitSkillInvocation(text: string): boolean
- getRedirectSignals · method · L81-L128 — private static getRedirectSignals(lower: string): string[]
- isRedirectIntent · method · L130-L133 — static isRedirectIntent(text: string): boolean
- stripStrategyContext · method · L135-L148 — private static stripStrategyContext(text: string): string
- inferDomain · method · L150-L193 — private static inferDomain(lower: string): TaskDomain
- hasLocalErrandLocationIntent · method · L195-L210 — static hasLocalErrandLocationIntent(lower: string): boolean
- route · method · L212-L534 — static route(title: string, prompt: string): IntentRoute
- add · function · L226-L235 — add = ( intent: keyof IntentScores, points: number, signal: string, condition: boolean, )
