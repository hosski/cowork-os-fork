# src/electron/utils/__tests__/temp-workspace.test.ts

- WorkspaceRow · type · L12-L19 — type WorkspaceRow = { id: string; name: string; path: string; created_at: number; last_used_at: number; permissions: string; };
- TaskRow · type · L21-L25 — type TaskRow = { id: string; workspace_id: string; status: string; };
- SessionRow · type · L27-L32 — type SessionRow = { id: string; workspace_id: string | null; state: string; last_activity_at?: number; };
- MockDb · class · L34-L156 — class MockDb
- prepare · method · L39-L155 — prepare(sql: string): { all?: (...args: Any[]) => Any[]; get?: (...args: Any[]) => Any; run?: (...args: Any[]) => Any; }
- createTempRoot · function · L172-L176 — createTempRoot = (): string
- insertTempWorkspace · function · L178-L205 — insertTempWorkspace = ( db: MockDb, root: string, idSuffix: string, lastUsedAt: number, ): { id: string; dir: string }
