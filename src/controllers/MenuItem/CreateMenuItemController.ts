import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { MenuItem } from "../../models/MenuItem";
import { MySQLMenuItemRepository } from "../../repositories/MySQLMenuItemRepository";

export class CreateMenuItemController extends AbstractController<MySQLMenuItemRepository, ResultSetHeader, MenuItem>
{
    async handleImplementation(data: MenuItem)
    {
        const res: ResultSetHeader = await this.Repository.create(data);
        return {statusCode: 200, body: res};
    }
}