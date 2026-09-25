# src/electron/triggers/types.ts

- TriggerSource · type · L10-L18 — type TriggerSource = | "channel_message" | "email" | "mailbox_event" | "webhook" | "connector_event" | "github_event" | "file_change" | "cron_event";
- ConditionOperator · type · L20-L29 — type ConditionOperator = | "equals" | "not_equals" | "contains" | "not_contains" | "matches" | "starts_with" | "ends_with" | "gt" | "lt";
- TriggerCondition · interface · L31-L38 — interface TriggerCondition
- TriggerActionType · type · L40-L40 — type TriggerActionType = "create_task" | "send_message" | "wake_agent";
- TriggerAction · interface · L42-L66 — interface TriggerAction
- EventTrigger · interface · L68-L85 — interface EventTrigger
- TriggerEvent · interface · L87-L91 — interface TriggerEvent
- TriggerHistoryEntry · interface · L93-L101 — interface TriggerHistoryEntry
- EventTriggerServiceDeps · interface · L103-L129 — interface EventTriggerServiceDeps
