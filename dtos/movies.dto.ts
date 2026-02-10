import type { UserMinDTO } from './user.dto';

export type MovieStatus = 'processing' | 'ready' | 'error';

export interface MovieVersionDTO {
    id: string;
    height: number;
    width: number | null;
    streamUrl: string;
    fileSize: number | null;
    mimeType: string | null;
    status: MovieStatus;
}

export interface MovieDTO {
    id: string;
    title: string;
    status: MovieStatus;
    createdAt: string;
}

export interface MovieDetailedDTO extends MovieDTO {
    user: UserMinDTO;
    versions: MovieVersionDTO[];
}
