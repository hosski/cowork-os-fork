/**
 * Tier Computation & M5 Pro Optimization
 *
 * Maps task tiers to Apple Silicon P-core/E-core hints for intelligent parallelization.
 * M5 Pro: 8 P-cores (high-performance) + 4 E-cores (efficiency)
 *
 * Strategy:
 * - Tier 0-1: P-core tasks (high parallelization, compute-intensive agents)
 * - Tier 2+: E-core tasks (lightweight, sequential QA/synthesis)
 * - Tier boundaries: Sequential (tier waits for previous tier to complete)
 * - Within tier: Parallel (all tasks run simultaneously)
 *
 * Expected speedup: 1.5-2× vs sequential execution
 */

import { TaskDAG } from "./task-dag";

export type QoSClass = "userInteractive" | "utility" | "background" | "default";
export type CoreHint = "p-core" | "e-core" | "balanced" | "auto";

/**
 * QoS (Quality of Service) hints for scheduler resource allocation.
 * Maps to macOS Grand Central Dispatch (GCD) quality-of-service levels.
 */
export interface QoSHint {
  class: QoSClass; // GCD QoS priority
  coreHint: CoreHint; // P-core vs E-core preference
  concurrency: number; // Max parallel agents in this tier
  timeoutSeconds: number; // Tier execution timeout
}

/**
 * Tier metadata with M5 Pro optimization hints.
 */
export interface TierMetadata {
  tierIndex: number;
  taskIds: string[];
  qosHint: QoSHint;
  estimatedDurationSeconds: number;
  parallelismFactor: number; // 1.0 = no speedup (sequential), 2.0 = 2× speedup
  description: string;
}

/**
 * M5 Pro resource profile.
 * Used to guide task scheduling decisions.
 */
export const M5_PRO_PROFILE = {
  totalCores: 12,
  pCores: 8,
  eCores: 4,
  maxConcurrentAgents: 3, // Practical limit: 3-4 agents running together
  tipicalMemoryPerAgent: 256, // MB
  maxMemoryForAgents: 4096, // MB
};

/**
 * Compute tier metadata with M5 Pro optimization hints.
 *
 * @param dag - Task DAG with computed tiers
 * @returns Array of TierMetadata with QoS hints
 *
 * Algorithm:
 * 1. Estimate duration for each tier (max of task durations)
 * 2. Assign QoS class based on tier index (early tiers = higher priority)
 * 3. Determine core hint (P-core for compute-heavy, E-core for I/O)
 * 4. Calculate parallelism factor (actual speedup vs sequential)
 */
export function computeTierMetadata(dag: TaskDAG): TierMetadata[] {
  if (dag.tiers.length === 0) {
    dag.computeTiers();
  }

  const metadata: TierMetadata[] = [];
  const totalTiers = dag.tiers.length;

  dag.tiers.forEach((tierTaskIds, tierIndex) => {
    // 1. Estimate duration (max of task durations in this tier)
    const estimatedDuration = Math.max(
      ...tierTaskIds.map((taskId) => {
        const node = dag.nodes.get(taskId);
        return node ? node.estimatedDurationSeconds : 300;
      }),
      300,
    );

    // 2. Assign QoS class based on tier position
    // Early tiers are more critical (data gathering) → higher QoS
    // Late tiers are synthesis/QA → lower QoS
    let qosClass: QoSClass;
    if (tierIndex === 0) {
      qosClass = "userInteractive"; // Entry point, prioritize
    } else if (tierIndex === totalTiers - 1) {
      qosClass = "background"; // Final synthesis, can be slower
    } else {
      qosClass = "utility"; // Middle tiers, balanced
    }

    // 3. Determine core hint based on task types
    // Research/Analysis → P-cores (compute-intensive)
    // Code → P-cores (CPU-bound)
    // Design → E-cores (I/O, wait for user input)
    // Orchestration → E-cores (lightweight coordination)
    const roleTypes = tierTaskIds
      .map((taskId) => dag.nodes.get(taskId)?.role.toLowerCase() || "")
      .join(",");

    let coreHint: CoreHint;
    if (roleTypes.includes("research") || roleTypes.includes("code") || roleTypes.includes("analysis")) {
      coreHint = "p-core";
    } else if (roleTypes.includes("design") || roleTypes.includes("orchestrat")) {
      coreHint = "e-core";
    } else {
      coreHint = "balanced";
    }

    // 4. Calculate parallelism factor
    // Parallelism = 1.0 (sequential) + (taskCount - 1) * 0.8 (realistic speedup per task)
    // E.g., 4 tasks in parallel ≈ 1 + 3 * 0.8 = 3.4× speedup (but capped at core count)
    const taskCount = tierTaskIds.length;
    const theoreticalSpeedup = 1.0 + (taskCount - 1) * 0.8;
    const practicialSpeedup = Math.min(
      theoreticalSpeedup,
      coreHint === "p-core" ? M5_PRO_PROFILE.pCores : M5_PRO_PROFILE.eCores,
    );
    const parallelismFactor = Math.max(practicialSpeedup, 1.0);

    // 5. Concurrency limits based on core type
    let concurrency: number;
    if (coreHint === "p-core") {
      concurrency = Math.min(taskCount, Math.floor(M5_PRO_PROFILE.pCores / 2)); // Conservative: 4 agents max
    } else if (coreHint === "e-core") {
      concurrency = Math.min(taskCount, Math.floor(M5_PRO_PROFILE.eCores / 2)); // Conservative: 2 agents max
    } else {
      concurrency = Math.min(taskCount, M5_PRO_PROFILE.maxConcurrentAgents);
    }

    // 6. Timeout: 5 min + (duration / 60 sec per task)
    const timeoutSeconds = 300 + Math.ceil(estimatedDuration / concurrency) * 2;

    metadata.push({
      tierIndex,
      taskIds: tierTaskIds,
      qosHint: {
        class: qosClass,
        coreHint,
        concurrency,
        timeoutSeconds,
      },
      estimatedDurationSeconds: estimatedDuration,
      parallelismFactor,
      description: `Tier ${tierIndex}: ${tierTaskIds.length} task(s), ${coreHint} hint, ~${parallelismFactor.toFixed(1)}× speedup`,
    });
  });

  return metadata;
}

/**
 * Estimated speedup for entire DAG execution with M5 Pro hints.
 *
 * Simplified model:
 * - Sequential: sum of all task durations
 * - Parallel (tier-based): sum of tier max durations
 * - Speedup = sequential / parallel
 *
 * @param dag - Task DAG with computed tiers
 * @returns Estimated speedup ratio (e.g., 1.8 = 1.8× faster)
 */
export function estimateDAGSpeedup(dag: TaskDAG): number {
  if (dag.tiers.length === 0) {
    dag.computeTiers();
  }

  // Sequential total: sum of all task durations
  let sequentialTotal = 0;
  dag.nodes.forEach((node) => {
    sequentialTotal += node.estimatedDurationSeconds;
  });

  // Parallel total (tier-based): sum of tier max durations
  const parallelTotal = dag.getCriticalPathDuration();

  if (parallelTotal === 0) return 1.0;
  return sequentialTotal / parallelTotal;
}

/**
 * Human-readable summary of parallelization strategy.
 *
 * @param dag - Task DAG
 * @param metadata - Tier metadata
 * @returns Multi-line text summary
 */
export function summarizeParallelizationStrategy(dag: TaskDAG, metadata: TierMetadata[]): string {
  const speedup = estimateDAGSpeedup(dag);
  const lines: string[] = [];

  lines.push(`## M5 Pro Parallelization Strategy`);
  lines.push(``);
  lines.push(`**Overall Speedup:** ~${speedup.toFixed(1)}× (from ${metadata.length} tier(s))`);
  lines.push(``);

  metadata.forEach((tier) => {
    lines.push(`### ${tier.description}`);
    lines.push(`  - Tasks: ${tier.taskIds.join(", ")}`);
    lines.push(`  - QoS: ${tier.qosHint.class} (${tier.qosHint.coreHint})`);
    lines.push(`  - Concurrency: ${tier.qosHint.concurrency} agents max`);
    lines.push(`  - Duration: ~${tier.estimatedDurationSeconds}s`);
    lines.push(`  - Timeout: ${tier.qosHint.timeoutSeconds}s`);
    lines.push(``);
  });

  lines.push(`**Critical Path:** ${dag.getCriticalPathDuration()}s (~${Math.ceil(dag.getCriticalPathDuration() / 60)}m)`);
  lines.push(`**Expected Benefit:** Reduced execution time, better M5 Pro utilization`);

  return lines.join("\n");
}
