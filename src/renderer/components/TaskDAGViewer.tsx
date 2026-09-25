/**
 * TaskDAGViewer: Visual Gantt chart + tier breakdown for CoWork Mission Control
 *
 * Displays:
 * - Task timeline (Gantt-style)
 * - Tier layers (color-coded)
 * - Critical path highlighting
 * - Parallelization speedup estimate
 */

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import type { TaskDAGStructure } from './mission-control/useTaskDAG';

interface Props {
  workflowId?: string;
}

export const TaskDAGViewer: React.FC<Props> = ({ workflowId }) => {
  const workflows = useSelector((state: RootState) => state.taskDAG.workflows);
  const activeWorkflow = useSelector((state: RootState) => state.taskDAG.activeWorkflow);

  const workflow: TaskDAGStructure | null = useMemo(() => {
    const id = workflowId || activeWorkflow;
    return id ? workflows[id] : null;
  }, [workflowId, activeWorkflow, workflows]);

  if (!workflow) {
    return (
      <div style={styles.container}>
        <div style={styles.placeholder}>
          <div>No workflow data</div>
          <div style={styles.placeholderText}>Select a task to view its DAG</div>
        </div>
      </div>
    );
  }

  const { tiers, totalDuration, sequentialDuration, criticalPath, parallelizationSpeedup } = workflow;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 Task Timeline DAG</h2>

      <div style={styles.stats}>
        <div style={styles.stat}>
          <div style={styles.statLabel}>Sequential</div>
          <div style={styles.statValue}>{sequentialDuration}m</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statLabel}>Parallelized</div>
          <div style={styles.statValue}>{Math.round(totalDuration)}m</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statLabel}>Speedup</div>
          <div style={styles.statValue}>{parallelizationSpeedup.toFixed(2)}x</div>
        </div>
        <div style={styles.stat}>
          <div style={styles.statLabel}>Tiers</div>
          <div style={styles.statValue}>{tiers.length}</div>
        </div>
      </div>

      <div style={styles.gantt}>
        <div style={styles.ganttHeader}>
          <div style={styles.ganttLabel}>Tier</div>
          <div style={styles.ganttTimeline}>
            {Array.from({ length: Math.ceil(totalDuration / 5) + 1 }).map((_, i) => (
              <div key={i} style={styles.ganttTick}>
                {i * 5}m
              </div>
            ))}
          </div>
        </div>

        {tiers.map((tierData) => (
          <div key={tierData.tier} style={styles.ganttRow}>
            <div style={styles.ganttLabel}>T{tierData.tier}</div>
            <div style={styles.ganttTimeline}>
              <div
                style={{
                  ...styles.ganttBar,
                  left: `${(tierData.startTime / totalDuration) * 100}%`,
                  width: `${(tierData.estimatedDuration / totalDuration) * 100}%`,
                  backgroundColor: getTierColor(tierData.tier),
                }}
                title={`${tierData.taskIds.length} tasks | ${tierData.estimatedDuration}m`}
              >
                <div style={styles.ganttBarLabel}>{tierData.taskIds.length}T</div>
              </div>
            </div>
          </div>
        ))}

        {/* Critical path marker */}
        {criticalPath.length > 0 && (
          <div style={styles.criticalPathMarker}>
            <span style={styles.criticalPathLabel}>Critical Path ({criticalPath.length} tasks)</span>
          </div>
        )}
      </div>

      <div style={styles.tiers}>
        <h3 style={styles.tiersTitle}>Tier Details</h3>
        {tiers.map((tierData) => (
          <div key={tierData.tier} style={styles.tierCard}>
            <div style={styles.tierHeader}>
              <span style={styles.tierBadge}>{tierData.tier}</span>
              <span style={styles.tierInfo}>
                {tierData.taskIds.length} tasks | {tierData.estimatedDuration}m
              </span>
            </div>
            <div style={styles.tierTasks}>
              {tierData.taskIds.map((taskId, idx) => (
                <div key={idx} style={styles.tierTask}>
                  <span style={styles.tierTaskDot}>●</span> {taskId}
                  {criticalPath.includes(taskId) && <span style={styles.criticalBadge}>⭐</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {criticalPath.length > 0 && (
        <div style={styles.criticalPathSection}>
          <h3 style={styles.tiersTitle}>Critical Path</h3>
          <div style={styles.criticalPathList}>
            {criticalPath.map((taskId, idx) => (
              <div key={idx} style={styles.criticalPathItem}>
                <span style={styles.criticalPathStep}>{idx + 1}</span> {taskId}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function getTierColor(tier: number): string {
  const colors = ['#FF9800', '#2196F3', '#4CAF50', '#9C27B0', '#F44336', '#00BCD4'];
  return colors[tier % colors.length];
}

const styles = {
  container: {
    padding: '16px',
    backgroundColor: 'var(--color-bg-primary)',
    borderRadius: '6px',
    height: '100%',
    overflow: 'auto',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: 'var(--color-text-primary)',
  } as React.CSSProperties,
  placeholder: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    color: 'var(--color-text-secondary)',
    fontSize: '14px',
  },
  placeholderText: {
    fontSize: '12px',
    marginTop: '8px',
    opacity: 0.7,
  } as React.CSSProperties,
  title: {
    marginTop: 0,
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
  } as React.CSSProperties,
  stats: {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
    flexWrap: 'wrap' as const,
  },
  stat: {
    padding: '12px 16px',
    backgroundColor: 'var(--color-bg-elevated)',
    borderRadius: '6px',
    border: '1px solid var(--color-border)',
    flex: '1 1 120px',
  } as React.CSSProperties,
  statLabel: {
    fontSize: '12px',
    color: 'var(--color-text-secondary)',
    marginBottom: '4px',
  } as React.CSSProperties,
  statValue: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--color-accent)',
  } as React.CSSProperties,
  gantt: {
    backgroundColor: 'var(--color-bg-elevated)',
    borderRadius: '6px',
    border: '1px solid var(--color-border)',
    marginBottom: '20px',
    overflow: 'auto',
  } as React.CSSProperties,
  ganttHeader: {
    display: 'flex',
    borderBottom: '2px solid var(--color-border)',
    fontWeight: '600',
    backgroundColor: 'var(--color-bg-hover)',
  } as React.CSSProperties,
  ganttRow: {
    display: 'flex',
    borderBottom: '1px solid var(--color-border)',
    fontSize: '13px',
  } as React.CSSProperties,
  ganttLabel: {
    width: '50px',
    padding: '8px',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    flexShrink: 0,
    textAlign: 'center' as const,
  },
  ganttTimeline: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    height: '40px',
    minWidth: '400px',
  } as React.CSSProperties,
  ganttTick: {
    flex: 1,
    borderRight: '1px solid var(--color-border)',
    textAlign: 'center' as const,
    fontSize: '11px',
    color: 'var(--color-text-secondary)',
    paddingTop: '4px',
  },
  ganttBar: {
    position: 'absolute',
    height: '24px',
    top: '8px',
    borderRadius: '4px',
    color: 'white',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    backgroundColor: 'var(--color-accent)',
  } as React.CSSProperties,
  ganttBarLabel: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } as React.CSSProperties,
  criticalPathMarker: {
    padding: '8px',
    backgroundColor: 'rgba(255, 152, 0, 0.1)',
    borderTop: '2px solid #FF9800',
    fontSize: '12px',
    fontWeight: '600',
    color: '#FF9800',
  } as React.CSSProperties,
  criticalPathLabel: {
    marginLeft: '0px',
  } as React.CSSProperties,
  tiers: {
    marginTop: '20px',
  } as React.CSSProperties,
  tiersTitle: {
    marginTop: 0,
    marginBottom: '12px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
  } as React.CSSProperties,
  tierCard: {
    marginBottom: '12px',
    padding: '12px',
    backgroundColor: 'var(--color-bg-elevated)',
    borderRadius: '6px',
    border: '1px solid var(--color-border)',
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
    backgroundColor: 'var(--color-accent)',
    color: 'white',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '12px',
  } as React.CSSProperties,
  tierInfo: {
    fontSize: '13px',
    color: 'var(--color-text-secondary)',
  } as React.CSSProperties,
  tierTasks: {
    paddingLeft: '32px',
  } as React.CSSProperties,
  tierTask: {
    fontSize: '12px',
    color: 'var(--color-text-primary)',
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  } as React.CSSProperties,
  tierTaskDot: {
    color: 'var(--color-text-secondary)',
    fontSize: '10px',
  } as React.CSSProperties,
  criticalBadge: {
    marginLeft: '8px',
    fontSize: '12px',
  } as React.CSSProperties,
  criticalPathSection: {
    marginTop: '20px',
    padding: '12px',
    backgroundColor: 'rgba(255, 152, 0, 0.05)',
    borderRadius: '6px',
    border: '1px solid rgba(255, 152, 0, 0.2)',
  } as React.CSSProperties,
  criticalPathList: {
    paddingLeft: '0px',
  } as React.CSSProperties,
  criticalPathItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '13px',
    color: 'var(--color-text-primary)',
    marginBottom: '6px',
  } as React.CSSProperties,
  criticalPathStep: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    backgroundColor: '#FF9800',
    color: 'white',
    borderRadius: '3px',
    fontWeight: '600',
    fontSize: '11px',
  } as React.CSSProperties,
};
