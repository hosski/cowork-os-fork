# src/renderer/components/MainContent/legal-prompt-cards.tsx

- LegalDemandIntakePromptCard · function · L49-L278 — function LegalDemandIntakePromptCard({ prompt, onSubmit, onDismiss, }: { prompt: string; onSubmit: (message: string) => void; onDismiss: () => void; })
- renderChip · function · L70-L79 — renderChip = (field: keyof LegalDemandIntakeFormValues, value: string, label = value)
- renderTextarea · function · L81-L93 — renderTextarea = ( field: keyof LegalDemandIntakeFormValues, placeholder: string, rows = 3, )
- GenericLegalWorkflowPromptCard · function · L280-L442 — function GenericLegalWorkflowPromptCard({ invocation, onSubmit, onDismiss, }: { invocation: LegalWorkflowInvocation; onSubmit: (message: string) => void; onDismiss: () => void; })
- renderTextarea · function · L301-L313 — renderTextarea = ( field: keyof GenericLegalWorkflowFormValues, placeholder: string, rows = 3, )
