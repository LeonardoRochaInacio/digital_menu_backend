import jwt from "jsonwebtoken";
import { AbstractController } from "../../core/controller/AbstractController";
import Utils from "../../core/utils/utils";
import { User } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";
import bcrypt from "bcryptjs"

interface LoginParameters
{
    username: string;
    password: string;
}

export interface TokenedUser extends User
{
    token?: string;
}

export class LoginController extends AbstractController<MySQLUserRepository>
{
    async handleImplementation(Data: LoginParameters)
    {
        const inDBuser: TokenedUser = await this.Repository.getUserByName(Data.username);

        if(!inDBuser)
        {
            return {statusCode: 400, message: "User not registered!"};
        }
        
        const passComparison: boolean = await bcrypt.compare(Data.password, inDBuser.password);

        if(!passComparison)
        {
            return {statusCode: 401, message: "Authorization fault! The password you entered is invalid."};
        }

        if(inDBuser.id)
        {
            this.Repository.updateLastLoginTime(inDBuser.id, Utils.getTimestamp());
        }
        else
        {
            return {statusCode: 401, message: "Something went wrong when trying to get the user id."};
        }

        const token = jwt.sign({id: inDBuser.id, username: inDBuser.username, role: inDBuser.role}, process.env.SECRET_KEY as string , {expiresIn: '2 days'});
        inDBuser.token = token;

        return {statusCode: 200, body: inDBuser, message: "Sucessfully logged-in!"};
    }
}