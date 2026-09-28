/**
 * Audit Log Service — OpenViking Backend
 *
 * Persistent record of all task executions:
 * - Agent spawns
 * - Tool calls
 * - QA results
 * - Costs
 * - Errors
 *
 * Stored in OpenViking (port 1933) for semantic search and cross-server audit trail.
 */

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
  constructor() {
    // No initialization needed — Viking is a singleton service at port 1933
  }

  async initialize(): Promise<void> {
    console.log('[AuditLogService] Initialized (using OpenViking at port 1933)');
  }

  async log(entry: AuditLogEntry): Promise<void> {
    const id = entry.id || `audit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Format as Viking memory with YAML frontmatter + content
    const content = `---
id: ${id}
event_type: ${entry.eventType}
dag_id: ${entry.dagId}
node_id: ${entry.nodeId || 'N/A'}
timestamp: ${entry.timestamp}
cost: ${entry.cost || 0}
user_id: ${entry.userId || 'N/A'}
---

# ${entry.eventType} — ${entry.dagId}

**Time:** ${entry.timestamp}
**Node:** ${entry.nodeId || 'DAG-level'}
**Cost:** $${entry.cost?.toFixed(4) || '0.0000'}

## Details

\`\`\`json
${JSON.stringify(entry.details, null, 2)}
\`\`\`
`;

    try {
      // Store in Viking — this is a fire-and-forget operation
      // viking_remember is available in Hermes context
      if (typeof (global as any).viking_remember === 'function') {
        await (global as any).viking_remember({ content });
      } else {
        // Fallback: log to console if Viking not available
        console.warn('[AuditLogService] Viking not available, event not persisted:', {
          eventType: entry.eventType,
          dagId: entry.dagId,
        });
      }
    } catch (err) {
      console.error('[AuditLogService] Failed to log event to Viking:', err);
    }
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

  async query(_where: Partial<AuditLogEntry>, _limit: number = 100): Promise<AuditLogEntry[]> {
    // For semantic queries, use viking_search() directly in handlers
    console.warn('[AuditLogService] Use viking_search() for queries, not query()');
    return [];
  }

  async getCostByDay(days: number = 30): Promise<Array<{ date: string; cost: number }>> {
    // This is called by cost-data-handler.ts
    // Since we can't do SQL queries on Viking from the main process,
    // we'll return mock data and note that real aggregation happens via Viking semantic search
    console.warn(
      `[AuditLogService] getCostByDay(${days}) called — use viking_search('cost by day') in observability queries`
    );

    // Return empty array for now; cost aggregation will happen via Viking searches
    return [];
  }

  async getCostByModel(days: number = 30): Promise<Array<{ model: string; cost: number }>> {
    console.warn(
      `[AuditLogService] getCostByModel(${days}) called — use viking_search('cost by model') in observability queries`
    );
    return [];
  }

  async getErrorRate(days: number = 30): Promise<{ errorCount: number; totalCount: number; rate: number }> {
    console.warn(
      `[AuditLogService] getErrorRate(${days}) called — use viking_search('error rate') in observability queries`
    );
    return {
      errorCount: 0,
      totalCount: 1,
      rate: 0,
    };
  }

  async close(): Promise<void> {
    // No cleanup needed — Viking is always-on service
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
