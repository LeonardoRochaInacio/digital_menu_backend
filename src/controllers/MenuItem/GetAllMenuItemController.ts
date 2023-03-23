import { AbstractController } from "../../core/controller/AbstractController";
import { MenuItem } from "../../models/MenuItem";
import { MySQLMenuItemRepository } from "../../repositories/MySQL/MySQLMenuItemRepository";

export class GetAllMenuItemController extends AbstractController<MySQLMenuItemRepository, MenuItem[]>
{
    async handleImplementation()
    {
        const menuItems = await this.Repository.getAll();
        return {statusCode: 200, body: menuItems};
    }
}