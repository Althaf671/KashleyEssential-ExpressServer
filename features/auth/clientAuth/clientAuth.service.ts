// Basic auth service
import { TAccessTokenPayload } from "../../../models/types";
import { TLoginServiceRequest } from "../../../models/types/features/auth/clientReq";
import { Logger } from "../../../shared/helper/logger";
import { ClientDal } from "./clientAuth.dal";
import chalk from "chalk"
import bcrypt from "bcrypt";
import { generateAccessToken } from "../../../shared/utils/jwt.utils";
import { TClientAccessData, TLoginServiceClientData, TLoginServiceResponse } from "../../../models/types/features/auth/clientRes";

export class ClientAuthService {

    // Private log 
    private privLogger = (message: string, meta: unknown) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(chalk.gray(`[DEV][DEBUG] ${message}`, JSON.stringify(
                meta, null, 2
            ))); 
        };
    };

    // DI: inject dal
    constructor(private clientDal: ClientDal) {}; 

    //========== Register service ==========//
    async RegisterService() {

    };

    //========== Login service =========//
    async LoginService(request: TLoginServiceRequest): Promise<TLoginServiceResponse> {
        this.privLogger("Receiving data:", request);

        // 1. Find user by email
        Logger.warn("Finding user by email");
        const user = await this.clientDal.findUserByEmail(request.email);
        if (!user) {
            Logger.error("User not found");
            throw new Error("User not found");
        };
        this.privLogger("User found with name", user.name);

        // 2. Compare password
        Logger.warn("Comparing password");
        this.privLogger(`${request.password} =`, user.password);
        const isPasswordMatch = await bcrypt.compare(request.password, user.password);
        if (!isPasswordMatch) {
            Logger.error("Password does not match");
            throw new Error("Password does not match");
        };
        Logger.success("Password does match");

        // 3. Check is user verified 
        Logger.warn("Checking is user verified");
        this.privLogger("User verified status:", user.isVerified);
        if (!user.isVerified) {
            Logger.error("User is not verified");
            throw new Error("User is not verified");
        };
        Logger.success("User is verified");

        // 4. Type safety for access token
        const payload: TAccessTokenPayload = {
            id: user.id,
            name: user.name,
            email: user.email,
            isVerified: user.isVerified,
            type: "access"
        };

        // 5. Type safety for user
        const data: TLoginServiceClientData = {
            id: user.id,
            name: user.name,
            email: user.email,
            isVerified: user.isVerified,        
        };

        // 6. Generate access token
        Logger.info("Generating access token");
        const accessToken: string = generateAccessToken(payload);
        if (!accessToken) {
            this.privLogger("Access Token:", accessToken);
            Logger.critical("Failed to generate access token");
            throw new Error("Failed to generate access token");
        };
        Logger.success("Success to generate access token");

        // 7. Generate refresh token

        // 8. Store refresh token

        // Return
        return { data, accessToken };
    };

};