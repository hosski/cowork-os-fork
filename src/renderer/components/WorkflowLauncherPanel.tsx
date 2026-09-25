/**
 * Workflow Launcher Panel Component
 * 
 * React component for creating and launching video/trading workflows.
 * Integrates with Redux + IPC handlers.
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

interface WorkflowLauncherProps {
  onWorkflowCreated?: (dagId: string) => void;
}

export const WorkflowLauncherPanel: React.FC<WorkflowLauncherProps> = ({ onWorkflowCreated }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState<'video' | 'trading' | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Video workflow form state
  const [videoEpisode, setVideoEpisode] = useState(1);
  const [seriesName, setSeriesName] = useState('Animation Adventure');

  // Trading bot form state
  const [botName, setBotName] = useState('BTC Trader');
  const [exchange, setExchange] = useState<'bybit' | 'binance'>('bybit');

  const launchVideoWorkflow = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await (window as any).electronAPI.createVideoWorkflow({
        episodeNumber: videoEpisode,
        seriesName,
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to create workflow');
      }

      // Dispatch Redux action to add workflow
      // This will trigger the auto-execution middleware
      dispatch({
        type: 'taskDAG/addWorkflow',
        payload: {
          id: result.dagId,
          name: `${seriesName} Ep${videoEpisode}`,
          tiers: result.dagJSON.tiers,
          nodes: result.dagJSON.nodes,
          type: 'video',
        },
      });

      onWorkflowCreated?.(result.dagId);
      setMode(null);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const launchTradingWorkflow = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await (window as any).electronAPI.createTradingWorkflow({
        botName,
        exchange,
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to create workflow');
      }

      // Dispatch Redux action
      dispatch({
        type: 'taskDAG/addWorkflow',
        payload: {
          id: result.dagId,
          name: botName,
          tiers: result.dagJSON.tiers,
          nodes: result.dagJSON.nodes,
          type: 'trading',
        },
      });

      onWorkflowCreated?.(result.dagId);
      setMode(null);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workflow-launcher-panel">
      <h2>Launch Workflow</h2>

      {!mode && (
        <div className="mode-selector">
          <button onClick={() => setMode('video')} className="btn btn-primary">
            📹 Video Production
          </button>
          <button onClick={() => setMode('trading')} className="btn btn-primary">
            💰 Trading Bot
          </button>
        </div>
      )}

      {mode === 'video' && (
        <div className="video-form">
          <h3>Video Production Workflow</h3>

          <div className="form-group">
            <label>Series Name</label>
            <input
              type="text"
              value={seriesName}
              onChange={(e) => setSeriesName(e.target.value)}
              placeholder="e.g., Animation Adventure"
            />
          </div>

          <div className="form-group">
            <label>Episode Number (1-11)</label>
            <input
              type="number"
              min="1"
              max="11"
              value={videoEpisode}
              onChange={(e) => setVideoEpisode(parseInt(e.target.value))}
            />
          </div>

          <div className="workflow-stats">
            <p>📊 5-tier pipeline: Storyboard → Script → Design → Render → QA</p>
            <p>⏱️ Est. runtime: ~20-25 minutes</p>
            <p>📦 11 tasks, 6 parallel</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="form-actions">
            <button onClick={launchVideoWorkflow} disabled={loading} className="btn btn-success">
              {loading ? 'Creating...' : '▶️ Launch Video Workflow'}
            </button>
            <button onClick={() => setMode(null)} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      )}

      {mode === 'trading' && (
        <div className="trading-form">
          <h3>Trading Bot Workflow</h3>

          <div className="form-group">
            <label>Bot Name</label>
            <input
              type="text"
              value={botName}
              onChange={(e) => setBotName(e.target.value)}
              placeholder="e.g., BTC Trader"
            />
          </div>

          <div className="form-group">
            <label>Exchange</label>
            <select value={exchange} onChange={(e) => setExchange(e.target.value as any)}>
              <option value="bybit">Bybit</option>
              <option value="binance">Binance</option>
            </select>
          </div>

          <div className="workflow-stats">
            <p>📊 4-tier pipeline: Analysis → Strategy → Position Mgmt → Monitoring</p>
            <p>⏱️ Est. runtime: ~20-25 minutes</p>
            <p>📦 7 tasks, 4 parallel</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="form-actions">
            <button onClick={launchTradingWorkflow} disabled={loading} className="btn btn-success">
              {loading ? 'Creating...' : '▶️ Launch Trading Bot'}
            </button>
            <button onClick={() => setMode(null)} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      )}

      <style>{`
        .workflow-launcher-panel {
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          color: white;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .workflow-launcher-panel h2 {
          margin-top: 0;
          font-size: 18px;
        }

        .mode-selector {
          display: flex;
          gap: 12px;
          margin: 16px 0;
        }

        .video-form, .trading-form {
          margin: 16px 0;
        }

        .form-group {
          margin: 12px 0;
        }

        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-weight: 500;
          font-size: 13px;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 13px;
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .workflow-stats {
          background: rgba(0, 0, 0, 0.2);
          padding: 12px;
          border-radius: 4px;
          margin: 12px 0;
          font-size: 12px;
          line-height: 1.6;
        }

        .workflow-stats p {
          margin: 4px 0;
        }

        .error-message {
          background: rgba(255, 0, 0, 0.2);
          border: 1px solid rgba(255, 0, 0, 0.5);
          padding: 8px 12px;
          border-radius: 4px;
          margin: 12px 0;
          font-size: 12px;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }

        .btn {
          padding: 10px 16px;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          font-size: 13px;
          transition: opacity 0.2s;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-primary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          flex: 1;
        }

        .btn-primary:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.3);
        }

        .btn-success {
          background: #10b981;
          color: white;
          flex: 1;
        }

        .btn-success:hover:not(:disabled) {
          background: #059669;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .btn-secondary:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};
