/**
 * Redux Toolkit Store Setup for CoWork OS
 *
 * Manages state for:
 * - TaskDAG workflows
 * - Grill-Tab interrogation ladder
 * - Execution plans & results
 * - Team routing
 */

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dagAutoExecutionMiddleware } from './middleware/dag-auto-execution';

// ============================================================================
// TaskDAG Slice
// ============================================================================

interface TaskDAGState {
  workflows: Record<string, any>;
  activeWorkflow: string | null;
  loading: boolean;
  error: string | null;
}

const initialTaskDAGState: TaskDAGState = {
  workflows: {},
  activeWorkflow: null,
  loading: false,
  error: null,
};

const taskDAGSlice = createSlice({
  name: 'taskDAG',
  initialState: initialTaskDAGState,
  reducers: {
    addWorkflow: (state, action: PayloadAction<any>) => {
      const payload = action.payload;
      const id = payload.id;
      
      // Store the complete workflow data (tiers, nodes, metadata)
      state.workflows[id] = {
        id: payload.id,
        name: payload.name,
        type: payload.type,
        tiers: payload.tiers,
        nodes: payload.nodes,
        createdAt: new Date().toISOString(),
      };
      
      // Auto-set as active workflow to trigger execution middleware
      state.activeWorkflow = id;
    },
    setActiveWorkflow: (state, action: PayloadAction<string>) => {
      state.activeWorkflow = action.payload;
    },
    updateWorkflow: (state, action: PayloadAction<{ id: string; dag: any }>) => {
      state.workflows[action.payload.id] = action.payload.dag;
    },
    deleteWorkflow: (state, action: PayloadAction<string>) => {
      const workflowId = action.payload;
      delete state.workflows[workflowId];
      if (state.activeWorkflow === workflowId) {
        state.activeWorkflow = null;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// ============================================================================
// Grill-Tab Slice
// ============================================================================

interface GrillTabLadderRung {
  question: string;
  answer: string;
  category: 'goal' | 'deliverable' | 'scope' | 'verification' | 'architecture';
  recommended: string;
}

interface GrillTabState {
  ladder: GrillTabLadderRung[];
  currentQuestion: string | null;
  currentRecommended: string | null;
  brief: string | null;
  isDone: boolean;
  progress: { current: number; estimated_max: number } | null;
  loading: boolean;
  error: string | null;
}

const initialGrillTabState: GrillTabState = {
  ladder: [],
  currentQuestion: null,
  currentRecommended: null,
  brief: null,
  isDone: false,
  progress: null,
  loading: false,
  error: null,
};

const grillTabSlice = createSlice({
  name: 'grillTab',
  initialState: initialGrillTabState,
  reducers: {
    addRung: (state, action: PayloadAction<GrillTabLadderRung>) => {
      state.ladder.push(action.payload);
      state.progress = {
        current: state.ladder.length,
        estimated_max: 25,
      };
    },
    setCurrentQuestion: (
      state,
      action: PayloadAction<{ question: string; recommended: string }>
    ) => {
      state.currentQuestion = action.payload.question;
      state.currentRecommended = action.payload.recommended;
    },
    setBrief: (state, action: PayloadAction<string>) => {
      state.brief = action.payload;
      state.isDone = true;
    },
    resetLadder: (state) => {
      state.ladder = [];
      state.currentQuestion = null;
      state.currentRecommended = null;
      state.brief = null;
      state.isDone = false;
      state.progress = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// ============================================================================
// Execution Plan Slice
// ============================================================================

interface ExecutionPlanState {
  plan: any | null;
  result: any | null;
  status: 'idle' | 'planning' | 'executing' | 'completed' | 'failed';
  tiersCompleted: number;
  tasksCompleted: number;
  elapsedHours: number;
  error: string | null;
}

const initialExecutionPlanState: ExecutionPlanState = {
  plan: null,
  result: null,
  status: 'idle',
  tiersCompleted: 0,
  tasksCompleted: 0,
  elapsedHours: 0,
  error: null,
};

const executionPlanSlice = createSlice({
  name: 'executionPlan',
  initialState: initialExecutionPlanState,
  reducers: {
    setPlan: (state, action: PayloadAction<any>) => {
      state.plan = action.payload;
      state.status = 'planning';
    },
    startExecution: (state) => {
      state.status = 'executing';
      state.tiersCompleted = 0;
      state.tasksCompleted = 0;
    },
    updateProgress: (
      state,
      action: PayloadAction<{
        tiersCompleted: number;
        tasksCompleted: number;
        elapsedHours: number;
      }>
    ) => {
      state.tiersCompleted = action.payload.tiersCompleted;
      state.tasksCompleted = action.payload.tasksCompleted;
      state.elapsedHours = action.payload.elapsedHours;
    },
    setResult: (state, action: PayloadAction<any>) => {
      state.result = action.payload;
      state.status = 'completed';
      state.tiersCompleted = action.payload.tiersCompleted || 0;
      state.tasksCompleted = action.payload.tasksCompleted || 0;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    reset: (state) => {
      state.plan = null;
      state.result = null;
      state.status = 'idle';
      state.tiersCompleted = 0;
      state.tasksCompleted = 0;
      state.elapsedHours = 0;
      state.error = null;
    },
  },
});

// ============================================================================
// Configure Store
// ============================================================================

export const store = configureStore({
  reducer: {
    taskDAG: taskDAGSlice.reducer,
    grillTab: grillTabSlice.reducer,
    executionPlan: executionPlanSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    dagAutoExecutionMiddleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ============================================================================
// Export Actions
// ============================================================================

export const taskDAGActions = taskDAGSlice.actions;
export const grillTabActions = grillTabSlice.actions;
export const executionPlanActions = executionPlanSlice.actions;
