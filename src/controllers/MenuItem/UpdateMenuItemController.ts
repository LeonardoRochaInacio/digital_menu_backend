import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { MenuItem } from "../../models/MenuItem";
import { MySQLMenuItemRepository } from "../../repositories/MySQL/MySQLMenuItemRepository";

export class UpdateMenuItemController extends AbstractController<MySQLMenuItemRepository, ResultSetHeader, MenuItem>
{
    async handleImplementation(data: MenuItem)
    {
        if(!data.id) throw Error("Undefined id on update");
        const res: ResultSetHeader = await this.Repository.update(data);
        return {statusCode: 200, body: res};
    }
}