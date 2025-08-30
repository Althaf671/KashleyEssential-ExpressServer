// Jwt types

// Access token
export type TAccessTokenPayload = {
    id: string,
    name: string,
    email: string,
    isVerified: string,
    type: "access"
};

// Super token
export type TSuperTokenPayload = TAccessTokenPayload & {
    role: "superAdmin" | "admin" | "auditor" | 
          "finance" | "inventory" | "support";
    isAuthenticated: boolean,
};

// Refresh token
export type TRefreshTokenPayload = {
    userId: string,
    jti: string,
    deviceFingerprint: string,
    deviceName: string,
    ipAddress: string,
    type: "refresh";
};