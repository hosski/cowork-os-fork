/**
 * Grill Tab Onboarding Modal
 *
 * First-time user experience: "Create your first task using Grill-Tab-5"
 */

import React, { useState } from 'react';

interface GrillTabOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
  onStartGrillTab: () => void;
}

export const GrillTabOnboarding: React.FC<GrillTabOnboardingProps> = ({
  isOpen,
  onClose,
  onStartGrillTab,
}) => {
  const [step, setStep] = useState<'welcome' | 'guide' | 'start'>('welcome');

  if (!isOpen) return null;

  return (
    <div className="grill-tab-onboarding-overlay">
      <div className="grill-tab-onboarding-modal">
        {step === 'welcome' && (
          <div className="onboarding-step welcome">
            <div className="onboarding-header">
              <h1>🎯 Welcome to CoWork OS</h1>
              <p>Create your first task with guided planning</p>
            </div>

            <div className="onboarding-content">
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h3>Grill-Tab-5</h3>
                <p>Answer 5 questions about your task goal, scope, and verification. We'll build a parallel execution plan.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Auto DAG</h3>
                <p>Your answers become a task DAG with specialized agents (Designer, Coder, Tester, Reviewer).</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Live Execution</h3>
                <p>Watch tasks run in real-time, with cost tracking and error recovery built-in.</p>
              </div>
            </div>

            <div className="onboarding-actions">
              <button className="btn-primary" onClick={() => setStep('guide')}>
                Get Started
              </button>
              <button className="btn-secondary" onClick={onClose}>
                Maybe Later
              </button>
            </div>
          </div>
        )}

        {step === 'guide' && (
          <div className="onboarding-step guide">
            <div className="onboarding-header">
              <h1>📋 How Grill-Tab Works</h1>
            </div>

            <div className="onboarding-content">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>What is your goal?</h3>
                  <p>Describe the main outcome you want to achieve.</p>
                  <div className="example">"Build a REST API for user management"</div>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>What are the deliverables?</h3>
                  <p>List concrete outputs (files, components, endpoints).</p>
                  <div className="example">"POST/GET/PUT/DELETE endpoints, docs, tests"</div>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>What's the scope?</h3>
                  <p>Define boundaries and constraints.</p>
                  <div className="example">"SQLite backend, TypeScript, 3 endpoints"</div>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>How will you verify?</h3>
                  <p>Describe success criteria and QA process.</p>
                  <div className="example">"Unit tests pass, integration tests pass, code review approved"</div>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>What's the architecture?</h3>
                  <p>Tech stack and high-level design.</p>
                  <div className="example">"Express.js + TypeScript, REST, MVC pattern"</div>
                </div>
              </div>
            </div>

            <div className="onboarding-actions">
              <button className="btn-primary" onClick={() => setStep('start')}>
                Ready to Begin
              </button>
              <button className="btn-secondary" onClick={() => setStep('welcome')}>
                Back
              </button>
            </div>
          </div>
        )}

        {step === 'start' && (
          <div className="onboarding-step start">
            <div className="onboarding-header">
              <h1>✨ Let's Create Your Task</h1>
              <p>Click below to open Grill-Tab and start planning</p>
            </div>

            <div className="onboarding-content">
              <div className="ready-card">
                <div className="ready-icon">🚀</div>
                <h2>You're all set!</h2>
                <p>
                  Answer the 5 questions, and CoWork OS will automatically:
                </p>
                <ul>
                  <li>Create a DAG with specialized agents</li>
                  <li>Execute tasks in parallel where possible</li>
                  <li>Track costs and validate quality</li>
                  <li>Show real-time progress</li>
                </ul>
              </div>
            </div>

            <div className="onboarding-actions">
              <button
                className="btn-primary btn-large"
                onClick={() => {
                  onStartGrillTab();
                  onClose();
                }}
              >
                Open Grill-Tab-5
              </button>
              <button className="btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .grill-tab-onboarding-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .grill-tab-onboarding-modal {
          background: white;
          border-radius: 12px;
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .onboarding-step {
          padding: 40px 32px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .onboarding-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .onboarding-header h1 {
          font-size: 28px;
          font-weight: 700;
          color: #222;
          margin: 0 0 8px 0;
        }

        .onboarding-header p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .onboarding-content {
          margin-bottom: 32px;
        }

        .feature-card {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 16px;
          text-align: center;
        }

        .feature-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .feature-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: #222;
          margin: 0 0 8px 0;
        }

        .feature-card p {
          font-size: 13px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .step-item {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }

        .step-number {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content h3 {
          font-size: 14px;
          font-weight: 600;
          color: #222;
          margin: 0 0 4px 0;
        }

        .step-content p {
          font-size: 13px;
          color: #666;
          margin: 0 0 8px 0;
        }

        example {
          display: block;
          background: #f0f2f5;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          color: #667eea;
          font-style: italic;
          border-left: 2px solid #667eea;
        }

        .example {
          display: block;
          background: #f0f2f5;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          color: #667eea;
          font-style: italic;
          border-left: 2px solid #667eea;
        }

        .ready-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 8px;
          padding: 32px;
          text-align: center;
        }

        .ready-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .ready-card h2 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .ready-card p {
          font-size: 14px;
          margin: 0 0 16px 0;
          opacity: 0.95;
        }

        .ready-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
        }

        .ready-card li {
          padding: 8px 0;
          font-size: 13px;
        }

        .ready-card li::before {
          content: '✓ ';
          margin-right: 8px;
          font-weight: 600;
        }

        .onboarding-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .btn-primary,
        .btn-secondary {
          padding: 10px 24px;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .btn-primary.btn-large {
          padding: 14px 40px;
          font-size: 16px;
        }

        .btn-secondary {
          background: #f0f2f5;
          color: #222;
        }

        .btn-secondary:hover {
          background: #e4e7eb;
        }
      `}</style>
    </div>
  );
};

export default GrillTabOnboarding;
