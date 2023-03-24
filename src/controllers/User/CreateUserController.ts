import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { User } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";
import bcrypt from "bcryptjs"
import Utils from "../../core/utils/utils";

export class CreateUserController extends AbstractController<MySQLUserRepository, ResultSetHeader, User>
{
    async handleImplementation(data: User)
    {
        const user: User = await this.Repository.getUserByName(data.username);

        if(user)
        {
            return {statusCode: 400, body: "User already exists!"};
        }
        else if(data.password.length < 8)
        {
            return {statusCode: 400, body: "The password must be at least 8 characters long."};
        }
        else if(data.username.length < 8)
        {
            return {statusCode: 400, body: "The username must be at least 8 characters long."};
        }
        else if(data.role != "basic")
        {
            return {statusCode: 400, body: "You don't have the correct permission to registrer an user with that role."};
        }
        else if(!Utils.isEmailAddress(data.email))
        {
            return {statusCode: 400, body: "Please, enter a valid e-mail"};
        }
            
        const encryptedPassword: string = await bcrypt.hash(data.password, 6);
        
        data.password = encryptedPassword;
        data.creation_date = Utils.getTimestamp();
        data.last_login_date = Utils.getTimestamp();
        data.email = data.email.toLowerCase();

        const res: ResultSetHeader = await this.Repository.create(data);
        return {statusCode: 200, body: res};
    }
}