# src/electron/database/composer-draft-repository.ts

- ComposerDraftRow · type · L10-L20 — type ComposerDraftRow = { draft_key: string; workspace_id: string; task_id: string | null; surface: string; remote_device_id: string | null; payload_json: string; revision: number; updated_at: number; expires_at: number | null; };
- ComposerDraftRepository · class · L22-L206 — class ComposerDraftRepository
- constructor · method · L23-L23 — constructor(private readonly db: Database.Database)
- get · method · L25-L37 — get(draftKey: string, owner?: ComposerDraftGetRequest): ComposerDraft | null
- upsertIfNewer · method · L39-L81 — upsertIfNewer(draft: ComposerDraft): boolean
- clear · method · L83-L93 — clear(draftKey: string, revision?: number): boolean
- rekey · method · L95-L151 — rekey( draftKey: string, nextDraftKey: string, nextOwner?: { taskId: string | null; remoteDeviceId?: string }, ): boolean
- canRekey · method · L153-L164 — canRekey(draftKey: string, nextDraftKey: string): boolean
- pruneExpired · method · L166-L170 — pruneExpired(now = Date.now()): number
- listExpired · method · L172-L178 — listExpired(now = Date.now()): Array<{ draftKey: string; workspaceId: string }>
- listLiveAttachmentRefs · method · L180-L205 — listLiveAttachmentRefs( now = Date.now(), ): Array<{ draftKey: string; workspaceId: string; refId: string }>
- parsePayload · function · L208-L214 — function parsePayload(payload: string): unknown
