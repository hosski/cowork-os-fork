/**
 * Test DAG for Infrastructure Validation
 * 
 * Simple 3-tier DAG to verify end-to-end execution:
 * Tier 0: Planning (1 task)
 * Tier 1: Design (1 task, depends on Tier 0)
 * Tier 2: QA (1 task, depends on Tier 1)
 * 
 * Used to verify:
 * - Redux middleware auto-execution
 * - IPC handler → main process
 * - DAG executor tier progression
 * - QA validation + retry logic
 * - OpenViking sync logging
 */

import { TaskDAG, TaskStatus, TaskPriority, TaskType } from './task-dag';

export function createTestDAG(): TaskDAG {
  const dag = new TaskDAG(
    'test-dag-001',
    'Infrastructure Test DAG',
    'Validates end-to-end execution pipeline'
  );

  // Tier 0: Planning
  const planNode: any = {
    id: 'plan_001',
    title: 'Plan: Test Workflow',
    description: 'Create test plan for infrastructure validation',
    role: 'planner',
    taskType: TaskType.ANALYSIS,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: { workflowName: 'infrastructure-test' },
    outputs: {},
    successCriteria: 'Plan document created',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 300,
  };
  dag.addNode(planNode);

  // Tier 1: Design
  const designNode: any = {
    id: 'design_001',
    title: 'Design: Test Workflow',
    description: 'Design architecture for infrastructure test',
    role: 'designer',
    taskType: TaskType.DESIGN,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: { planId: 'plan_001' },
    outputs: {},
    successCriteria: 'Architecture diagram created',
    maxRetries: 2,
    retryCount: 0,
    estimatedDurationSeconds: 600,
  };
  dag.addNode(designNode);
  dag.addEdge('plan_001', 'design_001');

  // Tier 2: QA
  const qaNode: any = {
    id: 'qa_001',
    title: 'QA: Test Workflow',
    description: 'Validate infrastructure test execution',
    role: 'qa',
    taskType: TaskType.ANALYSIS,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: { designId: 'design_001' },
    outputs: {},
    successCriteria: 'All validations passed',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 300,
  };
  dag.addNode(qaNode);
  dag.addEdge('design_001', 'qa_001');

  // Compute execution tiers
  dag.computeTiers();

  return dag;
}

export function getTestDAGJSON(): Record<string, any> {
  return createTestDAG().toJSON();
}
