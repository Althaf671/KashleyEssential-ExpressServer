// Dependecy injection container
import { ClientAuthController } from "./clientAuth.controller";
import { ClientDal } from "./clientAuth.dal";
import { ClientAuthService } from "./clientAuth.service";


const clientDal = new ClientDal;

export const service = new ClientAuthService(clientDal);
export const controller = new ClientAuthController(service);