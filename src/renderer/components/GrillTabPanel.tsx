/**
 * GrillTabPanel: Interactive preflight interrogation UI component
 *
 * Integrates Grill-Tab skill with Redux store for CoWork's composer/sidebar.
 * Displays one question at a time, collects answers, synthesizes brief.
 */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { grillTabActions } from '../store';
import type { RootState, AppDispatch } from '../store';

interface Props {
  intent?: string; // User's task description (optional for standalone use)
  onBriefGenerated?: (brief: string) => void;
}

export const GrillTabPanel: React.FC<Props> = ({ intent = 'Start a new task breakdown', onBriefGenerated }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { ladder, currentQuestion, currentRecommended, brief, isDone, progress, loading } =
    useSelector((state: RootState) => state.grillTab);

  const [userAnswer, setUserAnswer] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    'goal' | 'deliverable' | 'scope' | 'verification' | 'architecture'
  >('goal');

  // Load first question on mount
  useEffect(() => {
    if (!currentQuestion && intent && ladder.length === 0) {
      loadNextQuestion();
    }
  }, [intent]);

  const loadNextQuestion = async () => {
    dispatch(grillTabActions.setLoading(true));
    try {
      // Simulate interrogate call
      const mockQuestions: Record<number, { q: string; r: string; cat: any }> = {
        0: {
          q: 'What is the primary goal of this task?',
          r: 'Achieve the desired outcome',
          cat: 'goal',
        },
        1: {
          q: 'What is the main deliverable?',
          r: 'A working implementation',
          cat: 'deliverable',
        },
        2: {
          q: 'What are the scope boundaries?',
          r: 'Clear timeline and budget',
          cat: 'scope',
        },
        3: {
          q: 'How will success be verified?',
          r: 'Meets all acceptance criteria',
          cat: 'verification',
        },
        4: {
          q: 'What is the technical architecture?',
          r: 'Scalable and maintainable',
          cat: 'architecture',
        },
      };

      const nextIdx = ladder.length;
      if (nextIdx < 5) {
        const { q, r, cat } = mockQuestions[nextIdx];
        dispatch(grillTabActions.setCurrentQuestion({ question: q, recommended: r }));
        setSelectedCategory(cat);
        setUserAnswer('');
      } else {
        // Generate brief
        generateBrief();
      }
    } catch (error) {
      dispatch(grillTabActions.setError((error as Error).message));
    } finally {
      dispatch(grillTabActions.setLoading(false));
    }
  };

  const handleAnswer = async () => {
    if (!userAnswer.trim() || !currentQuestion) return;

    dispatch(
      grillTabActions.addRung({
        question: currentQuestion,
        answer: userAnswer,
        category: selectedCategory,
        recommended: currentRecommended || '',
      })
    );

    setUserAnswer('');
    await loadNextQuestion();
  };

  const generateBrief = () => {
    const briefText = `## Goal
${ladder.find((r) => r.category === 'goal')?.answer || 'Not specified'}

## Deliverable
${ladder.find((r) => r.category === 'deliverable')?.answer || 'Not specified'}

## Scope
${ladder.find((r) => r.category === 'scope')?.answer || 'Not specified'}

## Verification
${ladder.find((r) => r.category === 'verification')?.answer || 'Not specified'}

## Architecture
${ladder.find((r) => r.category === 'architecture')?.answer || 'Not specified'}`;

    dispatch(grillTabActions.setBrief(briefText));
    onBriefGenerated?.(briefText);
  };

  const reset = () => {
    dispatch(grillTabActions.resetLadder());
    setUserAnswer('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🔍 Grill-Tab: Preflight Planning</h2>

      {isDone ? (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>✅ Brief Ready</h3>
          <pre style={styles.brief}>{brief}</pre>
          <button onClick={reset} style={styles.button}>
            Start Over
          </button>
        </div>
      ) : (
        <>
          {progress && (
            <div style={styles.progress}>
              Question {progress.current} of ~{progress.estimated_max}
              <div
                style={{
                  ...styles.progressBar,
                  width: `${(progress.current / progress.estimated_max) * 100}%`,
                }}
              />
            </div>
          )}

          {currentQuestion && (
            <div style={styles.section}>
              <h3 style={styles.question}>{currentQuestion}</h3>
              <p style={styles.recommended}>
                <strong>Recommended:</strong> {currentRecommended}
              </p>

              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value as 'goal' | 'deliverable' | 'scope' | 'verification' | 'architecture'
                  )
                }
                style={styles.select}
              >
                <option value="goal">Goal</option>
                <option value="deliverable">Deliverable</option>
                <option value="scope">Scope</option>
                <option value="verification">Verification</option>
                <option value="architecture">Architecture</option>
              </select>

              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Your answer..."
                style={styles.textarea}
              />

              <button
                onClick={handleAnswer}
                disabled={loading || !userAnswer.trim()}
                style={{
                  ...styles.button,
                  opacity: loading || !userAnswer.trim() ? 0.5 : 1,
                }}
              >
                {loading ? 'Loading...' : 'Next →'}
              </button>

              <button onClick={reset} style={{ ...styles.button, ...styles.buttonSecondary }}>
                Reset
              </button>
            </div>
          )}

          {ladder.length > 0 && (
            <div style={styles.ladder}>
              <h4>Settled Decisions</h4>
              {ladder.map((rung, idx) => (
                <div key={idx} style={styles.rung}>
                  <strong>[{rung.category.toUpperCase()}]</strong> {rung.answer}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    backgroundColor: 'var(--color-bg-secondary, #f5f5f5)',
    borderRadius: '6px',
    height: '100%',
    overflow: 'auto',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  } as React.CSSProperties,
  title: {
    marginTop: 0,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  } as React.CSSProperties,
  section: {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
  } as React.CSSProperties,
  sectionTitle: {
    marginTop: 0,
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
  } as React.CSSProperties,
  progress: {
    marginBottom: '12px',
  } as React.CSSProperties,
  progressBar: {
    height: '4px',
    backgroundColor: '#4CAF50',
    borderRadius: '2px',
    marginTop: '4px',
    transition: 'width 0.3s',
  } as React.CSSProperties,
  question: {
    marginTop: 0,
    marginBottom: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#222',
  } as React.CSSProperties,
  recommended: {
    margin: '8px 0',
    padding: '8px 12px',
    backgroundColor: '#e8f5e9',
    borderLeft: '3px solid #4CAF50',
    fontSize: '13px',
    color: '#333',
  } as React.CSSProperties,
  select: {
    display: 'block',
    width: '100%',
    marginTop: '8px',
    marginBottom: '8px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  } as React.CSSProperties,
  textarea: {
    display: 'block',
    width: '100%',
    minHeight: '80px',
    marginTop: '8px',
    marginBottom: '8px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    boxSizing: 'border-box',
  } as React.CSSProperties,
  button: {
    padding: '8px 16px',
    marginRight: '8px',
    marginTop: '8px',
    backgroundColor: '#2196F3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  } as React.CSSProperties,
  buttonSecondary: {
    backgroundColor: '#757575',
  } as React.CSSProperties,
  brief: {
    backgroundColor: '#f5f5f5',
    padding: '12px',
    borderRadius: '4px',
    overflow: 'auto',
    maxHeight: '300px',
    fontSize: '13px',
    lineHeight: '1.5',
  } as React.CSSProperties,
  ladder: {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '13px',
  } as React.CSSProperties,
  rung: {
    padding: '6px 0',
    borderBottom: '1px solid #eee',
  } as React.CSSProperties,
};
