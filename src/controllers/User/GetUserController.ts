import { AbstractController } from "../../core/controller/AbstractController";
import { User } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";

export class GetUserController extends AbstractController<MySQLUserRepository, User, number>
{
    async handleImplementation(id: number)
    {
        const varUser = await this.Repository.get(id as unknown as string);
        return {statusCode: 200, body: varUser};
    }
}