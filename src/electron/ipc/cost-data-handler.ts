/**
 * Cost Data IPC Handler — OpenViking Backend
 *
 * Provides cost analytics by querying OpenViking audit logs.
 * Integrates alerting checks for cost and error thresholds.
 */

import { ipcMain } from 'electron';
import type { AuditLogService } from '../services/audit-log-service';
import { getAlertingService } from '../services/alerting-service';

export function registerCostDataHandler(auditService: AuditLogService): void {
  ipcMain.handle('cost:getData', async (_event) => {
    try {
      console.log('[CostData IPC] Querying cost data from OpenViking...');

      // With OpenViking backend, we call the service methods
      // They return empty arrays now since Viking queries happen at Hermes layer
      const dailyCosts = await auditService.getCostByDay(30);
      const modelCosts = await auditService.getCostByModel(30);
      const errorRate = await auditService.getErrorRate(30);

      // Calculate totals
      const totalCost = dailyCosts.reduce((sum: number, day: any) => sum + (day.cost || 0), 0);
      const totalModelCost = modelCosts.reduce((sum: number, model: any) => sum + (model.cost || 0), 0);

      // Check thresholds and send alerts
      try {
        const alerting = await getAlertingService({
          enableEmailAlerts: false, // Stubs for now; configure via settings
          enableTelegramAlerts: false,
        });

        // Alert on daily cost if there is a cost today
        if (dailyCosts.length > 0) {
          const todaysCost = dailyCosts[dailyCosts.length - 1]?.cost || 0;
          const today = new Date().toISOString().split('T')[0];
          await alerting.checkDailyCost(todaysCost, today);
        }

        // Alert on error rate
        if (errorRate.rate > 0) {
          await alerting.checkErrorRate(errorRate.rate, 'last 30 days');
        }
      } catch (alertError) {
        console.warn('[CostData IPC] Alerting check failed:', alertError);
        // Non-fatal; don't block cost data return
      }

      return {
        success: true,
        dailyCosts: dailyCosts.map((d: any) => ({
          date: d.date || new Date().toISOString().split('T')[0],
          cost: parseFloat(d.cost) || 0,
        })),
        modelCosts: modelCosts.map((m: any) => ({
          model: m.model || 'unknown',
          cost: parseFloat(m.cost) || 0,
        })),
        totalCost,
        totalModelCost,
        errorRate: errorRate.rate || 0,
        errorCount: errorRate.errorCount || 0,
        totalCount: errorRate.totalCount || 0,
        note: 'All audit data stored in OpenViking at port 1933. Use "hermes viking-search" for detailed queries.',
      };
    } catch (error: any) {
      console.error('[CostData IPC] Error fetching cost data:', error);
      return {
        success: false,
        error: error?.message || 'Failed to fetch cost data',
        dailyCosts: [],
        modelCosts: [],
        totalCost: 0,
        totalModelCost: 0,
        errorRate: 0,
        errorCount: 0,
        totalCount: 0,
      };
    }
  });
}
