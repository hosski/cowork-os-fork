# src/electron/routines/workflow/secret-store.ts

- StoredSecret · type · L6-L12 — type StoredSecret = { id: string; name: string; value: string; createdAt: number; updatedAt: number; };
- SecretDocument · type · L14-L17 — type SecretDocument = { version: 1; secrets: StoredSecret[]; };
- RoutineWorkflowSecretSummary · type · L19-L21 — type RoutineWorkflowSecretSummary = Omit<StoredSecret, "value"> & { configured: true; };
- RoutineWorkflowSecretStore · class · L23-L85 — class RoutineWorkflowSecretStore
- list · method · L24-L29 — list(): RoutineWorkflowSecretSummary[]
- upsert · method · L31-L53 — upsert(input: { id?: string; name: string; value: string }): RoutineWorkflowSecretSummary
- remove · method · L55-L62 — remove(id: string): boolean
- resolve · method · L64-L68 — resolve(id: string): string
- load · method · L70-L80 — private load(): SecretDocument
- save · method · L82-L84 — private save(document: SecretDocument): void
