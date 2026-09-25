# src/electron/agent/strategy/WorkflowDecomposer.ts

- WorkflowPhaseType · type · L16-L16 — type WorkflowPhaseType = "research" | "create" | "deliver" | "analyze" | "general";
- WorkflowPhase · interface · L18-L35 — interface WorkflowPhase
- workflowPhaseTypeToCapability · function · L65-L79 — function workflowPhaseTypeToCapability( phaseType: WorkflowPhaseType, ): ModelCapability | undefined
- WorkflowDecomposer · class · L81-L281 — class WorkflowDecomposer
- decompose · method · L86-L122 — static decompose(prompt: string, _route: IntentRoute): WorkflowPhase[] | null
- decomposeWithLLM · method · L128-L204 — static async decomposeWithLLM( prompt: string, provider: LLMProvider, modelId: string, ): Promise<WorkflowPhase[] | null>
- decomposeStepWithLLM · method · L210-L280 — static async decomposeStepWithLLM( stepDescription: string, provider: LLMProvider, modelId: string, ): Promise<Array<{ description: string }> | null>
- splitIntoPhases · function · L286-L297 — function splitIntoPhases(prompt: string): string[]
- generatePhaseTitle · function · L302-L308 — function generatePhaseTitle(text: string, order: number): string
- detectPhaseType · function · L313-L318 — function detectPhaseType(text: string): WorkflowPhase["phaseType"]
