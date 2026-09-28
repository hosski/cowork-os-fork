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
              <h1><span className="icon">🎯</span>Welcome to CoWork OS</h1>
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
          background: #ffffff;
          display: flex;
          align-items: stretch;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .grill-tab-onboarding-modal {
          background: #ffffff;
          border-radius: 0;
          max-width: 100%;
          width: 100%;
          max-height: 100vh;
          overflow-y: auto;
          box-shadow: none;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 40px;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .onboarding-step {
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
          width: 100%;
          max-width: 900px;
        }

        .onboarding-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .onboarding-header h1 {
          font-size: 48px;
          font-weight: 700;
          color: #000;
          margin: 0 0 20px 0;
          letter-spacing: -0.8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .onboarding-header h1 .icon {
          font-size: 48px;
          display: inline-block;
        }

        .onboarding-header p {
          font-size: 18px;
          color: #666;
          margin: 0;
          font-weight: 400;
        }

        .onboarding-content {
          margin-bottom: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .feature-card {
          background: #f5f5f7;
          border: none;
          border-radius: 16px;
          padding: 48px 40px;
          margin-bottom: 0;
          text-align: center;
          transition: all 0.2s ease;
        }

        .feature-card:hover {
          background: #efefef;
          transform: none;
        }

        .feature-icon {
          font-size: 56px;
          margin-bottom: 20px;
          display: inline-block;
        }

        .feature-card h3 {
          font-size: 24px;
          font-weight: 600;
          color: #000;
          margin: 0 0 12px 0;
          letter-spacing: -0.3px;
        }

        .feature-card p {
          font-size: 16px;
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        .step-item {
          display: flex;
          gap: 20px;
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .step-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .step-number {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
          font-size: 16px;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .step-content h3 {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 2px 0 6px 0;
        }

        .step-content p {
          font-size: 13px;
          color: #666;
          margin: 0 0 10px 0;
          line-height: 1.5;
        }

        .example {
          display: block;
          background: rgba(102, 126, 234, 0.08);
          padding: 10px 14px;
          border-radius: 6px;
          font-size: 12px;
          color: #667eea;
          font-family: 'SF Mono', Monaco, 'Inconsolata', monospace;
          border-left: 3px solid #667eea;
          margin: 0;
        }

        .ready-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 14px;
          padding: 40px 32px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
        }

        .ready-icon {
          font-size: 56px;
          margin-bottom: 20px;
          display: inline-block;
        }

        .ready-card h2 {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 12px 0;
          letter-spacing: -0.3px;
        }

        .ready-card p {
          font-size: 15px;
          margin: 0 0 20px 0;
          opacity: 0.95;
          line-height: 1.6;
        }

        .ready-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
          display: inline-block;
        }

        .ready-card li {
          padding: 10px 0;
          font-size: 14px;
          font-weight: 500;
        }

        .ready-card li::before {
          content: '✓ ';
          margin-right: 10px;
          font-weight: 700;
          opacity: 1;
        }

        .onboarding-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 60px;
        }

        .btn-primary,
        .btn-secondary {
          padding: 11px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .btn-primary.btn-large {
          padding: 14px 44px;
          font-size: 15px;
        }

        .btn-secondary {
          background: rgba(0, 0, 0, 0.06);
          color: #1a1a1a;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .btn-secondary:hover {
          background: rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.12);
        }

        .btn-secondary:active {
          background: rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
};

export default GrillTabOnboarding;
