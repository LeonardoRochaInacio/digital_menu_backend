import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import * as dotenv from "dotenv";
import { User, UserRole } from '../models/User';
import { AuthController } from '../controllers/User/AuthController';
import { MySQLUserRepository } from '../repositories/MySQL/MySQLUserRepository';
import { HttpResponse } from '../core/controller/GenericModels';


export const SECRET_KEY: Secret = process.env.SECRET_KEY as string; 

function roleConversion(s: string): UserRole
{
    let conv: UserRole = 0;
    
    switch(s)
    {
        case "basic":
            conv = 0;
        break;

        case "admin":
            conv = 1;
        break;

        case "sysadmin":
            conv = 2;
        break; 
    }

    return conv;
}

export function auth(Role: UserRole = UserRole.basic)
{
    return async (Request: Request, Response: Response, next: NextFunction) =>
    {
        try
        {
            const _URoleString: string = UserRole as unknown as string;
            const token = Request.header('Authorization')?.replace('Bearer ', '');
            if(!token) throw new Error("Invalid token when trying to access this route");
            const decoded = jwt.verify(token, SECRET_KEY);
           
            const Controller = new AuthController(new MySQLUserRepository());
            const {statusCode, body} = await Controller.handle(decoded);
            
            if(statusCode == 200)
            {
                const dbRole: UserRole = roleConversion((body as User).role as unknown as string);

                if(
                    (Role == UserRole.admin && dbRole == UserRole.basic) ||
                    (Role == UserRole.sysadmin && (dbRole == UserRole.basic || dbRole == UserRole.admin))
                   )
                {
                    throw new Error("Unauthorized role for this route!");
                }
                
                Request.body = body;
                next();
            }
            else
            {
                throw new Error("Error when authenticating the user.");
            }
            
        }
        catch(error)
        {
            const resp: HttpResponse<any> = {statusCode: 401, message: 'Please, authenticate for access this route! - '  + error};
            Response.send(resp);
        }
    }
}