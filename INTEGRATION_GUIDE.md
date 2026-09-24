/**
 * Integration instructions for GrillTabPanel + TaskDAGViewer into CoWork OS
 *
 * Three ways to view your components:
 */

// ============================================================================
// OPTION 1: Add as new tab in Mission Control (simplest)
// ============================================================================

// In src/renderer/components/MissionControlPanel.tsx, line ~72:

import { GrillTabPanel } from './GrillTabPanel';
import { TaskDAGViewer } from './TaskDAGViewer';

export function MissionControlPanel({...}) {
  const [activeTab, setActiveTab] = useState<'tasks' | 'grill' | 'dag'>('tasks');

  return (
    <div className="mission-control">
      {/* Tab buttons */}
      <div className="tabs">
        <button onClick={() => setActiveTab('tasks')}>Tasks</button>
        <button onClick={() => setActiveTab('grill')}>Grill-Tab</button>
        <button onClick={() => setActiveTab('dag')}>DAG Viewer</button>
      </div>

      {/* Tab content */}
      {activeTab === 'grill' && <GrillTabPanel intent="user task" />}
      {activeTab === 'dag' && <TaskDAGViewer workflowId="video-workflow" />}
      {/* existing tasks view ... */}
    </div>
  );
}

// ============================================================================
// OPTION 2: Add as sidebar panels (right side of Mission Control)
// ============================================================================

// In MissionControlPanel, add side-by-side layout:

<div className="mission-control-layout">
  <div className="main">
    {/* Existing task board here */}
  </div>
  <aside className="sidebar">
    <GrillTabPanel intent="current task" onBriefGenerated={handleBrief} />
  </aside>
</div>

// ============================================================================
// OPTION 3: Add as modal/drawer (floating panel)
// ============================================================================

// In MissionControlPanel state:

const [showGrillTab, setShowGrillTab] = useState(false);
const [showDAG, setShowDAG] = useState(false);

return (
  <div>
    {/* Main panel */}
    <div className="mission-control">
      <button onClick={() => setShowGrillTab(true)}>Open Grill-Tab</button>
      <button onClick={() => setShowDAG(true)}>View DAG</button>
    </div>

    {/* Modal overlay */}
    {showGrillTab && (
      <Modal onClose={() => setShowGrillTab(false)}>
        <GrillTabPanel intent="user task" />
      </Modal>
    )}

    {showDAG && (
      <Modal onClose={() => setShowDAG(false)}>
        <TaskDAGViewer workflowId="video-workflow" />
      </Modal>
    )}
  </div>
);

// ============================================================================
// USING THE HOOKS (in any CoWork component):
// ============================================================================

import { useGrillTab, useGrillTabActions } from '../hooks';
import { useTaskDAG, useTaskDAGActions } from '../hooks';

function MyComponent() {
  // Read state
  const { ladder, brief, isDone } = useGrillTab();
  const { workflows, activeWorkflow } = useTaskDAG();

  // Dispatch actions
  const grillActions = useGrillTabActions();
  const dagActions = useTaskDAGActions();

  const handleAnswer = (answer: string) => {
    grillActions.addRung({
      question: 'What is the goal?',
      answer,
      category: 'goal',
      recommended: 'Achieve X',
    });
  };

  return (
    <>
      <p>Current brief: {brief}</p>
      <button onClick={() => handleAnswer('My goal is...')}>
        Answer Question
      </button>
    </>
  );
}

// ============================================================================
// FILE LOCATIONS (copy into your imports):
// ============================================================================

// GrillTabPanel: src/renderer/components/GrillTabPanel.tsx
// TaskDAGViewer: src/renderer/components/TaskDAGViewer.tsx
// Redux store: src/renderer/store.ts
// Custom hooks: src/renderer/hooks.ts
// Provider: src/renderer/redux-provider.tsx

// ============================================================================
// NEXT STEP: Pick your preferred integration above, then:
// ============================================================================

// 1. Edit src/renderer/components/MissionControlPanel.tsx
// 2. Add import statements for GrillTabPanel + TaskDAGViewer
// 3. Add them to JSX where you want them
// 4. Save + CoWork hot-reloads (Vite watches changes)
// 5. Test in the running app!
