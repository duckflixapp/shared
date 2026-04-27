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