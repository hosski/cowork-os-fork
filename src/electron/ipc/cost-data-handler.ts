/**
 * Cost Data IPC Handler
 *
 * Provides cost analytics to the Cost Dashboard component.
 */

import { ipcMain } from 'electron';
import type { AuditLogService } from '../services/audit-log-service';

export function registerCostDataHandler(auditService: AuditLogService): void {
  ipcMain.handle('cost:getData', async (_event) => {
    try {
      const dailyCosts = await auditService.getCostByDay(30);
      const modelCosts = await auditService.getCostByModel(30);
      const errorRate = await auditService.getErrorRate(30);

      // Calculate totals
      const totalCost = dailyCosts.reduce((sum: number, day: any) => sum + (day.cost || 0), 0);
      const totalModelCost = modelCosts.reduce((sum: number, model: any) => sum + (model.cost || 0), 0);

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
