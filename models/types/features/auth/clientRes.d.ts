// Client response promise

import { TAccessTokenPayload } from "../../shared";

//========== Controller ==========//
export type TLoginResponse = {
    success: true,
    message: string,
    data: object
};

export type TClientAccessData = {
    id: string,
    name: string,
    email: string,
    isVerified: boolean,
    data: object
};

export type TLoginServiceClientData = {
    id: string,
    name: string,
    email: string,
    isVerified: boolean,   
};

export type TLoginServiceResponse = {
    accessToken: string,
    data: object
};


//========== DAL ==========//