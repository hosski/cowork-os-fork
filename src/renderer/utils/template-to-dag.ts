/**
 * Convert workflow templates to TaskDAG nodes for execution.
 * Maps template metadata + agents to DAG tier structure.
 */

import type { WorkflowTemplate } from '../../electron/data/workflow-templates';

export interface TaskDagNode {
  id: string;
  title: string;
  description?: string;
  role: string;
  model: string;
  prompt: string;
  tier: number; // Execution tier (0 = first, dependencies determine advancement)
  dependencies: string[]; // IDs of tasks that must complete first
  maxRetries: number;
  timeoutMs: number;
}

export interface TaskDag {
  id: string;
  title: string;
  description: string;
  nodes: TaskDagNode[];
  templateId: string;
  createdAt: number;
}

/**
 * Convert a WorkflowTemplate to a TaskDAG.
 * Assigns tiers based on dependencies.
 */
export function templateToTaskDag(template: WorkflowTemplate): TaskDag {
  const nodeMap = new Map<string, TaskDagNode>();

  // Step 1: Create nodes from template agents
  for (const agent of template.agents) {
    const nodeId = `${template.id}-${agent.role}`;
    const node: TaskDagNode = {
      id: nodeId,
      title: `${capitalizeFirst(agent.role)} — ${template.name}`,
      description: `${agent.role.toUpperCase()} agent working on: ${template.name}`,
      role: agent.role,
      model: agent.model,
      prompt: agent.prompt,
      tier: 0, // Computed in Step 2
      dependencies: agent.dependencies.map((dep: string) => `${template.id}-${dep}`),
      maxRetries: 2,
      timeoutMs: 60 * 60 * 1000, // 1 hour default
    };
    nodeMap.set(nodeId, node);
  }

  // Step 2: Compute tiers via topological sort + level assignment
  const computeTiers = (nodeId: string, visited: Set<string>, memo: Map<string, number>): number => {
    if (memo.has(nodeId)) {
      return memo.get(nodeId)!;
    }
    if (visited.has(nodeId)) {
      return 0; // Cycle detected, assign tier 0
    }

    visited.add(nodeId);
    const node = nodeMap.get(nodeId);
    if (!node || node.dependencies.length === 0) {
      memo.set(nodeId, 0);
      return 0;
    }

    const depTiers = node.dependencies.map((depId) => computeTiers(depId, visited, memo));
    const tier = Math.max(...depTiers, -1) + 1;
    memo.set(nodeId, tier);
    return tier;
  };

  const tierMemo = new Map<string, number>();
  for (const nodeId of nodeMap.keys()) {
    const tier = computeTiers(nodeId, new Set(), tierMemo);
    const node = nodeMap.get(nodeId);
    if (node) {
      node.tier = tier;
    }
  }

  // Step 3: Assemble DAG
  const dag: TaskDag = {
    id: `dag-${template.id}-${Date.now()}`,
    title: template.name,
    description: template.description,
    nodes: Array.from(nodeMap.values()),
    templateId: template.id,
    createdAt: Date.now(),
  };

  return dag;
}

/**
 * Compute which nodes can execute in parallel (same tier, no cross-tier deps).
 */
export function getExecutableTier(dag: TaskDag, completedNodeIds: Set<string>): TaskDagNode[] {
  return dag.nodes.filter((node) => {
    // Already completed
    if (completedNodeIds.has(node.id)) {
      return false;
    }

    // All dependencies completed
    const depsCompleted = node.dependencies.every((depId) => completedNodeIds.has(depId));
    if (!depsCompleted) {
      return false;
    }

    // In the minimum tier of remaining nodes
    const remainingMinTier = Math.min(
      ...dag.nodes
        .filter((n) => !completedNodeIds.has(n.id))
        .map((n) => n.tier),
      Infinity,
    );
    return node.tier === remainingMinTier;
  });
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
