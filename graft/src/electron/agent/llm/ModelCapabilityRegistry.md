# src/electron/agent/llm/ModelCapabilityRegistry.ts

- ModelCapability · type · L9-L9 — type ModelCapability = "code" | "math" | "research" | "vision" | "fast" | "long_context";
- ModelCapabilityProfile · interface · L11-L18 — interface ModelCapabilityProfile
- ModelCapabilityRegistry · class · L63-L156 — class ModelCapabilityRegistry
- selectForWorkflowPhaseType · method · L64-L79 — static selectForWorkflowPhaseType( phaseType: string, ): "cheaper" | "smarter" | "sonnet" | undefined
- selectForCapability · method · L85-L99 — static selectForCapability( capability: ModelCapability, costBudget: "cheap" | "any" = "any", ): "cheaper" | "smarter" | "sonnet"
- selectForTask · method · L105-L134 — static selectForTask( taskText: string, costBudget: "cheap" | "any" = "any", ): "cheaper" | "smarter" | "sonnet" | undefined
- inferCapabilities · method · L139-L151 — static inferCapabilities(taskText: string): ModelCapability[]
- getProfiles · method · L153-L155 — static getProfiles(): ModelCapabilityProfile[]
