import type { Task } from "../../shared/types";
import { GrillTabPanel } from "./GrillTabPanel";
import { TaskDAGViewer } from "./TaskDAGViewer";

interface Props {
  rightTab: "grill" | "dag";
  setRightTab: (tab: "grill" | "dag") => void;
  onClose: () => void;
}

export function MissionControlRightPanel({
  rightTab,
  setRightTab,
  onClose,
}: Props) {
  return (
    <div className="mc-right-panel-overlay">
      <div className="mc-right-panel-modal">
        {/* Header with tabs */}
        <div className="mc-panel-header">
          <div className="mc-tabs">
            <button
              className={`mc-tab-btn ${rightTab === "grill" ? "active" : ""}`}
              onClick={() => setRightTab("grill")}
              title="Grill-Tab task breakdown"
            >
              🎯 Grill-Tab
            </button>
            <button
              className={`mc-tab-btn ${rightTab === "dag" ? "active" : ""}`}
              onClick={() => setRightTab("dag")}
              title="TaskDAG Gantt viewer"
            >
              📊 DAG
            </button>
          </div>
          <button className="mc-close-panel" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="mc-right-panel-content">
          {rightTab === "grill" ? (
            <GrillTabPanel />
          ) : rightTab === "dag" ? (
            <TaskDAGViewer />
          ) : null}
        </div>
      </div>
    </div>
  );
}
