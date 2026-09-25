import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { X } from "lucide-react";
import { MCTaskDetail } from "./MCTaskDetail";
import { MCAgentDetail } from "./MCAgentDetail";
import { MCIssueDetail } from "./MCIssueDetail";
import { GrillTabPanel } from "../GrillTabPanel";
import { TaskDAGViewer } from "../TaskDAGViewer";
import { useTaskDAG } from "./useTaskDAG";
import type { MissionControlData } from "./useMissionControlData";
import { taskDAGActions } from "../../store";

interface MCDetailPanelProps {
  data: MissionControlData;
}

export function MCDetailPanel({ data }: MCDetailPanelProps) {
  const { detailPanel, setDetailPanel, tasks } = data;
  const [contentTab, setContentTab] = useState<"details" | "grill" | "dag">("details");
  const dispatch = useDispatch();

  // Build DAG when task is selected
  const selectedTask = detailPanel?.kind === "task" ? tasks.find((t) => t.id === detailPanel.taskId) : null;
  const taskDAG = useTaskDAG(selectedTask || null, tasks);

  // Dispatch DAG to Redux when it changes
  useEffect(() => {
    if (taskDAG) {
      dispatch(taskDAGActions.addWorkflow({ id: taskDAG.workflowId, dag: taskDAG }));
      dispatch(taskDAGActions.setActiveWorkflow(taskDAG.workflowId));
    }
  }, [taskDAG, dispatch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailPanel(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setDetailPanel]);

  if (!detailPanel) return null;

  const typeLabel =
    detailPanel.kind === "task" ? "Task" : detailPanel.kind === "agent" ? "Agent" : "Issue";

  return (
    <aside className="mc-v2-detail-panel">
      <div className="mc-v2-detail-header">
        <div className="mc-v2-detail-header-left">
          <span className="mc-v2-detail-type">{typeLabel}</span>
        </div>
        {/* Tabs for task detail */}
        {detailPanel.kind === "task" && (
          <div className="mc-detail-tabs">
            <button
              className={`mc-detail-tab ${contentTab === "details" ? "active" : ""}`}
              onClick={() => setContentTab("details")}
            >
              Details
            </button>
            <button
              className={`mc-detail-tab ${contentTab === "grill" ? "active" : ""}`}
              onClick={() => setContentTab("grill")}
            >
              🎯 Grill
            </button>
            <button
              className={`mc-detail-tab ${contentTab === "dag" ? "active" : ""}`}
              onClick={() => setContentTab("dag")}
            >
              📊 DAG
            </button>
          </div>
        )}
        <button
          className="mc-v2-detail-close"
          onClick={() => setDetailPanel(null)}
          title="Close (Esc)"
        >
          <X size={14} />
        </button>
      </div>
      <div className="mc-v2-detail-body">
        {detailPanel.kind === "task" && contentTab === "details" && (
          <MCTaskDetail data={data} taskId={detailPanel.taskId} />
        )}
        {detailPanel.kind === "task" && contentTab === "grill" && (
          <GrillTabPanel />
        )}
        {detailPanel.kind === "task" && contentTab === "dag" && (
          <TaskDAGViewer workflowId={detailPanel.taskId} />
        )}
        {detailPanel.kind === "agent" && (
          <MCAgentDetail data={data} agentId={detailPanel.agentId} />
        )}
        {detailPanel.kind === "issue" && (
          <MCIssueDetail data={data} issueId={detailPanel.issueId} />
        )}
      </div>
    </aside>
  );
}
