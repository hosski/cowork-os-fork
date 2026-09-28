/**
 * Execution Status Panel
 *
 * Real-time display of DAG execution progress, tier-by-tier.
 * Shows running agents, progress, errors, and recovery controls.
 */

import React from 'react';

// Local types for execution state
interface NodeState {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
  tier: number;
  progress?: number; // 0-100
  error?: string;
  elapsedMs?: number;
}

interface ExecutionState {
  dagId: string;
  taskId: string;
  status: 'running' | 'paused' | 'completed' | 'failed';
  currentTier: number;
  totalTiers: number;
  nodeStates: Map<string, NodeState>;
  startedAt?: Date;
  completedAt?: Date;
  error?: string;
}

interface ExecutionStatusPanelProps {
  executionState: ExecutionState | null;
  isOpen: boolean;
  onClose: () => void;
  onRetry: (nodeId: string) => void;
  onSkip: (nodeId: string) => void;
  onAbort: () => void;
  onPause: () => void;
  onResume: () => void;
}

export const ExecutionStatusPanel: React.FC<ExecutionStatusPanelProps> = ({
  executionState,
  isOpen,
  onClose,
  onRetry,
  onSkip,
  onAbort,
  onPause,
  onResume,
}) => {
  if (!isOpen || !executionState) return null;

  const { status, currentTier, totalTiers, nodeStates, startedAt, completedAt, error } =
    executionState;

  // Group nodes by tier
  const nodesByTier = new Map<number, NodeState[]>();
  for (const [_nodeId, nodeState] of nodeStates) {
    const tier = nodeState.tier || 0;
    if (!nodesByTier.has(tier)) {
      nodesByTier.set(tier, []);
    }
    nodesByTier.get(tier)!.push(nodeState);
  }

  // Calculate progress
  const totalNodes = nodeStates.size;
  const completedNodes = Array.from(nodeStates.values()).filter(
    (n) => n.status === 'completed' || n.status === 'skipped'
  ).length;
  const failedNodes = Array.from(nodeStates.values()).filter((n) => n.status === 'failed').length;
  const progressPercent = totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;

  // Calculate elapsed time
  const elapsedMs = startedAt
    ? (completedAt?.getTime() || Date.now()) - startedAt.getTime()
    : 0;
  const elapsedSec = Math.floor(elapsedMs / 1000);
  const elapsedMin = Math.floor(elapsedSec / 60);
  const elapsedDisplay =
    elapsedMin > 0 ? `${elapsedMin}m ${elapsedSec % 60}s` : `${elapsedSec}s`;

  const isRunning = status === 'running';
  const isPaused = status === 'paused';
  const isCompleted = status === 'completed';
  const hasErrors = failedNodes > 0;

  return (
    <div className="execution-status-overlay">
      <div className="execution-status-panel">
        {/* Header */}
        <div className="execution-status-header">
          <div className="execution-status-title">
            <div className="execution-status-icon">
              {isCompleted ? '✅' : isRunning ? '⚡' : isPaused ? '⏸️' : '❌'}
            </div>
            <div>
              <h2>Workflow Execution</h2>
              <p className="execution-status-subtitle">
                {isCompleted
                  ? 'Completed'
                  : isRunning
                    ? 'Running...'
                    : isPaused
                      ? 'Paused'
                      : 'Failed'}
              </p>
            </div>
          </div>
          <button className="execution-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Progress Bar */}
        <div className="execution-progress-section">
          <div className="execution-progress-info">
            <span>
              {completedNodes} / {totalNodes} nodes completed
            </span>
            <span className="execution-time">{elapsedDisplay} elapsed</span>
          </div>
          <div className="execution-progress-bar">
            <div
              className={`execution-progress-fill ${hasErrors ? 'has-errors' : ''}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="execution-progress-percent">{progressPercent}%</div>
        </div>

        {/* Status & Controls */}
        <div className="execution-status-controls">
          <div className="execution-status-info">
            <span>
              Tier {currentTier} / {totalTiers}
            </span>
            {failedNodes > 0 && (
              <span className="execution-error-count">{failedNodes} error{failedNodes > 1 ? 's' : ''}</span>
            )}
          </div>
          <div className="execution-action-buttons">
            {isRunning && (
              <button className="execution-btn pause" onClick={onPause}>
                ⏸️ Pause
              </button>
            )}
            {isPaused && (
              <button className="execution-btn resume" onClick={onResume}>
                ▶️ Resume
              </button>
            )}
            <button className="execution-btn abort" onClick={onAbort}>
              ⛔ Abort
            </button>
          </div>
        </div>

        {/* Tiers Section */}
        <div className="execution-tiers-section">
          {Array.from({ length: totalTiers }).map((_, tierIndex) => {
            const tierNum = tierIndex + 1;
            const tierNodes = nodesByTier.get(tierIndex) || [];
            const tierCompleted = tierNodes.filter((n) => n.status !== 'pending').length;
            const tierStatus =
              tierNum < currentTier
                ? 'completed'
                : tierNum === currentTier
                  ? 'running'
                  : 'pending';

            return (
              <div key={tierNum} className={`execution-tier execution-tier-${tierStatus}`}>
                <div className="execution-tier-header">
                  <h3>
                    {tierStatus === 'completed' && '✅ '}
                    {tierStatus === 'running' && '⚡ '}
                    {tierStatus === 'pending' && '⏳ '}
                    Tier {tierNum}
                  </h3>
                  <span className="execution-tier-progress">
                    {tierCompleted} / {tierNodes.length} nodes
                  </span>
                </div>

                {/* Nodes in this tier */}
                <div className="execution-nodes-list">
                  {tierNodes.map((nodeState) => (
                    <div key={nodeState.id} className={`execution-node execution-node-${nodeState.status}`}>
                      <div className="execution-node-info">
                        <div className="execution-node-header">
                          <span className="execution-node-icon">
                            {nodeState.status === 'completed' && '✅'}
                            {nodeState.status === 'running' && '⚡'}
                            {nodeState.status === 'pending' && '⏳'}
                            {nodeState.status === 'failed' && '❌'}
                            {nodeState.status === 'skipped' && '⊘'}
                          </span>
                          <span className="execution-node-name">{nodeState.name}</span>
                        </div>
                        {nodeState.status === 'running' && (
                          <div className="execution-node-progress">
                            <div className="execution-node-progress-bar">
                              <div
                                className="execution-node-progress-fill"
                                style={{ width: `${nodeState.progress || 0}%` }}
                              />
                            </div>
                            <span className="execution-node-progress-text">
                              {nodeState.progress || 0}%
                            </span>
                          </div>
                        )}
                        {nodeState.error && (
                          <div className="execution-node-error">
                            <span className="execution-error-icon">⚠️</span>
                            <span className="execution-error-text">{nodeState.error}</span>
                          </div>
                        )}
                      </div>

                      {/* Node Controls */}
                      {nodeState.status === 'failed' && (
                        <div className="execution-node-controls">
                          <button
                            className="execution-node-btn retry"
                            onClick={() => onRetry(nodeState.id)}
                          >
                            🔄 Retry
                          </button>
                          <button
                            className="execution-node-btn skip"
                            onClick={() => onSkip(nodeState.id)}
                          >
                            ⊘ Skip
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Error (if any) */}
        {error && (
          <div className="execution-global-error">
            <span className="execution-global-error-icon">🔴</span>
            <div>
              <h4>Workflow Error</h4>
              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="execution-footer">
          {isCompleted && (
            <button className="execution-btn-primary" onClick={onClose}>
              ✓ Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExecutionStatusPanel;
