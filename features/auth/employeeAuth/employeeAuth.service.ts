// Employee auth service
import chalk from "chalk";
import { EmployeeAuthDal } from "./employeeAuth.dal";


export class EmployeeAuthService {

    // Private logger
    private privLogger = (message: string) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(chalk.bgGray(`[DEV][DEBUG] ${message}`)); 
        };
    };

    // DI: inject dal
    constructor (private employeeAuthDal: EmployeeAuthDal) {};

    //========== Login service ==========//
    async EmployeeLoginService() {

    };
};