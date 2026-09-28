/**
 * OpenViking Integration Service
 *
 * Real API calls to OpenViking for durable execution history + versioning
 */

const OPENVIKING_API = process.env.OPENVIKING_API || 'http://127.0.0.1:1933';

export interface OpenVikingConfig {
  apiUrl: string;
  timeout?: number;
}

/**
 * Service to persist data to OpenViking
 */
export class OpenVikingService {
  private apiUrl: string;
  private timeout: number;

  constructor(config: Partial<OpenVikingConfig> = {}) {
    this.apiUrl = config.apiUrl || OPENVIKING_API;
    this.timeout = config.timeout || 30000;
  }

  /**
   * Remember (save) memory to OpenViking
   */
  async remember(content: string, scope: string = 'default'): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/memory/remember`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          scope,
          timestamp: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(this.timeout),
      });

      if (!response.ok) {
        console.error(`OpenViking remember failed: ${response.status}`, await response.text());
        return false;
      }

      const data = await response.json();
      console.log('[OpenViking] Memory saved:', data);
      return true;
    } catch (err) {
      console.error('[OpenViking] Remember error:', err);
      return false;
    }
  }

  /**
   * Search OpenViking memory
   */
  async search(query: string, limit: number = 10): Promise<any[]> {
    try {
      const response = await fetch(
        `${this.apiUrl}/memory/search?q=${encodeURIComponent(query)}&limit=${limit}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: AbortSignal.timeout(this.timeout),
        }
      );

      if (!response.ok) {
        console.error(`OpenViking search failed: ${response.status}`);
        return [];
      }

      const data = await response.json();
      return data.results || [];
    } catch (err) {
      console.error('[OpenViking] Search error:', err);
      return [];
    }
  }

  /**
   * Get execution history from OpenViking
   */
  async getExecutionHistory(templateName?: string): Promise<any[]> {
    const query = templateName ? `execution ${templateName}` : 'execution';
    return this.search(query, 50);
  }

  /**
   * Get version history from OpenViking
   */
  async getVersionHistory(templateId: string): Promise<any[]> {
    const query = `version ${templateId}`;
    return this.search(query, 30);
  }

  /**
   * Format markdown for OpenViking memory
   */
  formatExecutionMemory(execution: Record<string, unknown>): string {
    const template = execution.templateName || 'Unknown';
    const status = execution.status || 'unknown';
    const duration = execution.duration ? `${(execution.duration as number / 1000).toFixed(2)}s` : 'N/A';
    const date = new Date((execution.startedAt as number) || 0).toISOString();

    return `# Execution: ${template} (${status})

- **Status:** ${status}
- **Started:** ${date}
- **Duration:** ${duration}
- **Nodes:** ${execution.completedNodes}/${execution.totalNodes}
- **Success:** ${execution.completedNodes}
- **Failed:** ${execution.failedNodes}
- **Skipped:** ${execution.skippedNodes}

${execution.error ? `**Error:** ${execution.error}` : ''}

## Details
${execution.nodeDetails ? (execution.nodeDetails as any[]).map((n) => `- ${n.nodeId}: ${n.status}`).join('\n') : 'No node details'}
`;
  }

  /**
   * Format markdown for workflow version
   */
  formatVersionMemory(templateId: string, version: string, changeLog: string, breaking: boolean): string {
    return `# Template Version: ${templateId}@${version}

- **Version:** ${version}
- **Breaking:** ${breaking ? 'YES ⚠️' : 'NO'}
- **Changelog:** ${changeLog}
- **Date:** ${new Date().toISOString()}
`;
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/health`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000),
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}

export default OpenVikingService;
