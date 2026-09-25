# src/electron/agent/timeline-emitter.ts

- EmitFn · type · L9-L9 — type EmitFn = (type: EventType, payload: Record<string, unknown>) => void;
- StepDescriptor · interface · L11-L15 — interface StepDescriptor
- GroupOptions · interface · L17-L25 — interface GroupOptions
- StepOptions · interface · L27-L34 — interface StepOptions
- TimelineEmitter · class · L36-L209 — class TimelineEmitter
- constructor · method · L37-L40 — constructor( private readonly taskId: string, private readonly emit: EmitFn, )
- startGroup · method · L42-L58 — startGroup(stage: TimelineStage, options: GroupOptions = {}): void
- finishGroup · method · L60-L73 — finishGroup(stage: TimelineStage, options: GroupOptions = {}): void
- startGroupLane · method · L75-L95 — startGroupLane(groupId: string, options: GroupOptions = {}): void
- finishGroupLane · method · L97-L114 — finishGroupLane(groupId: string, options: GroupOptions = {}): void
- startStep · method · L116-L127 — startStep(step: StepDescriptor, options: StepOptions = {}): void
- updateStep · method · L129-L140 — updateStep(step: StepDescriptor, options: StepOptions = {}): void
- finishStep · method · L142-L153 — finishStep(step: StepDescriptor, options: StepOptions = {}): void
- failStep · method · L155-L170 — failStep(step: StepDescriptor, reason: string, options: StepOptions = {}): void
- attachEvidence · method · L172-L184 — attachEvidence( evidenceRefs: EvidenceRef[], options: { message?: string; stepId?: string } = {}, ): void
- emitArtifact · method · L186-L199 — emitArtifact( path: string, options: { mimeType?: string; label?: string; stepId?: string } = {}, ): void
- emitCommandOutput · method · L201-L208 — emitCommandOutput(payload: Record<string, unknown>): void
- createTimelineEmitter · function · L211-L213 — function createTimelineEmitter(taskId: string, emit: EmitFn): TimelineEmitter
