# src/electron/managed/ImageGenProfileService.ts

- StoredProfiles · type · L8-L10 — type StoredProfiles = { profiles: ImageGenProfile[]; };
- sanitizeFileName · function · L12-L14 — function sanitizeFileName(name: string): string
- ImageGenProfileService · class · L16-L182 — class ImageGenProfileService
- getRootDir · method · L17-L19 — private getRootDir(): string
- getManifestPath · method · L21-L23 — private getManifestPath(): string
- ensureRoot · method · L25-L27 — private async ensureRoot(): Promise<void>
- readStore · method · L29-L40 — private async readStore(): Promise<StoredProfiles>
- writeStore · method · L42-L45 — private async writeStore(store: StoredProfiles): Promise<void>
- importReferencePhotos · method · L47-L72 — private async importReferencePhotos( profileId: string, filePaths: string[], ): Promise<ImageGenReferencePhoto[]>
- list · method · L74-L81 — async list(): Promise<ImageGenProfile[]>
- create · method · L83-L110 — async create(input: { name: string; description?: string; isDefault?: boolean; referencePhotoPaths?: string[]; }): Promise<ImageGenProfile>
- update · method · L112-L156 — async update( id: string, patch: { name?: string; description?: string; isDefault?: boolean; addReferencePhotoPaths?: string[]; removeReferencePhotoIds?: string[]; }, ): Promise<ImageGenProfile | null>
- delete · method · L158-L176 — async delete(id: string): Promise<boolean>
- get · method · L178-L181 — async get(id: string): Promise<ImageGenProfile | null>
