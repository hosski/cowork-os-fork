# src/electron/agent/tools/knowledge-graph-tools.ts

- KnowledgeGraphTools · class · L6-L498 — class KnowledgeGraphTools
- constructor · method · L7-L11 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L13-L15 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L17-L19 — static isEnabled(): boolean
- getToolDefinitions · method · L21-L253 — static getToolDefinitions(): LLMTool[]
- isKnowledgeGraphTool · method · L255-L257 — static isKnowledgeGraphTool(name: string): boolean
- executeTool · method · L259-L288 — async executeTool(name: string, input: Any): Promise<Any>
- createEntity · method · L290-L312 — private createEntity(input: Any): Any
- updateEntity · method · L314-L333 — private updateEntity(input: Any): Any
- deleteEntity · method · L335-L338 — private deleteEntity(input: Any): Any
- createEdge · method · L340-L369 — private createEdge(input: Any): Any
- deleteEdge · method · L371-L374 — private deleteEdge(input: Any): Any
- invalidateEdge · method · L376-L399 — private invalidateEdge(input: Any): Any
- addObservation · method · L401-L420 — private addObservation(input: Any): Any
- searchEntities · method · L422-L443 — private searchEntities(input: Any): Any
- getNeighbors · method · L445-L473 — private getNeighbors(input: Any): Any
- getSubgraph · method · L475-L497 — private getSubgraph(input: Any): Any
