/**
 * Grill-Tab-5 → DAG Converter
 * 
 * Maps Grill-Tab categories to DAG tiers:
 * Goal → Planning, Deliverable → Design, Scope → Implementation, 
 * Verification → QA, Architecture → Optimize
 */

import { TaskDAG, TaskStatus, TaskPriority, TaskType } from './task-dag';

export interface GrillTabLadderRung {
  question: string;
  answer: string;
  category: 'goal' | 'deliverable' | 'scope' | 'verification' | 'architecture';
  recommended: string;
}

export function grillTabToDag(
  taskId: string,
  taskTitle: string,
  ladder: GrillTabLadderRung[]
): TaskDAG {
  const dag = new TaskDAG(taskId, `${taskTitle} (Grill-Tab)`, 'Auto-structured via Grill-Tab-5');

  if (ladder.length === 0) throw new Error('Empty ladder');

  const byCategory: Record<string, GrillTabLadderRung[]> = {
    goal: [],
    deliverable: [],
    scope: [],
    verification: [],
    architecture: [],
  };

  ladder.forEach((r) => byCategory[r.category].push(r));

  let prevId: string | null = null;

  // Tier 0: Goal
  if (byCategory.goal.length > 0) {
    const id = `plan_${taskId}`;
    const node: any = {
      id,
      title: `Plan: ${taskTitle}`,
      description: byCategory.goal.map((r) => r.answer).join(' '),
      role: 'planner',
      taskType: TaskType.ANALYSIS,
      priority: TaskPriority.HIGH,
      status: TaskStatus.PENDING,
      inputs: {},
      outputs: {},
      successCriteria: 'Goals documented',
      maxRetries: 1,
      retryCount: 0,
      estimatedDurationSeconds: 600,
    };
    dag.addNode(node);
    prevId = id;
  }

  // Tier 1: Deliverable
  if (byCategory.deliverable.length > 0) {
    const id = `design_${taskId}`;
    const node: any = {
      id,
      title: `Design: ${taskTitle}`,
      description: byCategory.deliverable.map((r) => r.answer).join(' '),
      role: 'designer',
      taskType: TaskType.DESIGN,
      priority: TaskPriority.HIGH,
      status: TaskStatus.PENDING,
      inputs: {},
      outputs: {},
      successCriteria: 'Deliverables defined',
      maxRetries: 2,
      retryCount: 0,
      estimatedDurationSeconds: 1800,
    };
    dag.addNode(node);
    if (prevId) dag.addEdge(prevId, id);
    prevId = id;
  }

  // Tier 2: Scope
  if (byCategory.scope.length > 0) {
    const id = `impl_${taskId}`;
    const node: any = {
      id,
      title: `Implement: ${taskTitle}`,
      description: byCategory.scope.map((r) => r.answer).join(' '),
      role: 'engineer',
      taskType: TaskType.CODE,
      priority: TaskPriority.NORMAL,
      status: TaskStatus.PENDING,
      inputs: {},
      outputs: {},
      successCriteria: 'Scope completed',
      maxRetries: 3,
      retryCount: 0,
      estimatedDurationSeconds: 3600,
    };
    dag.addNode(node);
    if (prevId) dag.addEdge(prevId, id);
    prevId = id;
  }

  // Tier 3: Verification
  if (byCategory.verification.length > 0) {
    const id = `qa_${taskId}`;
    const node: any = {
      id,
      title: `QA: ${taskTitle}`,
      description: byCategory.verification.map((r) => r.answer).join(' '),
      role: 'qa',
      taskType: TaskType.ANALYSIS,
      priority: TaskPriority.HIGH,
      status: TaskStatus.PENDING,
      inputs: {},
      outputs: {},
      successCriteria: 'All criteria verified',
      maxRetries: 2,
      retryCount: 0,
      estimatedDurationSeconds: 1200,
    };
    dag.addNode(node);
    if (prevId) dag.addEdge(prevId, id);
    prevId = id;
  }

  // Tier 4: Architecture
  if (byCategory.architecture.length > 0) {
    const id = `opt_${taskId}`;
    const node: any = {
      id,
      title: `Optimize: ${taskTitle}`,
      description: byCategory.architecture.map((r) => r.answer).join(' '),
      role: 'architect',
      taskType: TaskType.ANALYSIS,
      priority: TaskPriority.NORMAL,
      status: TaskStatus.PENDING,
      inputs: {},
      outputs: {},
      successCriteria: 'Architecture optimized',
      maxRetries: 1,
      retryCount: 0,
      estimatedDurationSeconds: 1800,
    };
    dag.addNode(node);
    if (prevId) dag.addEdge(prevId, id);
  }

  dag.computeTiers();
  return dag;
}

export function grillTabToWorkflow(
  taskId: string,
  taskTitle: string,
  ladder: GrillTabLadderRung[]
): Record<string, any> {
  return grillTabToDag(taskId, taskTitle, ladder).toJSON();
}
