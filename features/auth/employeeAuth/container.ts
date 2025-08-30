import { EmployeeAuthController } from "./employeeAuth.controller";
import { EmployeeAuthDal } from "./employeeAuth.dal";
import { EmployeeAuthService } from "./employeeAuth.service";


const dal = new EmployeeAuthDal;

export const service = new EmployeeAuthService(dal);
export const controller = new EmployeeAuthController(service);