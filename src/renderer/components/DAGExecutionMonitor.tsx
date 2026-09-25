/**
 * DAG Execution Progress Monitor
 * 
 * React component for monitoring tier-by-tier execution progress.
 */

import React, { useMemo } from 'react';
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

export const DAGExecutionMonitor: React.FC = () => {
  const execution = useSelector((state: any) => state.executionPlan as ExecutionState | null);
  const workflows = useSelector((state: any) => state.taskDAG?.workflows as Record<string, any> || {});
  const activeWorkflowId = useSelector((state: any) => state.taskDAG?.activeWorkflow as string | null);
  
  // Get execution result from active workflow
  const lastExecution = activeWorkflowId && workflows[activeWorkflowId] 
    ? workflows[activeWorkflowId].executionResult 
    : null;

  console.log('[DAGExecutionMonitor] Rendered:', {
    activeWorkflowId,
    hasWorkflow: !!workflows[activeWorkflowId],
    lastExecution,
    workflowKeys: Object.keys(workflows),
  });

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
  if (lastExecution) {
    return (
      <div className="dag-monitor">
        <div className="empty-state" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
          <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Workflow Execution Complete</p>
          <div style={{ 
            backgroundColor: '#f0fdf4', 
            border: '1px solid #86efac',
            borderRadius: '6px',
            padding: '1rem',
            marginBottom: '1rem',
            textAlign: 'left',
            display: 'inline-block'
          }}>
            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
              <strong>Tiers:</strong> {lastExecution.tiersCompleted || 0}/{lastExecution.totalTiers || 0} ✓
            </p>
            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
              <strong>Tasks:</strong> {lastExecution.tasksCompleted || 0}/{lastExecution.totalTasks || 0} ✓
            </p>
            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
              <strong>Failed:</strong> {lastExecution.tasksFailed || 0}
            </p>
            <p style={{ margin: '0.5rem 0', fontSize: '0.9rem' }}>
              <strong>Duration:</strong> {lastExecution.duration || 0}s
            </p>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>Create another workflow to run again</p>
        </div>
      </div>
    );
  }

  if (!execution) {
    return (
      <div className="dag-monitor">
        <div className="empty-state" style={{ padding: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>⏳ Waiting for workflow execution...</p>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>Create a workflow to begin</p>
        </div>
      </div>
    );
  }

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
