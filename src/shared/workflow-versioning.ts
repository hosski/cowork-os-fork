/**
 * Workflow Versioning System
 *
 * Implements semantic versioning for workflow templates.
 * Tracks template changes, allows rollback, prevents breaking updates.
 */

export interface WorkflowTemplate {
  id: string;
  name: string;
  description?: string;
  nodes?: any[];
  [key: string]: any;
}

export interface WorkflowVersion {
  id: string; // template-id@version
  templateId: string;
  version: string; // semver: major.minor.patch
  name: string;
  description?: string;
  nodes: any[]; // DAG nodes snapshot
  metadata: {
    createdAt: number;
    createdBy: string;
    breaking: boolean; // true if update breaks existing workflows
    changeLog: string;
  };
}

export interface VersionedTemplate extends WorkflowTemplate {
  version: string;
  versions: WorkflowVersion[];
  isLatest: boolean;
  deprecationWarning?: string;
}

/**
 * Service to manage workflow template versioning
 */
export class WorkflowVersioningService {
  private templates: Map<string, VersionedTemplate> = new Map();
  private versions: Map<string, WorkflowVersion[]> = new Map(); // templateId -> versions[]

  /**
   * Create or update a workflow template with versioning
   */
  createOrUpdateTemplate(
    template: WorkflowTemplate,
    isBreakingChange: boolean = false,
    changeLog: string = 'Updated'
  ): VersionedTemplate {
    const templateId = template.id;
    const existingVersions = this.versions.get(templateId) || [];

    // Parse current version or default to 1.0.0
    const currentVersion = this.getLatestVersion(templateId) || '0.0.0';
    const nextVersion = this.incrementVersion(currentVersion, isBreakingChange);

    const newVersion: WorkflowVersion = {
      id: `${templateId}@${nextVersion}`,
      templateId,
      version: nextVersion,
      name: template.name,
      description: template.description,
      nodes: template.nodes || [],
      metadata: {
        createdAt: Date.now(),
        createdBy: 'system', // Could be user ID
        breaking: isBreakingChange,
        changeLog,
      },
    };

    // Store version history
    const newVersions = [...existingVersions, newVersion];
    this.versions.set(templateId, newVersions);

    // Create versioned template
    const versionedTemplate: VersionedTemplate = {
      ...template,
      version: nextVersion,
      versions: newVersions,
      isLatest: true,
      deprecationWarning: isBreakingChange
        ? `Breaking change in v${nextVersion}. Previous workflows may need updates.`
        : undefined,
    };

    this.templates.set(templateId, versionedTemplate);
    return versionedTemplate;
  }

  /**
   * Get specific version of a template
   */
  getTemplateVersion(templateId: string, version: string): VersionedTemplate | null {
    const versions = this.versions.get(templateId);
    if (!versions) return null;

    const foundVersion = versions.find((v) => v.version === version);
    if (!foundVersion) return null;

    const template = this.templates.get(templateId);
    if (!template) return null;

    return {
      ...template,
      version: foundVersion.version,
      versions: versions,
      isLatest: foundVersion.version === versions[versions.length - 1].version,
    };
  }

  /**
   * Get all versions of a template
   */
  getVersionHistory(templateId: string): WorkflowVersion[] {
    return this.versions.get(templateId) || [];
  }

  /**
   * Rollback to previous version
   */
  rollbackToVersion(
    templateId: string,
    version: string,
    reason: string = 'Rollback'
  ): VersionedTemplate | null {
    const targetVersion = this.getTemplateVersion(templateId, version);
    if (!targetVersion) return null;

    // Create a new version that restores the old state
    const rollbackVersion = this.createOrUpdateTemplate(
      {
        ...targetVersion,
        id: templateId,
      },
      false,
      `${reason} to v${version}`
    );

    return rollbackVersion;
  }

  /**
   * Check if template has breaking changes since a version
   */
  hasBreakingChanges(templateId: string, sinceVersion: string): boolean {
    const versions = this.versions.get(templateId) || [];
    const sinceIndex = versions.findIndex((v) => v.version === sinceVersion);

    if (sinceIndex === -1) return false;

    return versions
      .slice(sinceIndex + 1)
      .some((v) => v.metadata.breaking);
  }

  /**
   * Get migration guide for upgrading
   */
  getMigrationGuide(
    templateId: string,
    fromVersion: string,
    toVersion: string
  ): {
    from: string;
    to: string;
    breaking: boolean;
    changes: string[];
  } | null {
    const versions = this.versions.get(templateId) || [];
    const fromIndex = versions.findIndex((v) => v.version === fromVersion);
    const toIndex = versions.findIndex((v) => v.version === toVersion);

    if (fromIndex === -1 || toIndex === -1 || fromIndex >= toIndex) {
      return null;
    }

    const changedVersions = versions.slice(fromIndex + 1, toIndex + 1);
    const breakingFound = changedVersions.some((v) => v.metadata.breaking);
    const changes = changedVersions.map((v) => v.metadata.changeLog);

    return {
      from: fromVersion,
      to: toVersion,
      breaking: breakingFound,
      changes,
    };
  }

  /**
   * Format version history as markdown
   */
  formatAsChangelog(templateId: string): string {
    const versions = this.versions.get(templateId) || [];
    if (!versions.length) return 'No version history';

    const entries = versions
      .slice()
      .reverse()
      .map((v) => {
        const breaking = v.metadata.breaking ? ' **BREAKING**' : '';
        const date = new Date(v.metadata.createdAt).toISOString().split('T')[0];
        return `
## v${v.version}${breaking}
- **Released:** ${date}
- **Change:** ${v.metadata.changeLog}
`;
      })
      .join('\n');

    return `# Changelog — ${versions[versions.length - 1].name}\n${entries}`;
  }

  /**
   * Increment version (semver)
   */
  private incrementVersion(current: string, isBreaking: boolean): string {
    const [major, minor = 0, patch = 0] = current
      .split('.')
      .map((x) => parseInt(x, 10));

    if (isBreaking) {
      return `${major + 1}.0.0`;
    }
    return `${major}.${minor + 1}.${patch}`;
  }

  /**
   * Get latest version string
   */
  private getLatestVersion(templateId: string): string | null {
    const versions = this.versions.get(templateId);
    return versions?.length ? versions[versions.length - 1].version : null;
  }
}

export default WorkflowVersioningService;
