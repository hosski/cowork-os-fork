/**
 * DAG Execution Event Listener Middleware
 *
 * Listens for IPC events from the executor and dispatches Redux actions
 * to update the real-time execution state in the UI.
 */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dagExecutionActions } from '../store';

interface DAGExecutionEvent {
  type: 'tier-start' | 'tier-complete' | 'node-update' | 'dag-complete' | 'dag-error';
  dagId: string;
  tierIdx?: number;
  nodeId?: string;
  nodeStatus?: string;
  timestamp: number;
  data?: any;
}

/**
 * Hook to subscribe to DAG execution events
 */
export function useDAGExecutionListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Get electronAPI from window
    const api = (window as any).electronAPI;
    if (!api || !api.onDAGExecutionEvent) {
      console.warn('[DAG Listener] electronAPI.onDAGExecutionEvent not available');
      return;
    }

    // Register listener for execution events
    const unsubscribe = api.onDAGExecutionEvent((event: DAGExecutionEvent) => {
      console.log('[DAG Listener] Event:', event.type, {
        dagId: event.dagId,
        nodeId: event.nodeId,
        tierIdx: event.tierIdx,
      });

      switch (event.type) {
        case 'tier-start':
          dispatch(dagExecutionActions.tierStarted({ tierIdx: event.tierIdx || 0 }));
          break;

        case 'node-update':
          dispatch(
            dagExecutionActions.nodeUpdated({
              nodeId: event.nodeId || '',
              status: event.nodeStatus || 'pending',
              error: event.data?.error,
              retryCount: event.data?.retryCount,
            })
          );
          break;

        case 'tier-complete':
          // Tier complete is handled by node-update events;
          // this event is just for logging/analytics
          console.log('[DAG Listener] Tier complete:', {
            tierIdx: event.tierIdx,
            completed: event.data?.completed,
            failed: event.data?.failed,
          });
          break;

        case 'dag-complete':
          dispatch(dagExecutionActions.executionCompleted());
          console.log('[DAG Listener] DAG complete:', {
            completed: event.data?.completed,
            failed: event.data?.failed,
          });
          break;

        case 'dag-error':
          dispatch(dagExecutionActions.executionFailed({ error: event.data?.error || 'Unknown error' }));
          console.error('[DAG Listener] DAG error:', event.data?.error);
          break;
      }
    });

    // Cleanup on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [dispatch]);

  // Return void - this hook just sets up the listener
  // The Redux state is accessed directly by components via useSelector
  return {};
}

/**
 * Middleware for dag-execution.ts auto-execution path
 * This dispatches initial event when DAG execution starts
 */
export function initializeDAGExecutionListener() {
  const api = (window as any).electronAPI;
  if (!api || !api.onDAGExecutionEvent) {
    console.warn('[DAG Listener] electronAPI not available in initialization');
    return;
  }

  // The listener will be attached when components mount via useDAGExecutionListener hook
  console.log('[DAG Listener] Initialized (will attach on component mount)');
}
