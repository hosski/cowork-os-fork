/**
 * TaskDAGViewer: Visual Gantt chart + tier breakdown for CoWork Mission Control
 *
 * Displays:
 * - Task timeline (Gantt-style)
 * - Tier layers (color-coded)
 * - Critical path highlighting
 * - M5 Pro speedup estimate
 */

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

interface Props {
  workflowId?: string;
}

export const TaskDAGViewer: React.FC<Props> = ({ workflowId }) => {
  const workflows = useSelector((state: RootState) => state.taskDAG.workflows);
  const activeWorkflow = useSelector((state: RootState) => state.taskDAG.activeWorkflow);

  const workflow = workflowId ? workflows[workflowId] : activeWorkflow ? workflows[activeWorkflow] : null;

  if (!workflow) {
    return <div style={styles.container}>No workflow selected</div>;
  }

  // Mock data for demonstration
  const tiers = [
    {
      tier: 0,
      tasks: ['Research Brief', 'Gather Footage'],
      duration: 3,
      startTime: 0,
    },
    {
      tier: 1,
      tasks: ['Storyboard', 'Organize Assets'],
      duration: 4,
      startTime: 3,
    },
    {
      tier: 2,
      tasks: ['Raw Cut', 'Sound Design', 'Color Pass 1'],
      duration: 8,
      startTime: 7,
    },
    {
      tier: 3,
      tasks: ['Review', 'Revise', 'Color Pass 2', 'Sound Mix'],
      duration: 7,
      startTime: 15,
    },
    {
      tier: 4,
      tasks: ['Final QA', 'Export', 'Deliver'],
      duration: 3.5,
      startTime: 22,
    },
  ];

  const totalDuration = 30;
  const m5Duration = 20.3;
  const speedup = (totalDuration / m5Duration).toFixed(2);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 Task Timeline: {workflow?.title || 'Workflow'}</h2>

      <div style={styles.stats}>
        <div style={styles.stat}>
          <div style={styles.statLabel}>Sequential</div>
          <div style={styles.statValue}>{totalDuration}h</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statLabel}>M5 Pro</div>
          <div style={styles.statValue}>{m5Duration}h</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statLabel}>Speedup</div>
          <div style={styles.statValue}>{speedup}x</div>
        </div>
      </div>

      <div style={styles.gantt}>
        <div style={styles.ganttHeader}>
          <div style={styles.ganttLabel}>Tier</div>
          <div style={styles.ganttTimeline}>
            {Array.from({ length: Math.ceil(totalDuration) }).map((_, i) => (
              <div key={i} style={styles.ganttTick}>
                {i}h
              </div>
            ))}
          </div>
        </div>

        {tiers.map((tierData) => (
          <div key={tierData.tier} style={styles.ganttRow}>
            <div style={styles.ganttLabel}>Tier {tierData.tier}</div>
            <div style={styles.ganttTimeline}>
              <div
                style={{
                  ...styles.ganttBar,
                  left: `${(tierData.startTime / totalDuration) * 100}%`,
                  width: `${(tierData.duration / totalDuration) * 100}%`,
                  backgroundColor: getTierColor(tierData.tier),
                }}
              >
                <div style={styles.ganttBarLabel}>{tierData.tasks.length} tasks</div>
              </div>
            </div>
          </div>
        ))}

        {/* Critical path line */}
        <div
          style={{
            ...styles.criticalPathLine,
            left: `${(totalDuration / totalDuration) * 100}%`,
          }}
        >
          Critical Path
        </div>
      </div>

      <div style={styles.tiers}>
        <h3 style={styles.tiersTitle}>Tier Details</h3>
        {tiers.map((tierData) => (
          <div key={tierData.tier} style={styles.tierCard}>
            <div style={styles.tierHeader}>
              <span style={styles.tierBadge}>{tierData.tier}</span>
              <span style={styles.tierInfo}>
                {tierData.tasks.length} tasks | {tierData.duration}h
              </span>
            </div>
            <div style={styles.tierTasks}>
              {tierData.tasks.map((task, idx) => (
                <div key={idx} style={styles.tierTask}>
                  ✓ {task}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function getTierColor(tier: number): string {
  const colors = ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336'];
  return colors[tier % colors.length];
}

const styles = {
  container: {
    padding: '16px',
    backgroundColor: 'var(--color-bg-secondary, #f5f5f5)',
    borderRadius: '6px',
    height: '100%',
    overflow: 'auto',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  } as React.CSSProperties,
  title: {
    marginTop: 0,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  } as React.CSSProperties,
  stats: {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
  } as React.CSSProperties,
  stat: {
    padding: '12px 16px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
    flex: 1,
  } as React.CSSProperties,
  statLabel: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '4px',
  } as React.CSSProperties,
  statValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  } as React.CSSProperties,
  gantt: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
    marginBottom: '20px',
    overflow: 'auto',
  } as React.CSSProperties,
  ganttHeader: {
    display: 'flex',
    borderBottom: '2px solid #ddd',
    fontWeight: 'bold',
  } as React.CSSProperties,
  ganttRow: {
    display: 'flex',
    borderBottom: '1px solid #eee',
    fontSize: '13px',
  } as React.CSSProperties,
  ganttLabel: {
    width: '80px',
    padding: '8px',
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 0,
  } as React.CSSProperties,
  ganttTimeline: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    height: '40px',
    minWidth: '600px',
  } as React.CSSProperties,
  ganttTick: {
    flex: 1,
    borderRight: '1px solid #eee',
    textAlign: 'center',
    fontSize: '11px',
    color: '#999',
    paddingTop: '4px',
  } as React.CSSProperties,
  ganttBar: {
    position: 'absolute',
    height: '24px',
    top: '8px',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  } as React.CSSProperties,
  ganttBarLabel: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } as React.CSSProperties,
  criticalPathLine: {
    position: 'absolute',
    top: 0,
    width: '2px',
    height: '100%',
    backgroundColor: '#f44336',
    zIndex: 10,
  } as React.CSSProperties,
  tiers: {
    marginTop: '20px',
  } as React.CSSProperties,
  tiersTitle: {
    marginTop: 0,
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
  } as React.CSSProperties,
  tierCard: {
    marginBottom: '12px',
    padding: '12px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
  } as React.CSSProperties,
  tierHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  } as React.CSSProperties,
  tierBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    backgroundColor: '#2196F3',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '12px',
  } as React.CSSProperties,
  tierInfo: {
    fontSize: '13px',
    color: '#666',
  } as React.CSSProperties,
  tierTasks: {
    paddingLeft: '32px',
  } as React.CSSProperties,
  tierTask: {
    fontSize: '12px',
    color: '#333',
    marginBottom: '4px',
  } as React.CSSProperties,
};
