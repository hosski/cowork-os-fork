# src/electron/hooks/agent-ingress.ts

- AgentIngressAction · interface · L20-L33 — interface AgentIngressAction
- AgentIngressOptions · interface · L35-L39 — interface AgentIngressOptions
- AgentIngressRunOptions · interface · L41-L43 — interface AgentIngressRunOptions
- AgentIngressResult · interface · L45-L49 — interface AgentIngressResult
- HookAgentIngress · class · L59-L260 — class HookAgentIngress
- constructor · method · L67-L78 — constructor( private agentDaemon: AgentDaemon, options: AgentIngressOptions = {}, )
- createTaskFromAgentAction · method · L80-L185 — async createTaskFromAgentAction( action: AgentIngressAction, options: AgentIngressRunOptions = {}, ): Promise<AgentIngressResult>
- createTempWorkspace · method · L187-L246 — private async createTempWorkspace(key: string): Promise<Workspace>
- waitForSessionResolution · method · L248-L259 — private async waitForSessionResolution(sessionKey: string): Promise<{ taskId: string } | null>
- initializeHookAgentIngress · function · L264-L271 — function initializeHookAgentIngress( agentDaemon: AgentDaemon, options?: AgentIngressOptions, ): HookAgentIngress
- getHookAgentIngress · function · L273-L275 — function getHookAgentIngress(): HookAgentIngress | null
