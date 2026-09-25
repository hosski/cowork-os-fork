# src/shared/human-input-policy.ts

- isHumanInputPolicy · function · L10-L12 — function isHumanInputPolicy(value: unknown): value is HumanInputPolicy
- resolveHumanInputPolicy · function · L14-L36 — function resolveHumanInputPolicy(input: { agentConfig?: Pick< AgentConfig, "allowUserInput" | "humanInputPolicy" | "executionMode" | "autonomousMode" >; executionMode?: ExecutionMode; }): HumanInputPolicy
- allowsStructuredHumanInput · function · L38-L40 — function allowsStructuredHumanInput(policy: HumanInputPolicy): boolean
- allowsClarifyingHumanInput · function · L42-L44 — function allowsClarifyingHumanInput(policy: HumanInputPolicy): boolean
- allowsHardBlockerHumanInput · function · L46-L48 — function allowsHardBlockerHumanInput(policy: HumanInputPolicy): boolean
