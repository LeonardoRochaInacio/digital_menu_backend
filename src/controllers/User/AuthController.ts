import jwt, { JwtPayload } from "jsonwebtoken";
import { AbstractController } from "../../core/controller/AbstractController";
import { User, UserRole } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";
import APIReturnState from "../../core/utils/apiReturnState";

export interface LoginJwtPayload extends JwtPayload
{
    id: number;
    username: string;
    role: UserRole;
}

export class AuthController extends AbstractController<MySQLUserRepository>
{
    async handleImplementation(Payload: LoginJwtPayload)
    {
        const inDBuser: User = await this.Repository.getUserByName(Payload.username);

        if(!inDBuser)
        {
            return {statusCode: 400, message: "User not registered!"};
        }

        if(inDBuser.role != Payload.role)
        {
            return {statusCode: 401, message: "Unauthorized role for this route!"};
        }

        return {statusCode: 200, body: inDBuser, message: APIReturnState.success()};
    }
}