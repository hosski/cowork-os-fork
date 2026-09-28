/**
 * DAG Execution Status Panel
 *
 * Real-time display of DAG execution progress, showing:
 * - Current tier being executed
 * - Node status (running, completed, failed)
 * - Retry attempts
 * - Overall progress
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useDAGExecutionListener } from '../middleware/dag-execution-listener';
import type { RootState } from '../store';

interface DAGStatusPanelProps {
  className?: string;
}

export const DAGExecutionStatusPanel: React.FC<DAGStatusPanelProps> = ({ className = '' }) => {
  // Subscribe to execution events (this hook sets up the IPC listener)
  useDAGExecutionListener();
  
  // Get execution state from Redux
  const dagExecution = useSelector((state: RootState) => state.dagExecution);
  const { dagId, currentTierIdx, totalTiers, nodeStates, status, error } = dagExecution;

  // Don't show anything if not running
  if (status === 'idle') {
    return null;
  }

  const nodeIds = Object.keys(nodeStates);
  const completedCount = nodeIds.filter((id) => nodeStates[id].status === 'completed').length;
  const failedCount = nodeIds.filter((id) => nodeStates[id].status === 'failed').length;
  const runningCount = nodeIds.filter((id) => nodeStates[id].status === 'running').length;

  const progressPercent = nodeIds.length > 0 ? Math.round((completedCount / nodeIds.length) * 100) : 0;

  return (
    <div className={`dag-execution-panel ${className}`}>
      <div className="panel-header">
        <h3>DAG Execution: {dagId}</h3>
        <span className={`status-badge ${status}`}>{status.toUpperCase()}</span>
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="progress-text">
          {completedCount} / {nodeIds.length} nodes complete ({progressPercent}%)
        </div>
      </div>

      <div className="tier-info">
        <div className="tier-label">Tier: {currentTierIdx + 1} / {totalTiers}</div>
        <div className="tier-stats">
          <span className="stat running">
            <span className="dot running" /> {runningCount} running
          </span>
          <span className="stat completed">
            <span className="dot completed" /> {completedCount} done
          </span>
          {failedCount > 0 && (
            <span className="stat failed">
              <span className="dot failed" /> {failedCount} failed
            </span>
          )}
        </div>
      </div>

      {/* Node status list */}
      <div className="nodes-list">
        {nodeIds.slice(0, 10).map((nodeId) => {
          const nodeState = nodeStates[nodeId];
          return (
            <div key={nodeId} className={`node-item ${nodeState.status}`}>
              <div className="node-name">{nodeId}</div>
              <div className="node-status">
                <span className={`badge ${nodeState.status}`}>{nodeState.status}</span>
                {nodeState.retryCount && nodeState.retryCount > 0 && (
                  <span className="retry-count">retry {nodeState.retryCount}</span>
                )}
              </div>
              {nodeState.error && <div className="node-error">{nodeState.error}</div>}
            </div>
          );
        })}
        {nodeIds.length > 10 && <div className="nodes-more">+{nodeIds.length - 10} more</div>}
      </div>

      {error && (
        <div className="error-box">
          <strong>Error:</strong> {error}
        </div>
      )}

      <style>{`
        .dag-execution-panel {
          padding: 16px;
          background: #f8f9fa;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 12px;
        }

        .panel-header h3 {
          margin: 0;
          font-size: 16px;
          color: #222;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge.running {
          background: #e3f2fd;
          color: #1976d2;
        }

        .status-badge.completed {
          background: #e8f5e9;
          color: #388e3c;
        }

        .status-badge.failed {
          background: #ffebee;
          color: #d32f2f;
        }

        .progress-container {
          margin-bottom: 16px;
        }

        .progress-bar {
          height: 8px;
          background: #ddd;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #1976d2, #388e3c);
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 12px;
          color: #666;
        }

        .tier-info {
          margin-bottom: 16px;
        }

        .tier-label {
          font-size: 14px;
          font-weight: 600;
          color: #222;
          margin-bottom: 8px;
        }

        .tier-stats {
          display: flex;
          gap: 16px;
          font-size: 12px;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #666;
        }

        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.running {
          background: #1976d2;
        }

        .dot.completed {
          background: #388e3c;
        }

        .dot.failed {
          background: #d32f2f;
        }

        .nodes-list {
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          max-height: 240px;
          overflow-y: auto;
          margin-bottom: 12px;
        }

        .node-item {
          padding: 8px 12px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .node-item:last-child {
          border-bottom: none;
        }

        .node-name {
          flex: 1;
          font-size: 12px;
          font-weight: 500;
          word-break: break-word;
        }

        .node-status {
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .badge {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }

        .badge.running {
          background: #e3f2fd;
          color: #1976d2;
        }

        .badge.completed {
          background: #e8f5e9;
          color: #388e3c;
        }

        .badge.failed {
          background: #ffebee;
          color: #d32f2f;
        }

        .badge.pending {
          background: #f5f5f5;
          color: #666;
        }

        .retry-count {
          font-size: 11px;
          color: #ff6f00;
          font-weight: 500;
        }

        .node-error {
          font-size: 11px;
          color: #d32f2f;
          width: 100%;
          margin-top: 4px;
          padding-top: 4px;
          border-top: 1px solid #ffebee;
        }

        .nodes-more {
          padding: 8px 12px;
          font-size: 12px;
          color: #999;
          text-align: center;
        }

        .error-box {
          background: #ffebee;
          border: 1px solid #ffcdd2;
          border-radius: 4px;
          padding: 12px;
          color: #c62828;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default DAGExecutionStatusPanel;
