import { useState, useCallback, useMemo } from "react";
import type {
  Goal,
  HeartbeatRun,
  HeartbeatRunEvent,
  Issue,
  IssueComment,
  Project,
  Task,
} from "../../shared/types";
import { GrillTabPanel } from "./GrillTabPanel";
import { TaskDAGViewer } from "./TaskDAGViewer";
import { useAgentContext } from "../hooks/useAgentContext";
import type { UiCopyKey } from "../utils/agentMessages";
import { getEmojiIcon } from "../utils/emoji-icon-map";

interface Props {
  rightTab: "feed" | "task" | "ops" | "grill" | "dag";
  setRightTab: (tab: "feed" | "task" | "ops" | "grill" | "dag") => void;
  onClose: () => void;
  selectedTask: Task | null;
  setSelectedTaskId: (id: string | null) => void;
  activities: any[];
  events: any[];
  agents: any[];
  goals: Goal[];
  projects: Project[];
  issues: Issue[];
  issueComments: IssueComment[];
  issueRuns: HeartbeatRun[];
  runEvents: HeartbeatRunEvent[];
  selectedIssueId: string | null;
  setSelectedIssueId: (id: string | null) => void;
  selectedIssueRunId: string | null;
  setSelectedIssueRunId: (id: string | null) => void;
  selectedPlannerRunId: string | null;
  setSelectedPlannerRunId: (id: string | null) => void;
  plannerRuns: any[];
  commandCenterSummary: any;
  selectedCompanyId: string | null;
  selectedWorkspaceId: string | null;
  feedFilter: "all" | "tasks" | "comments" | "status";
  setFeedFilter: (filter: "all" | "tasks" | "comments" | "status") => void;
  selectedAgent: string | null;
  setSelectedAgent: (id: string | null) => void;
  commentText: string;
  setCommentText: (text: string) => void;
  postingComment: boolean;
  onPostComment: () => void;
  formatRelativeTime: (timestamp?: number) => string;
  getAgent: (agentId?: string) => any;
}

export function MissionControlRightPanel({
  rightTab,
  setRightTab,
  onClose,
  selectedTask,
  setSelectedTaskId,
  activities,
  events,
  agents,
  goals,
  projects,
  issues,
  issueComments,
  issueRuns,
  runEvents,
  selectedIssueId,
  setSelectedIssueId,
  selectedIssueRunId,
  setSelectedIssueRunId,
  selectedPlannerRunId,
  setSelectedPlannerRunId,
  plannerRuns,
  commandCenterSummary,
  selectedCompanyId,
  selectedWorkspaceId,
  feedFilter,
  setFeedFilter,
  selectedAgent,
  setSelectedAgent,
  commentText,
  setCommentText,
  postingComment,
  onPostComment,
  formatRelativeTime,
  getAgent,
}: Props) {
  const agentContext = useAgentContext();

  const filterLabels: Record<typeof feedFilter, UiCopyKey> = {
    all: "mcFilterAll",
    tasks: "mcFilterTasks",
    comments: "mcFilterComments",
    status: "mcFilterStatus",
  };

  const feedItems = useMemo(() => {
    const activityItems = activities.map((activity) => {
      const mappedType =
        activity.activityType === "comment" || activity.activityType === "mention"
          ? "comments"
          : activity.activityType.startsWith("task_") || activity.activityType === "agent_assigned"
            ? "tasks"
            : "status";
      const agentName =
        activity.actorType === "user"
          ? agentContext.getUiCopy("activityActorUser")
          : getAgent(activity.agentRoleId)?.displayName ||
            agentContext.getUiCopy("activityActorSystem");
      const content = activity.description
        ? `${activity.title} — ${activity.description}`
        : activity.title;
      return {
        id: activity.id,
        type: mappedType as "comments" | "tasks" | "status",
        agentId: activity.agentRoleId,
        agentName,
        content,
        taskId: activity.taskId,
        timestamp: activity.createdAt,
      };
    });

    const heartbeatItems = events
      .filter((event) => {
        if (event.type === "completed") return false;
        if (event.type === "no_work" && event.result?.silent) return false;
        return true;
      })
      .map((event) => ({
        id: `event-${event.timestamp}`,
        type: "status" as const,
        agentId: event.agentRoleId,
        agentName: event.agentName,
        content:
          event.type === "work_found"
            ? agentContext.getUiCopy("mcHeartbeatFound", {
                mentions: event.result?.pendingMentions || 0,
                tasks: event.result?.assignedTasks || 0,
              })
            : event.type,
        timestamp: event.timestamp,
        taskId: undefined as string | undefined,
      }));

    return [...heartbeatItems, ...activityItems]
      .filter((item) => {
        if (feedFilter !== "all" && item.type !== feedFilter) return false;
        if (selectedAgent) {
          if (!item.agentId) return false;
          if (item.agentId !== selectedAgent) return false;
        }
        return true;
      })
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 50);
  }, [activities, events, feedFilter, selectedAgent, getAgent, agentContext]);

  const selectedIssue = useMemo(
    () => issues.find((issue) => issue.id === selectedIssueId) || null,
    [issues, selectedIssueId],
  );

  const selectedIssueRun = useMemo(
    () => issueRuns.find((run) => run.id === selectedIssueRunId) || null,
    [issueRuns, selectedIssueRunId],
  );

  const selectedPlannerRun = useMemo(
    () => plannerRuns.find((run) => run.id === selectedPlannerRunId) || null,
    [plannerRuns, selectedPlannerRunId],
  );

  const plannerRunIssueIds = useMemo(() => {
    const metadata = selectedPlannerRun?.metadata as
      | {
          createdIssueIds?: string[];
          updatedIssueIds?: string[];
        }
      | undefined;
    return new Set([...(metadata?.createdIssueIds || []), ...(metadata?.updatedIssueIds || [])]);
  }, [selectedPlannerRun]);

  const plannerRunIssues = useMemo(
    () => issues.filter((issue) => plannerRunIssueIds.has(issue.id)),
    [issues, plannerRunIssueIds],
  );

  const commandCenterOutputs = commandCenterSummary?.outputs || [];
  const commandCenterReviewQueue = commandCenterSummary?.reviewQueue || [];
  const commandCenterOperators = commandCenterSummary?.operators || [];
  const commandCenterExecutionMap = commandCenterSummary?.executionMap || [];

  return (
    <div className="mc-right-panel-overlay">
      <div className="mc-right-panel-modal">
        {/* Header with tabs */}
        <div className="mc-panel-header mc-feed-header">
          <div className="mc-tabs">
            <button
              className={`mc-tab-btn ${rightTab === "feed" ? "active" : ""}`}
              onClick={() => setRightTab("feed")}
            >
              {agentContext.getUiCopy("mcLiveFeedTitle")}
            </button>
            <button
              className={`mc-tab-btn ${rightTab === "task" ? "active" : ""}`}
              onClick={() => setRightTab("task")}
            >
              {agentContext.getUiCopy("mcTaskTab")}
            </button>
            <button
              className={`mc-tab-btn ${rightTab === "ops" ? "active" : ""}`}
              onClick={() => setRightTab("ops")}
            >
              Ops
            </button>
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
          {rightTab === "feed" ? (
            <>
              <div className="mc-feed-filters">
                {(["all", "tasks", "comments", "status"] as const).map((filter) => (
                  <button
                    key={filter}
                    className={`mc-filter-btn ${feedFilter === filter ? "active" : ""}`}
                    onClick={() => setFeedFilter(filter)}
                  >
                    {agentContext.getUiCopy(filterLabels[filter])}
                  </button>
                ))}
              </div>
              <div className="mc-feed-agents">
                <span className="mc-feed-agents-label">
                  {agentContext.getUiCopy("mcAllAgentsLabel")}
                </span>
                <div className="mc-feed-agent-chips">
                  {agents
                    .filter((a) => a.isActive)
                    .map((agent) => (
                      <button
                        key={agent.id}
                        className={`mc-agent-chip ${selectedAgent === agent.id ? "active" : ""}`}
                        style={{ borderColor: agent.color }}
                        onClick={() =>
                          setSelectedAgent(selectedAgent === agent.id ? null : agent.id)
                        }
                      >
                        {(() => {
                          const Icon = getEmojiIcon(agent.icon || "🤖");
                          return <Icon size={14} strokeWidth={2} />;
                        })()}{" "}
                        {agent.displayName.split(" ")[0]}
                      </button>
                    ))}
                </div>
              </div>
              <div className="mc-feed-list">
                {feedItems.length === 0 ? (
                  <div className="mc-feed-empty">{agentContext.getUiCopy("mcFeedEmpty")}</div>
                ) : (
                  feedItems.map((item) => {
                    const agent = getAgent(item.agentId);
                    return (
                      <div key={item.id} className="mc-feed-item">
                        <div className="mc-feed-item-header">
                          {agent && (
                            <span className="mc-feed-agent" style={{ color: agent.color }}>
                              {(() => {
                                const Icon = getEmojiIcon(agent.icon || "🤖");
                                return (
                                  <Icon
                                    size={14}
                                    strokeWidth={2}
                                    style={{
                                      display: "inline",
                                      verticalAlign: "middle",
                                      marginRight: 4,
                                    }}
                                  />
                                );
                              })()}
                              {agent.displayName}
                            </span>
                          )}
                          {!agent && item.agentName && (
                            <span className="mc-feed-agent system">{item.agentName}</span>
                          )}
                          <span className="mc-feed-time">{formatRelativeTime(item.timestamp)}</span>
                        </div>
                        <div className="mc-feed-content">{item.content}</div>
                      </div>
                    );
                  })
                )}
              </div>
            </>
          ) : rightTab === "task" ? (
            selectedTask ? (
              <div className="mc-task-detail">
                <div className="mc-task-detail-header">
                  <h3>{selectedTask.title}</h3>
                </div>
                <div className="mc-task-detail-body">
                  {selectedTask.description && (
                    <p className="mc-task-description">{selectedTask.description}</p>
                  )}
                  <div className="mc-comment-form">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Add a comment..."
                    />
                    <button
                      onClick={onPostComment}
                      disabled={postingComment || !commentText.trim()}
                    >
                      {postingComment ? "Posting..." : "Post"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mc-feed-empty">{agentContext.getUiCopy("mcTaskEmpty")}</div>
            )
          ) : rightTab === "ops" ? (
            <div className="mc-ops-panel">
              <div className="mc-feed-empty">Operations panel - TODO</div>
            </div>
          ) : rightTab === "grill" ? (
            <GrillTabPanel />
          ) : rightTab === "dag" ? (
            <TaskDAGViewer />
          ) : null}
        </div>
      </div>
    </div>
  );
}
