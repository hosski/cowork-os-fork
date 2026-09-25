# src/electron/routines/workflow/templates.ts

- node · function · L9-L25 — function node( id: string, kind: RoutineWorkflowNode["kind"], operation: string, name: string, config: RoutineWorkflowNode["config"] = {}, column = 0, ): RoutineWorkflowNode
- edge · function · L27-L38 — function edge( sourceNodeId: string, targetNodeId: string, sourcePort = "success", ): RoutineWorkflowEdge
- workflow · function · L40-L57 — function workflow( nodes: RoutineWorkflowNode[], edges: RoutineWorkflowEdge[], ): RoutineWorkflowDefinition
- cloneWorkflowTemplate · function · L360-L363 — function cloneWorkflowTemplate(templateId: string): RoutineWorkflowDefinition | null
