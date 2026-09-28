/**
 * Cost Dashboard
 *
 * Shows spend trends:
 * - Daily spend (last 30 days)
 * - Spend by model
 * - Budget tracking
 * - Cumulative vs. budget
 */

import React, { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CostData {
  date: string;
  cost: number;
}

interface ModelCostData {
  model: string;
  cost: number;
}

interface DashboardState {
  dailyCosts: CostData[];
  modelCosts: ModelCostData[];
  totalCost: number;
  dailyBudget: number;
  monthlyBudget: number;
  daysUsed: number;
  remainingBudget: number;
  projectedMonthly: number;
}

export const CostDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardState>({
    dailyCosts: [],
    modelCosts: [],
    totalCost: 0,
    dailyBudget: 10, // $10/day default
    monthlyBudget: 300,
    daysUsed: 0,
    remainingBudget: 300,
    projectedMonthly: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCostData = async () => {
      try {
        const api = (window as any).electronAPI;
        if (!api || !api.getCostData) {
          setError('Cost API not available');
          setLoading(false);
          return;
        }

        const costData = await api.getCostData();

        const dailyCosts = costData.dailyCosts || [];
        const modelCosts = costData.modelCosts || [];

        const totalCost = dailyCosts.reduce((sum: number, d: CostData) => sum + d.cost, 0);
        const daysUsed = dailyCosts.filter((d: CostData) => d.cost > 0).length;
        const projectedMonthly = daysUsed > 0 ? (totalCost / daysUsed) * 30 : 0;
        const remainingBudget = data.monthlyBudget - totalCost;

        setData({
          ...data,
          dailyCosts,
          modelCosts,
          totalCost,
          daysUsed,
          projectedMonthly,
          remainingBudget,
        });

        setLoading(false);
      } catch (err: any) {
        console.error('[CostDashboard] Error fetching cost data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    const interval = setInterval(fetchCostData, 5000); // Refresh every 5 seconds
    fetchCostData();

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="cost-dashboard loading">
        <div className="spinner"></div>
        Loading cost data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="cost-dashboard error">
        <p>Error: {error}</p>
      </div>
    );
  }

  const budgetPercent = (data.totalCost / data.monthlyBudget) * 100;
  const budgetStatus =
    budgetPercent < 50 ? 'ok' : budgetPercent < 80 ? 'warning' : 'critical';

  return (
    <div className="cost-dashboard">
      <div className="dashboard-header">
        <h2>💰 Cost Dashboard</h2>
      </div>

      {/* Budget Summary */}
      <div className="summary-cards">
        <div className="card">
          <div className="card-label">Monthly Budget</div>
          <div className="card-value">${data.monthlyBudget.toFixed(2)}</div>
        </div>
        <div className="card">
          <div className="card-label">Spent (YTD)</div>
          <div className={`card-value ${budgetStatus}`}>${data.totalCost.toFixed(2)}</div>
        </div>
        <div className="card">
          <div className="card-label">Remaining</div>
          <div className={`card-value ${data.remainingBudget < 0 ? 'over-budget' : ''}`}>
            ${data.remainingBudget.toFixed(2)}
          </div>
        </div>
        <div className="card">
          <div className="card-label">Projected Monthly</div>
          <div className="card-value">${data.projectedMonthly.toFixed(2)}</div>
        </div>
      </div>

      {/* Budget Gauge */}
      <div className="budget-gauge">
        <div className="gauge-label">Budget Usage</div>
        <div className="gauge-bar">
          <div
            className={`gauge-fill ${budgetStatus}`}
            style={{ width: `${Math.min(budgetPercent, 100)}%` }}
          ></div>
        </div>
        <div className="gauge-info">
          {budgetPercent.toFixed(1)}% of ${data.monthlyBudget}
        </div>
      </div>

      {/* Daily Cost Trend */}
      {data.dailyCosts.length > 0 && (
        <div className="chart-container">
          <h3>Daily Spend (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.dailyCosts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value: any) => `$${value?.toFixed(2) || '0.00'}`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="cost"
                stroke="#2196F3"
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Cost by Model */}
      {data.modelCosts.length > 0 && (
        <div className="chart-container">
          <h3>Cost by Model</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.modelCosts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" tick={{ fontSize: 12 }} />
              <YAxis label={{ value: 'Cost ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value: any) => `$${value?.toFixed(2) || '0.00'}`} />
              <Legend />
              <Bar dataKey="cost" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <style>{`
        .cost-dashboard {
          padding: 24px;
          background: #f5f5f5;
          border-radius: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
        }

        .cost-dashboard.loading,
        .cost-dashboard.error {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          font-size: 16px;
          color: #666;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #2196F3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .dashboard-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #ddd;
        }

        .dashboard-header h2 {
          margin: 0;
          font-size: 24px;
          color: #222;
        }

        .summary-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .card {
          background: white;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .card-label {
          font-size: 12px;
          color: #999;
          text-transform: uppercase;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .card-value {
          font-size: 24px;
          font-weight: 700;
          color: #222;
        }

        .card-value.ok {
          color: #4CAF50;
        }

        .card-value.warning {
          color: #FF9800;
        }

        .card-value.critical {
          color: #F44336;
        }

        .card-value.over-budget {
          color: #F44336;
        }

        .budget-gauge {
          background: white;
          padding: 24px;
          border-radius: 8px;
          margin-bottom: 32px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .gauge-label {
          font-size: 14px;
          color: #666;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .gauge-bar {
          height: 24px;
          background: #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .gauge-fill {
          height: 100%;
          background: #4CAF50;
          transition: width 0.3s ease, background-color 0.3s ease;
          border-radius: 12px;
        }

        .gauge-fill.warning {
          background: #FF9800;
        }

        .gauge-fill.critical {
          background: #F44336;
        }

        .gauge-info {
          font-size: 12px;
          color: #999;
          text-align: right;
        }

        .chart-container {
          background: white;
          padding: 24px;
          border-radius: 8px;
          margin-bottom: 24px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .chart-container h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          color: #222;
        }

        .error {
          color: #F44336;
          padding: 16px;
          background: #FFEBEE;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default CostDashboard;
