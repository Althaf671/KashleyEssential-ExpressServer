// Client middleware

import { Request, Response, NextFunction } from "express";
import { Logger } from "../helper/logger";

const middlewareLog = "[MIDDLEWARE] is";


export const ClientMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    
    // Request email
    Logger.info(middlewareLog, "");
};