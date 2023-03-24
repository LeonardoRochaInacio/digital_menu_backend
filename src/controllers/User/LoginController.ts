import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { User } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";
import bcrypt from "bcryptjs"

export class LoginController extends AbstractController<MySQLUserRepository, User, User>
{
    async handleImplementation(data: User)
    {
        const inDBuser: User = await this.Repository.getUserByName(data.username);

        if(!inDBuser)
        {
            return {statusCode: 400, body: "User not registered!"};
        }
        
        const passComparison: boolean = await bcrypt.compare(data.password, inDBuser.password);

        if(!passComparison)
        {
            return {statusCode: 401, body: "Authorization fault! The password you entered is invalid."};
        }

        

        return {statusCode: 200, body: inDBuser};
    }
}