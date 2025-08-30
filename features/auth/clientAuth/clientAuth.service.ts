// Basic auth service
import { ClientDal } from "./clientAuth.dal";
import chalk from "chalk"

export class ClientAuthService {

    // Private log 
    private privLogger = (message: string) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(chalk.bgGray(`[DEV][DEBUG] ${message}`)); 
        };
    };

    // DI: inject dal
    constructor(private clientDal: ClientDal) {}; 

    //========== Register service ==========//
    async RegisterService() {

    };

};