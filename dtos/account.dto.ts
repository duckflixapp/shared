import type { UserRole } from '../configs/roles';

export interface ProfileMinDTO {
    id: string;
    accountId: string;
    name: string;
    createdAt: string;
}

export interface ProfileDTO extends ProfileMinDTO {
    avatar: {
        id: string | null,
        url: string | null,
    }
}

export interface AccountMinDTO {
    id: string;
    role: UserRole;
    system: boolean;
    profile: ProfileMinDTO | null;
}

export interface AccountDTO extends AccountMinDTO {
    email: string;
    isVerified: boolean;
    createdAt: Date | string;
    isTotpEnabled: boolean;
}

export interface AccountTwoFactorStatusDTO {
    enabled: boolean;
    methods: {
        authenticator: {
            enabled: boolean;
            pendingSetup: boolean;
        };
        backupCodes: {
            enabled: boolean;
            remaining: number;
        };
    };
}

export interface AccountSessionMinDTO {
    id: string;
    deviceName: string | null;
    deviceType: 'desktop' | 'mobile' | 'tablet' | 'unknown' | null;
    browserName: string | null;
    osName: string | null;
    lastRefreshedAt: string | null;
    current: boolean;
}

export interface AccountSessionDTO extends AccountSessionMinDTO {
    ipAddress: string | null;
    lastIpAddress: string | null;
    lastRefreshedAt: string | null;
    expiresAt: string;
    createdAt: string;
}

export interface AccountRefDTO {
    id: string;
    email: string;
    role: UserRole;
    system: boolean;
}
