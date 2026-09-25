/**
 * Render Task Integration for DAG Executor
 * 
 * Bridges DAG render tier tasks to RenderQueueService.
 * When a task has role='render' and taskType=RENDER, queue it instead of spawn_agent.
 */

import fetch from 'node-fetch';
import type { TaskNode } from '../agent/orchestration/task-dag';

export interface RenderTaskInput {
  sceneId: string;
  ffmpegCommand: string;
  outputPath: string;
  resolution?: '1080p' | '4k';
  format?: 'mp4' | 'mov' | 'webm';
}

export interface RenderJobResult {
  jobId: string;
  status: 'queued' | 'running' | 'completed' | 'failed';
  outputPath?: string;
  error?: string;
  progress: number;
}

const RENDER_QUEUE_URL = process.env.RENDER_QUEUE_URL || 'http://localhost:5556';

/**
 * Queue a render task to the render service.
 */
export async function queueRenderTask(
  node: TaskNode,
  input: RenderTaskInput,
): Promise<RenderJobResult> {
  try {
    const response = await fetch(`${RENDER_QUEUE_URL}/render/queue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        command: input.ffmpegCommand,
        outputPath: input.outputPath,
        sceneId: input.sceneId,
        resolution: input.resolution || '1080p',
      }),
    });

    if (!response.ok) {
      throw new Error(`Render queue returned ${response.status}`);
    }

    const data: any = await response.json();
    return {
      jobId: data.jobId,
      status: 'queued',
      progress: 0,
    };
  } catch (err: any) {
    return {
      jobId: '',
      status: 'failed',
      error: err?.message || String(err),
      progress: 0,
    };
  }
}

/**
 * Poll render job status.
 */
export async function getRenderJobStatus(jobId: string): Promise<RenderJobResult> {
  try {
    const response = await fetch(`${RENDER_QUEUE_URL}/render/job/${jobId}`);
    if (!response.ok) {
      throw new Error(`Render queue returned ${response.status}`);
    }

    const data: any = await response.json();
    return {
      jobId,
      status: data.status,
      outputPath: data.output,
      error: data.error,
      progress: data.progress || 0,
    };
  } catch (err: any) {
    return {
      jobId,
      status: 'failed',
      error: err?.message || String(err),
      progress: 0,
    };
  }
}

/**
 * Cancel a render job.
 */
export async function cancelRenderJob(jobId: string): Promise<void> {
  try {
    await fetch(`${RENDER_QUEUE_URL}/render/job/${jobId}/cancel`, {
      method: 'POST',
    });
  } catch (err: any) {
    console.warn(`Failed to cancel render job ${jobId}: ${err.message}`);
  }
}

/**
 * Check if render queue is healthy.
 */
export async function isRenderQueueHealthy(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    
    const response = await fetch(`${RENDER_QUEUE_URL}/health`, {
      method: 'GET',
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch (err) {
    return false;
  }
}

/**
 * Extract render input from task node's input data.
 */
export function extractRenderInput(node: TaskNode): RenderTaskInput | null {
  const inputs = node.inputs || {};

  if (!inputs.sceneId || !inputs.ffmpegCommand || !inputs.outputPath) {
    return null;
  }

  return {
    sceneId: inputs.sceneId as string,
    ffmpegCommand: inputs.ffmpegCommand as string,
    outputPath: inputs.outputPath as string,
    resolution: inputs.resolution as '1080p' | '4k' | undefined,
    format: inputs.format as 'mp4' | 'mov' | 'webm' | undefined,
  };
}
