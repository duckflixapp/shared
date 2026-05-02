import type { ProfileMinDTO } from './account.dto';
import type { ContentDTO } from './content.dto';

export type LibraryType = 'watchlist' | 'custom';

export interface LibraryMinDTO {
    id: string;
    profileId: string;
    name: string;
    type: LibraryType;
    size: number;
    createdAt: string;
}

export interface LibraryDTO extends LibraryMinDTO {
    profile: ProfileMinDTO;
}

export interface LibraryItemMinDTO {
    id: string;
    libraryId: string;
    addedAt: string;
}

export interface LibraryItemDTO extends LibraryItemMinDTO {
    content: ContentDTO;
}
