import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { User } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";

export class CreateUserController extends AbstractController<MySQLUserRepository, ResultSetHeader, User>
{
    async handleImplementation(data: User)
    {
        const res: ResultSetHeader = await this.Repository.create(data);
        return {statusCode: 200, body: res};
    }
}