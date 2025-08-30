import chalk from "chalk";

// Client dal 
export class ClientDal {

    // Private log 
    private privLogger = (message: string) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(chalk.bgGray(`[DEV][DEBUG] ${message}`)); 
        };
    };
     
};




