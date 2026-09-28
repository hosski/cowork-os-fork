/**
 * Audit Log Service
 *
 * Persistent record of all task executions:
 * - Agent spawns
 * - Tool calls
 * - QA results
 * - Costs
 * - Errors
 *
 * Stored in SQLite for querying and compliance.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as sqlite3 from 'sqlite3';
import { promisify } from 'util';

export interface AuditLogEntry {
  id?: string;
  timestamp: string;
  eventType: 'agent_spawn' | 'tool_call' | 'qa_result' | 'dag_complete' | 'error' | 'cost_update';
  dagId: string;
  nodeId?: string;
  details: Record<string, any>;
  userId?: string;
  cost?: number;
}

export class AuditLogService {
  private db: sqlite3.Database | null = null;
  private dbPath: string;

  constructor(auditLogPath: string = '~/.cowork-os/audit.db') {
    this.dbPath = path.expandUser(auditLogPath);

    // Ensure directory exists
    const dir = path.dirname(this.dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  async initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(this.dbPath, (err) => {
        if (err) reject(err);
        else this.createSchema().then(resolve).catch(reject);
      });
    });
  }

  private async createSchema(): Promise<void> {
    const run = promisify(this.db!.run.bind(this.db));

    await run(`
      CREATE TABLE IF NOT EXISTS audit_logs (
        id TEXT PRIMARY KEY,
        timestamp TEXT NOT NULL,
        event_type TEXT NOT NULL,
        dag_id TEXT NOT NULL,
        node_id TEXT,
        user_id TEXT,
        cost REAL,
        details TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await run(`
      CREATE INDEX IF NOT EXISTS idx_timestamp ON audit_logs(timestamp);
    `);

    await run(`
      CREATE INDEX IF NOT EXISTS idx_dag_id ON audit_logs(dag_id);
    `);

    await run(`
      CREATE INDEX IF NOT EXISTS idx_event_type ON audit_logs(event_type);
    `);
  }

  async log(entry: AuditLogEntry): Promise<void> {
    if (!this.db) throw new Error('AuditLogService not initialized');

    const id = entry.id || `audit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const run = promisify(this.db.run.bind(this.db));

    await run(
      `
      INSERT INTO audit_logs (
        id, timestamp, event_type, dag_id, node_id, user_id, cost, details
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        id,
        entry.timestamp,
        entry.eventType,
        entry.dagId,
        entry.nodeId || null,
        entry.userId || null,
        entry.cost || null,
        JSON.stringify(entry.details),
      ]
    );
  }

  async logAgentSpawn(
    dagId: string,
    nodeId: string,
    role: string,
    model: string,
    userId?: string
  ): Promise<void> {
    await this.log({
      timestamp: new Date().toISOString(),
      eventType: 'agent_spawn',
      dagId,
      nodeId,
      userId,
      details: { role, model },
    });
  }

  async logToolCall(
    dagId: string,
    nodeId: string,
    toolName: string,
    inputTokens: number,
    outputTokens: number,
    success: boolean,
    error?: string,
    userId?: string
  ): Promise<void> {
    await this.log({
      timestamp: new Date().toISOString(),
      eventType: 'tool_call',
      dagId,
      nodeId,
      userId,
      details: { toolName, inputTokens, outputTokens, success, error },
    });
  }

  async logQAResult(
    dagId: string,
    nodeId: string,
    passed: boolean,
    confidence: number,
    reason?: string,
    userId?: string
  ): Promise<void> {
    await this.log({
      timestamp: new Date().toISOString(),
      eventType: 'qa_result',
      dagId,
      nodeId,
      userId,
      details: { passed, confidence, reason },
    });
  }

  async logDAGComplete(
    dagId: string,
    status: 'completed' | 'failed',
    totalCost: number,
    durationMs: number,
    userId?: string
  ): Promise<void> {
    await this.log({
      timestamp: new Date().toISOString(),
      eventType: 'dag_complete',
      dagId,
      userId,
      cost: totalCost,
      details: { status, durationMs },
    });
  }

  async logError(dagId: string, nodeId: string | null, error: string, userId?: string): Promise<void> {
    await this.log({
      timestamp: new Date().toISOString(),
      eventType: 'error',
      dagId,
      nodeId,
      userId,
      details: { error },
    });
  }

  async query(
    where: Partial<AuditLogEntry>,
    limit: number = 100
  ): Promise<AuditLogEntry[]> {
    if (!this.db) throw new Error('AuditLogService not initialized');

    const all = promisify(this.db.all.bind(this.db));

    const conditions: string[] = [];
    const values: any[] = [];

    if (where.eventType) {
      conditions.push('event_type = ?');
      values.push(where.eventType);
    }
    if (where.dagId) {
      conditions.push('dag_id = ?');
      values.push(where.dagId);
    }
    if (where.nodeId) {
      conditions.push('node_id = ?');
      values.push(where.nodeId);
    }
    if (where.userId) {
      conditions.push('user_id = ?');
      values.push(where.userId);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

    const rows = await all(
      `
      SELECT
        id, timestamp, event_type as eventType, dag_id as dagId,
        node_id as nodeId, user_id as userId, cost, details
      FROM audit_logs
      ${whereClause}
      ORDER BY timestamp DESC
      LIMIT ?
    `,
      [...values, limit]
    );

    return rows.map((row: any) => ({
      ...row,
      details: JSON.parse(row.details),
    }));
  }

  async getCostByDay(days: number = 30): Promise<Array<{ date: string; cost: number }>> {
    if (!this.db) throw new Error('AuditLogService not initialized');

    const all = promisify(this.db.all.bind(this.db));

    const rows = await all(
      `
      SELECT
        DATE(timestamp) as date,
        COALESCE(SUM(cost), 0) as cost
      FROM audit_logs
      WHERE event_type = 'dag_complete'
      AND timestamp >= datetime('now', '-' || ? || ' days')
      GROUP BY DATE(timestamp)
      ORDER BY date DESC
    `,
      [days]
    );

    return rows;
  }

  async getCostByModel(days: number = 30): Promise<Array<{ model: string; cost: number }>> {
    if (!this.db) throw new Error('AuditLogService not initialized');

    const all = promisify(this.db.all.bind(this.db));

    const rows = await all(
      `
      SELECT
        JSON_EXTRACT(details, '$.model') as model,
        COALESCE(SUM(
          CASE
            WHEN event_type = 'agent_spawn' THEN 0
            WHEN event_type = 'tool_call' THEN
              (JSON_EXTRACT(details, '$.inputTokens') * 0.003 +
               JSON_EXTRACT(details, '$.outputTokens') * 0.015) / 1000
            ELSE 0
          END
        ), 0) as cost
      FROM audit_logs
      WHERE timestamp >= datetime('now', '-' || ? || ' days')
      GROUP BY model
      ORDER BY cost DESC
    `,
      [days]
    );

    return rows;
  }

  async getErrorRate(days: number = 30): Promise<{ errorCount: number; totalCount: number; rate: number }> {
    if (!this.db) throw new Error('AuditLogService not initialized');

    const all = promisify(this.db.all.bind(this.db));

    const rows = await all(
      `
      SELECT
        COALESCE(SUM(CASE WHEN event_type = 'error' THEN 1 ELSE 0 END), 0) as error_count,
        COALESCE(SUM(CASE WHEN event_type IN ('dag_complete', 'tool_call') THEN 1 ELSE 0 END), 0) as total_count
      FROM audit_logs
      WHERE timestamp >= datetime('now', '-' || ? || ' days')
    `,
      [days]
    );

    const [row] = rows;
    const errorCount = row?.error_count || 0;
    const totalCount = row?.total_count || 1; // Avoid divide by zero

    return {
      errorCount,
      totalCount,
      rate: (errorCount / totalCount) * 100,
    };
  }

  async close(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.db) {
        this.db.close((err) => {
          if (err) reject(err);
          else {
            this.db = null;
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  }
}

// Export singleton
let auditService: AuditLogService | null = null;

export async function getAuditService(): Promise<AuditLogService> {
  if (!auditService) {
    auditService = new AuditLogService();
    await auditService.initialize();
  }
  return auditService;
}
