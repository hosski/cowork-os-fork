/**
 * First-time user detection and onboarding state management.
 * Tracks whether user has completed initial setup flow.
 */

const FIRST_TIME_USER_KEY = 'cowork:first-time-user-completed';
const ONBOARDING_STATE_KEY = 'cowork:onboarding-state';

export type OnboardingStep = 'welcome' | 'grill-tab' | 'template-selection' | 'completed';

export interface OnboardingState {
  step: OnboardingStep;
  completedAt?: number;
  selectedTemplateId?: string;
}

/**
 * Check if this is a first-time user (no tasks created, no onboarding completed).
 */
export function isFirstTimeUser(): boolean {
  try {
    const completed = window.localStorage.getItem(FIRST_TIME_USER_KEY);
    return !completed;
  } catch {
    return true; // Assume first-time on storage error
  }
}

/**
 * Mark onboarding as completed.
 */
export function markOnboardingComplete(): void {
  try {
    const state: OnboardingState = {
      step: 'completed',
      completedAt: Date.now(),
    };
    window.localStorage.setItem(ONBOARDING_STATE_KEY, JSON.stringify(state));
    window.localStorage.setItem(FIRST_TIME_USER_KEY, String(Date.now()));
  } catch {
    // Silently fail if localStorage unavailable
  }
}

/**
 * Get current onboarding state.
 */
export function getOnboardingState(): OnboardingState {
  try {
    const raw = window.localStorage.getItem(ONBOARDING_STATE_KEY);
    if (!raw) {
      return { step: 'welcome' };
    }
    return JSON.parse(raw) as OnboardingState;
  } catch {
    return { step: 'welcome' };
  }
}

/**
 * Update onboarding step.
 */
export function setOnboardingStep(step: OnboardingStep, templateId?: string): void {
  try {
    const state: OnboardingState = {
      step,
      selectedTemplateId: templateId,
      completedAt: step === 'completed' ? Date.now() : undefined,
    };
    window.localStorage.setItem(ONBOARDING_STATE_KEY, JSON.stringify(state));
  } catch {
    // Silently fail
  }
}

/**
 * Clear onboarding state.
 */
export function clearOnboardingState(): void {
  try {
    window.localStorage.removeItem(ONBOARDING_STATE_KEY);
  } catch {
    // Silently fail
  }
}

/**
 * Reset first-time user flag (for testing or reset).
 */
export function resetFirstTimeUser(): void {
  try {
    window.localStorage.removeItem(FIRST_TIME_USER_KEY);
    clearOnboardingState();
  } catch {
    // Silently fail
  }
}
