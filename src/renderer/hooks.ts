/**
 * Custom Redux Hooks for CoWork Components
 *
 * Simplifies access to state and dispatch throughout the app.
 * Use these instead of useSelector/useDispatch directly.
 *
 * Usage:
 *   const { ladder, brief, isDone } = useGrillTab();
 *   const { addWorkflow, setActiveWorkflow } = useTaskDAGActions();
 */

import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { taskDAGActions, grillTabActions, executionPlanActions } from './store';

// ============================================================================
// TaskDAG Hooks
// ============================================================================

export const useTaskDAG = () => {
  const state = useSelector((state: RootState) => state.taskDAG);
  return state;
};

export const useTaskDAGActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return {
    addWorkflow: (id: string, dag: any) => dispatch(taskDAGActions.addWorkflow({ id, dag })),
    setActiveWorkflow: (id: string) => dispatch(taskDAGActions.setActiveWorkflow(id)),
    updateWorkflow: (id: string, dag: any) => dispatch(taskDAGActions.updateWorkflow({ id, dag })),
    deleteWorkflow: (id: string) => dispatch(taskDAGActions.deleteWorkflow(id)),
    setLoading: (loading: boolean) => dispatch(taskDAGActions.setLoading(loading)),
    setError: (error: string | null) => dispatch(taskDAGActions.setError(error)),
  };
};

// ============================================================================
// Grill-Tab Hooks
// ============================================================================

export const useGrillTab = () => {
  const state = useSelector((state: RootState) => state.grillTab);
  return state;
};

export const useGrillTabActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return {
    addRung: (rung: any) => dispatch(grillTabActions.addRung(rung)),
    setCurrentQuestion: (q: string, r: string) =>
      dispatch(grillTabActions.setCurrentQuestion({ question: q, recommended: r })),
    setBrief: (brief: string) => dispatch(grillTabActions.setBrief(brief)),
    resetLadder: () => dispatch(grillTabActions.resetLadder()),
    setLoading: (loading: boolean) => dispatch(grillTabActions.setLoading(loading)),
    setError: (error: string | null) => dispatch(grillTabActions.setError(error)),
  };
};

// ============================================================================
// Execution Plan Hooks
// ============================================================================

export const useExecutionPlan = () => {
  const state = useSelector((state: RootState) => state.executionPlan);
  return state;
};

export const useExecutionPlanActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return {
    setPlan: (plan: any) => dispatch(executionPlanActions.setPlan(plan)),
    startExecution: () => dispatch(executionPlanActions.startExecution()),
    updateProgress: (tiersCompleted: number, tasksCompleted: number, elapsedHours: number) =>
      dispatch(
        executionPlanActions.updateProgress({ tiersCompleted, tasksCompleted, elapsedHours })
      ),
    setResult: (result: any) => dispatch(executionPlanActions.setResult(result)),
    setError: (error: string) => dispatch(executionPlanActions.setError(error)),
    reset: () => dispatch(executionPlanActions.reset()),
  };
};

// ============================================================================
// Combined Hook (for components that need multiple slices)
// ============================================================================

export const useCoWorkState = () => {
  return {
    taskDAG: useTaskDAG(),
    grillTab: useGrillTab(),
    executionPlan: useExecutionPlan(),
  };
};

export const useCoWorkActions = () => {
  return {
    taskDAG: useTaskDAGActions(),
    grillTab: useGrillTabActions(),
    executionPlan: useExecutionPlanActions(),
  };
};
