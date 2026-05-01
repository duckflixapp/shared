import type { AccountMinDTO, AccountRefDTO } from "./account.dto";

export const VIDEO_VERSION_STATUSES = ['processing', 'ready', 'error', 'waiting', 'canceled'] as const;
export const VIDEO_STATUSES = ['downloading', 'processing', 'ready', 'error'] as const;
export const VIDEO_TYPES = ['movie', 'episode'] as const;

export type VideoVersionStatus = (typeof VIDEO_VERSION_STATUSES)[number];
export type VideoStatus = (typeof VIDEO_STATUSES)[number];
export type VideoType = (typeof VIDEO_TYPES)[number];

export interface VideoMinDTO {
    id: string;
    accountId: string | null;
    duration: number | null;
    status: VideoStatus;
    type: VideoType;
    createdAt: string;
}

export interface VideoDTO extends VideoMinDTO {
    user: AccountRefDTO | null;
    versions: VideoVersionDTO[];
    generatedVersions: VideoVersionDTO[] | null;
    subtitles: SubtitleDTO[];
}

export interface VideoVersionDTO {
    id: string;
    height: number;
    width: number | null;
    streamUrl: string;
    fileSize: number | null;
    mimeType: string | null;
    status: VideoVersionStatus;
    isOriginal: boolean;
}

export interface SubtitleDTO {
    id: string;
    videoId: string;
    name: string;
    language: string;
    externalId: string | null;
    subtitleUrl: string;
    createdAt: string;
}

export interface SubtitleSearchResultDTO {
    fileId: number;
    fileName: string;
    release: string;
    language: string;
    downloads: number;
    hearingImpaired: boolean;
    aiTranslated: boolean;
    trusted: boolean;
    fps: number | null;
}

export interface VideoResolved {
    type: VideoType;
    id: string;
    name: string;
}

export interface WatchHistoryDTO {
    id: string;
    profileId: string;
    videoId: string;
    lastPosition: number;
    isFinished: boolean;
    updatedAt: string;
}