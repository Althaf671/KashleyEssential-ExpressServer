// Basic auth controller

import { Request, Response } from "express";
import { BasicAuthService } from "./basicAuth.service";

export class BasicAuthController {

    // DI: inject service
    constructor (private basicAuthService: BasicAuthService) {};

    //=========== Register controller ===========//
    async RegisterController(req: Request, res: Response) {
        
    };

    //=========== Verify controller ===========//
    async VerifyController(req: Request, res: Response) {

    };
};