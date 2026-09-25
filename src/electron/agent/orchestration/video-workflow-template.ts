/**
 * Video Production Workflow Template
 * 
 * 5-tier DAG for animated video creation.
 * Supports 11 episodes per season production pipeline.
 * 
 * Tiers:
 * - Tier 0: Storyboard (1 task per episode)
 * - Tier 1: Script (1 task per episode, depends on Tier 0)
 * - Tier 2: Design (2 tasks per episode in parallel, depend on Tier 1)
 * - Tier 3: Render (3 tasks per episode in parallel, depend on Tier 2)
 * - Tier 4: QA (2 tasks per episode in parallel, depend on Tier 3)
 */

import { TaskDAG, TaskStatus, TaskPriority, TaskType } from './task-dag';

export interface VideoWorkflowConfig {
  episodeNumber: number;
  seriesName: string;
  sceneCount?: number;
  charactersCount?: number;
}

export function createVideoWorkflow(config: VideoWorkflowConfig): TaskDAG {
  const { episodeNumber, seriesName, sceneCount = 5, charactersCount = 3 } = config;
  const ep = `ep${String(episodeNumber).padStart(2, '0')}`;
  const dagId = `video-${seriesName}-${ep}`;

  const dag = new TaskDAG(
    dagId,
    `${seriesName} Episode ${episodeNumber}`,
    `5-tier video production pipeline: Storyboard → Script → Design → Render → QA`
  );

  // ========== TIER 0: STORYBOARD ==========
  const storyboardId = `sb_${ep}`;
  const storyboardNode: any = {
    id: storyboardId,
    title: `Storyboard: ${seriesName} Ep${episodeNumber}`,
    description: `Create visual storyboard for ${sceneCount} scenes with ${charactersCount} characters`,
    role: 'writer',
    taskType: TaskType.ANALYSIS,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      episodeNumber,
      seriesName,
      sceneCount,
      charactersCount,
    },
    outputs: {},
    successCriteria: `Storyboard with ${sceneCount} scene descriptions`,
    maxRetries: 2,
    retryCount: 0,
    estimatedDurationSeconds: 1200,
  };
  dag.addNode(storyboardNode);

  // ========== TIER 1: SCRIPT ==========
  const scriptId = `script_${ep}`;
  const scriptNode: any = {
    id: scriptId,
    title: `Script: ${seriesName} Ep${episodeNumber}`,
    description: `Write dialogue and direction for ${sceneCount} scenes`,
    role: 'writer',
    taskType: TaskType.ANALYSIS,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      storyboardId,
      sceneCount,
    },
    outputs: {},
    successCriteria: 'Script with dialogue and stage direction',
    maxRetries: 2,
    retryCount: 0,
    estimatedDurationSeconds: 1800,
  };
  dag.addNode(scriptNode);
  dag.addEdge(storyboardId, scriptId);

  // ========== TIER 2: DESIGN (2 tasks in parallel) ==========
  // Task 2a: Character Assets
  const charDesignId = `char_${ep}`;
  const charDesignNode: any = {
    id: charDesignId,
    title: `Character Design: ${seriesName} Ep${episodeNumber}`,
    description: `Design ${charactersCount} character assets for episode`,
    role: 'designer',
    taskType: TaskType.DESIGN,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      scriptId,
      charactersCount,
    },
    outputs: {},
    successCriteria: `${charactersCount} character asset files`,
    maxRetries: 2,
    retryCount: 0,
    estimatedDurationSeconds: 2400,
  };
  dag.addNode(charDesignNode);
  dag.addEdge(scriptId, charDesignId);

  // Task 2b: Scene Backgrounds
  const sceneDesignId = `scene_${ep}`;
  const sceneDesignNode: any = {
    id: sceneDesignId,
    title: `Scene Design: ${seriesName} Ep${episodeNumber}`,
    description: `Create background artwork for ${sceneCount} scenes`,
    role: 'designer',
    taskType: TaskType.DESIGN,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      scriptId,
      sceneCount,
    },
    outputs: {},
    successCriteria: `${sceneCount} background scene files`,
    maxRetries: 2,
    retryCount: 0,
    estimatedDurationSeconds: 2400,
  };
  dag.addNode(sceneDesignNode);
  dag.addEdge(scriptId, sceneDesignId);

  // ========== TIER 3: RENDER (3 tasks in parallel) ==========
  for (let i = 1; i <= 3; i++) {
    const renderId = `render_${ep}_s${i}`;
    const renderNode: any = {
      id: renderId,
      title: `Render Scenes ${i}-${i + Math.floor(sceneCount / 3) - 1}: ${seriesName} Ep${episodeNumber}`,
      description: `Render video for ${Math.ceil(sceneCount / 3)} scenes using FFmpeg`,
      role: 'render',
      taskType: TaskType.CODE,
      priority: TaskPriority.NORMAL,
      status: TaskStatus.PENDING,
      inputs: {
        charDesignId,
        sceneDesignId,
        sceneStart: i - 1,
        sceneCount: Math.ceil(sceneCount / 3),
        ffmpegCommand: `ffmpeg -i scenes_${i}.json -c:v libx264 -crf 23 render_${ep}_s${i}.mp4`,
        outputPath: `/tmp/render_${ep}_s${i}.mp4`,
      },
      outputs: {},
      successCriteria: `MP4 video file rendered`,
      maxRetries: 3,
      retryCount: 0,
      estimatedDurationSeconds: 3600,
    };
    dag.addNode(renderNode);
    dag.addEdge(charDesignId, renderId);
    dag.addEdge(sceneDesignId, renderId);
  }

  // ========== TIER 4: QA (2 tasks in parallel) ==========
  // Task 4a: Technical QA
  const techQaId = `qa_tech_${ep}`;
  const techQaNode: any = {
    id: techQaId,
    title: `Technical QA: ${seriesName} Ep${episodeNumber}`,
    description: `Check video format, resolution, frame rate, audio sync`,
    role: 'qa',
    taskType: TaskType.ANALYSIS,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      sceneCount,
    },
    outputs: {},
    successCriteria: 'All technical checks passed',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 600,
  };
  dag.addNode(techQaNode);
  for (let i = 1; i <= 3; i++) {
    dag.addEdge(`render_${ep}_s${i}`, techQaId);
  }

  // Task 4b: Content QA
  const contentQaId = `qa_content_${ep}`;
  const contentQaNode: any = {
    id: contentQaId,
    title: `Content Review: ${seriesName} Ep${episodeNumber}`,
    description: `Review story, animation quality, brand compliance`,
    role: 'qa',
    taskType: TaskType.ANALYSIS,
    priority: TaskPriority.HIGH,
    status: TaskStatus.PENDING,
    inputs: {
      sceneCount,
    },
    outputs: {},
    successCriteria: 'Content approved by team lead',
    maxRetries: 1,
    retryCount: 0,
    estimatedDurationSeconds: 1200,
  };
  dag.addNode(contentQaNode);
  for (let i = 1; i <= 3; i++) {
    dag.addEdge(`render_${ep}_s${i}`, contentQaId);
  }

  // Compute execution tiers
  dag.computeTiers();

  return dag;
}

/**
 * Create workflow for all 11 episodes.
 */
export function createFullSeasonWorkflow(seriesName: string): TaskDAG[] {
  const workflows: TaskDAG[] = [];
  for (let ep = 1; ep <= 11; ep++) {
    workflows.push(
      createVideoWorkflow({ episodeNumber: ep, seriesName })
    );
  }
  return workflows;
}

export function getVideoWorkflowJSON(episodeNumber: number, seriesName: string): Record<string, any> {
  return createVideoWorkflow({ episodeNumber, seriesName }).toJSON();
}
