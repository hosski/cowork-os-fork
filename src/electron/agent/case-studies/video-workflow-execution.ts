/**
 * Video Workflow Execution: Live CoWork Integration Example
 */

import { TaskDAG } from "../orchestration/task-dag";
import { buildVideoWorkflowDAG } from "./video-workflow-dag";

/**
 * CoWork Integration Example: Execute Video Workflow
 */
export interface ExecutionPlan {
  workflow_name: string;
  dag_json: any;
  tier_hints: TierHint[];
  parallelization_strategy: "m5-pro" | "intel" | "sequential";
  team: string;
  estimated_total_hours: number;
  estimated_m5_hours: number;
}

export interface TierHint {
  tier: number;
  task_ids: string[];
  parallelism: number;
  qos_class: "userInteractive" | "utility" | "background";
  agent_roles: string[];
}

/**
 * Build execution plan for video workflow on M5 Pro
 */
export function buildVideoExecutionPlan(): ExecutionPlan {
  const dag = buildVideoWorkflowDAG();
  const tiers = dag.computeTiers();
  const criticalPathDuration = dag.getCriticalPathDuration();
  const criticalPathHours = criticalPathDuration / 3600;

  // Map tiers to parallelization hints
  const tierHints: TierHint[] = tiers.map((tierTasks, tierIdx) => {
    let parallelism = 1;
    let qos_class: "userInteractive" | "utility" | "background" = "utility";

    if (tierIdx === 0) {
      parallelism = 2;
      qos_class = "userInteractive";
    } else if (tierIdx === 1) {
      parallelism = 2;
      qos_class = "utility";
    } else if (tierIdx === 2) {
      parallelism = 3;
      qos_class = "utility";
    } else if (tierIdx === 3) {
      parallelism = 4;
      qos_class = "utility";
    } else if (tierIdx === 4) {
      parallelism = 1;
      qos_class = "userInteractive";
    }

    const agentRoles: string[] = [];
    const roleSet = new Set<string>();

    tierTasks.forEach((taskId) => {
      if (
        taskId.includes("research") ||
        taskId.includes("review") ||
        taskId.includes("deliver")
      ) {
        roleSet.add("Chief of Staff (Video)");
      } else if (
        taskId.includes("storyboard") ||
        taskId.includes("organize") ||
        taskId.includes("gather")
      ) {
        roleSet.add("Designer / Production Assistant");
      } else if (taskId.includes("cut") || taskId.includes("export")) {
        roleSet.add("Editor");
      } else if (taskId.includes("color")) {
        roleSet.add("Colorist");
      } else if (taskId.includes("sound")) {
        roleSet.add("Sound Engineer");
      }
    });

    roleSet.forEach((role) => agentRoles.push(role));

    return {
      tier: tierIdx,
      task_ids: tierTasks,
      parallelism,
      qos_class,
      agent_roles: agentRoles,
    };
  });

  const estimatedSpeedup = Math.min(Math.max(...tiers.map((t) => t.length)), 8) / 4;

  return {
    workflow_name: "video-workflow",
    dag_json: {
      id: dag.id,
      title: dag.title,
      nodes: Array.from(dag.nodes.values()),
      edges: Object.fromEntries(dag.edges),
    },
    tier_hints: tierHints,
    parallelization_strategy: "m5-pro",
    team: "Video",
    estimated_total_hours: criticalPathHours,
    estimated_m5_hours: Math.ceil(criticalPathHours / estimatedSpeedup),
  };
}

/**
 * Execute plan in CoWork's orchestrate_agents tool
 */
export async function executeVideoWorkflowInCoWork(plan: ExecutionPlan) {
  console.log("=== Executing Video Workflow in CoWork ===\n");
  console.log(`Workflow: ${plan.workflow_name}`);
  console.log(`Team: ${plan.team}`);
  console.log(`Parallelization: ${plan.parallelization_strategy}`);
  console.log(
    `Estimated duration: ${plan.estimated_total_hours.toFixed(1)}h sequential → ${plan.estimated_m5_hours}h on M5 Pro\n`
  );

  console.log("Tier-Based Dispatch Strategy:\n");
  plan.tier_hints.forEach((hint) => {
    console.log(
      `Tier ${hint.tier}: ${hint.task_ids.length} tasks (${hint.parallelism} parallel)`
    );
    console.log(
      `  QoS: ${hint.qos_class}, Agents: ${hint.agent_roles.join(", ")}`
    );
    console.log(`  Tasks: ${hint.task_ids.join(", ")}\n`);
  });

  console.log("Payload ready for CoWork orchestrate_agents tool:");
  console.log(JSON.stringify(plan, null, 2));

  return plan;
}

/**
 * Mock execution result
 */
export interface ExecutionResult {
  workflow_id: string;
  status: "in-progress" | "completed" | "failed";
  tiers_completed: number;
  tasks_completed: number;
  tasks_failed: number;
  elapsed_hours: number;
  actual_speedup: number;
}

/**
 * Simulate execution result for demonstration
 */
export function mockVideoWorkflowResult(): ExecutionResult {
  return {
    workflow_id: "video-workflow-20260924-prod",
    status: "completed",
    tiers_completed: 5,
    tasks_completed: 14,
    tasks_failed: 0,
    elapsed_hours: 20.3,
    actual_speedup: 1.48,
  };
}

/**
 * Display execution result
 */
export function displayExecutionResult(result: ExecutionResult) {
  console.log("\n=== Video Workflow Execution Complete ===\n");
  console.log(`Workflow ID: ${result.workflow_id}`);
  console.log(`Status: ${result.status}`);
  console.log(
    `Tasks: ${result.tasks_completed}/${result.tasks_completed + result.tasks_failed} completed`
  );
  console.log(`Elapsed: ${result.elapsed_hours}h`);
  console.log(`Speedup: ${result.actual_speedup}x (M5 Pro parallelization)\n`);
}
