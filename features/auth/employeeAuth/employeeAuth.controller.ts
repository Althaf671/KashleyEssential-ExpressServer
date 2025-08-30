// Employee auth controller

import { Request, Response } from "express";
import { EmployeeAuthService } from "./employeeAuth.service";


export class EmployeeAuthController {

    // Di: inject service
    constructor (private employeeAuthService: EmployeeAuthService) {};

    //========== Login controller ==========//
    async LoginController(req: Request, res: Response) {

    };
};