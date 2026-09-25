# src/electron/routines/workflow/validation.ts

- WorkflowValidationOptions · interface · L11-L13 — interface WorkflowValidationOptions
- validateRoutineWorkflow · function · L15-L167 — function validateRoutineWorkflow( workflow: RoutineWorkflowDefinition, options: WorkflowValidationOptions = {}, ): WorkflowValidationResult
- inspectNode · function · L169-L281 — function inspectNode( node: RoutineWorkflowNode, path: string, issues: WorkflowValidationIssue[], scopes: Set<string>, risks: Set<WorkflowRiskLevel>, options: WorkflowValidationOptions, ): void
- validateWorkflowSettings · function · L283-L320 — function validateWorkflowSettings( workflow: RoutineWorkflowDefinition, issues: WorkflowValidationIssue[], ): void
- countWorkflowNodes · function · L322-L324 — function countWorkflowNodes(nodes: RoutineWorkflowNode[]): number
- workflowDepth · function · L326-L332 — function workflowDepth(nodes: RoutineWorkflowNode[], depth = 1): number
- detectCycle · function · L334-L363 — function detectCycle( nodes: RoutineWorkflowNode[], outgoing: Map<string, string[]>, issues: WorkflowValidationIssue[], ): void
- visit · function · L341-L351 — visit = (id: string): boolean
- collectReachable · function · L365-L375 — function collectReachable(starterNodeId: string, outgoing: Map<string, string[]>): Set<string>
- result · function · L377-L388 — function result( issues: WorkflowValidationIssue[], scopes: Set<string>, risks: Set<WorkflowRiskLevel>, ): WorkflowValidationResult
