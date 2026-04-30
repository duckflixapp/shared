import type { AccountMinDTO } from './account.dto';
import type { ContentDTO } from './content.dto';

export type LibraryType = 'watchlist' | 'custom';

export interface LibraryMinDTO {
    id: string;
    userId: string;
    name: string;
    type: LibraryType;
    size: number;
    createdAt: string;
}

export interface LibraryDTO extends LibraryMinDTO {
    user: AccountMinDTO;
}

export interface LibraryItemMinDTO {
    id: string;
    libraryId: string;
    addedAt: string;
}

export interface LibraryItemDTO extends LibraryItemMinDTO {
    content: ContentDTO;
}
