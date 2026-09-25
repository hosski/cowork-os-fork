# src/electron/routines/workflow/variables.ts

- WorkflowVariableContext · interface · L7-L13 — interface WorkflowVariableContext
- resolveWorkflowInputs · function · L15-L20 — function resolveWorkflowInputs( input: Record<string, WorkflowInputValue>, context: WorkflowVariableContext, ): Record<string, unknown>
- resolveWorkflowValue · function · L22-L27 — function resolveWorkflowValue( value: WorkflowInputValue, context: WorkflowVariableContext, ): unknown
- resolveValue · function · L29-L44 — function resolveValue(value: WorkflowInputValue, context: WorkflowVariableContext): unknown
- lookupWorkflowPath · function · L46-L69 — function lookupWorkflowPath(path: string, context: WorkflowVariableContext): unknown
- interpolateWorkflowTemplate · function · L71-L81 — function interpolateWorkflowTemplate( template: string, context: WorkflowVariableContext, ): string
- isReference · function · L83-L85 — function isReference(value: WorkflowInputValue): value is WorkflowReference
- isTemplate · function · L87-L91 — function isTemplate(value: WorkflowInputValue): value is WorkflowTemplateValue
- evaluateWorkflowComparison · function · L93-L134 — function evaluateWorkflowComparison( left: unknown, operator: string, right?: unknown, ): boolean
- normalizeComparableText · function · L136-L140 — function normalizeComparableText(value: unknown): string
- isEmpty · function · L142-L147 — function isEmpty(value: unknown): boolean
- deepEqual · function · L149-L156 — function deepEqual(left: unknown, right: unknown): boolean
