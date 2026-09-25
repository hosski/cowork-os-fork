# src/electron/profiles/ProfileManager.ts

- ProfileMetadata · type · L17-L22 — type ProfileMetadata = { id: string; label?: string; createdAt?: number; updatedAt?: number; };
- readProfileMetadata · function · L24-L35 — async function readProfileMetadata(profileDir: string): Promise<ProfileMetadata | null>
- writeProfileMetadata · function · L37-L53 — async function writeProfileMetadata( profileDir: string, metadata: ProfileMetadata, ): Promise<ProfileMetadata>
- toSummary · function · L55-L70 — function toSummary( profileId: string, profileDir: string, metadata?: ProfileMetadata | null, ): AppProfileSummary
- getProfilesRootDir · function · L72-L74 — function getProfilesRootDir(): string
- stripProfileArgs · function · L76-L90 — function stripProfileArgs(argv: string[]): string[]
- ProfileManager · class · L92-L251 — class ProfileManager
- listProfiles · method · L93-L120 — static async listProfiles(): Promise<AppProfileSummary[]>
- ensureProfile · method · L122-L140 — static async ensureProfile(profileIdOrLabel: string): Promise<AppProfileSummary>
- exportProfile · method · L142-L180 — static async exportProfile( profileId: string, destinationRoot: string, ): Promise<ProfileExportResult>
- importProfile · method · L182-L236 — static async importProfile( sourcePath: string, requestedName?: string, ): Promise<AppProfileSummary>
- switchProfile · method · L238-L250 — static async switchProfile(profileId: string): Promise<{ success: true; relaunching: true }>
