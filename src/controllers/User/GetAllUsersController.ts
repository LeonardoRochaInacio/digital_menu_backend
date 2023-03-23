import { AbstractController } from "../../core/controller/AbstractController";
import { User } from "../../models/User";
import { MySQLUserRepository } from "../../repositories/MySQL/MySQLUserRepository";

export class GetAllUsersController extends AbstractController<MySQLUserRepository, User[]>
{
    async handleImplementation()
    {
        const varUser = await this.Repository.getAll();
        return {statusCode: 200, body: varUser};
    }
}