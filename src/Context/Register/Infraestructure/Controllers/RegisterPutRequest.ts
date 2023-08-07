import { Request } from "express";

export type RegisterPutRequest = Request & {
    body: {
        id: string;
        email:string;
        password: string;   
    }
}