// Dependecy injection container
import { BasicAuthController } from "./basicAuth.controller";
import { BasicAuthDal } from "./basicAuth.dal";
import { BasicAuthService } from "./basicAuth.service";


const basicAuthDal = new BasicAuthDal;

export const service = new BasicAuthService(basicAuthDal);
export const controller = new BasicAuthController(service);