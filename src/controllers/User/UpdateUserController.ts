import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { User } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";

export class UpdateUserController extends AbstractController<MySQLUserRepository, ResultSetHeader, User>
{
    async handleImplementation(data: User)
    {
        if(!data.id) throw Error("Undefined id on update");
        const res: ResultSetHeader = await this.Repository.update(data);
        return {statusCode: 200, body: res};
    }
}