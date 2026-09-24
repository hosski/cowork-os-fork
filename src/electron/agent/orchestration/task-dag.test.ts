/**
 * Unit tests for TaskDAG and tier computation
 *
 * Tests:
 * 1. Create DAG, add nodes/edges, verify structure
 * 2. Topological sort + tier assignment
 * 3. Critical path computation
 * 4. M5 Pro QoS hints
 * 5. JSON serialization
 */

import { describe, it, expect } from "@jest/globals";
import {
  TaskDAG,
  TaskNode,
  TaskType,
  TaskStatus,
  TaskPriority,
} from "./task-dag";
import {
  computeTierMetadata,
  estimateDAGSpeedup,
  summarizeParallelizationStrategy,
} from "./tier-computation";

describe("TaskDAG", () => {
  describe("construction and node management", () => {
    it("creates a new DAG with metadata", () => {
      const dag = new TaskDAG(
        "workflow_001",
        "Video Series Episode 1",
        "5-minute episode with design, code, and narration",
        "default",
        "video",
        "user",
      );

      expect(dag.id).toBe("workflow_001");
      expect(dag.title).toBe("Video Series Episode 1");
      expect(dag.nodes.size).toBe(0);
      expect(dag.edges.size).toBe(0);
    });

    it("adds nodes to the DAG", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow");
      const node: TaskNode = {
        id: "node_1",
        title: "Task 1",
        description: "First task",
        role: "researcher",
        taskType: TaskType.RESEARCH,
        priority: TaskPriority.NORMAL,
        estimatedDurationSeconds: 300,
        inputs: {},
        outputs: {},
        successCriteria: "Research complete",
        status: TaskStatus.PENDING,
        retryCount: 0,
        maxRetries: 3,
        createdAt: new Date().toISOString(),
        startedAt: null,
        completedAt: null,
      };

      dag.addNode(node);
      expect(dag.nodes.size).toBe(1);
      expect(dag.nodes.get("node_1")).toEqual(node);
    });

    it("adds edges (dependencies) between nodes", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow");

      const node1: TaskNode = {
        id: "n1",
        title: "Task 1",
        description: "First",
        role: "researcher",
        taskType: TaskType.RESEARCH,
        priority: TaskPriority.NORMAL,
        estimatedDurationSeconds: 300,
        inputs: {},
        outputs: {},
        successCriteria: "Done",
        status: TaskStatus.PENDING,
        retryCount: 0,
        maxRetries: 3,
        createdAt: new Date().toISOString(),
        startedAt: null,
        completedAt: null,
      };

      const node2: TaskNode = {
        ...node1,
        id: "n2",
        title: "Task 2",
      };

      dag.addNode(node1);
      dag.addNode(node2);
      dag.addEdge("n1", "n2"); // n2 depends on n1

      expect(dag.edges.get("n1")).toContain("n2");
    });

    it("throws error when adding edge with missing nodes", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow");
      expect(() => dag.addEdge("missing_1", "missing_2")).toThrow();
    });
  });

  describe("topological sorting and tier computation", () => {
    it("computes tiers for a simple linear DAG", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow");

      // Create 3 nodes in a chain: n1 → n2 → n3
      const nodes = ["n1", "n2", "n3"].map((id, idx) => ({
        id,
        title: `Task ${idx + 1}`,
        description: `Task ${idx + 1}`,
        role: "worker",
        taskType: TaskType.CODE,
        priority: TaskPriority.NORMAL,
        estimatedDurationSeconds: 300,
        inputs: {},
        outputs: {},
        successCriteria: "Done",
        status: TaskStatus.PENDING,
        retryCount: 0,
        maxRetries: 3,
        createdAt: new Date().toISOString(),
        startedAt: null,
        completedAt: null,
      }));

      nodes.forEach((n) => dag.addNode(n));
      dag.addEdge("n1", "n2");
      dag.addEdge("n2", "n3");

      const tiers = dag.computeTiers();

      expect(tiers.length).toBe(3);
      expect(tiers[0]).toEqual(["n1"]); // n1 has no dependencies
      expect(tiers[1]).toEqual(["n2"]); // n2 depends only on n1
      expect(tiers[2]).toEqual(["n3"]); // n3 depends only on n2
    });

    it("computes tiers for a parallel DAG", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow");

      // Create 4 nodes: n1 → (n2, n3) → n4
      // Expected tiers: [n1], [n2, n3], [n4]
      const nodeIds = ["n1", "n2", "n3", "n4"];
      nodeIds.forEach((id, idx) => {
        dag.addNode({
          id,
          title: `Task ${idx + 1}`,
          description: `Task ${idx + 1}`,
          role: "worker",
          taskType: TaskType.CODE,
          priority: TaskPriority.NORMAL,
          estimatedDurationSeconds: 300,
          inputs: {},
          outputs: {},
          successCriteria: "Done",
          status: TaskStatus.PENDING,
          retryCount: 0,
          maxRetries: 3,
          createdAt: new Date().toISOString(),
          startedAt: null,
          completedAt: null,
        });
      });

      dag.addEdge("n1", "n2");
      dag.addEdge("n1", "n3");
      dag.addEdge("n2", "n4");
      dag.addEdge("n3", "n4");

      const tiers = dag.computeTiers();

      expect(tiers.length).toBe(3);
      expect(tiers[0]).toEqual(["n1"]);
      expect(new Set(tiers[1])).toEqual(new Set(["n2", "n3"]));
      expect(tiers[2]).toEqual(["n4"]);
    });

    it("detects cycles", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow");

      const nodeIds = ["n1", "n2", "n3"];
      nodeIds.forEach((id, idx) => {
        dag.addNode({
          id,
          title: `Task ${idx + 1}`,
          description: `Task ${idx + 1}`,
          role: "worker",
          taskType: TaskType.CODE,
          priority: TaskPriority.NORMAL,
          estimatedDurationSeconds: 300,
          inputs: {},
          outputs: {},
          successCriteria: "Done",
          status: TaskStatus.PENDING,
          retryCount: 0,
          maxRetries: 3,
          createdAt: new Date().toISOString(),
          startedAt: null,
          completedAt: null,
        });
      });

      // Create cycle: n1 → n2 → n3 → n1
      dag.addEdge("n1", "n2");
      dag.addEdge("n2", "n3");
      dag.addEdge("n3", "n1");

      expect(() => dag.computeTiers()).toThrow(/Cycle detected/);
    });
  });

  describe("critical path computation", () => {
    it("computes critical path for sequential DAG", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow");

      // n1 (300s) → n2 (400s) → n3 (200s)
      // Critical path: 300 + 400 + 200 = 900s
      const tasks = [
        { id: "n1", duration: 300 },
        { id: "n2", duration: 400 },
        { id: "n3", duration: 200 },
      ];

      tasks.forEach(({ id, duration }) => {
        dag.addNode({
          id,
          title: `Task`,
          description: `Task`,
          role: "worker",
          taskType: TaskType.CODE,
          priority: TaskPriority.NORMAL,
          estimatedDurationSeconds: duration,
          inputs: {},
          outputs: {},
          successCriteria: "Done",
          status: TaskStatus.PENDING,
          retryCount: 0,
          maxRetries: 3,
          createdAt: new Date().toISOString(),
          startedAt: null,
          completedAt: null,
        });
      });

      dag.addEdge("n1", "n2");
      dag.addEdge("n2", "n3");

      expect(dag.getCriticalPathDuration()).toBe(900);
    });

    it("computes critical path for parallel DAG", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow");

      // n1 (300s) → (n2 (200s) + n3 (400s)) → n4 (100s)
      // Critical path: 300 + 400 + 100 = 800s (n2 and n3 run in parallel)
      const tasks = [
        { id: "n1", duration: 300 },
        { id: "n2", duration: 200 },
        { id: "n3", duration: 400 },
        { id: "n4", duration: 100 },
      ];

      tasks.forEach(({ id, duration }) => {
        dag.addNode({
          id,
          title: `Task`,
          description: `Task`,
          role: "worker",
          taskType: TaskType.CODE,
          priority: TaskPriority.NORMAL,
          estimatedDurationSeconds: duration,
          inputs: {},
          outputs: {},
          successCriteria: "Done",
          status: TaskStatus.PENDING,
          retryCount: 0,
          maxRetries: 3,
          createdAt: new Date().toISOString(),
          startedAt: null,
          completedAt: null,
        });
      });

      dag.addEdge("n1", "n2");
      dag.addEdge("n1", "n3");
      dag.addEdge("n2", "n4");
      dag.addEdge("n3", "n4");

      expect(dag.getCriticalPathDuration()).toBe(800);
    });
  });

  describe("JSON serialization", () => {
    it("serializes and deserializes DAG", () => {
      const dag = new TaskDAG("w1", "Test", "Test workflow", "team1", "video", "user1");

      const node: TaskNode = {
        id: "n1",
        title: "Task",
        description: "Task",
        role: "worker",
        taskType: TaskType.CODE,
        priority: TaskPriority.HIGH,
        estimatedDurationSeconds: 300,
        inputs: { key: "value" },
        outputs: {},
        successCriteria: "Done",
        status: TaskStatus.RUNNING,
        retryCount: 1,
        maxRetries: 3,
        createdAt: new Date().toISOString(),
        startedAt: new Date().toISOString(),
        completedAt: null,
      };

      dag.addNode(node);

      const json = dag.toJSON();
      const restored = TaskDAG.fromJSON(json);

      expect(restored.id).toBe(dag.id);
      expect(restored.title).toBe(dag.title);
      expect(restored.teamId).toBe("team1");
      expect(restored.domain).toBe("video");
      expect(restored.nodes.size).toBe(1);
      expect(restored.nodes.get("n1")).toEqual(node);
    });

    it("round-trips via stringify/parse", () => {
      const dag = new TaskDAG("w1", "Test", "Test");
      dag.addNode({
        id: "n1",
        title: "Task",
        description: "Task",
        role: "worker",
        taskType: TaskType.CODE,
        priority: TaskPriority.NORMAL,
        estimatedDurationSeconds: 300,
        inputs: {},
        outputs: {},
        successCriteria: "Done",
        status: TaskStatus.PENDING,
        retryCount: 0,
        maxRetries: 3,
        createdAt: new Date().toISOString(),
        startedAt: null,
        completedAt: null,
      });

      const jsonStr = dag.stringify();
      const restored = TaskDAG.parse(jsonStr);

      expect(restored.id).toBe(dag.id);
      expect(restored.nodes.size).toBe(1);
    });
  });
});

describe("Tier Computation (M5 Pro Optimization)", () => {
  it("computes tier metadata with QoS hints", () => {
    const dag = new TaskDAG("w1", "Test", "Test", "default", "video");

    // Create research → design + code → orchestration
    ["research_0", "design_0", "code_0", "orch_0"].forEach((id) => {
      const role = id.split("_")[0];
      dag.addNode({
        id,
        title: `${role} task`,
        description: `${role} task`,
        role,
        taskType: TaskType.RESEARCH,
        priority: TaskPriority.NORMAL,
        estimatedDurationSeconds: 300,
        inputs: {},
        outputs: {},
        successCriteria: "Done",
        status: TaskStatus.PENDING,
        retryCount: 0,
        maxRetries: 3,
        createdAt: new Date().toISOString(),
        startedAt: null,
        completedAt: null,
      });
    });

    dag.addEdge("research_0", "design_0");
    dag.addEdge("research_0", "code_0");
    dag.addEdge("design_0", "orch_0");
    dag.addEdge("code_0", "orch_0");

    const metadata = computeTierMetadata(dag);

    expect(metadata.length).toBe(3);
    expect(metadata[0].tierIndex).toBe(0);
    expect(metadata[0].qosHint.class).toBe("userInteractive");
    expect(metadata[2].qosHint.class).toBe("background");
  });

  it("estimates DAG speedup", () => {
    const dag = new TaskDAG("w1", "Test", "Test");

    // Sequential total: 300 + 200 + 400 = 900s
    // Parallel critical path: 300 + max(200, 400) = 700s
    // Speedup: 900 / 700 ≈ 1.29×
    const tasks = [
      { id: "n1", duration: 300, role: "research" },
      { id: "n2", duration: 200, role: "design" },
      { id: "n3", duration: 400, role: "code" },
    ];

    tasks.forEach(({ id, duration, role }) => {
      dag.addNode({
        id,
        title: `Task`,
        description: `Task`,
        role,
        taskType: TaskType.CODE,
        priority: TaskPriority.NORMAL,
        estimatedDurationSeconds: duration,
        inputs: {},
        outputs: {},
        successCriteria: "Done",
        status: TaskStatus.PENDING,
        retryCount: 0,
        maxRetries: 3,
        createdAt: new Date().toISOString(),
        startedAt: null,
        completedAt: null,
      });
    });

    dag.addEdge("n1", "n2");
    dag.addEdge("n1", "n3");

    const speedup = estimateDAGSpeedup(dag);
    expect(speedup).toBeCloseTo(1.285, 1);
  });

  it("generates parallelization strategy summary", () => {
    const dag = new TaskDAG("w1", "Test", "Test");

    ["n1", "n2", "n3"].forEach((id, idx) => {
      dag.addNode({
        id,
        title: `Task ${idx + 1}`,
        description: `Task ${idx + 1}`,
        role: "worker",
        taskType: TaskType.CODE,
        priority: TaskPriority.NORMAL,
        estimatedDurationSeconds: 300,
        inputs: {},
        outputs: {},
        successCriteria: "Done",
        status: TaskStatus.PENDING,
        retryCount: 0,
        maxRetries: 3,
        createdAt: new Date().toISOString(),
        startedAt: null,
        completedAt: null,
      });
    });

    dag.addEdge("n1", "n2");
    dag.addEdge("n2", "n3");

    const metadata = computeTierMetadata(dag);
    const summary = summarizeParallelizationStrategy(dag, metadata);

    expect(summary).toContain("M5 Pro Parallelization Strategy");
    expect(summary).toContain("Tier 0");
    expect(summary).toContain("Critical Path");
  });
});
