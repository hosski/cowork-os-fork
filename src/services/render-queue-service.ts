/**
 * Render Queue Service for CoWork OS
 * 
 * Simple HTTP API for queuing video renders.
 * - Queue job (returns jobId)
 * - Get job status (jobId -> status, progress)
 * - Get job output (jobId -> file path)
 * 
 * Usage:
 *   POST /render/queue { output_path, command }
 *   GET /render/job/:jobId
 */

import Express from 'express';
import { v4 as uuid } from 'uuid';
import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';

const execAsync = promisify(exec);

export interface RenderJob {
  id: string;
  command: string;
  outputPath: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number; // 0-100
  createdAt: number;
  startedAt?: number;
  completedAt?: number;
  output?: string;
  error?: string;
}

export class RenderQueueService {
  private jobs: Map<string, RenderJob> = new Map();
  private activeProcesses: Map<string, AbortController> = new Map();
  private PORT: number;

  constructor(port: number = 5556) {
    this.PORT = port;
  }

  start(): Promise<void> {
    return new Promise((resolve) => {
      const app = Express();
      app.use(Express.json());

      // Queue a render job
      app.post('/render/queue', (req, res) => {
        try {
          const { command, outputPath } = req.body;
          if (!command || !outputPath) {
            res.status(400).json({ error: 'Missing command or outputPath' });
            return;
          }

          const jobId = uuid();
          const job: RenderJob = {
            id: jobId,
            command,
            outputPath,
            status: 'pending',
            progress: 0,
            createdAt: Date.now(),
          };

          this.jobs.set(jobId, job);
          this.executeRender(jobId);

          res.json({ jobId, status: 'queued' });
        } catch (error: any) {
          res.status(500).json({ error: error?.message });
        }
      });

      // Get job status
      app.get('/render/job/:jobId', (req, res) => {
        const job = this.jobs.get(req.params.jobId);
        if (!job) {
          res.status(404).json({ error: 'Job not found' });
          return;
        }

        res.json({
          id: job.id,
          status: job.status,
          progress: job.progress,
          output: job.status === 'completed' ? job.output : undefined,
          error: job.error,
          createdAt: job.createdAt,
          startedAt: job.startedAt,
          completedAt: job.completedAt,
        });
      });

      // Cancel job
      app.post('/render/job/:jobId/cancel', (req, res) => {
        const job = this.jobs.get(req.params.jobId);
        if (!job) {
          res.status(404).json({ error: 'Job not found' });
          return;
        }

        const abort = this.activeProcesses.get(job.id);
        if (abort) {
          abort.abort();
          this.activeProcesses.delete(job.id);
        }

        job.status = 'failed';
        job.error = 'Cancelled by user';
        job.completedAt = Date.now();

        res.json({ status: 'cancelled' });
      });

      // Health check
      app.get('/health', (req, res) => {
        res.json({
          status: 'ok',
          activeJobs: this.activeProcesses.size,
          totalJobs: this.jobs.size,
        });
      });

      app.listen(this.PORT, () => {
        console.log(`Render Queue API listening on http://localhost:${this.PORT}`);
        resolve();
      });
    });
  }

  private async executeRender(jobId: string): Promise<void> {
    const job = this.jobs.get(jobId);
    if (!job) return;

    job.status = 'running';
    job.startedAt = Date.now();
    job.progress = 10;

    const controller = new AbortController();
    this.activeProcesses.set(jobId, controller);

    try {
      // Execute render command (e.g., ffmpeg)
      const { stdout, stderr } = await execAsync(job.command, {
        signal: controller.signal,
      });

      // Check if output file exists
      if (fs.existsSync(job.outputPath)) {
        job.status = 'completed';
        job.progress = 100;
        job.output = job.outputPath;
        job.completedAt = Date.now();
        console.log(`Render complete: ${jobId} -> ${job.outputPath}`);
      } else {
        throw new Error('Output file not created');
      }
    } catch (error: any) {
      job.status = 'failed';
      job.error = error?.message || String(error);
      job.completedAt = Date.now();
      console.error(`Render failed: ${jobId} - ${job.error}`);
    } finally {
      this.activeProcesses.delete(jobId);
    }
  }
}

// Standalone usage (CommonJS only)
// Note: Only works when run directly with node, not in Electron/ESM context
