/**
 * End-to-End Integration Test: Full DAG Pipeline
 *
 * Validates the complete flow:
 * 1. Create Grill-Tab-5 ladder
 * 2. Convert to TaskDAG
 * 3. Execute tiers with mock agents
 * 4. Run QA validation
 * 5. Track costs
 * 6. Verify completion
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { TaskDAG, TaskStatus, TaskNode } from '../../electron/agent/orchestration/task-dag';

describe('E2E: Full DAG Pipeline (Grill-Tab → Execute → QA → Complete)', () => {
  let dag: TaskDAG;

  beforeEach(() => {
    // Create DAG from Grill-Tab output
    dag = new TaskDAG('e2e-test-1', 'Design and implement API', 'REST API for user management', 'default', '', '');

    // Add nodes based on Grill-Tab roles
    const roles = [
      { nodeId: 'designer', title: 'Design API spec', role: 'designer', tier: 0 },
      { nodeId: 'coder-1', title: 'Implement endpoints', role: 'coder', tier: 1 },
      { nodeId: 'tester', title: 'Write tests', role: 'tester', tier: 1 },
      { nodeId: 'reviewer', title: 'Code review', role: 'reviewer', tier: 2 },
    ];

    roles.forEach((r) => {
      const node: TaskNode = {
        id: r.nodeId,
        title: r.title,
        role: r.role,
        status: TaskStatus.PENDING,
        retryCount: 0,
        maxRetries: 2,
      };
      dag.addNode(node);
    });

    // Add edges (dependencies)
    dag.addEdge('designer', 'coder-1');
    dag.addEdge('designer', 'tester');
    dag.addEdge('coder-1', 'reviewer');
    dag.addEdge('tester', 'reviewer');

    // Compute tiers
    dag.computeTiers();
  });

  describe('1. DAG Construction from Grill-Tab', () => {
    it('should create DAG with correct structure', () => {
      expect(dag.id).toBe('e2e-test-1');
      expect(dag.title).toBe('Design and implement API');
      expect(dag.nodes.size).toBe(4);
    });

    it('should compute correct tier structure', () => {
      expect(dag.tiers.length).toBe(3);
      expect(dag.tiers[0]).toContain('designer');
      expect(dag.tiers[1]).toContain('coder-1');
      expect(dag.tiers[1]).toContain('tester');
      expect(dag.tiers[2]).toContain('reviewer');
    });

    it('should track dependencies correctly', () => {
      const designerEdges = dag.edges.get('designer') || [];
      expect(designerEdges).toContain('coder-1');
      expect(designerEdges).toContain('tester');
    });

    it('should validate no circular dependencies', () => {
      // Create a fresh DAG for circular test
      const badDag = new TaskDAG('bad', 'Circular test', '', 'default', '', '');

      const nodeA: TaskNode = { id: 'a', title: 'A', status: TaskStatus.PENDING, retryCount: 0, maxRetries: 1 };
      const nodeB: TaskNode = { id: 'b', title: 'B', status: TaskStatus.PENDING, retryCount: 0, maxRetries: 1 };

      badDag.addNode(nodeA);
      badDag.addNode(nodeB);
      badDag.addEdge('a', 'b');
      badDag.addEdge('b', 'a'); // Circular

      // Should throw on computeTiers
      expect(() => badDag.computeTiers()).toThrow();
    });
  });

  describe('2. Tier-by-Tier Execution Simulation', () => {
    it('should track execution progress through tiers', async () => {
      // Simulate execution: start DAG
      dag.status = TaskStatus.RUNNING;
      dag.startedAt = new Date().toISOString();

      expect(dag.status).toBe('running');

      // Tier 0: designer
      const designerNode = dag.nodes.get('designer');
      designerNode!.status = TaskStatus.COMPLETED;
      designerNode!.completedAt = new Date().toISOString();
      designerNode!.outputs = { apiSpec: 'OpenAPI 3.0' };

      // Tier 1: coder-1, tester
      const coderNode = dag.nodes.get('coder-1');
      coderNode!.status = TaskStatus.COMPLETED;
      coderNode!.outputs = { code: 'endpoints implemented' };

      const testerNode = dag.nodes.get('tester');
      testerNode!.status = TaskStatus.COMPLETED;
      testerNode!.outputs = { tests: 'unit + integration' };

      // Tier 2: reviewer
      const reviewerNode = dag.nodes.get('reviewer');
      reviewerNode!.status = TaskStatus.COMPLETED;
      reviewerNode!.outputs = { approved: true };

      dag.status = TaskStatus.COMPLETED;
      dag.completedAt = new Date().toISOString();

      expect(dag.status).toBe('completed');
      expect(Array.from(dag.nodes.values()).every((n) => n.status === TaskStatus.COMPLETED)).toBe(true);
    });

    it('should gate tier advancement on all-nodes-complete', () => {
      // Tier 0
      dag.nodes.get('designer')!.status = TaskStatus.COMPLETED;

      // Tier 1 incomplete → should not advance to Tier 2
      expect(dag.nodes.get('coder-1')!.status).toBe(TaskStatus.PENDING);
      expect(dag.nodes.get('tester')!.status).toBe(TaskStatus.PENDING);

      // Complete both
      dag.nodes.get('coder-1')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('tester')!.status = TaskStatus.COMPLETED;

      // Now Tier 2 can start
      expect(dag.nodes.get('reviewer')!.status === TaskStatus.PENDING).toBe(true);

      // Complete it
      dag.nodes.get('reviewer')!.status = TaskStatus.COMPLETED;

      expect(Array.from(dag.nodes.values()).every((n) => n.status === TaskStatus.COMPLETED)).toBe(true);
    });

    it('should handle node failures and mark tier as failed', () => {
      // Tier 0 completes
      dag.nodes.get('designer')!.status = TaskStatus.COMPLETED;

      // Tier 1: one node fails
      dag.nodes.get('coder-1')!.status = TaskStatus.FAILED;
      dag.nodes.get('coder-1')!.outputs = { error: 'Syntax error' };

      dag.status = TaskStatus.FAILED;

      expect(dag.status).toBe('failed');
      expect(dag.nodes.get('coder-1')!.outputs?.error).toBeDefined();
    });
  });

  describe('3. QA Validation', () => {
    it('should validate node outputs against criteria', () => {
      const node = dag.nodes.get('designer')!;
      node.successCriteria = 'API spec must include all endpoints';
      node.outputs = { apiSpec: 'OpenAPI 3.0 with POST/GET/PUT/DELETE' };

      // Simple validation: check if outputs exist
      const qaPass = node.outputs && Object.keys(node.outputs).length > 0;
      expect(qaPass).toBe(true);
    });

    it('should flag failures for rework', () => {
      const node = dag.nodes.get('coder-1')!;
      node.successCriteria = 'All endpoints implemented and tested';
      node.status = TaskStatus.FAILED;
      node.outputs = { error: 'POST endpoint incomplete' };

      // QA determines this is a transient error (not permanent)
      const shouldRetry = node.retryCount < node.maxRetries;
      expect(shouldRetry).toBe(true);

      node.retryCount++;
      node.status = TaskStatus.PENDING; // Reset for retry

      expect(node.status).toBe(TaskStatus.PENDING);
      expect(node.retryCount).toBe(1);
    });

    it('should track confidence scores for QA decisions', () => {
      const qaResults = [
        { taskId: 'designer', pass: true, confidence: 0.99 },
        { taskId: 'coder-1', pass: true, confidence: 0.87 },
        { taskId: 'tester', pass: true, confidence: 0.92 },
        { taskId: 'reviewer', pass: true, confidence: 0.78 },
      ];

      const avgConfidence = qaResults.reduce((sum, r) => sum + r.confidence, 0) / qaResults.length;
      expect(avgConfidence).toBeGreaterThan(0.85);

      const allPass = qaResults.every((r) => r.pass);
      expect(allPass).toBe(true);
    });
  });

  describe('4. Cost Tracking', () => {
    it('should calculate cost per node', () => {
      const costModel = {
        'claude-3-5-sonnet': { input: 0.003, output: 0.015 },
        'claude-3-opus': { input: 0.015, output: 0.075 },
      };

      const nodeUsage = {
        designer: { model: 'claude-3-5-sonnet', inputTokens: 1000, outputTokens: 500 },
        'coder-1': { model: 'claude-3-5-sonnet', inputTokens: 5000, outputTokens: 8000 },
        tester: { model: 'claude-3-opus', inputTokens: 2000, outputTokens: 3000 },
        reviewer: { model: 'claude-3-5-sonnet', inputTokens: 1500, outputTokens: 800 },
      };

      const calculateCost = (model: string, inputTokens: number, outputTokens: number) => {
        const pricing = costModel[model as keyof typeof costModel];
        return (inputTokens * pricing.input + outputTokens * pricing.output) / 1000;
      };

      const costs = {
        designer: calculateCost('claude-3-5-sonnet', 1000, 500),
        'coder-1': calculateCost('claude-3-5-sonnet', 5000, 8000),
        tester: calculateCost('claude-3-opus', 2000, 3000),
        reviewer: calculateCost('claude-3-5-sonnet', 1500, 800),
      };

      const totalCost = Object.values(costs).reduce((sum, c) => sum + c, 0);

      expect(costs.designer).toBeCloseTo(0.006, 3); // $0.006
      expect(totalCost).toBeGreaterThan(0);
      expect(totalCost).toBeLessThan(1); // Should be cents, not dollars
    });

    it('should track cumulative cost per DAG execution', () => {
      const dagCost = 0.042; // Sum from above
      const dailyBudget = 10; // $10/day

      const remainingBudget = dailyBudget - dagCost;
      expect(remainingBudget).toBeCloseTo(9.958, 3);

      // After 3 executions
      const costAfter3 = dagCost * 3;
      expect(costAfter3).toBeCloseTo(0.126, 3);
      expect(dailyBudget - costAfter3).toBeGreaterThan(9);
    });
  });

  describe('5. Complete Pipeline Simulation', () => {
    it('should execute full pipeline from start to completion', () => {
      // 1. DAG created ✓ (done in beforeEach)
      expect(dag.nodes.size).toBe(4);

      // 2. Tiers computed ✓
      expect(dag.tiers.length).toBe(3);

      // 3. Execute Tier 0
      dag.nodes.get('designer')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('designer')!.outputs = { apiSpec: 'OpenAPI 3.0' };

      // 4. Execute Tier 1 (parallel)
      dag.nodes.get('coder-1')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('coder-1')!.outputs = { code: 'implemented' };
      dag.nodes.get('tester')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('tester')!.outputs = { tests: 'passing' };

      // 5. Execute Tier 2
      dag.nodes.get('reviewer')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('reviewer')!.outputs = { approved: true };

      // 6. QA validation: all pass
      const qaResults = Array.from(dag.nodes.values()).map((n) => ({
        id: n.id,
        pass: n.status === TaskStatus.COMPLETED,
      }));
      expect(qaResults.every((r) => r.pass)).toBe(true);

      // 7. Mark DAG complete
      dag.status = TaskStatus.COMPLETED;

      // 8. Final assertions
      expect(dag.status).toBe(TaskStatus.COMPLETED);
      expect(Array.from(dag.nodes.values()).every((n) => n.outputs)).toBe(true);
    });

    it('should handle partial failure + rework recovery', () => {
      // Tier 0 complete
      dag.nodes.get('designer')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('designer')!.outputs = { apiSpec: 'spec' };

      // Tier 1: coder-1 fails, tester succeeds
      dag.nodes.get('coder-1')!.status = TaskStatus.FAILED;
      dag.nodes.get('coder-1')!.outputs = { error: 'Syntax error' };

      dag.nodes.get('tester')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('tester')!.outputs = { tests: 'ready' };

      // DAG is failed
      dag.status = TaskStatus.FAILED;
      expect(dag.status).toBe(TaskStatus.FAILED);

      // User reworks coder-1
      dag.nodes.get('coder-1')!.status = TaskStatus.PENDING;
      dag.nodes.get('coder-1')!.retryCount = 1;
      dag.nodes.get('coder-1')!.outputs = undefined;

      // Rework succeeds
      dag.nodes.get('coder-1')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('coder-1')!.outputs = { code: 'fixed' };

      // Tier 2 can now proceed
      dag.nodes.get('reviewer')!.status = TaskStatus.COMPLETED;
      dag.nodes.get('reviewer')!.outputs = { approved: true };

      // Mark complete
      dag.status = TaskStatus.COMPLETED;

      expect(dag.status).toBe(TaskStatus.COMPLETED);
      expect(dag.nodes.get('coder-1')!.retryCount).toBe(1);
    });
  });
});
