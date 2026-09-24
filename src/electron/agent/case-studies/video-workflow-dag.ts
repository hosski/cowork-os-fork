/**
 * Video Workflow Case Study: Real-world TaskDAG + Grill-Tab-5 example
 *
 * Demonstrates:
 * 1. Video editing pipeline DAG (storyboard → raw cut → color → sound → QA)
 * 2. Tier-based parallelization (M5 Pro: 3-4 parallel tasks per tier)
 * 3. Grill-Tab-5 structured breakdown (Goal, Deliverable, Scope, Verification, Architecture)
 * 4. Critical path computation (longest path = min timeline)
 * 5. Live execution in CoWork orchestrator
 *
 * Team Context: Video team (Chief of Staff + Designer + Editor + Colorist + Sound Engineer)
 * Timeline: 5 working days (40 hours parallel ≈ 8 hours sequential equivalent)
 */

import { TaskDAG, TaskNode, TaskStatus, TaskType, TaskPriority } from "../orchestration/task-dag";

/**
 * Create a single task node for the video workflow
 */
function createTaskNode(
  id: string,
  title: string,
  description: string,
  role: string,
  estimatedHours: number,
  successCriteria: string
): TaskNode {
  return {
    id,
    title,
    description,
    role,
    taskType: TaskType.ANALYSIS, // Generic analysis for workflow tasks
    priority: TaskPriority.NORMAL,
    estimatedDurationSeconds: estimatedHours * 3600,
    inputs: {},
    outputs: {},
    successCriteria,
    status: TaskStatus.PENDING,
    retryCount: 0,
    maxRetries: 2,
    createdAt: new Date().toISOString(),
    startedAt: null,
    completedAt: null,
  };
}

/**
 * Build the complete Video Workflow DAG
 *
 * Tier 0: Research + Asset Gathering (Day 1 AM)
 * Tier 1: Storyboard + Organization (Day 1 PM)
 * Tier 2: Raw Cut + Sound Design + Color (Days 2-3)
 * Tier 3: Review + Revise + Color2 + Mix (Days 3-4)
 * Tier 4: QA + Export + Delivery (Day 5)
 */
export function buildVideoWorkflowDAG(): TaskDAG {
  const dag = new TaskDAG(
    "video-workflow-dag",
    "Video Editing Workflow",
    "End-to-end video production pipeline with tier-based parallelization",
    "default",
    "video"
  );

  // ============================================================================
  // TIER 0: Initialize
  // ============================================================================

  const research = createTaskNode(
    "research_client_brief",
    "Research Client Brief",
    "Review creative brief, objectives, brand guidelines, target audience",
    "Chief of Staff (Video)",
    2,
    "Brief approved by Chief; all key decisions documented"
  );
  dag.addNode(research);

  const gather = createTaskNode(
    "gather_source_footage",
    "Gather Source Footage",
    "Collect all B-roll, interview recordings, graphics, music beds",
    "Production Assistant",
    3,
    "All source files present, metadata tagged, proxies playable"
  );
  dag.addNode(gather);

  // ============================================================================
  // TIER 1: Pre-Production
  // ============================================================================

  const storyboard = createTaskNode(
    "create_storyboard",
    "Create Storyboard",
    "Visual sequencing of scenes, shot list, timing notes",
    "Designer",
    4,
    "Chief approves; all shots accounted for in storyboard"
  );
  dag.addNode(storyboard);
  dag.addEdge("research_client_brief", "create_storyboard");

  const organize = createTaskNode(
    "organize_assets",
    "Organize Assets",
    "Label, tag, create proxies for all media",
    "Production Assistant",
    2,
    "All files findable by keyword; proxies play smoothly in editor"
  );
  dag.addNode(organize);
  dag.addEdge("gather_source_footage", "organize_assets");

  // ============================================================================
  // TIER 2: Production (Parallel)
  // ============================================================================

  const raw_cut = createTaskNode(
    "raw_cut",
    "Raw Cut (Assembly Edit)",
    "Main editing pass: assemble timeline, sync audio, rough pacing",
    "Editor",
    8,
    "All storyboard shots in timeline; matches brief structure"
  );
  dag.addNode(raw_cut);
  dag.addEdge("create_storyboard", "raw_cut");
  dag.addEdge("organize_assets", "raw_cut");

  const sound_design = createTaskNode(
    "sound_design_initial",
    "Sound Design (Initial)",
    "Voiceover recording, ambient recording, music bed selection",
    "Sound Engineer",
    6,
    "VO timing matches storyboard; music + ambient levels balanced"
  );
  dag.addNode(sound_design);
  dag.addEdge("create_storyboard", "sound_design_initial");

  const color_pass1 = createTaskNode(
    "color_pass_1",
    "Color Pass (Initial)",
    "Establish color palette, LUT, basic grade",
    "Colorist",
    5,
    "Color consistent shot-to-shot; skin tones neutral"
  );
  dag.addNode(color_pass1);
  dag.addEdge("create_storyboard", "color_pass_1");

  // ============================================================================
  // TIER 3: Refinement
  // ============================================================================

  const review_cut = createTaskNode(
    "review_cut_with_client",
    "Review Cut with Client",
    "Client review, feedback collection, revision notes",
    "Chief of Staff (Video)",
    2,
    "Chief approves notes; all feedback categorized"
  );
  dag.addNode(review_cut);
  dag.addEdge("raw_cut", "review_cut_with_client");

  const revise_cut = createTaskNode(
    "revise_cut",
    "Revise Cut (Feedback Loop)",
    "Implement client feedback, re-edit scenes, adjust pacing",
    "Editor",
    3,
    "All feedback items addressed; timing within 1s of approved"
  );
  dag.addNode(revise_cut);
  dag.addEdge("review_cut_with_client", "revise_cut");

  const color_pass2 = createTaskNode(
    "color_pass_2",
    "Color Pass (Advanced)",
    "Fine-tuning, skin tone correction, special effects grading",
    "Colorist",
    4,
    "Skin tones pass reference check; no illegal colors"
  );
  dag.addNode(color_pass2);
  dag.addEdge("color_pass_1", "color_pass_2");

  const sound_mix = createTaskNode(
    "sound_mix",
    "Sound Mix (Final)",
    "Balance VO, music, effects; apply compression, EQ, reverb",
    "Sound Engineer",
    3,
    "Dialogue @ -18 LUFS; music @ -14 LUFS; effects balanced"
  );
  dag.addNode(sound_mix);
  dag.addEdge("sound_design_initial", "sound_mix");
  dag.addEdge("revise_cut", "sound_mix");

  // ============================================================================
  // TIER 4: QA & Delivery
  // ============================================================================

  const final_qa = createTaskNode(
    "final_qa",
    "Final QA",
    "Compliance check, audio/video sync, color/sound verification",
    "Chief of Staff (Video)",
    2,
    "QA checklist 100% pass; no sync drift; color scopes clean"
  );
  dag.addNode(final_qa);
  dag.addEdge("revise_cut", "final_qa");
  dag.addEdge("color_pass_2", "final_qa");
  dag.addEdge("sound_mix", "final_qa");

  const export_master = createTaskNode(
    "export_master",
    "Export Master",
    "Render final video to delivery spec (codec, resolution, frame rate)",
    "Editor",
    1,
    "File plays without errors; metadata correct"
  );
  dag.addNode(export_master);
  dag.addEdge("final_qa", "export_master");

  const deliver = createTaskNode(
    "deliver_to_client",
    "Deliver to Client",
    "Upload to client portal, send handoff notes, archive project",
    "Chief of Staff (Video)",
    0.5,
    "Client confirms download; all files accessible"
  );
  dag.addNode(deliver);
  dag.addEdge("export_master", "deliver_to_client");

  return dag;
}

/**
 * Analyze video workflow: tiers, critical path, speedup
 */
export function analyzeVideoWorkflow(dag: TaskDAG) {
  const tiers = dag.computeTiers();
  const criticalPathDuration = dag.getCriticalPathDuration();
  const criticalPathHours = criticalPathDuration / 3600;

  console.log("=== Video Workflow Analysis ===\n");
  console.log(`Total tasks: ${dag.nodes.size}`);
  console.log(`Total tiers: ${tiers.length}`);
  console.log(`Critical path duration: ${criticalPathHours.toFixed(1)} hours\n`);

  // Estimate M5 Pro speedup
  const maxParallelism = Math.max(...tiers.map((tier) => tier.length));
  const estimatedSpeedup = Math.min(maxParallelism, 8) / 4; // Rough estimate
  console.log(`Max parallelism: ${maxParallelism} tasks`);
  console.log(`Estimated M5 Pro speedup: ${estimatedSpeedup.toFixed(2)}x`);
  console.log(`Expected runtime on M5: ${(criticalPathHours / estimatedSpeedup).toFixed(1)}h\n`);

  // Print tier breakdown
  console.log("Tier Breakdown (Parallelization Strategy):");
  tiers.forEach((tier, idx) => {
    const tierTasks = tier.map((id) => {
      const node = dag.nodes.get(id);
      const hours = node ? (node.estimatedDurationSeconds / 3600).toFixed(1) : "?";
      return `${node?.title} (${hours}h)`;
    });
    console.log(`  Tier ${idx}: ${tierTasks.join(", ")}`);
  });
}

/**
 * Export DAG to JSON for CoWork serialization
 */
export function serializeVideoWorkflowDAG(dag: TaskDAG): string {
  return JSON.stringify(
    {
      name: "Video Workflow (Case Study)",
      description: "End-to-end video editing pipeline with Grill-Tab-5 structured breakdown",
      dag: {
        id: dag.id,
        title: dag.title,
        description: dag.description,
        domain: dag.domain,
        nodes: Array.from(dag.nodes.values()),
        edges: Object.fromEntries(dag.edges),
      },
      created_at: new Date().toISOString(),
      team: {
        name: "Video",
        chief_of_staff: "Chief of Staff (Video)",
        specialists: ["Designer", "Editor", "Colorist", "Sound Engineer", "Production Assistant"],
      },
    },
    null,
    2
  );
}
