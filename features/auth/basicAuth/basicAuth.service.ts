// Basic auth service
import { BasicAuthDal } from "./basicAuth.dal";
import chalk from "chalk"

export class BasicAuthService {

    // Private log 
    private logger = (message: string) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(chalk.bgGray(`[DEV][DEBUG] ${message}`)); 
        };
    };

    // DI: inject dal
    constructor(private basicAuthDal: BasicAuthDal) {}; 

    //========== Register service ==========//
    async RegisterService() {

    };

};