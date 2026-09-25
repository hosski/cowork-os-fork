# src/renderer/components/timeline/SemanticTimeline.tsx

- TimelinePhase · type · L36-L36 — type TimelinePhase = (typeof PHASE_ORDER)[number];
- PhaseChips · function · L38-L51 — function PhaseChips({ activePhases }: { activePhases: Set<TimelinePhase> })
- VerbosityToggleProps · interface · L57-L60 — interface VerbosityToggleProps
- VerbosityToggle · function · L62-L83 — function VerbosityToggle({ verbosity, onChange }: VerbosityToggleProps)
- ShowAllToggleProps · interface · L89-L93 — interface ShowAllToggleProps
- ShowAllToggle · function · L95-L106 — function ShowAllToggle({ showAll, totalCount, onChange }: ShowAllToggleProps)
- estimateTimelineCardChrome · function · L108-L133 — function estimateTimelineCardChrome(event: UiTimelineEvent, isVerbose: boolean): number
- MeasuredTimelineItem · function · L135-L176 — function MeasuredTimelineItem({ eventId, onHeightChange, children, }: { eventId: string; onHeightChange: (eventId: string, height: number) => void; children: ReactNode; })
- measure · function · L151-L157 — measure = ()
- SemanticTimelineProps · interface · L182-L193 — interface SemanticTimelineProps
- SemanticTimeline · function · L195-L409 — function SemanticTimeline({ events, allEvents, initialVerbosity = "summary", hideVerbosityToggle = false, hidePhaseChips = false, }: SemanticTimelineProps)
- updateWidth · function · L266-L268 — updateWidth = ()
- extractMeasurableText · function · L411-L413 — function extractMeasurableText(event: UiTimelineEvent): string
