/**
 * Render Queue Tool for CoWork DAG
 * 
 * Spawn this as a DAG task to queue renders:
 * 
 * const executor = new DAGExecutor(...);
 * dag.addNode({
 *   id: 'render_01',
 *   title: 'Render Scene 1',
 *   role: 'renderer',
 *   inputs: { outputPath: '/tmp/scene1.mp4', command: 'ffmpeg ...' },
 * });
 */

export interface RenderQueueRequest {
  jobId: string;
  outputPath: string;
  command: string;
  queueUrl?: string; // Default: http://localhost:5556
}

export interface RenderQueueResponse {
  jobId: string;
  status: 'queued' | 'running' | 'completed' | 'failed';
  progress: number;
  output?: string;
  error?: string;
}

/**
 * Queue a render job and poll until complete.
 */
export async function queueAndWaitForRender(
  request: RenderQueueRequest,
  timeout: number = 3600000, // 1h default
): Promise<RenderQueueResponse> {
  const queueUrl = request.queueUrl || 'http://localhost:5556';
  const startTime = Date.now();

  // Queue job
  const queueRes = await fetch(`${queueUrl}/render/queue`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      command: request.command,
      outputPath: request.outputPath,
    }),
  });

  if (!queueRes.ok) {
    const error = await queueRes.text();
    return {
      jobId: request.jobId,
      status: 'failed',
      progress: 0,
      error: `Queue failed: ${error}`,
    };
  }

  const { jobId } = await queueRes.json();

  // Poll for completion
  while (Date.now() - startTime < timeout) {
    const statusRes = await fetch(`${queueUrl}/render/job/${jobId}`);
    if (!statusRes.ok) {
      await new Promise((r) => setTimeout(r, 2000));
      continue;
    }

    const job = await statusRes.json();

    if (job.status === 'completed' || job.status === 'failed') {
      return {
        jobId,
        status: job.status,
        progress: job.progress,
        output: job.output,
        error: job.error,
      };
    }

    // Log progress
    console.log(`[Render] ${jobId}: ${job.progress}%`);

    // Poll interval
    await new Promise((r) => setTimeout(r, 5000));
  }

  return {
    jobId,
    status: 'failed',
    progress: 0,
    error: 'Render timeout',
  };
}

/**
 * Call from a DAG task to render a scene.
 * Inputs: { outputPath, command }
 * Outputs: { jobId, status, progress, output }
 */
export async function renderSceneTask(inputs: {
  outputPath: string;
  command: string;
  queueUrl?: string;
}): Promise<RenderQueueResponse> {
  const jobId = `render-${Date.now()}`;
  return queueAndWaitForRender({
    jobId,
    outputPath: inputs.outputPath,
    command: inputs.command,
    queueUrl: inputs.queueUrl,
  });
}
