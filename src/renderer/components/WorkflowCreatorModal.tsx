import React, { useState } from 'react';

interface Tier {
  name: string;
  taskCount: number;
}

interface WorkflowCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (workflow: any) => void;
}

export const WorkflowCreatorModal: React.FC<WorkflowCreatorModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [workflowName, setWorkflowName] = useState('Custom Workflow');
  const [tierCount, setTierCount] = useState(3);
  const [tiers, setTiers] = useState<Tier[]>([
    { name: 'Tier 1', taskCount: 3 },
    { name: 'Tier 2', taskCount: 3 },
    { name: 'Tier 3', taskCount: 2 },
  ]);

  const handleTierNameChange = (index: number, name: string) => {
    const newTiers = [...tiers];
    newTiers[index].name = name;
    setTiers(newTiers);
  };

  const handleTaskCountChange = (index: number, count: number) => {
    const newTiers = [...tiers];
    newTiers[index].taskCount = Math.max(1, count);
    setTiers(newTiers);
  };

  const handleTierCountChange = (count: number) => {
    setTierCount(count);
    const newTiers: Tier[] = [];
    for (let i = 0; i < count; i++) {
      if (tiers[i]) {
        newTiers.push(tiers[i]);
      } else {
        newTiers.push({ name: `Tier ${i + 1}`, taskCount: 2 });
      }
    }
    setTiers(newTiers);
  };

  const handleCreate = () => {
    // Generate workflow structure
    const workflow = {
      name: workflowName,
      type: 'custom',
      tiers: tiers.map((tier, tierIndex) => ({
        id: `tier-${tierIndex}`,
        name: tier.name,
        tasks: Array.from({ length: tier.taskCount }, (_, taskIndex) => ({
          id: `task-${tierIndex}-${taskIndex}`,
          name: `${tier.name} - Task ${taskIndex + 1}`,
          duration: 10 + Math.random() * 30, // 10-40 seconds
        })),
      })),
    };

    onCreate(workflow);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '80vh',
          overflow: 'auto',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.5rem', fontWeight: 700 }}>
          ➕ Create Custom Workflow
        </h2>

        {/* Workflow Name */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Workflow Name
          </label>
          <input
            type="text"
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
            placeholder="e.g., Data Processing Pipeline"
          />
        </div>

        {/* Tier Count */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Number of Tiers: {tierCount}
          </label>
          <input
            type="range"
            min="1"
            max="8"
            value={tierCount}
            onChange={(e) => handleTierCountChange(parseInt(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>

        {/* Tiers Configuration */}
        <div style={{ marginBottom: '1.5rem', maxHeight: '300px', overflow: 'auto' }}>
          <h3 style={{ marginTop: 0, fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>
            Tier Configuration
          </h3>
          {tiers.map((tier, index) => (
            <div
              key={index}
              style={{
                padding: '1rem',
                backgroundColor: '#f9fafb',
                borderRadius: '6px',
                marginBottom: '0.75rem',
                border: '1px solid #e5e7eb',
              }}
            >
              <div style={{ marginBottom: '0.75rem' }}>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  Tier {index + 1} Name
                </label>
                <input
                  type="text"
                  value={tier.name}
                  onChange={(e) => handleTierNameChange(index, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  Tasks in this tier: {tier.taskCount}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={tier.taskCount}
                  onChange={(e) => handleTaskCountChange(index, parseInt(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          style={{
            backgroundColor: '#f0f9ff',
            border: '1px solid #0284c7',
            borderRadius: '6px',
            padding: '1rem',
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
          }}
        >
          <strong>Summary:</strong> {tierCount} tiers, {tiers.reduce((sum, t) => sum + t.taskCount, 0)} total
          tasks
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#e5e7eb',
              color: '#1f2937',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            ✅ Create & Execute
          </button>
        </div>
      </div>
    </div>
  );
};
