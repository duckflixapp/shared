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