import React, { useState } from 'react';

interface Task {
  id: string;
  name: string;
  description: string;
  duration: number;
  dependencies: string[];
  type: 'action' | 'bot' | 'agent' | 'script';
  agentPath?: string;
}

interface Tier {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  parallel: boolean;
}

interface WorkflowSpec {
  name: string;
  description: string;
  tiers: Tier[];
}

interface WorkflowCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (workflow: WorkflowSpec) => void;
}

type StepType = 'overview' | 'tiers' | 'tasks' | 'review';

export const WorkflowCreatorModal: React.FC<WorkflowCreatorModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [step, setStep] = useState<StepType>('overview');
  const [workflow, setWorkflow] = useState<WorkflowSpec>({
    name: '',
    description: '',
    tiers: [],
  });
  const [selectedTierIdx, setSelectedTierIdx] = useState(0);

  const templates = {
    dataPipeline: {
      name: 'Data Processing Pipeline',
      description: 'Extract, transform, validate, and export data with automated quality checks',
      tiers: [
        {
          id: `tier-${Date.now()}-1`,
          name: 'Data Extraction',
          description: 'Pull data from source systems and APIs',
          tasks: [
            {
              id: `task-${Date.now()}-1`,
              name: 'Fetch from Database',
              description: 'Query production database for raw records',
              duration: 120,
              dependencies: [],
              type: 'action',
            },
          ],
          parallel: false,
        },
        {
          id: `tier-${Date.now()}-2`,
          name: 'Data Transformation',
          description: 'Clean, normalize, and enrich data',
          tasks: [
            {
              id: `task-${Date.now()}-2`,
              name: 'Normalize Fields',
              description: 'Standardize formatting and data types',
              duration: 90,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-3`,
              name: 'Enrichment',
              description: 'Add calculated fields and context',
              duration: 60,
              dependencies: [],
              type: 'bot',
            },
          ],
          parallel: true,
        },
        {
          id: `tier-${Date.now()}-3`,
          name: 'Quality Assurance',
          description: 'Validate data integrity and completeness',
          tasks: [
            {
              id: `task-${Date.now()}-4`,
              name: 'Schema Validation',
              description: 'Check for required fields and correct types',
              duration: 45,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-5`,
              name: 'Anomaly Detection',
              description: 'Flag outliers and suspicious patterns',
              duration: 75,
              dependencies: [],
              type: 'agent',
              agentPath: './agents/quality-checker',
            },
          ],
          parallel: true,
        },
        {
          id: `tier-${Date.now()}-4`,
          name: 'Export & Archive',
          description: 'Save results and maintain audit trail',
          tasks: [
            {
              id: `task-${Date.now()}-6`,
              name: 'Export to Warehouse',
              description: 'Write processed data to data warehouse',
              duration: 120,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-7`,
              name: 'Backup Archive',
              description: 'Create versioned backup for recovery',
              duration: 60,
              dependencies: [],
              type: 'script',
            },
          ],
          parallel: true,
        },
      ],
    },
    contentCreation: {
      name: 'Content Creation Workflow',
      description: 'End-to-end pipeline for creating, reviewing, and publishing content',
      tiers: [
        {
          id: `tier-${Date.now()}-1`,
          name: 'Research & Planning',
          description: 'Gather information and outline content structure',
          tasks: [
            {
              id: `task-${Date.now()}-1`,
              name: 'Research Topic',
              description: 'Compile sources and key information',
              duration: 300,
              dependencies: [],
              type: 'agent',
              agentPath: './agents/research-bot',
            },
            {
              id: `task-${Date.now()}-2`,
              name: 'Create Outline',
              description: 'Structure main sections and key points',
              duration: 120,
              dependencies: [],
              type: 'action',
            },
          ],
          parallel: false,
        },
        {
          id: `tier-${Date.now()}-2`,
          name: 'Content Development',
          description: 'Write and format main content',
          tasks: [
            {
              id: `task-${Date.now()}-3`,
              name: 'Write First Draft',
              description: 'Generate initial content from outline',
              duration: 600,
              dependencies: [],
              type: 'bot',
            },
            {
              id: `task-${Date.now()}-4`,
              name: 'Add Media Assets',
              description: 'Insert images, diagrams, and embeds',
              duration: 180,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-5`,
              name: 'Format & Style',
              description: 'Apply brand standards and formatting',
              duration: 120,
              dependencies: [],
              type: 'action',
            },
          ],
          parallel: true,
        },
        {
          id: `tier-${Date.now()}-3`,
          name: 'Review & Approval',
          description: 'Quality checks and stakeholder review',
          tasks: [
            {
              id: `task-${Date.now()}-6`,
              name: 'Grammar & Style Check',
              description: 'Automated and manual editing pass',
              duration: 180,
              dependencies: [],
              type: 'bot',
            },
            {
              id: `task-${Date.now()}-7`,
              name: 'Fact Checking',
              description: 'Verify claims and data accuracy',
              duration: 240,
              dependencies: [],
              type: 'agent',
              agentPath: './agents/fact-checker',
            },
          ],
          parallel: true,
        },
        {
          id: `tier-${Date.now()}-4`,
          name: 'Publishing',
          description: 'Deploy content and monitor performance',
          tasks: [
            {
              id: `task-${Date.now()}-8`,
              name: 'SEO Optimization',
              description: 'Optimize for search engines',
              duration: 90,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-9`,
              name: 'Publish',
              description: 'Release to production',
              duration: 60,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-10`,
              name: 'Social Distribution',
              description: 'Schedule and post across channels',
              duration: 120,
              dependencies: [],
              type: 'bot',
            },
          ],
          parallel: true,
        },
      ],
    },
    tradingBot: {
      name: 'Automated Trading Workflow',
      description: 'Market analysis, signal generation, execution, and risk management',
      tiers: [
        {
          id: `tier-${Date.now()}-1`,
          name: 'Market Analysis',
          description: 'Analyze current market conditions and trends',
          tasks: [
            {
              id: `task-${Date.now()}-1`,
              name: 'Fetch Market Data',
              description: 'Get real-time price, volume, and indicator data',
              duration: 30,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-2`,
              name: 'Technical Analysis',
              description: 'Calculate indicators and identify patterns',
              duration: 45,
              dependencies: [],
              type: 'bot',
            },
            {
              id: `task-${Date.now()}-3`,
              name: 'Sentiment Analysis',
              description: 'Parse news and social sentiment',
              duration: 60,
              dependencies: [],
              type: 'agent',
              agentPath: './bots/sentiment-analyzer',
            },
          ],
          parallel: true,
        },
        {
          id: `tier-${Date.now()}-2`,
          name: 'Signal Generation',
          description: 'Generate buy/sell signals with confidence scores',
          tasks: [
            {
              id: `task-${Date.now()}-4`,
              name: 'Generate Signals',
              description: 'Combine analysis into actionable signals',
              duration: 30,
              dependencies: [],
              type: 'bot',
              agentPath: './bots/signal-generator',
            },
            {
              id: `task-${Date.now()}-5`,
              name: 'Backtest',
              description: 'Validate signal quality against historical data',
              duration: 120,
              dependencies: [],
              type: 'action',
            },
          ],
          parallel: false,
        },
        {
          id: `tier-${Date.now()}-3`,
          name: 'Risk Management',
          description: 'Apply position sizing and stop losses',
          tasks: [
            {
              id: `task-${Date.now()}-6`,
              name: 'Position Sizing',
              description: 'Calculate optimal position size based on risk',
              duration: 15,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-7`,
              name: 'Set Stop Loss',
              description: 'Determine and set protective stops',
              duration: 15,
              dependencies: [],
              type: 'action',
            },
            {
              id: `task-${Date.now()}-8`,
              name: 'Risk Validation',
              description: 'Verify risk parameters before execution',
              duration: 20,
              dependencies: [],
              type: 'agent',
              agentPath: './agents/risk-manager',
            },
          ],
          parallel: true,
        },
        {
          id: `tier-${Date.now()}-4`,
          name: 'Execution & Monitoring',
          description: 'Execute trades and monitor performance',
          tasks: [
            {
              id: `task-${Date.now()}-9`,
              name: 'Place Orders',
              description: 'Execute buy/sell orders on exchange',
              duration: 30,
              dependencies: [],
              type: 'bot',
              agentPath: './bots/order-executor',
            },
            {
              id: `task-${Date.now()}-10`,
              name: 'Monitor Position',
              description: 'Track open positions and performance',
              duration: 300,
              dependencies: [],
              type: 'bot',
            },
            {
              id: `task-${Date.now()}-11`,
              name: 'Log & Report',
              description: 'Record trades and generate performance report',
              duration: 45,
              dependencies: [],
              type: 'action',
            },
          ],
          parallel: true,
        },
      ],
    },
  };

  const applyTemplate = (templateKey: keyof typeof templates) => {
    const template = templates[templateKey];
    setWorkflow({
      name: template.name,
      description: template.description,
      tiers: template.tiers,
    });
    setStep('tiers');
  };

  const addTier = () => {
    const newTier: Tier = {
      id: `tier-${Date.now()}`,
      name: `Tier ${workflow.tiers.length + 1}`,
      description: '',
      tasks: [],
      parallel: false,
    };
    setWorkflow({ ...workflow, tiers: [...workflow.tiers, newTier] });
  };

  const removeTier = (idx: number) => {
    setWorkflow({
      ...workflow,
      tiers: workflow.tiers.filter((_, i) => i !== idx),
    });
    if (selectedTierIdx >= workflow.tiers.length - 1 && selectedTierIdx > 0) {
      setSelectedTierIdx(selectedTierIdx - 1);
    }
  };

  const updateTier = (idx: number, updates: Partial<Tier>) => {
    const updated = [...workflow.tiers];
    updated[idx] = { ...updated[idx], ...updates };
    setWorkflow({ ...workflow, tiers: updated });
  };

  const addTask = (tierIdx: number) => {
    const tier = workflow.tiers[tierIdx];
    const newTask: Task = {
      id: `task-${Date.now()}`,
      name: `Task ${tier.tasks.length + 1}`,
      description: '',
      duration: 60,
      dependencies: [],
      type: 'action',
    };
    const updated = [...workflow.tiers];
    updated[tierIdx] = {
      ...tier,
      tasks: [...tier.tasks, newTask],
    };
    setWorkflow({ ...workflow, tiers: updated });
  };

  const removeTask = (tierIdx: number, taskIdx: number) => {
    const updated = [...workflow.tiers];
    updated[tierIdx] = {
      ...updated[tierIdx],
      tasks: updated[tierIdx].tasks.filter((_, i) => i !== taskIdx),
    };
    setWorkflow({ ...workflow, tiers: updated });
  };

  const updateTask = (tierIdx: number, taskIdx: number, updates: Partial<Task>) => {
    const updated = [...workflow.tiers];
    updated[tierIdx].tasks[taskIdx] = {
      ...updated[tierIdx].tasks[taskIdx],
      ...updates,
    };
    setWorkflow({ ...workflow, tiers: updated });
  };

  const handleCreate = () => {
    if (!workflow.name.trim()) {
      alert('Workflow name is required');
      return;
    }
    if (workflow.tiers.length === 0) {
      alert('At least one tier is required');
      return;
    }
    onCreate(workflow);
  };

  if (!isOpen) return null;

  const totalTasks = workflow.tiers.reduce((sum, t) => sum + t.tasks.length, 0);
  const estDuration = Math.max(
    ...workflow.tiers.map((t) =>
      t.parallel
        ? Math.max(...t.tasks.map((task) => task.duration), 0)
        : t.tasks.reduce((sum, task) => sum + task.duration, 0)
    ),
    0
  );

  return (
    <div className="workflow-creator-overlay">
      <div className="workflow-creator-modal">
        {/* Header */}
        <div className="workflow-creator-header">
          <h2>Create Custom Workflow</h2>
          <button className="workflow-creator-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="workflow-creator-content">
          {step === 'overview' && (
            <div className="workflow-creator-section">
              <h3>Workflow Overview</h3>
              <div className="form-group">
                <label>Workflow Name *</label>
                <input
                  type="text"
                  value={workflow.name}
                  onChange={(e) => setWorkflow({ ...workflow, name: e.target.value })}
                  placeholder="e.g., Data Processing Pipeline"
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={workflow.description}
                  onChange={(e) => setWorkflow({ ...workflow, description: e.target.value })}
                  placeholder="What does this workflow do?"
                  rows={4}
                />
              </div>

              <div className="workflow-tips">
                <p>💡 <strong>Quick Start Templates:</strong></p>
                <div className="template-buttons">
                  <button
                    className="template-btn"
                    onClick={() => applyTemplate('dataPipeline')}
                    title="Data extraction, transformation, validation, and export"
                  >
                    📊 Data Pipeline
                  </button>
                  <button
                    className="template-btn"
                    onClick={() => applyTemplate('contentCreation')}
                    title="Research, write, review, and publish content"
                  >
                    ✍️ Content Creation
                  </button>
                  <button
                    className="template-btn"
                    onClick={() => applyTemplate('tradingBot')}
                    title="Market analysis, signals, risk management, and execution"
                  >
                    📈 Trading Bot
                  </button>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                  Click any template to load a pre-configured example. Customize from there.
                </p>
              </div>
            </div>
          )}

          {step === 'tiers' && (
            <div className="workflow-creator-section">
              <div className="section-header">
                <h3>Define Tiers</h3>
                <button className="btn-small" onClick={addTier}>
                  ➕ Add Tier
                </button>
              </div>

              {workflow.tiers.length === 0 ? (
                <div className="empty-state">
                  <p>No tiers yet. Click "Add Tier" to get started.</p>
                </div>
              ) : (
                <div className="tiers-list">
                  {workflow.tiers.map((tier, idx) => (
                    <div
                      key={tier.id}
                      className={`tier-card ${selectedTierIdx === idx ? 'selected' : ''}`}
                      onClick={() => setSelectedTierIdx(idx)}
                    >
                      <div className="tier-card-header">
                        <input
                          type="text"
                          value={tier.name}
                          onChange={(e) => updateTier(idx, { name: e.target.value })}
                          onClick={(e) => e.stopPropagation()}
                          className="tier-name-input"
                        />
                        <button
                          className="btn-remove"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeTier(idx);
                          }}
                        >
                          🗑️
                        </button>
                      </div>

                      <textarea
                        value={tier.description}
                        onChange={(e) => updateTier(idx, { description: e.target.value })}
                        onClick={(e) => e.stopPropagation()}
                        placeholder="Tier description"
                        rows={2}
                        className="tier-description-input"
                      />

                      <label className="checkbox-label" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={tier.parallel}
                          onChange={(e) => updateTier(idx, { parallel: e.target.checked })}
                        />
                        <span>Run tasks in parallel</span>
                      </label>

                      <div className="tier-tasks-count">
                        {tier.tasks.length} task{tier.tasks.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {step === 'tasks' && (
            <div className="workflow-creator-section">
              {workflow.tiers.length === 0 ? (
                <div className="empty-state">
                  <p>Create tiers first (previous step)</p>
                </div>
              ) : (
                <>
                  <div className="tier-selector">
                    <label>Select Tier:</label>
                    <select
                      value={selectedTierIdx}
                      onChange={(e) => setSelectedTierIdx(parseInt(e.target.value))}
                    >
                      {workflow.tiers.map((tier, idx) => (
                        <option key={tier.id} value={idx}>
                          {tier.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="section-header">
                    <h3>{workflow.tiers[selectedTierIdx].name} - Tasks</h3>
                    <button
                      className="btn-small"
                      onClick={() => addTask(selectedTierIdx)}
                    >
                      ➕ Add Task
                    </button>
                  </div>

                  {workflow.tiers[selectedTierIdx].tasks.length === 0 ? (
                    <div className="empty-state">
                      <p>No tasks in this tier. Click "Add Task" to start.</p>
                    </div>
                  ) : (
                    <div className="tasks-list">
                      {workflow.tiers[selectedTierIdx].tasks.map((task, idx) => (
                        <div key={task.id} className="task-card">
                          <div className="task-card-header">
                            <input
                              type="text"
                              value={task.name}
                              onChange={(e) =>
                                updateTask(selectedTierIdx, idx, { name: e.target.value })
                              }
                              className="task-name-input"
                            />
                            <select
                              value={task.type}
                              onChange={(e) =>
                                updateTask(selectedTierIdx, idx, { type: e.target.value as any })
                              }
                              className="task-type-select"
                            >
                              <option value="action">Action</option>
                              <option value="bot">Bot</option>
                              <option value="agent">Agent</option>
                              <option value="script">Script</option>
                            </select>
                            <button
                              className="btn-remove"
                              onClick={() => removeTask(selectedTierIdx, idx)}
                            >
                              🗑️
                            </button>
                          </div>

                          <textarea
                            value={task.description}
                            onChange={(e) =>
                              updateTask(selectedTierIdx, idx, { description: e.target.value })
                            }
                            placeholder="What does this task do?"
                            rows={2}
                            className="task-description-input"
                          />

                          {task.type !== 'action' && (
                            <input
                              type="text"
                              value={task.agentPath || ''}
                              onChange={(e) =>
                                updateTask(selectedTierIdx, idx, { agentPath: e.target.value })
                              }
                              placeholder={`Path to ${task.type} (e.g., ./bots/my-bot)`}
                              className="task-agent-input"
                            />
                          )}

                          <div className="task-duration">
                            <label>Duration (seconds):</label>
                            <input
                              type="number"
                              min="1"
                              value={task.duration}
                              onChange={(e) =>
                                updateTask(selectedTierIdx, idx, {
                                  duration: parseInt(e.target.value),
                                })
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {step === 'review' && (
            <div className="workflow-creator-section">
              <h3>Review & Create</h3>

              <div className="review-block">
                <h4>{workflow.name || '(Untitled Workflow)'}</h4>
                <p>{workflow.description || '(No description provided)'}</p>
              </div>

              <div className="review-stats">
                <div className="stat">
                  <span className="stat-label">Tiers</span>
                  <span className="stat-value">{workflow.tiers.length}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Total Tasks</span>
                  <span className="stat-value">{totalTasks}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Est. Duration</span>
                  <span className="stat-value">{estDuration}s</span>
                </div>
              </div>

              <div className="review-tiers">
                {workflow.tiers.map((tier, tierIdx) => (
                  <div key={tier.id} className="review-tier">
                    <h5>
                      {tierIdx + 1}. {tier.name}
                      {tier.parallel && <span className="parallel-badge">parallel</span>}
                    </h5>
                    <p>{tier.description || '(No description)'}</p>
                    {tier.tasks.length > 0 ? (
                      <ul>
                        {tier.tasks.map((task) => (
                          <li key={task.id}>
                            <strong>{task.name}</strong> <em className="task-type-badge">{task.type}</em>
                            <br />
                            <small>{task.description || '(No description)'}</small>
                            <br />
                            <small className="task-meta">⏱️ {task.duration}s</small>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                        (No tasks defined)
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="workflow-creator-footer">
          <button
            className="btn btn-secondary"
            disabled={step === 'overview'}
            onClick={() => {
              const steps: StepType[] = ['overview', 'tiers', 'tasks', 'review'];
              const idx = steps.indexOf(step);
              if (idx > 0) setStep(steps[idx - 1]);
            }}
          >
            ← Back
          </button>

          <div className="step-indicator">
            {['Overview', 'Tiers', 'Tasks', 'Review'].map((label, idx) => {
              const steps: StepType[] = ['overview', 'tiers', 'tasks', 'review'];
              return (
                <div
                  key={idx}
                  className={`step-dot ${step === steps[idx] ? 'active' : ''}`}
                  title={label}
                />
              );
            })}
          </div>

          <button
            className="btn btn-secondary"
            disabled={step === 'review'}
            onClick={() => {
              const steps: StepType[] = ['overview', 'tiers', 'tasks', 'review'];
              const idx = steps.indexOf(step);
              if (idx < steps.length - 1) setStep(steps[idx + 1]);
            }}
          >
            Next →
          </button>

          {step === 'review' && (
            <button className="btn btn-success" onClick={handleCreate}>
              ✓ Create Workflow
            </button>
          )}
        </div>
      </div>

      <style>{`
        .workflow-creator-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .workflow-creator-modal {
          background: var(--color-bg-primary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          width: 90%;
          max-width: 800px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .workflow-creator-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--color-border-subtle);
          flex-shrink: 0;
        }

        .workflow-creator-header h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: var(--color-text);
        }

        .workflow-creator-close {
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: var(--color-text-muted);
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .workflow-creator-close:hover {
          background: var(--color-bg-hover);
          color: var(--color-text);
        }

        .workflow-creator-content {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
        }

        .workflow-creator-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .workflow-creator-section h3 {
          margin: 0 0 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--color-text);
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .section-header h3 {
          margin: 0;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          background: var(--color-bg-input);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          color: var(--color-text);
          font-family: inherit;
          font-size: 13px;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--color-accent);
          background: var(--color-bg-elevated);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--color-text-muted);
        }

        .workflow-tips {
          background: var(--color-accent-subtle);
          border: 1px solid var(--color-accent);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          margin-top: 8px;
        }

        .workflow-tips p {
          margin: 0 0 8px 0;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-accent);
        }

        .template-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 8px;
          margin-bottom: 8px;
        }

        .template-btn {
          background: var(--color-bg-input);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          font-size: 12px;
          font-weight: 500;
          color: var(--color-text);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .template-btn:hover {
          background: var(--color-accent);
          color: white;
          border-color: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(34, 211, 238, 0.2);
        }

        .workflow-tips ul {
          margin: 0;
          padding-left: 20px;
          font-size: 12px;
          color: var(--color-text-secondary);
        }

        .workflow-tips li {
          margin-bottom: 4px;
        }

        .empty-state {
          text-align: center;
          padding: 32px 24px;
          color: var(--color-text-muted);
          font-size: 14px;
        }

        .tiers-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .tier-card {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tier-card:hover {
          background: var(--color-bg-tertiary);
          border-color: var(--color-border);
        }

        .tier-card.selected {
          background: var(--color-bg-tertiary);
          border-color: var(--color-accent);
        }

        .tier-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .tier-name-input {
          flex: 1;
          background: transparent;
          border: none;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text);
          padding: 0;
        }

        .tier-name-input:focus {
          outline: none;
        }

        .btn-remove {
          background: transparent;
          border: none;
          font-size: 16px;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-remove:hover {
          transform: scale(1.2);
        }

        .tier-description-input {
          width: 100%;
          background: var(--color-bg-input);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          padding: 8px 10px;
          color: var(--color-text-secondary);
          font-size: 12px;
          resize: vertical;
          margin-bottom: 8px;
          font-family: inherit;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--color-text-secondary);
          cursor: pointer;
        }

        .checkbox-label input {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        .tier-tasks-count {
          font-size: 11px;
          color: var(--color-text-muted);
          margin-top: 8px;
        }

        .tier-selector {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .tier-selector label {
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .tier-selector select {
          flex: 1;
          max-width: 300px;
        }

        .tasks-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .task-card {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 12px;
        }

        .task-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .task-name-input {
          flex: 1;
          background: transparent;
          border: none;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text);
          padding: 0;
        }

        .task-name-input:focus {
          outline: none;
        }

        .task-type-select {
          flex-shrink: 0;
          max-width: 120px;
        }

        .task-description-input {
          width: 100%;
          background: var(--color-bg-input);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          padding: 8px 10px;
          color: var(--color-text-secondary);
          font-size: 12px;
          resize: vertical;
          margin-bottom: 8px;
          font-family: inherit;
        }

        .task-agent-input {
          width: 100%;
          background: var(--color-bg-input);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-sm);
          padding: 8px 10px;
          color: var(--color-text-secondary);
          font-size: 12px;
          margin-bottom: 8px;
          font-family: inherit;
        }

        .task-duration {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--color-text-secondary);
        }

        .task-duration label {
          flex-shrink: 0;
        }

        .task-duration input {
          width: 80px;
          max-width: 100%;
        }

        .btn-small {
          background: var(--color-accent-subtle);
          border: 1px solid var(--color-accent);
          color: var(--color-accent);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-small:hover {
          background: var(--color-accent);
          color: white;
        }

        .review-block {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 14px;
          margin-bottom: 16px;
        }

        .review-block h4 {
          margin: 0 0 4px 0;
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text);
        }

        .review-block p {
          margin: 0;
          font-size: 13px;
          color: var(--color-text-secondary);
        }

        .review-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .stat {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 12px;
          text-align: center;
        }

        .stat-label {
          display: block;
          font-size: 11px;
          font-weight: 500;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .stat-value {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: var(--color-accent);
        }

        .review-tiers {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .review-tier {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 12px;
        }

        .review-tier h5 {
          margin: 0 0 4px 0;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .parallel-badge {
          display: inline-block;
          background: var(--color-accent-subtle);
          color: var(--color-accent);
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 3px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-left: auto;
        }

        .review-tier p {
          margin: 0 0 8px 0;
          font-size: 12px;
          color: var(--color-text-secondary);
        }

        .review-tier ul {
          margin: 0;
          padding-left: 20px;
          list-style: none;
        }

        .review-tier li {
          font-size: 12px;
          color: var(--color-text-secondary);
          margin-bottom: 6px;
        }

        .review-tier li strong {
          color: var(--color-text);
        }

        .task-type-badge {
          display: inline-block;
          background: var(--color-accent-subtle);
          color: var(--color-accent);
          font-size: 10px;
          padding: 1px 4px;
          border-radius: 2px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          font-style: normal;
          margin-left: 4px;
        }

        .task-meta {
          color: var(--color-text-muted);
          opacity: 0.8;
        }

        .review-tier small {
          display: block;
          margin-top: 2px;
        }

        .workflow-creator-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 16px 24px;
          border-top: 1px solid var(--color-border-subtle);
          flex-shrink: 0;
          background: var(--color-bg-secondary);
        }

        .step-indicator {
          display: flex;
          gap: 8px;
        }

        .step-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-border);
          transition: all 0.2s ease;
        }

        .step-dot.active {
          background: var(--color-accent);
          width: 24px;
          border-radius: 4px;
        }

        .btn {
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }

        .btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .btn-secondary {
          background: var(--color-bg-tertiary);
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border-subtle);
        }

        .btn-secondary:hover:not(:disabled) {
          background: var(--color-bg-hover);
          color: var(--color-text);
        }

        .btn-success {
          background: var(--color-success);
          color: white;
          border: none;
        }

        .btn-success:hover:not(:disabled) {
          filter: brightness(1.1);
        }
      `}</style>
    </div>
  );
};
