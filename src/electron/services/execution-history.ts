/**
 * Execution History Service
 *
 * Persists DAG execution records to OpenViking via IPC.
 * Provides durable execution history + analytics.
 */

import type { TaskDag, TaskDagNode } from '../../shared/types';

export interface ExecutionRecord {
  id: string; // Unique execution ID (dagId + timestamp)
  dagId: string;
  templateName: string;
  startedAt: number; // Unix timestamp
  completedAt?: number;
  status: 'running' | 'completed' | 'failed' | 'paused' | 'aborted';
  duration?: number; // ms
  totalNodes: number;
  completedNodes: number;
  failedNodes: number;
  skippedNodes: number;
  tiers: number;
  completedTiers: number;
  nodeResults: NodeResult[];
  error?: string;
  notes?: string;
}

export interface NodeResult {
  nodeId: string;
  nodeName: string;
  tier: number;
  status: 'completed' | 'failed' | 'skipped';
  startedAt: number;
  completedAt: number;
  duration: number; // ms
  output?: string; // Agent output
  error?: string;
  retries: number;
}

/**
 * Service to manage execution history
 * Stores records via IPC to OpenViking backend
 */
export class ExecutionHistoryService {
  private static readonly BATCH_SIZE = 10; // Batch writes to Viking
  private pendingRecords: ExecutionRecord[] = [];
  private flushTimeout: NodeJS.Timeout | null = null;
  private onSendToViking: ((memory: string) => Promise<void>) | null = null;

  constructor(onSendToViking?: (memory: string) => Promise<void>) {
    this.onSendToViking = onSendToViking || null;
  }

  /**
   * Start tracking an execution
   */
  startExecution(dagId: string, dag: TaskDag): ExecutionRecord {
    const record: ExecutionRecord = {
      id: `${dagId}-${Date.now()}`,
      dagId,
      templateName: dag.name || 'Untitled',
      startedAt: Date.now(),
      status: 'running',
      totalNodes: dag.nodes?.length || 0,
      completedNodes: 0,
      failedNodes: 0,
      skippedNodes: 0,
      tiers: dag.tiers || 1,
      completedTiers: 0,
      nodeResults: [],
    };
    return record;
  }

  /**
   * Record node completion
   */
  recordNodeCompletion(
    record: ExecutionRecord,
    node: TaskDagNode,
    status: 'completed' | 'failed' | 'skipped',
    duration: number,
    output?: string,
    error?: string,
    retries?: number
  ): NodeResult {
    const nodeResult: NodeResult = {
      nodeId: node.id,
      nodeName: node.name || node.id,
      tier: node.tier || 0,
      status,
      startedAt: Date.now() - duration,
      completedAt: Date.now(),
      duration,
      output,
      error,
      retries: retries || 0,
    };

    record.nodeResults.push(nodeResult);

    if (status === 'completed') {
      record.completedNodes++;
    } else if (status === 'failed') {
      record.failedNodes++;
    } else if (status === 'skipped') {
      record.skippedNodes++;
    }

    return nodeResult;
  }

  /**
   * Mark tier complete
   */
  recordTierCompletion(record: ExecutionRecord, tierNumber: number): void {
    if (tierNumber > record.completedTiers) {
      record.completedTiers = tierNumber;
    }
  }

  /**
   * Finalize execution
   */
  finishExecution(
    record: ExecutionRecord,
    status: 'completed' | 'failed' | 'aborted',
    error?: string
  ): ExecutionRecord {
    record.status = status;
    record.completedAt = Date.now();
    record.duration = record.completedAt - record.startedAt;
    record.error = error;

    this.queueForPersistence(record);
    return record;
  }

  /**
   * Queue record for persistence (batched writes to Viking)
   */
  private queueForPersistence(record: ExecutionRecord): void {
    this.pendingRecords.push(record);

    // Batch writes: flush when batch size reached or after delay
    if (this.pendingRecords.length >= ExecutionHistoryService.BATCH_SIZE) {
      this.flush();
    } else if (!this.flushTimeout) {
      // Auto-flush after 5s of inactivity
      this.flushTimeout = setTimeout(() => this.flush(), 5000);
    }
  }

  /**
   * Persist pending records to Viking
   */
  async flush(): Promise<void> {
    if (this.flushTimeout) {
      clearTimeout(this.flushTimeout);
      this.flushTimeout = null;
    }

    if (!this.pendingRecords.length || !this.onSendToViking) {
      return;
    }

    const recordsToFlush = this.pendingRecords.splice(0, this.BATCH_SIZE);

    try {
      const memory = this.formatAsMemory(recordsToFlush);
      await this.onSendToViking(memory);
    } catch (err) {
      // Re-queue on failure (max 3 retries per record)
      recordsToFlush.forEach((r) => {
        if (!('_retryCount' in r)) {
          (r as any)._retryCount = 0;
        }
        if ((r as any)._retryCount < 3) {
          (r as any)._retryCount++;
          this.pendingRecords.push(r);
        }
      });
      console.error('Failed to persist execution history to Viking:', err);
    }
  }

  /**
   * Format records as OpenViking memory entry
   */
  private formatAsMemory(records: ExecutionRecord[]): string {
    const timestamp = new Date().toISOString();
    const entries = records
      .map((r) => {
        const summary = `
**Execution:** ${r.templateName} (${r.dagId})
- **Status:** ${r.status}
- **Duration:** ${r.duration ? `${(r.duration / 1000).toFixed(2)}s` : 'N/A'}
- **Progress:** ${r.completedNodes}/${r.totalNodes} nodes, ${r.completedTiers}/${r.tiers} tiers
- **Results:** ✅ ${r.completedNodes} | ❌ ${r.failedNodes} | ⊘ ${r.skippedNodes}
- **Started:** ${new Date(r.startedAt).toISOString()}
${r.completedAt ? `- **Completed:** ${new Date(r.completedAt).toISOString()}` : ''}
${r.error ? `- **Error:** ${r.error}` : ''}

${r.nodeResults.length > 0 ? this.formatNodeResults(r.nodeResults) : ''}
`;
        return summary.trim();
      })
      .join('\n\n---\n\n');

    return `# Execution History — ${timestamp}

${entries}`;
  }

  /**
   * Format node results as markdown table
   */
  private formatNodeResults(results: NodeResult[]): string {
    const rows = results
      .map((n) => {
        const statusIcon =
          n.status === 'completed'
            ? '✅'
            : n.status === 'failed'
              ? '❌'
              : '⊘';
        const durationSec = (n.duration / 1000).toFixed(2);
        return `| ${statusIcon} | ${n.nodeName} | Tier ${n.tier} | ${durationSec}s | ${n.retries > 0 ? `${n.retries}x retry` : 'No retry'} |`;
      })
      .join('\n');

    return `## Node Results

| | Node | Tier | Duration | Retries |
|---|---|---|---|---|
${rows}`;
  }

  /**
   * Format execution summary as JSON (for export)
   */
  exportAsJSON(record: ExecutionRecord): string {
    return JSON.stringify(
      {
        ...record,
        startedAt: new Date(record.startedAt),
        completedAt: record.completedAt ? new Date(record.completedAt) : null,
      },
      null,
      2
    );
  }

  /**
   * Format execution summary as CSV (for analytics)
   */
  exportAsCSV(records: ExecutionRecord[]): string {
    const headers = [
      'ID',
      'Template',
      'Status',
      'Duration (s)',
      'Nodes',
      'Completed',
      'Failed',
      'Skipped',
      'Tiers',
      'Error',
    ];

    const rows = records.map((r) => [
      r.id,
      r.templateName,
      r.status,
      r.duration ? (r.duration / 1000).toFixed(2) : 'N/A',
      r.totalNodes,
      r.completedNodes,
      r.failedNodes,
      r.skippedNodes,
      r.tiers,
      r.error || '',
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    return csv;
  }
}

export default ExecutionHistoryService;
