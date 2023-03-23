import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";

export class DeleteUserController extends AbstractController<MySQLUserRepository, ResultSetHeader, number>
{
    async handleImplementation(id: number)
    {
        if(!id) throw Error("Undefined id on delete");
        const res: ResultSetHeader = await this.Repository.delete(id as unknown as string);
        return {statusCode: 200, body: res};
    }
}