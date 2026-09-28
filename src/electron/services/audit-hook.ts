/**
 * DAG Execution Audit Hook
 *
 * Connects DAGExecutor events to AuditLogService for persistent logging.
 */

import type { DAGExecutionEvent, DAGExecutor } from '../agent/orchestration/dag-executor';
import type { AuditLogService } from './audit-log-service';

export async function attachAuditLogging(
  executor: DAGExecutor,
  auditService: AuditLogService,
  dagId: string,
  userId?: string,
): Promise<void> {
  executor.onExecutionEvent((event: DAGExecutionEvent) => {
    try {
      if (event.type === 'tier-start') {
        // Log tier start as info event
        auditService.log({
          timestamp: new Date(event.timestamp).toISOString(),
          eventType: 'agent_spawn',
          dagId: event.dagId,
          userId,
          details: {
            tierIdx: event.tierIdx,
            event: 'tier_start',
          },
        }).catch((err) => {
          console.error('[AuditHook] Failed to log tier-start:', err);
        });
      } else if (event.type === 'node-update') {
        // Log node status updates
        auditService.log({
          timestamp: new Date(event.timestamp).toISOString(),
          eventType: 'agent_spawn',
          dagId: event.dagId,
          nodeId: event.nodeId,
          userId,
          details: {
            status: event.nodeStatus,
            event: 'node_update',
          },
        }).catch((err) => {
          console.error('[AuditHook] Failed to log node-update:', err);
        });
      } else if (event.type === 'dag-complete') {
        // Log DAG completion
        const cost = event.data?.totalCost || 0;
        auditService.log({
          timestamp: new Date(event.timestamp).toISOString(),
          eventType: 'dag_complete',
          dagId: event.dagId,
          userId,
          cost,
          details: {
            status: 'completed',
            durationMs: event.data?.durationMs || 0,
            completedNodes: event.data?.completedNodes || [],
            failedNodes: event.data?.failedNodes || [],
          },
        }).catch((err) => {
          console.error('[AuditHook] Failed to log dag-complete:', err);
        });
      } else if (event.type === 'dag-error') {
        // Log DAG errors
        auditService.log({
          timestamp: new Date(event.timestamp).toISOString(),
          eventType: 'error',
          dagId: event.dagId,
          nodeId: event.nodeId,
          userId,
          details: {
            error: event.data?.error || 'Unknown error',
            status: 'failed',
          },
        }).catch((err) => {
          console.error('[AuditHook] Failed to log dag-error:', err);
        });
      }
    } catch (err) {
      console.error('[AuditHook] Unexpected error attaching audit:', err);
    }
  });
}
