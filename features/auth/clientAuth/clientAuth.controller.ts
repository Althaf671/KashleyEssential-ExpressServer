// Basic auth controller

import { Request, Response } from "express";
import {ClientAuthService } from "./clientAuth.service";
import { Logger } from "../../../shared/helper/logger";

export class ClientAuthController {

    // DI: inject service
    constructor (private clientAuthService: ClientAuthService) {};

    //=========== Register controller ===========//
    async RegisterController(req: Request, res: Response) {
        
    };

    //=========== Verify controller ===========//
    async VerifyController(req: Request, res: Response) {

    };
};