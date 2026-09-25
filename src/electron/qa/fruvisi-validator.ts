/**
 * Fruvisi QA Plugin for CoWork OS
 * 
 * Validates task execution against success criteria.
 * - Post-tier QA checks
 * - Pass/Fail decision
 * - Retry recommendations
 */

export interface FruvisiQARequest {
  taskId: string;
  taskTitle: string;
  successCriteria: string;
  output: Record<string, any>;
  context?: Record<string, any>;
}

export interface FruvisiQAResult {
  pass: boolean;
  confidence: number; // 0-1
  rationale: string;
  issues?: string[];
  recommendations?: string[];
}

/**
 * Validate task output against success criteria.
 * Can be local (heuristic) or remote (via Fruvisi SaaS).
 */
export async function validateTaskOutput(request: FruvisiQARequest): Promise<FruvisiQAResult> {
  // Try remote Fruvisi first (if endpoint configured)
  const fruvisiUrl = process.env.FRUVISI_URL;
  if (fruvisiUrl) {
    return validateRemote(request, fruvisiUrl);
  }

  // Fallback: local heuristic validation
  return validateLocal(request);
}

/**
 * Local heuristic QA validation.
 * Check for:
 * - Non-empty output
 * - Key fields present
 * - No error indicators
 */
function validateLocal(request: FruvisiQARequest): FruvisiQAResult {
  const { output, successCriteria } = request;

  // Empty output = fail
  if (!output || Object.keys(output).length === 0) {
    return {
      pass: false,
      confidence: 0.95,
      rationale: 'Task produced no output',
      issues: ['Empty output'],
      recommendations: ['Increase max_turns', 'Check task prompt for clarity'],
    };
  }

  // Check for error markers
  const outputStr = JSON.stringify(output).toLowerCase();
  const errorMarkers = [
    'error',
    'failed',
    'exception',
    'cannot',
    'not found',
    'timeout',
    'permission denied',
  ];
  const hasErrors = errorMarkers.some((marker) => outputStr.includes(marker));

  if (hasErrors) {
    return {
      pass: false,
      confidence: 0.8,
      rationale: 'Output contains error indicators',
      issues: ['Error markers detected in output'],
      recommendations: ['Review error logs', 'Retry with different approach'],
    };
  }

  // Heuristic: if output has expected shape, assume pass
  const hasContent = Object.values(output).some(
    (v) => v !== null && v !== undefined && v !== '',
  );

  return {
    pass: hasContent,
    confidence: 0.6,
    rationale: hasContent
      ? 'Output contains expected data (local heuristic validation)'
      : 'Output is empty or invalid',
    issues: hasContent ? undefined : ['No meaningful output'],
    recommendations: hasContent
      ? undefined
      : [
          'Check task prompt',
          'Increase task duration',
          'Add more context to inputs',
        ],
  };
}

/**
 * Remote QA validation via Fruvisi.
 */
async function validateRemote(
  request: FruvisiQARequest,
  fruvisiUrl: string,
): Promise<FruvisiQAResult> {
  try {
    const response = await fetch(`${fruvisiUrl}/qa/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      console.warn(`Fruvisi QA returned ${response.status}; falling back to local`);
      return validateLocal(request);
    }

    return (await response.json()) as FruvisiQAResult;
  } catch (err) {
    console.warn(`Fruvisi QA failed: ${err}; falling back to local`);
    return validateLocal(request);
  }
}

/**
 * Decide whether to retry a failed task.
 */
export function shouldRetry(
  qa: FruvisiQAResult,
  retryCount: number,
  maxRetries: number,
): boolean {
  if (retryCount >= maxRetries) return false;
  if (qa.pass) return false;

  // Retry if confidence is low (uncertain failure)
  if (qa.confidence < 0.7) return true;

  // Don't retry if high confidence that task output is genuinely broken
  return qa.confidence < 0.85;
}
