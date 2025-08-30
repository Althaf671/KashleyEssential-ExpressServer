// Employee auth dal
import chalk from "chalk";


export class EmployeeAuthDal {

    // Private logger
    private privLogger = (message: string) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(chalk.bgGray(`[DEV][DEBUG] ${message}`)); 
        };
    };
};