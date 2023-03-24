import { AbstractController } from "../../core/controller/AbstractController";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";
import bcrypt from "bcryptjs"
import Utils from "../../core/utils/utils";
import { User } from "../../models/User";

export class RegisterController extends AbstractController<MySQLUserRepository>
{
    async handleImplementation(Data: User)
    {
        const user: User = await this.Repository.getUserByName(Data.username);
        
        if(user)
        {
            return {statusCode: 400, message: "User already exists!"};
        }
        else if(Data.password.length < 8)
        {
            return {statusCode: 400, message: "The password must be at least 8 characters long."};
        }
        else if(Data.username.length < 8)
        {
            return {statusCode: 400, message: "The username must be at least 8 characters long."};
        }
        else if(Data.role != "basic")
        {
            return {statusCode: 400, message: "You don't have the correct permission to registrer an user with that role."};
        }
        else if(!Utils.isEmailAddress(Data.email))
        {
            return {statusCode: 400, message: "Please, enter a valid e-mail"};
        }
            
        const encryptedPassword: string = await bcrypt.hash(Data.password, 6);
        
        Data.password = encryptedPassword;
        Data.creation_date = Utils.getTimestamp();
        Data.last_login_date = Utils.getTimestamp();
        Data.email = Data.email.toLowerCase();

        const res = await this.Repository.create(Data);
        return {statusCode: 200, body: res, message: "Sucessfully registered!"};
    }
}