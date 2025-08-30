// Basic auth controller

import { Request, Response } from "express";
import {ClientAuthService } from "./clientAuth.service";
import { Logger } from "../../../shared/helper/logger";
import { TAccessTokenPayload } from "../../../models/types";
import { TClientAccessData, TLoginResponse } from "../../../models/types/features/auth/clientRes";
import { LoginSchema } from "../../../models/validators/auth/clientAuth.schema";
import { TLoginServiceRequest } from "../../../models/types/features/auth/clientReq";
import { setTokenCookie } from "../../../infra/config/cookies";


export class ClientAuthController {

    // DI: inject service
    constructor (private clientAuthService: ClientAuthService) {};

    //=========== Register controller ===========//
    async RegisterController(req: Request, res: Response) {
        
    };

    //=========== Login controller ===========//
    async LoginController(req: Request, res: Response): Promise<void> {
        Logger.start("Login");

        // 1. Payload validation
        Logger.warn("Validating payload");
        const payload = LoginSchema.safeParse(req.body);
        if (!payload.success) {
            Logger.error("Invalid data", { errors: payload.error });
            res.status(400).json({ 
                success: false,
                message: "Bad request"
            });
            Logger.end("Login");
            return;
        };
        Logger.success("Payload validated", { payload } );

        // 2. Destructuring to be passed
        const { email, password } = payload.data;
        const request: TLoginServiceRequest = { email, password };

        try {
            // 3. Run service
            const { data, accessToken } = await this.clientAuthService.LoginService(request);

            // 4. Set cookies
            Logger.warn("Set token cookies");
            setTokenCookie(res, accessToken);
            Logger.success("Token has been set");

            // success response
            const response : TLoginResponse = {
                success: true,
                message: "You have logged in",
                data: data,
            };
            Logger.success("You have logged in");
            Logger.end("Login")
            res.status(200).json(response);
            return;
        } catch (error) {
            Logger.end("Login");
        };
    };
};