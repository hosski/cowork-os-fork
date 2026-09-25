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
          {rightTab === "grill" && (
            <div style={{ padding: "16px", color: "var(--color-text-secondary)" }}>
              Grill-Tab content
            </div>
          )}
          {rightTab === "dag" && (
            <div style={{ padding: "16px", color: "var(--color-text-secondary)" }}>
              DAG content
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
