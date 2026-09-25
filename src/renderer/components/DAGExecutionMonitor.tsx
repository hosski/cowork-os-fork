/**
 * DAG Execution Progress Monitor
 * 
 * React component for monitoring tier-by-tier execution progress.
 */

import React, { useMemo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface ExecutionState {
  dagId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  tiersCompleted: number;
  totalTiers: number;
  tasksCompleted: number;
  tasksFailed: number;
  totalTasks: number;
  currentTier: number;
  startedAt?: string;
  completedAt?: string;
  results?: Record<string, any>;
}

export const DAGExecutionMonitor: React.FC<{ onReset?: () => void }> = ({ onReset }) => {
  const [showLastStats, setShowLastStats] = useState(false);
  const execution = useSelector((state: any) => state.executionPlan as ExecutionState | null);
  const workflows = useSelector((state: any) => state.taskDAG?.workflows as Record<string, any> || {});
  const activeWorkflowId = useSelector((state: any) => state.taskDAG?.activeWorkflow as string | null);
  
  // Get execution result from active workflow
  let lastExecution = activeWorkflowId && workflows[activeWorkflowId] 
    ? workflows[activeWorkflowId].executionResult 
    : null;
  
  // If not in Redux, try to load from localStorage
  if (!lastExecution && activeWorkflowId) {
    try {
      const persisted = localStorage.getItem(`workflow-execution-${activeWorkflowId}`);
      if (persisted) {
        lastExecution = JSON.parse(persisted);
      }
    } catch (e) {
      console.error('[DAGExecutionMonitor] Failed to parse localStorage:', e);
    }
  }
  
  // Debug: log the workflow object structure
  if (activeWorkflowId && workflows[activeWorkflowId]) {
    console.log('[DAGExecutionMonitor] Workflow object:', {
      id: workflows[activeWorkflowId].id,
      name: workflows[activeWorkflowId].name,
      hasExecutionResult: !!workflows[activeWorkflowId].executionResult,
    });
  }

  // Auto-show stats when execution completes
  useEffect(() => {
    if (lastExecution && !showLastStats) {
      setShowLastStats(true);
    }
    
    // Also check localStorage for persisted results
    if (activeWorkflowId && !lastExecution && !showLastStats) {
      try {
        const persisted = localStorage.getItem(`workflow-execution-${activeWorkflowId}`);
        if (persisted) {
          setShowLastStats(true);
        }
      } catch (e) {
        console.error('[DAGExecutionMonitor] Failed to read localStorage:', e);
      }
    }
  }, [lastExecution, activeWorkflowId]);

  const progress = useMemo(() => {
    if (!execution) return null;

    const tierProgress = (execution.tiersCompleted / execution.totalTiers) * 100;
    const taskProgress = (execution.tasksCompleted / execution.totalTasks) * 100;
    const startTime = execution.startedAt ? new Date(execution.startedAt).getTime() : 0;
    const endTime = execution.completedAt ? new Date(execution.completedAt).getTime() : Date.now();
    const duration = Math.round((endTime - startTime) / 1000);

    return {
      tierProgress,
      taskProgress,
      duration,
      estimatedRemaining: execution.status === 'running' ? Math.max(0, 1200 - duration) : 0,
    };
  }, [execution]);

  // Show completion message with stats from last execution
  if (showLastStats && lastExecution) {
    const durationMins = Math.floor((lastExecution.duration || 0) / 60);
    const durationSecs = (lastExecution.duration || 0) % 60;
    const successRate = lastExecution.totalTasks > 0 
      ? Math.round(((lastExecution.tasksCompleted || 0) / lastExecution.totalTasks) * 100)
      : 0;
    const hasFailures = (lastExecution.tasksFailed || 0) > 0;

    return (
      <div className="execution-complete-container">
        <div className="execution-complete-backdrop" onClick={() => {}} />
        
        <div className="execution-complete-card">
          {/* Header */}
          <div className="execution-header">
            <div className="execution-icon-wrap">
              <div className={`execution-icon ${hasFailures ? 'warning' : 'success'}`}>
                {hasFailures ? '⚠️' : '✅'}
              </div>
            </div>
            <div className="execution-title-section">
              <h2 className="execution-title">
                {hasFailures ? 'Workflow Completed with Issues' : 'Workflow Execution Complete'}
              </h2>
              <p className="execution-subtitle">
                {lastExecution.dagId ? `ID: ${lastExecution.dagId.substring(0, 20)}...` : 'Workflow'}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="execution-stats-grid">
            <div className="execution-stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <div className="stat-label">Tiers Completed</div>
                <div className="stat-value">{lastExecution.tiersCompleted}/{lastExecution.totalTiers}</div>
              </div>
            </div>

            <div className="execution-stat-card">
              <div className="stat-icon">✓</div>
              <div className="stat-content">
                <div className="stat-label">Tasks Completed</div>
                <div className="stat-value">{lastExecution.tasksCompleted}/{lastExecution.totalTasks}</div>
              </div>
            </div>

            <div className="execution-stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <div className="stat-label">Total Duration</div>
                <div className="stat-value">
                  {durationMins > 0 ? `${durationMins}m ${durationSecs}s` : `${lastExecution.duration}s`}
                </div>
              </div>
            </div>

            <div className={`execution-stat-card ${successRate === 100 ? 'perfect' : 'partial'}`}>
              <div className="stat-icon">📈</div>
              <div className="stat-content">
                <div className="stat-label">Success Rate</div>
                <div className="stat-value">{successRate}%</div>
              </div>
            </div>
          </div>

          {/* Performance Bar */}
          <div className="execution-performance-section">
            <div className="performance-bar-container">
              <div className="performance-bar-label">
                <span>Execution Progress</span>
                <span className="performance-bar-value">{successRate}%</span>
              </div>
              <div className="performance-bar-bg">
                <div 
                  className={`performance-bar-fill ${successRate === 100 ? 'complete' : 'partial'}`}
                  style={{ width: `${successRate}%` }}
                />
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="execution-details-grid">
            <div className="detail-card success">
              <div className="detail-icon">✅</div>
              <div className="detail-text">
                <div className="detail-label">Succeeded</div>
                <div className="detail-value">{lastExecution.tasksCompleted} tasks</div>
              </div>
            </div>

            {hasFailures && (
              <div className="detail-card error">
                <div className="detail-icon">❌</div>
                <div className="detail-text">
                  <div className="detail-label">Failed</div>
                  <div className="detail-value">{lastExecution.tasksFailed} tasks</div>
                </div>
              </div>
            )}

            <div className="detail-card info">
              <div className="detail-icon">🎯</div>
              <div className="detail-text">
                <div className="detail-label">Status</div>
                <div className="detail-value">{lastExecution.status}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="execution-actions">
            <button 
              className="btn-reset"
              onClick={() => {
                setShowLastStats(false);
                onReset?.();
              }}
            >
              <span className="btn-icon">➕</span>
              <span className="btn-text">Create Another Workflow</span>
            </button>
          </div>

          {/* Footer */}
          <div className="execution-footer">
            <p>Ready to launch another workflow or customize this one</p>
          </div>
        </div>

        <style>{`
          .execution-complete-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
          }

          .execution-complete-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, rgba(167, 139, 250, 0.05) 100%);
            pointer-events: none;
            border-radius: 12px;
          }

          .execution-complete-card {
            position: relative;
            background: var(--color-bg-primary);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            width: 100%;
            max-width: 700px;
            padding: 32px;
            overflow: hidden;
          }

          .execution-header {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid var(--color-border-subtle);
          }

          .execution-icon-wrap {
            flex-shrink: 0;
          }

          .execution-icon {
            width: 64px;
            height: 64px;
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            background: var(--color-success-subtle);
            border: 2px solid var(--color-success);
          }

          .execution-icon.warning {
            background: var(--color-warning);
            opacity: 0.15;
            border-color: var(--color-warning);
          }

          .execution-title-section {
            flex: 1;
          }

          .execution-title {
            margin: 0 0 8px 0;
            font-size: 20px;
            font-weight: 700;
            color: var(--color-text);
            line-height: 1.3;
          }

          .execution-subtitle {
            margin: 0;
            font-size: 12px;
            color: var(--color-text-muted);
            font-family: var(--font-mono);
          }

          .execution-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 12px;
            margin-bottom: 24px;
          }

          .execution-stat-card {
            background: var(--color-bg-secondary);
            border: 1px solid var(--color-border-subtle);
            border-radius: var(--radius-md);
            padding: 16px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            transition: all 0.2s ease;
          }

          .execution-stat-card:hover {
            background: var(--color-bg-tertiary);
            border-color: var(--color-accent);
          }

          .execution-stat-card.perfect {
            background: var(--color-success-subtle);
            border-color: var(--color-success);
          }

          .execution-stat-card.partial {
            background: var(--color-accent-subtle);
            border-color: var(--color-accent);
          }

          .stat-icon {
            font-size: 24px;
            flex-shrink: 0;
          }

          .stat-content {
            flex: 1;
          }

          .stat-label {
            font-size: 11px;
            font-weight: 500;
            color: var(--color-text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
          }

          .stat-value {
            font-size: 20px;
            font-weight: 700;
            color: var(--color-text);
          }

          .execution-performance-section {
            margin-bottom: 24px;
            padding: 16px;
            background: var(--color-bg-secondary);
            border-radius: var(--radius-md);
          }

          .performance-bar-container {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .performance-bar-label {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            font-weight: 500;
            color: var(--color-text-secondary);
          }

          .performance-bar-value {
            color: var(--color-accent);
            font-weight: 700;
          }

          .performance-bar-bg {
            width: 100%;
            height: 8px;
            background: var(--color-bg-input);
            border-radius: 4px;
            overflow: hidden;
          }

          .performance-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
            transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            border-radius: 4px;
          }

          .performance-bar-fill.complete {
            background: linear-gradient(90deg, var(--color-success) 0%, #34d399 100%);
            box-shadow: 0 0 12px rgba(52, 211, 153, 0.3);
          }

          .execution-details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 12px;
            margin-bottom: 24px;
          }

          .detail-card {
            background: var(--color-bg-secondary);
            border: 1px solid var(--color-border-subtle);
            border-radius: var(--radius-md);
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .detail-card.success {
            background: var(--color-success-subtle);
            border-color: var(--color-success);
          }

          .detail-card.error {
            background: var(--color-error-subtle);
            border-color: var(--color-error);
          }

          .detail-card.info {
            background: var(--color-accent-subtle);
            border-color: var(--color-accent);
          }

          .detail-icon {
            font-size: 20px;
            flex-shrink: 0;
          }

          .detail-text {
            min-width: 0;
          }

          .detail-label {
            font-size: 11px;
            font-weight: 500;
            color: var(--color-text-muted);
            text-transform: uppercase;
            letter-spacing: 0.3px;
            margin-bottom: 2px;
          }

          .detail-value {
            font-size: 14px;
            font-weight: 600;
            color: var(--color-text);
          }

          .execution-actions {
            display: flex;
            gap: 12px;
            margin-bottom: 16px;
          }

          .btn-reset {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 24px;
            background: var(--color-accent);
            color: white;
            border: none;
            border-radius: var(--radius-md);
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(34, 211, 238, 0.2);
          }

          .btn-reset:hover {
            background: var(--color-accent-hover);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(34, 211, 238, 0.3);
          }

          .btn-reset:active {
            transform: translateY(0);
          }

          .btn-icon {
            font-size: 16px;
          }

          .btn-text {
            font-weight: 600;
          }

          .execution-footer {
            text-align: center;
            padding-top: 16px;
            border-top: 1px solid var(--color-border-subtle);
          }

          .execution-footer p {
            margin: 0;
            font-size: 12px;
            color: var(--color-text-muted);
          }
        `}</style>
      </div>
    );
  }

  // Fallback: always show something while waiting
  return (
    <div className="dag-monitor" style={{ padding: '2rem', textAlign: 'center' }}>
      <p style={{ fontSize: '1rem', color: '#666' }}>⏳ Waiting for workflow execution...</p>
      <p style={{ fontSize: '0.875rem', color: '#999' }}>Execution will display here when complete</p>
    </div>
  );

  const statusColor: Record<string, string> = {
    pending: '#f59e0b',
    running: '#3b82f6',
    completed: '#10b981',
    failed: '#ef4444',
  };

  const statusIcon: Record<string, string> = {
    pending: '⏳',
    running: '▶️',
    completed: '✅',
    failed: '❌',
  };

  return (
    <div className="dag-monitor">
      <div className="header">
        <h3>
          {statusIcon[execution.status]} Workflow Execution
        </h3>
        <span className="badge" style={{ backgroundColor: statusColor[execution.status] }}>
          {execution.status.toUpperCase()}
        </span>
      </div>

      <div className="stats-grid">
        <div className="stat">
          <label>Tiers</label>
          <div className="value">
            {execution.tiersCompleted}/{execution.totalTiers}
          </div>
        </div>
        <div className="stat">
          <label>Tasks</label>
          <div className="value">
            {execution.tasksCompleted}/{execution.totalTasks}
          </div>
        </div>
        <div className="stat">
          <label>Failed</label>
          <div className="value" style={{ color: execution.tasksFailed > 0 ? '#ef4444' : '#10b981' }}>
            {execution.tasksFailed}
          </div>
        </div>
        <div className="stat">
          <label>Duration</label>
          <div className="value">{progress?.duration}s</div>
        </div>
      </div>

      <div className="progress-section">
        <h4>Tier Progress</h4>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress?.tierProgress || 0}%` }}
          />
        </div>
        <span className="progress-label">{Math.round(progress?.tierProgress || 0)}%</span>
      </div>

      <div className="progress-section">
        <h4>Task Progress</h4>
        <div className="progress-bar">
          <div
            className="progress-fill task"
            style={{ width: `${progress?.taskProgress || 0}%` }}
          />
        </div>
        <span className="progress-label">{Math.round(progress?.taskProgress || 0)}%</span>
      </div>

      {execution.status === 'running' && (
        <div className="tier-indicator">
          <p>Currently executing Tier {execution.currentTier + 1} of {execution.totalTiers}</p>
          <p className="eta">
            Est. remaining: {progress?.estimatedRemaining}s
          </p>
        </div>
      )}

      {execution.status === 'completed' && (
        <div className="completion-summary">
          <p>✅ Workflow completed successfully</p>
          <p className="details">
            {execution.tasksCompleted} tasks in {progress?.duration}s
          </p>
        </div>
      )}

      {execution.status === 'failed' && (
        <div className="failure-summary">
          <p>❌ Workflow failed</p>
          <p className="details">
            {execution.tasksFailed} tasks failed, {execution.tasksCompleted} completed
          </p>
        </div>
      )}

      <style>{`
        .dag-monitor {
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          font-family: system-ui, -apple-system, sans-serif;
        }

        .empty-state {
          text-align: center;
          color: #9ca3af;
          padding: 40px 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .badge {
          padding: 4px 12px;
          border-radius: 12px;
          color: white;
          font-size: 11px;
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .stat {
          background: #f3f4f6;
          padding: 12px;
          border-radius: 6px;
          text-align: center;
        }

        .stat label {
          display: block;
          font-size: 11px;
          color: #6b7280;
          margin-bottom: 4px;
          font-weight: 500;
        }

        .stat value {
          display: block;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .progress-section {
          margin-bottom: 20px;
        }

        .progress-section h4 {
          margin: 0 0 8px 0;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
        }

        .progress-bar {
          height: 24px;
          background: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
          transition: width 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: 600;
        }

        .progress-fill.task {
          background: linear-gradient(90deg, #10b981 0%, #059669 100%);
        }

        .progress-label {
          display: block;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          color: #374151;
          margin-top: 4px;
        }

        .tier-indicator {
          background: #eff6ff;
          border-left: 3px solid #3b82f6;
          padding: 12px;
          border-radius: 4px;
          margin-top: 16px;
        }

        .tier-indicator p {
          margin: 4px 0;
          font-size: 13px;
          color: #1e40af;
        }

        .tier-indicator .eta {
          color: #6b7280;
          font-size: 12px;
        }

        .completion-summary {
          background: #f0fdf4;
          border-left: 3px solid #10b981;
          padding: 12px;
          border-radius: 4px;
          margin-top: 16px;
        }

        .completion-summary p {
          margin: 4px 0;
          font-size: 13px;
          color: #15803d;
        }

        .completion-summary .details {
          color: #6b7280;
          font-size: 12px;
        }

        .failure-summary {
          background: #fef2f2;
          border-left: 3px solid #ef4444;
          padding: 12px;
          border-radius: 4px;
          margin-top: 16px;
        }

        .failure-summary p {
          margin: 4px 0;
          font-size: 13px;
          color: #b91c1c;
        }

        .failure-summary .details {
          color: #6b7280;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};
