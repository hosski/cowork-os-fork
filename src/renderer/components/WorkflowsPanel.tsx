import { useState } from 'react';
import { WorkflowLauncherPanel } from './WorkflowLauncherPanel';
import { DAGExecutionMonitor } from './DAGExecutionMonitor';

/**
 * Workflows Management Panel
 * Combines WorkflowLauncherPanel (create workflows) + DAGExecutionMonitor (watch execution)
 */
export const WorkflowsPanel: React.FC = () => {
  const [showLauncher, setShowLauncher] = useState(true);
  const [executionCount, setExecutionCount] = useState(0);

  const handleWorkflowCreated = (workflow: any) => {
    setExecutionCount(count => count + 1);
    console.log('Workflow created and auto-executing:', workflow);
    // DAGExecutionMonitor will pick up the Redux state update via middleware
  };

  return (
    <div className="workflows-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem', padding: '1rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Workflows</h2>
        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          {executionCount > 0 && `${executionCount} executions`}
        </span>
      </div>

      {/* Create Workflow Section */}
      {showLauncher && (
        <div style={{ flexShrink: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <WorkflowLauncherPanel onWorkflowCreated={handleWorkflowCreated} />
        </div>
      )}

      {/* Execution Monitor */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
        <DAGExecutionMonitor />
      </div>
    </div>
  );
};

export default WorkflowsPanel;
