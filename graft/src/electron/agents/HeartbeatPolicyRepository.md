# src/electron/agents/HeartbeatPolicyRepository.ts

- Any · type · L11-L11 — type Any = any;
- safeJsonParse · function · L13-L20 — function safeJsonParse<T>(jsonString: string | null, fallback: T): T
- defaultPolicy · function · L22-L39 — function defaultPolicy(agentRoleId: string): HeartbeatPolicy
- mergePolicy · function · L41-L62 — function mergePolicy( agentRoleId: string, input?: HeartbeatPolicyInput, existing?: HeartbeatPolicy, ): HeartbeatPolicy
- HeartbeatPolicyRepository · class · L64-L157 — class HeartbeatPolicyRepository
- constructor · method · L65-L65 — constructor(private db: Database.Database)
- mapRow · method · L67-L83 — private mapRow(row: Any): HeartbeatPolicy
- findByAgentRoleId · method · L85-L90 — findByAgentRoleId(agentRoleId: string): HeartbeatPolicy | undefined
- listAll · method · L92-L97 — listAll(): HeartbeatPolicy[]
- upsert · method · L99-L152 — upsert(agentRoleId: string, input?: HeartbeatPolicyInput): HeartbeatPolicy
- deleteByAgentRoleId · method · L154-L156 — deleteByAgentRoleId(agentRoleId: string): void
