#!/usr/bin/env node
/**
 * Render Queue Service Daemon
 * 
 * Starts the render queue HTTP server for video production rendering.
 * Port: 5556 (configurable via RENDER_QUEUE_PORT)
 * 
 * Usage:
 *   node scripts/start-render-queue.js
 * 
 * Or with custom port:
 *   RENDER_QUEUE_PORT=6000 node scripts/start-render-queue.js
 */

const path = require('path');
const fs = require('fs');

// Dynamically import the render queue service from the compiled dist
async function startRenderQueue() {
  const PORT = process.env.RENDER_QUEUE_PORT || 5556;
  const LOG_FILE = path.join(process.env.HOME, '.cowork-os-fork', 'render-queue.log');

  function log(msg, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${msg}`;
    console.log(logEntry);
    fs.appendFileSync(LOG_FILE, logEntry + '\n');
  }

  try {
    log('=== Render Queue Service Starting ===');
    log(`Port: ${PORT}`);
    log(`Logs: ${LOG_FILE}`);

    // Try to load the compiled service
    try {
      const { RenderQueueService } = require('../dist/electron/services/render-queue-service.js');
      const service = new RenderQueueService(PORT);
      
      await service.start();
      
      log('✓ Render Queue Service started successfully');
      log(`✓ Listening on http://localhost:${PORT}`);
      log('✓ Ready to accept render jobs');
      log(`Health check: curl http://localhost:${PORT}/health`);

      // Graceful shutdown
      process.on('SIGTERM', () => {
        log('Received SIGTERM, shutting down gracefully...');
        process.exit(0);
      });

      process.on('SIGINT', () => {
        log('Received SIGINT, shutting down gracefully...');
        process.exit(0);
      });

    } catch (importErr) {
      log('Compiled service not found, attempting runtime require...', 'warn');
      
      // Fallback: use TypeScript version if available
      const { RenderQueueService } = require('../src/services/render-queue-service.ts');
      const service = new RenderQueueService(PORT);
      
      await service.start();
      log('✓ Render Queue Service started (from source)');
    }

  } catch (error) {
    log(`✗ Failed to start Render Queue Service: ${error.message}`, 'error');
    process.exit(1);
  }
}

startRenderQueue();
