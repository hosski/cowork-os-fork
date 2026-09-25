# src/renderer/utils/legal-demand-intake.ts

- LegalDemandIntakeFormValues · type · L24-L43 — type LegalDemandIntakeFormValues = { title: string; demandType: string; tone: string; toneRationale: string; responseWindow: string; settlementMarking: string; sender: string; recipient: string; relationship: string; triggeringEvent: string; legalBasis: string; desiredOutcome: string; priorOutreach: string; delivery: string; signer: string; copies: string; seedDocs: string; strategicNotes: string; };
- GenericLegalWorkflowFormValues · type · L45-L56 — type GenericLegalWorkflowFormValues = { matterTitle: string; jurisdiction: string; roleOrSide: string; objective: string; keyFacts: string; documents: string; deadlines: string; stakeholders: string; constraints: string; outputPreferences: string; };
- LegalWorkflowIntakeKind · type · L58-L58 — type LegalWorkflowIntakeKind = "demand-intake" | "general";
- LegalWorkflowInvocation · type · L60-L65 — type LegalWorkflowInvocation = { matched: boolean; commandName: string; args: string; kind: LegalWorkflowIntakeKind; };
- parseLegalDemandIntakeSlashPrompt · function · L67-L78 — function parseLegalDemandIntakeSlashPrompt(prompt: string): { matched: boolean; args: string; }
- parseLegalWorkflowSlashPrompt · function · L80-L107 — function parseLegalWorkflowSlashPrompt(prompt: string): LegalWorkflowInvocation
- toTitleCase · function · L109-L118 — function toTitleCase(value: string): string
- inferDemandType · function · L120-L130 — function inferDemandType(args: string): string
- inferMatterTitleAndRecipient · function · L132-L151 — function inferMatterTitleAndRecipient(args: string): { title: string; recipient: string }
- buildLegalDemandIntakeInitialValues · function · L153-L176 — function buildLegalDemandIntakeInitialValues(prompt: string): LegalDemandIntakeFormValues
- buildLegalDemandIntakeFollowUp · function · L178-L220 — function buildLegalDemandIntakeFollowUp(values: LegalDemandIntakeFormValues): string
- line · function · L179-L179 — line = (label: string, value: string)
- buildGenericLegalWorkflowInitialValues · function · L222-L238 — function buildGenericLegalWorkflowInitialValues( invocation: LegalWorkflowInvocation, ): GenericLegalWorkflowFormValues
- buildGenericLegalWorkflowFollowUp · function · L240-L278 — function buildGenericLegalWorkflowFollowUp( invocation: LegalWorkflowInvocation, values: GenericLegalWorkflowFormValues, ): string
- line · function · L247-L247 — line = (label: string, value: string)
