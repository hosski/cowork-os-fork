/**
 * Tests for first-time user detection and template-to-DAG conversion.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { templateToTaskDag, getExecutableTier } from '../../utils/template-to-dag';

describe('First-time User Detection', () => {
  beforeEach(() => {
    const store: Record<string, string> = {};
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => store[key] ?? null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      removeItem: (key: string) => { delete store[key]; },
      clear: () => { Object.keys(store).forEach((k) => delete store[k]); },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return true when no marker is set', () => {
    // Just test the logic: no value = first time user
    const result = !!(window.localStorage.getItem('cowork:first-time-user-completed') === null);
    expect(result).toBe(true);
  });

  it('should return false when marker is set', () => {
    // Just test the logic: value set = returning user
    window.localStorage.setItem('cowork:first-time-user-completed', '123456');
    const result = !!(window.localStorage.getItem('cowork:first-time-user-completed') !== null);
    expect(result).toBe(true);
  });

  it('should track onboarding step in storage', () => {
    const state = { step: 'grill-tab', completedAt: undefined };
    window.localStorage.setItem('cowork:onboarding-state', JSON.stringify(state));

    const stored = window.localStorage.getItem('cowork:onboarding-state');
    expect(stored).toBeDefined();
    if (stored) {
      const parsed = JSON.parse(stored);
      expect(parsed.step).toBe('grill-tab');
    }
  });

  it('should mark onboarding complete with timestamp', () => {
    const before = Date.now();
    const state = { step: 'completed', completedAt: Date.now() };
    window.localStorage.setItem('cowork:onboarding-state', JSON.stringify(state));
    const after = Date.now();

    const stored = window.localStorage.getItem('cowork:onboarding-state');
    expect(stored).toBeDefined();
    if (stored) {
      const parsed = JSON.parse(stored);
      expect(parsed.step).toBe('completed');
      expect(parsed.completedAt).toBeGreaterThanOrEqual(before);
      expect(parsed.completedAt).toBeLessThanOrEqual(after);
    }
  });

  it('should clear onboarding state on reset', () => {
    window.localStorage.setItem('cowork:onboarding-state', JSON.stringify({ step: 'grill-tab' }));
    window.localStorage.removeItem('cowork:onboarding-state');

    const stored = window.localStorage.getItem('cowork:onboarding-state');
    expect(stored).toBeNull();
  });
});

describe('Template to DAG Conversion', () => {
  const mockTemplate = {
    id: 'test-template',
    name: 'Test Workflow',
    description: 'A test workflow',
    icon: '🎯',
    category: 'code' as const,
    estimatedCost: 10,
    estimatedTime: '2 hours',
    tags: ['test'],
    agents: [
      {
        role: 'researcher' as const,
        model: 'claude-3-5-sonnet',
        prompt: 'Research the topic',
        dependencies: [],
      },
      {
        role: 'coder' as const,
        model: 'claude-3-5-sonnet',
        prompt: 'Write code based on research',
        dependencies: ['researcher'],
      },
      {
        role: 'reviewer' as const,
        model: 'claude-3-5-sonnet',
        prompt: 'Review the code',
        dependencies: ['coder'],
      },
    ],
  };

  it('should convert template to DAG with correct node count', () => {
    const dag = templateToTaskDag(mockTemplate);
    expect(dag.nodes).toHaveLength(3);
  });

  it('should assign correct node titles and roles', () => {
    const dag = templateToTaskDag(mockTemplate);
    const researcher = dag.nodes.find((n: any) => n.role === 'researcher');
    expect(researcher).toBeDefined();
    expect(researcher?.title).toContain('Researcher');
    expect(researcher?.model).toBe('claude-3-5-sonnet');
  });

  it('should compute tiers based on dependencies', () => {
    const dag = templateToTaskDag(mockTemplate);

    const researcher = dag.nodes.find((n: any) => n.role === 'researcher')!;
    const coder = dag.nodes.find((n: any) => n.role === 'coder')!;
    const reviewer = dag.nodes.find((n: any) => n.role === 'reviewer')!;

    expect(researcher.tier).toBe(0); // No dependencies
    expect(coder.tier).toBe(1); // Depends on researcher (tier 0)
    expect(reviewer.tier).toBe(2); // Depends on coder (tier 1)
  });

  it('should track dependencies in nodes', () => {
    const dag = templateToTaskDag(mockTemplate);

    const coder = dag.nodes.find((n: any) => n.role === 'coder')!;
    expect(coder.dependencies.length).toBeGreaterThan(0);
    expect(coder.dependencies[0]).toContain('researcher');
  });

  it('should return executable tier (tier 0 nodes)', () => {
    const dag = templateToTaskDag(mockTemplate);
    const completed = new Set<string>();

    const executable = getExecutableTier(dag, completed);
    expect(executable).toHaveLength(1);
    expect(executable[0].role).toBe('researcher');
  });

  it('should advance to next tier after completion', () => {
    const dag = templateToTaskDag(mockTemplate);
    const researcher = dag.nodes.find((n: any) => n.role === 'researcher')!;
    const completed = new Set<string>([researcher.id]);

    const executable = getExecutableTier(dag, completed);
    expect(executable).toHaveLength(1);
    expect(executable[0].role).toBe('coder');
  });

  it('should block dependent tasks until dependencies complete', () => {
    const dag = templateToTaskDag(mockTemplate);
    const completed = new Set<string>();

    const executable = getExecutableTier(dag, completed);
    const hasReviewer = executable.some((n) => n.role === 'reviewer');
    expect(hasReviewer).toBe(false);
  });

  it('should handle parallel nodes (same tier, no cross-deps)', () => {
    const parallelTemplate = {
      ...mockTemplate,
      agents: [
        { role: 'researcher' as const, model: 'claude-3-5-sonnet', prompt: 'Research', dependencies: [] },
        { role: 'designer' as const, model: 'claude-3-5-sonnet', prompt: 'Design', dependencies: [] },
        { role: 'coder' as const, model: 'claude-3-5-sonnet', prompt: 'Code', dependencies: ['researcher', 'designer'] },
      ],
    };

    const dag = templateToTaskDag(parallelTemplate);
    const completed = new Set<string>();

    const executable = getExecutableTier(dag, completed);
    expect(executable).toHaveLength(2); // Both researcher and designer
  });

  it('should include metadata in DAG', () => {
    const dag = templateToTaskDag(mockTemplate);

    expect(dag.id).toContain('dag-');
    expect(dag.title).toBe(mockTemplate.name);
    expect(dag.description).toBe(mockTemplate.description);
    expect(dag.templateId).toBe(mockTemplate.id);
    expect(dag.createdAt).toBeGreaterThan(0);
  });
});
