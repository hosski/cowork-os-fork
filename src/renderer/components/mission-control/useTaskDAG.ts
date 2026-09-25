/**
 * useTaskDAG: Build a DAG (Directed Acyclic Graph) from task parent/child relationships
 *
 * Transforms a flat task list into:
 * - Tier structure (layers of parallelizable tasks)
 * - Critical path (longest dependency chain)
 * - Estimated duration & parallelization speedup
 */

import { useMemo } from 'react';
import type { Task } from '../../../shared/types';

export interface TaskTier {
  tier: number;
  taskIds: string[];
  estimatedDuration: number; // minutes
  startTime: number;
}

export interface TaskDAGStructure {
  workflowId: string;
  rootTaskId: string;
  tiers: TaskTier[];
  totalDuration: number;
  criticalPath: string[]; // Task IDs in critical path
  parallelizationSpeedup: number; // 1.0 = sequential, 2.0 = 2x speedup
}

/**
 * Build task DAG from a root task and its descendants
 */
export function useTaskDAG(
  rootTask: Task | null,
  allTasks: Task[]
): TaskDAGStructure | null {
  return useMemo(() => {
    if (!rootTask) return null;

    const taskMap = new Map(allTasks.map((t) => [t.id, t]));
    const childrenByParent = new Map<string, Task[]>();

    // Index children by parent
    for (const task of allTasks) {
      if (task.parentTaskId) {
        if (!childrenByParent.has(task.parentTaskId)) {
          childrenByParent.set(task.parentTaskId, []);
        }
        childrenByParent.get(task.parentTaskId)!.push(task);
      }
    }

    // Build tiers using BFS (breadth-first = layers)
    const tiers: TaskTier[] = [];
    const visited = new Set<string>();
    let currentLevel = [rootTask];
    let tier = 0;
    let timeOffset = 0;

    while (currentLevel.length > 0) {
      const taskIds = currentLevel
        .filter((t) => !visited.has(t.id))
        .map((t) => {
          visited.add(t.id);
          return t.id;
        });

      if (taskIds.length > 0) {
        // Estimate duration: max of all tasks in this tier, or 4 min default
        const tierDuration = Math.max(
          4,
          ...currentLevel
            .filter((t) => !visited.has(t.id) || visited.has(t.id))
            .map((t) => Math.ceil((t.estimatedMinutes || 4) / (t.agentType === 'parallel' ? 1 : 1)))
        );

        tiers.push({
          tier,
          taskIds,
          estimatedDuration: tierDuration,
          startTime: timeOffset,
        });

        timeOffset += tierDuration;
      }

      // Next level: all children of current level
      const nextLevel: Task[] = [];
      for (const task of currentLevel) {
        const children = childrenByParent.get(task.id) || [];
        nextLevel.push(...children);
      }
      currentLevel = nextLevel;
      tier++;
    }

    // Critical path: longest chain from root to leaf
    const criticalPath = findCriticalPath(rootTask, childrenByParent, taskMap);

    // Estimate speedup: sequential duration vs. tiered duration
    const sequentialDuration = Array.from(taskMap.values()).reduce(
      (sum, t) => sum + (t.estimatedMinutes || 4),
      0
    );
    const tieredDuration = tiers.reduce((sum, t) => sum + t.estimatedDuration, 0);
    const parallelizationSpeedup = sequentialDuration / Math.max(1, tieredDuration);

    return {
      workflowId: rootTask.id,
      rootTaskId: rootTask.id,
      tiers,
      totalDuration: tieredDuration,
      criticalPath,
      parallelizationSpeedup,
    };
  }, [rootTask, allTasks]);
}

/**
 * Find the critical path (longest dependency chain)
 */
function findCriticalPath(
  task: Task,
  childrenByParent: Map<string, Task[]>,
  taskMap: Map<string, Task>
): string[] {
  const children = childrenByParent.get(task.id) || [];

  if (children.length === 0) {
    return [task.id];
  }

  // Find longest path among children
  let longestPath: string[] = [task.id];
  let maxDuration = task.estimatedMinutes || 4;

  for (const child of children) {
    const childPath = findCriticalPath(child, childrenByParent, taskMap);
    const childDuration =
      (task.estimatedMinutes || 4) +
      childPath.reduce((sum, id) => sum + ((taskMap.get(id)?.estimatedMinutes || 4) - 4), 0);

    if (childDuration > maxDuration) {
      maxDuration = childDuration;
      longestPath = [task.id, ...childPath];
    }
  }

  return longestPath;
}
