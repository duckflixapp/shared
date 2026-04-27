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

export interface AccountSessionDTO {
    id: string;
    deviceName: string | null;
    deviceType: 'desktop' | 'mobile' | 'tablet' | 'unknown' | null;
    browserName: string | null;
    osName: string | null;
    ipAddress: string | null;
    lastIpAddress: string | null;
    lastRefreshedAt: string | null;
    expiresAt: string;
    createdAt: string;
    current: boolean;
}