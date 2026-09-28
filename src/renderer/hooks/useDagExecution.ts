import { useCallback, useEffect, useRef, useState } from 'react';
import type { TaskDag } from '../../shared/types';

export interface DagNodeStateUI {
  nodeId: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
  startedAt?: number;
  completedAt?: number;
  error?: string;
  retryCount: number;
}

export interface DagExecutionStateUI {
  dagId: string;
  taskId: string;
  status: 'idle' | 'running' | 'paused' | 'completed' | 'failed';
  currentTier: number;
  totalTiers: number;
  nodeStates: DagNodeStateUI[];
  startedAt?: number;
  completedAt?: number;
  error?: string;
}

/**
 * Hook to manage DAG execution state and IPC communication
 */
export function useDagExecution(taskId: string, dag: TaskDag | null) {
  const [executionState, setExecutionState] = useState<DagExecutionStateUI | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const executorRef = useRef<{
    dag: TaskDag;
    abortController?: AbortController;
  } | null>(null);

  // Listen for state changes from main process
  useEffect(() => {
    const handleStateChanged = (data: { taskId: string; state: Record<string, unknown> }) => {
      if (data.taskId === taskId) {
        setExecutionState(data.state as unknown as DagExecutionStateUI);
      }
    };

    const unsubscribe = (window.electronAPI.onDagStateChanged as any)?.(handleStateChanged);
    return () => unsubscribe?.();
  }, [taskId]);

  const startExecution = useCallback(async () => {
    if (!dag) {
      setError('No DAG available');
      return;
    }

    setIsStarting(true);
    setError(null);

    try {
      executorRef.current = { dag };
      await (window.electronAPI.startDagExecution as any)({ dag, taskId });
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setError(errorMsg);
    } finally {
      setIsStarting(false);
    }
  }, [dag, taskId]);

  const pauseExecution = useCallback(async () => {
    try {
      await (window.electronAPI.pauseDagExecution as any)(taskId);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setError(errorMsg);
    }
  }, [taskId]);

  const resumeExecution = useCallback(async () => {
    if (!dag) {
      setError('No DAG available');
      return;
    }

    try {
      await (window.electronAPI.resumeDagExecution as any)({ taskId, dag });
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setError(errorMsg);
    }
  }, [dag, taskId]);

  const skipNode = useCallback(
    async (nodeId: string) => {
      if (!dag) {
        setError('No DAG available');
        return;
      }

      try {
        await (window.electronAPI.skipDagNode as any)({ taskId, nodeId, dag });
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        setError(errorMsg);
      }
    },
    [dag, taskId],
  );

  const retryNode = useCallback(
    async (nodeId: string) => {
      if (!dag) {
        setError('No DAG available');
        return;
      }

      try {
        await (window.electronAPI.retryDagNode as any)({ taskId, nodeId, dag });
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        setError(errorMsg);
      }
    },
    [dag, taskId],
  );

  const abortExecution = useCallback(async () => {
    try {
      await (window.electronAPI.abortDagExecution as any)(taskId);
      executorRef.current = null;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setError(errorMsg);
    }
  }, [taskId]);

  return {
    executionState,
    isStarting,
    error,
    startExecution,
    pauseExecution,
    resumeExecution,
    skipNode,
    retryNode,
    abortExecution,
  };
}
