/**
 * DAG Error Recovery Panel
 *
 * Shows failed nodes when DAG execution fails.
 * Allows users to rework (re-run) individual failed nodes.
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dagExecutionActions } from '../store';
import type { RootState } from '../store';

interface DAGErrorRecoveryPanelProps {
  className?: string;
}

export const DAGErrorRecoveryPanel: React.FC<DAGErrorRecoveryPanelProps> = ({ className = '' }) => {
  const dispatch = useDispatch();
  const dagExecution = useSelector((state: RootState) => state.dagExecution);
  const { dagId, nodeStates, failedNodeIds, status } = dagExecution;
  const [reworkingNodeId, setReworkingNodeId] = useState<string | null>(null);
  const [reworkResult, setReworkResult] = useState<{ nodeId: string; success: boolean; error?: string } | null>(null);

  // Only show if execution failed
  if (status !== 'failed' || failedNodeIds.length === 0 || !dagId) {
    return null;
  }

  const failedNodes = failedNodeIds.map((id) => ({
    id,
    state: nodeStates[id],
  }));

  const handleRework = async (nodeId: string) => {
    setReworkingNodeId(nodeId);
    setReworkResult(null);

    try {
      const api = (window as any).electronAPI;
      if (!api || !api.reworkNode) {
        throw new Error('Rework API not available');
      }

      console.log('[ErrorRecovery] Requesting rework for:', nodeId);

      const result = await api.reworkNode(dagId, nodeId, {
        id: dagId,
        nodes: Object.fromEntries(
          Array.from(Object.entries(nodeStates)).map(([id, state]) => [
            id,
            {
              id: state.id,
              status: state.status,
              error: state.error,
            },
          ])
        ),
      });

      if (result.success) {
        console.log('[ErrorRecovery] Rework successful:', nodeId);
        setReworkResult({ nodeId, success: true });
        // Update node state
        dispatch(
          dagExecutionActions.nodeUpdated({
            nodeId,
            status: 'completed',
          })
        );
        // Remove from failed list
        const newFailedNodeIds = failedNodeIds.filter((id) => id !== nodeId);
        if (newFailedNodeIds.length === 0) {
          dispatch(dagExecutionActions.executionCompleted());
        }
      } else {
        console.error('[ErrorRecovery] Rework failed:', result.error);
        setReworkResult({ nodeId, success: false, error: result.error });
        dispatch(
          dagExecutionActions.nodeUpdated({
            nodeId,
            status: 'failed',
            error: result.error,
            retryCount: result.retryCount,
          })
        );
      }
    } catch (error: any) {
      console.error('[ErrorRecovery] Rework error:', error?.message);
      setReworkResult({ nodeId, success: false, error: error?.message || 'Unknown error' });
    } finally {
      setReworkingNodeId(null);
    }
  };

  return (
    <div className={`dag-error-recovery-panel ${className}`}>
      <div className="panel-header">
        <h3>⚠ Execution Failed</h3>
        <span className="failed-count">{failedNodeIds.length} node(s) failed</span>
      </div>

      <div className="failed-nodes-list">
        {failedNodes.map(({ id, state }) => (
          <div key={id} className="failed-node-item">
            <div className="node-info">
              <div className="node-id">{id}</div>
              {state?.error && <div className="node-error-text">{state.error}</div>}
              {state?.retryCount && (
                <div className="retry-info">Retries: {state.retryCount} / {state.retryCount + 1}</div>
              )}
            </div>
            <button
              className="rework-btn"
              onClick={() => handleRework(id)}
              disabled={reworkingNodeId === id}
            >
              {reworkingNodeId === id ? 'Reworking...' : 'Rework'}
            </button>
          </div>
        ))}
      </div>

      {reworkResult && (
        <div className={`rework-result ${reworkResult.success ? 'success' : 'error'}`}>
          {reworkResult.success ? (
            <>✓ {reworkResult.nodeId} reworked successfully</>
          ) : (
            <>✗ Rework failed: {reworkResult.error}</>
          )}
        </div>
      )}

      <style>{`
        .dag-error-recovery-panel {
          padding: 16px;
          background: #ffebee;
          border: 1px solid #ffcdd2;
          border-radius: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          margin-bottom: 16px;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #ffcdd2;
        }

        .panel-header h3 {
          margin: 0;
          font-size: 16px;
          color: #c62828;
        }

        .failed-count {
          background: #c62828;
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .failed-nodes-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .failed-node-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: white;
          border: 1px solid #ffcdd2;
          border-radius: 4px;
        }

        .node-info {
          flex: 1;
        }

        .node-id {
          font-weight: 600;
          color: #222;
          margin-bottom: 4px;
        }

        .node-error-text {
          font-size: 12px;
          color: #c62828;
          margin-bottom: 4px;
        }

        .retry-info {
          font-size: 11px;
          color: #999;
        }

        .rework-btn {
          padding: 6px 16px;
          background: #c62828;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          font-size: 12px;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .rework-btn:hover:not(:disabled) {
          background: #b71c1c;
        }

        .rework-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .rework-result {
          padding: 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }

        .rework-result.success {
          background: #c8e6c9;
          color: #1b5e20;
        }

        .rework-result.error {
          background: #ffcdd2;
          color: #c62828;
        }
      `}</style>
    </div>
  );
};

export default DAGErrorRecoveryPanel;
