import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { User } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";

export class CreateUserController extends AbstractController<MySQLUserRepository, ResultSetHeader, User>
{
    async handleImplementation(data: User)
    {
        const user: User = await this.Repository.getUserByName(data.username);

        if(user)
        {
            return {statusCode: 200, body: "User already exists!"};
        }
        else if(data.password.length < 8)
        {
            return {statusCode: 200, body: "The password must be at least 8 characters long."};
        }
        else if(data.role != "basic")
        {
            return {statusCode: 200, body: "You don't have the correct permission to registrer an user with that role."};
        }

        const res: ResultSetHeader = await this.Repository.create(data);
        return {statusCode: 200, body: res};
    }
}