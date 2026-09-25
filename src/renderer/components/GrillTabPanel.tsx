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
  intent?: string;
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

  useEffect(() => {
    if (!currentQuestion && intent && ladder.length === 0) {
      loadNextQuestion();
    }
  }, [intent]);

  const loadNextQuestion = async () => {
    dispatch(grillTabActions.setLoading(true));
    try {
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
        generateBrief();
      }
    } catch (error) {
      dispatch(grillTabActions.setError((error as Error).message));
    } finally {
      dispatch(grillTabActions.setLoading(false));
    }
  };

  const generateBrief = async () => {
    dispatch(grillTabActions.setLoading(true));
    try {
      const briefText = ladder.map((rung: any) => `${rung.question}\n${rung.answer}`).join('\n\n');
      dispatch(grillTabActions.setBrief(briefText));
      dispatch(grillTabActions.setDone(true));
      if (onBriefGenerated) {
        onBriefGenerated(briefText);
      }
    } catch (error) {
      dispatch(grillTabActions.setError((error as Error).message));
    } finally {
      dispatch(grillTabActions.setLoading(false));
    }
  };

  const handleSubmitAnswer = async () => {
    if (!userAnswer.trim()) return;
    dispatch(
      grillTabActions.addRung({
        question: currentQuestion,
        answer: userAnswer,
        category: selectedCategory,
      })
    );
    await loadNextQuestion();
  };

  const progressPercent = ladder.length > 0 ? Math.min((ladder.length / 5) * 100, 100) : 0;

  return (
    <div className="grill-tab-panel">
      {!isDone ? (
        <>
          {/* Progress */}
          <div className="grill-progress">
            <div className="grill-progress-label">
              Question {ladder.length + 1} of 5
            </div>
            <div className="grill-progress-bar">
              <div
                className="grill-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Current Question */}
          {currentQuestion && (
            <div className="grill-question-section">
              <h3 className="grill-question-text">{currentQuestion}</h3>

              {currentRecommended && (
                <div className="grill-recommended">
                  <div className="grill-recommended-label">Suggested:</div>
                  <div className="grill-recommended-text">{currentRecommended}</div>
                </div>
              )}

              {/* Category selector */}
              <select
                className="grill-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
              >
                <option value="goal">📍 Goal</option>
                <option value="deliverable">📦 Deliverable</option>
                <option value="scope">🎯 Scope</option>
                <option value="verification">✓ Verification</option>
                <option value="architecture">🏗️ Architecture</option>
              </select>

              {/* Answer textarea */}
              <textarea
                className="grill-answer-textarea"
                placeholder="Enter your answer..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.ctrlKey && e.key === 'Enter') handleSubmitAnswer();
                }}
              />

              {/* Action buttons */}
              <div className="grill-actions">
                <button
                  className="grill-btn grill-btn-primary"
                  onClick={handleSubmitAnswer}
                  disabled={!userAnswer.trim() || loading}
                >
                  {loading ? 'Loading...' : 'Next Question'}
                </button>
                <button
                  className="grill-btn grill-btn-secondary"
                  onClick={() => generateBrief()}
                  disabled={ladder.length === 0 || loading}
                >
                  Generate Brief
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Generated Brief */}
          <div className="grill-brief-section">
            <h3 className="grill-brief-title">Task Brief</h3>
            <div className="grill-brief-text">{brief}</div>
            <button
              className="grill-btn grill-btn-primary"
              onClick={() => {
                dispatch(grillTabActions.reset());
                loadNextQuestion();
              }}
            >
              Start Over
            </button>
          </div>

          {/* Ladder (answers so far) */}
          <div className="grill-ladder">
            <h4 className="grill-ladder-title">Ladder</h4>
            <div className="grill-ladder-rungs">
              {ladder.map((rung: any, idx: number) => (
                <div key={idx} className="grill-rung">
                  <div className="grill-rung-question">{idx + 1}. {rung.question}</div>
                  <div className="grill-rung-answer">{rung.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
