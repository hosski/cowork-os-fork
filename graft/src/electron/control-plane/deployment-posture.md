# src/electron/control-plane/deployment-posture.ts

- ControlPlaneDeploymentPostureStatus · type · L4-L4 — type ControlPlaneDeploymentPostureStatus = "ready" | "degraded" | "blocked";
- ControlPlaneDeploymentPostureOptions · interface · L6-L12 — interface ControlPlaneDeploymentPostureOptions
- ControlPlaneDeploymentPosture · interface · L14-L27 — interface ControlPlaneDeploymentPosture
- isLoopbackControlPlaneHost · function · L29-L40 — function isLoopbackControlPlaneHost(host?: string): boolean
- isPublicControlPlaneBind · function · L42-L50 — function isPublicControlPlaneBind(host?: string): boolean
- isStrongControlPlaneToken · function · L52-L58 — function isStrongControlPlaneToken(token?: string): boolean
- evaluateControlPlaneDeploymentPosture · function · L60-L147 — function evaluateControlPlaneDeploymentPosture( options: ControlPlaneDeploymentPostureOptions, ): ControlPlaneDeploymentPosture
