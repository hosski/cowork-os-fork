/**
 * Hook: useWorkflowVersioning
 *
 * Manages workflow template versioning UI state
 * Handles version selection, rollback, and history tracking
 */

import { useCallback, useState } from 'react';
import { WorkflowVersioningService } from '../../shared/workflow-versioning';

export interface WorkflowVersionInfo {
  version: string;
  name: string;
  createdAt: number;
  breaking: boolean;
  changeLog: string;
}

export function useWorkflowVersioning(templateId: string) {
  const [versioningService] = useState(() => new WorkflowVersioningService());
  const [versions, setVersions] = useState<WorkflowVersionInfo[]>([]);
  const [currentVersion, setCurrentVersion] = useState('1.0.0');
  const [isVersionSelectorOpen, setIsVersionSelectorOpen] = useState(false);

  // Reload versions for a template
  const reloadVersions = useCallback(() => {
    const history = versioningService.getVersionHistory(templateId);
    const versionInfos = history.map((v) => ({
      version: v.version,
      name: v.name,
      createdAt: v.metadata.createdAt,
      breaking: v.metadata.breaking,
      changeLog: v.metadata.changeLog,
    }));
    setVersions(versionInfos);
  }, [templateId, versioningService]);

  // Select a version
  const selectVersion = useCallback(
    (version: string) => {
      const versionInfo = versions.find((v) => v.version === version);
      if (!versionInfo) {
        console.error(`Version ${version} not found`);
        return;
      }

      setCurrentVersion(version);
      setIsVersionSelectorOpen(false);

      // Trigger reload of template with this version
      return versionInfo;
    },
    [versions]
  );

  // Rollback to a previous version
  const rollback = useCallback(
    (version: string, reason: string) => {
      const rolled = versioningService.rollbackToVersion(templateId, version, reason);
      if (rolled) {
        reloadVersions();
        setCurrentVersion(rolled.version);
      }
      return rolled;
    },
    [templateId, versioningService, reloadVersions]
  );

  // Get migration guide between versions
  const getMigrationGuide = useCallback(
    (fromVersion: string, toVersion: string) => {
      return versioningService.getMigrationGuide(templateId, fromVersion, toVersion);
    },
    [templateId, versioningService]
  );

  // Get changelog as markdown
  const getChangelog = useCallback(() => {
    return versioningService.formatAsChangelog(templateId);
  }, [templateId, versioningService]);

  // Open/close version selector
  const openVersionSelector = useCallback(() => {
    reloadVersions();
    setIsVersionSelectorOpen(true);
  }, [reloadVersions]);

  const closeVersionSelector = useCallback(() => {
    setIsVersionSelectorOpen(false);
  }, []);

  return {
    versions,
    currentVersion,
    isVersionSelectorOpen,
    selectVersion,
    rollback,
    openVersionSelector,
    closeVersionSelector,
    getMigrationGuide,
    getChangelog,
    reloadVersions,
  };
}

export default useWorkflowVersioning;
