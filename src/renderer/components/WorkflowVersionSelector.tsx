/**
 * Workflow Version Selector Modal
 *
 * Allows users to select specific workflow template versions
 * Shows version history with changelog, breaking change warnings
 */

import React, { useState, useMemo } from 'react';

export interface WorkflowVersionInfo {
  version: string;
  name: string;
  createdAt: number;
  breaking: boolean;
  changeLog: string;
}

interface WorkflowVersionSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  versions: WorkflowVersionInfo[];
  currentVersion: string;
  templateName: string;
  onSelectVersion: (version: string) => void;
  onRollback?: (version: string, reason: string) => void;
}

export const WorkflowVersionSelector: React.FC<WorkflowVersionSelectorProps> = ({
  isOpen,
  onClose,
  versions,
  currentVersion,
  templateName,
  onSelectVersion,
  onRollback,
}) => {
  const [selectedVersion, setSelectedVersion] = useState<string>(currentVersion);
  const [rollbackReason, setRollbackReason] = useState('');
  const [showRollbackForm, setShowRollbackForm] = useState(false);

  const sortedVersions = useMemo(
    () => [...versions].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [versions]
  );

  const selectedVersionInfo = sortedVersions.find((v) => v.version === selectedVersion);
  const isCurrent = selectedVersion === currentVersion;

  const handleSelect = () => {
    onSelectVersion(selectedVersion);
    onClose();
  };

  const handleRollback = () => {
    if (!rollbackReason.trim()) {
      alert('Please provide a reason for rollback');
      return;
    }
    onRollback?.(selectedVersion, rollbackReason);
    setRollbackReason('');
    setShowRollbackForm(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="version-selector-overlay">
      <div className="version-selector-modal">
        {/* Header */}
        <div className="version-selector-header">
          <h2>{templateName}</h2>
          <p className="version-selector-subtitle">Select or rollback to a template version</p>
          <button className="version-selector-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Current Version Info */}
        <div className="version-selector-current">
          <div className="version-selector-badge">Current: v{currentVersion}</div>
          <p className="version-selector-info">
            You are currently using version {currentVersion}. Select another version below to load or rollback.
          </p>
        </div>

        {/* Version List */}
        <div className="version-selector-list">
          <h3>Version History</h3>
          {sortedVersions.length === 0 ? (
            <p className="version-selector-empty">No versions available</p>
          ) : (
            <div className="version-selector-items">
              {sortedVersions.map((versionInfo) => {
                const isSelected = selectedVersion === versionInfo.version;
                const isCur = versionInfo.version === currentVersion;
                const date = new Date(versionInfo.createdAt).toLocaleDateString();

                return (
                  <div
                    key={versionInfo.version}
                    className={`version-selector-item ${isSelected ? 'selected' : ''} ${isCur ? 'current' : ''}`}
                    onClick={() => {
                      setSelectedVersion(versionInfo.version);
                      setShowRollbackForm(false);
                    }}
                  >
                    <div className="version-selector-item-header">
                      <span className="version-selector-version">v{versionInfo.version}</span>
                      {versionInfo.breaking && <span className="version-selector-breaking">BREAKING</span>}
                      {isCur && <span className="version-selector-tag">Current</span>}
                      {isSelected && <span className="version-selector-tag-selected">Selected</span>}
                    </div>
                    <p className="version-selector-item-date">{date}</p>
                    <p className="version-selector-item-changelog">{versionInfo.changeLog}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Version Details */}
        {selectedVersionInfo && !isCurrent && (
          <div className="version-selector-details">
            <h4>Version Details</h4>
            <p>
              <strong>Changelog:</strong> {selectedVersionInfo.changeLog}
            </p>
            {selectedVersionInfo.breaking && (
              <div className="version-selector-warning">
                <span className="version-selector-warning-icon">⚠️</span>
                <span>
                  This version contains breaking changes. Workflows from other versions may not be compatible.
                </span>
              </div>
            )}
          </div>
        )}

        {/* Rollback Form */}
        {!isCurrent && (
          <div className="version-selector-rollback-section">
            {!showRollbackForm ? (
              <button className="version-selector-btn-rollback" onClick={() => setShowRollbackForm(true)}>
                ⏮️ Rollback to v{selectedVersion}
              </button>
            ) : (
              <div className="version-selector-rollback-form">
                <h4>Rollback Reason</h4>
                <textarea
                  className="version-selector-rollback-input"
                  placeholder="Why are you rolling back? (e.g., v2.0 broke production)"
                  value={rollbackReason}
                  onChange={(e) => setRollbackReason(e.target.value)}
                  rows={3}
                />
                <div className="version-selector-rollback-actions">
                  <button className="version-selector-btn-cancel" onClick={() => setShowRollbackForm(false)}>
                    Cancel
                  </button>
                  <button className="version-selector-btn-confirm" onClick={handleRollback}>
                    ✓ Confirm Rollback
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="version-selector-footer">
          <button className="version-selector-btn-close" onClick={onClose}>
            Close
          </button>
          {!isCurrent && (
            <button className="version-selector-btn-load" onClick={handleSelect}>
              📂 Load v{selectedVersion}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkflowVersionSelector;
