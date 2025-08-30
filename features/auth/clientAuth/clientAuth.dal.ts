import chalk from "chalk";
import { TLoginResponse } from "../../../models/types/features/auth/clientRes";
import { TAccessTokenPayload, TRefreshTokenPayload } from "../../../models/types";
import { db } from "../../../infra/config/db";




// Client dal 
export class ClientDal {

    // Private log 
    private privLogger = (message: string) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(chalk.gray(`[DEV][DEBUG] ${message}`)); 
        };
    };
     
    //========= Login dal ==========//
    async findUserByEmail(email: string) {
        this.privLogger(`Searching for user ${email}`);
        return db.user.findUnique({ 
            where: { email },
            select: {
                id: true,
                name: true,
                password: true,
                email: true,
                isVerified: true
            }
        });
    };

    async storeLoginRefreshToken(
        payload: TRefreshTokenPayload
    ) {

    };

};




