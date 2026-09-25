# src/electron/routines/workflow/catalog.ts

- text · function · L18-L28 — text = ( key: string, label: string, options: Partial<WorkflowFieldDefinition> = {}, ): WorkflowFieldDefinition
- list · function · L30-L40 — list = ( key: string, label: string, options: Partial<WorkflowFieldDefinition> = {}, ): WorkflowFieldDefinition
- bool · function · L42-L51 — bool = ( key: string, label: string, options: Partial<WorkflowFieldDefinition> = {}, ): WorkflowFieldDefinition
- select · function · L53-L64 — select = ( key: string, label: string, values: string[], options: Partial<WorkflowFieldDefinition> = {}, ): WorkflowFieldDefinition
- starter · function · L66-L86 — starter = ( id: string, name: string, description: string, fields: WorkflowFieldDefinition[], provider = "CoWork", requiredScopes: string[] = [], availability: WorkflowOperationDefinition["availability"] = "available", ): WorkflowOperationDefinition
- action · function · L88-L97 — action = ( definition: Omit<WorkflowOperationDefinition, "kind" | "availability"> & { kind?: WorkflowOperationDefinition["kind"]; availability?: WorkflowOperationDefinition["availability"]; }, ): WorkflowOperationDefinition
- getWorkflowOperation · function · L793-L795 — function getWorkflowOperation(operationId: string): WorkflowOperationDefinition | undefined
- getWorkflowCapabilities · function · L797-L804 — function getWorkflowCapabilities(): WorkflowCapabilities
