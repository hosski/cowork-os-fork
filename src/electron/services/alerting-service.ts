/**
 * Alerting Service
 *
 * Monitors DAG execution metrics and sends alerts when thresholds breach.
 * Supports: Email, Telegram
 *
 * Thresholds (configurable):
 * - Daily cost > $50
 * - Error rate > 10%
 * - Task failure (any failed node without recovery)
 * - Execution timeout (task > 1 hour)
 */

export interface AlertConfig {
  enableEmailAlerts: boolean;
  enableTelegramAlerts: boolean;
  emailRecipients: string[];
  telegramChatId?: string;
  telegramBotToken?: string;
  thresholds: {
    dailyCostLimit: number; // $50
    errorRateLimit: number; // 10%
    executionTimeoutMs: number; // 3600000 (1 hour)
  };
  deduplicationWindowMs: number; // Don't send same alert twice in 5 min
}

export interface Alert {
  id: string;
  timestamp: string;
  type: 'cost_limit' | 'error_rate' | 'task_failure' | 'timeout';
  severity: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
  metadata: Record<string, any>;
}

export class AlertingService {
  private config: AlertConfig;
  private lastAlertTime: Map<string, number> = new Map();

  constructor(config: Partial<AlertConfig> = {}) {
    this.config = {
      enableEmailAlerts: config.enableEmailAlerts ?? false,
      enableTelegramAlerts: config.enableTelegramAlerts ?? false,
      emailRecipients: config.emailRecipients ?? [],
      telegramChatId: config.telegramChatId,
      telegramBotToken: config.telegramBotToken,
      thresholds: {
        dailyCostLimit: config.thresholds?.dailyCostLimit ?? 50,
        errorRateLimit: config.thresholds?.errorRateLimit ?? 10,
        executionTimeoutMs: config.thresholds?.executionTimeoutMs ?? 3600000,
      },
      deduplicationWindowMs: config.deduplicationWindowMs ?? 300000, // 5 min
    };
  }

  async initialize(): Promise<void> {
    console.log('[AlertingService] Initialized with config:', {
      emailAlerts: this.config.enableEmailAlerts,
      telegramAlerts: this.config.enableTelegramAlerts,
      thresholds: this.config.thresholds,
    });
  }

  /**
   * Check if alert should be sent (deduplicate by type)
   */
  private shouldSendAlert(alertType: string): boolean {
    const now = Date.now();
    const lastTime = this.lastAlertTime.get(alertType) ?? 0;
    const timeSinceLastAlert = now - lastTime;

    if (timeSinceLastAlert > this.config.deduplicationWindowMs) {
      this.lastAlertTime.set(alertType, now);
      return true;
    }

    console.log(`[AlertingService] Deduplicating alert type "${alertType}" (sent ${timeSinceLastAlert}ms ago)`);
    return false;
  }

  /**
   * Check daily cost and alert if exceeded
   */
  async checkDailyCost(dailyCost: number, date: string): Promise<void> {
    if (dailyCost > this.config.thresholds.dailyCostLimit && this.shouldSendAlert('cost_limit')) {
      const alert: Alert = {
        id: `alert-cost-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'cost_limit',
        severity: dailyCost > this.config.thresholds.dailyCostLimit * 1.5 ? 'critical' : 'warning',
        title: '💰 Daily Cost Limit Exceeded',
        message: `Daily spend on ${date} reached $${dailyCost.toFixed(2)}, exceeding limit of $${this.config.thresholds.dailyCostLimit}`,
        metadata: { date, cost: dailyCost, limit: this.config.thresholds.dailyCostLimit },
      };

      await this.sendAlert(alert);
    }
  }

  /**
   * Check error rate and alert if high
   */
  async checkErrorRate(errorRate: number, timeWindow: string): Promise<void> {
    if (errorRate > this.config.thresholds.errorRateLimit && this.shouldSendAlert('error_rate')) {
      const alert: Alert = {
        id: `alert-error-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'error_rate',
        severity: errorRate > this.config.thresholds.errorRateLimit * 2 ? 'critical' : 'warning',
        title: '⚠️ High Error Rate Detected',
        message: `Error rate in ${timeWindow} is ${errorRate.toFixed(1)}%, exceeding threshold of ${this.config.thresholds.errorRateLimit}%`,
        metadata: { errorRate, threshold: this.config.thresholds.errorRateLimit, timeWindow },
      };

      await this.sendAlert(alert);
    }
  }

  /**
   * Alert on task failure (failed node that couldn't be recovered)
   */
  async alertTaskFailure(
    dagId: string,
    failedNodeId: string,
    reason: string,
    retryCount: number
  ): Promise<void> {
    if (this.shouldSendAlert(`task_failure_${dagId}`)) {
      const alert: Alert = {
        id: `alert-fail-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'task_failure',
        severity: retryCount > 2 ? 'critical' : 'warning',
        title: '❌ Task Failed (Unrecovered)',
        message: `DAG ${dagId} failed at node ${failedNodeId} after ${retryCount} retries: ${reason}`,
        metadata: { dagId, nodeId: failedNodeId, reason, retryCount },
      };

      await this.sendAlert(alert);
    }
  }

  /**
   * Alert on execution timeout
   */
  async alertExecutionTimeout(dagId: string, durationMs: number): Promise<void> {
    if (durationMs > this.config.thresholds.executionTimeoutMs && this.shouldSendAlert(`timeout_${dagId}`)) {
      const alert: Alert = {
        id: `alert-timeout-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'timeout',
        severity: 'warning',
        title: '⏱️ Execution Timeout',
        message: `DAG ${dagId} exceeded timeout: ${(durationMs / 60000).toFixed(1)} minutes (limit: ${(this.config.thresholds.executionTimeoutMs / 60000).toFixed(0)} minutes)`,
        metadata: { dagId, duration: durationMs, limit: this.config.thresholds.executionTimeoutMs },
      };

      await this.sendAlert(alert);
    }
  }

  /**
   * Send alert via configured channels
   */
  private async sendAlert(alert: Alert): Promise<void> {
    console.log(`[AlertingService] Alert (${alert.severity}): ${alert.title}`);
    console.log(`  Message: ${alert.message}`);

    const promises: Promise<void>[] = [];

    if (this.config.enableEmailAlerts && this.config.emailRecipients.length > 0) {
      promises.push(this.sendEmailAlert(alert));
    }

    if (this.config.enableTelegramAlerts && this.config.telegramChatId && this.config.telegramBotToken) {
      promises.push(this.sendTelegramAlert(alert));
    }

    if (promises.length === 0) {
      console.warn('[AlertingService] No alert channels configured');
      return;
    }

    await Promise.allSettled(promises);
  }

  /**
   * Send email alert (placeholder)
   */
  private async sendEmailAlert(alert: Alert): Promise<void> {
    // In production, integrate with SendGrid, AWS SES, or nodemailer
    const body = `
<h2>${alert.title}</h2>
<p>${alert.message}</p>
<hr />
<p><strong>Severity:</strong> ${alert.severity.toUpperCase()}</p>
<p><strong>Time:</strong> ${alert.timestamp}</p>
<pre>${JSON.stringify(alert.metadata, null, 2)}</pre>
    `;

    console.log(`[AlertingService] Would send email to: ${this.config.emailRecipients.join(', ')}`);
    console.log(`[AlertingService] Subject: ${alert.title}`);
    console.log(`[AlertingService] Body:\n${body}`);

    // TODO: Integrate with actual email service
    // await emailService.send({
    //   to: this.config.emailRecipients,
    //   subject: alert.title,
    //   html: body,
    // });
  }

  /**
   * Send Telegram alert
   */
  private async sendTelegramAlert(alert: Alert): Promise<void> {
    const message = `
*${alert.title}*
${alert.severity === 'critical' ? '🚨 ' : ''}

${alert.message}

Severity: \`${alert.severity.toUpperCase()}\`
Time: \`${alert.timestamp}\`
    `;

    console.log(`[AlertingService] Would send Telegram to: ${this.config.telegramChatId}`);
    console.log(`[AlertingService] Message:\n${message}`);

    // TODO: Integrate with actual Telegram bot
    // await fetch(`https://api.telegram.org/bot${this.config.telegramBotToken}/sendMessage`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     chat_id: this.config.telegramChatId,
    //     text: message,
    //     parse_mode: 'Markdown',
    //   }),
    // });
  }
}

// Export singleton
let alertingService: AlertingService | null = null;

export async function getAlertingService(config?: Partial<AlertConfig>): Promise<AlertingService> {
  if (!alertingService) {
    alertingService = new AlertingService(config);
    await alertingService.initialize();
  }
  return alertingService;
}
