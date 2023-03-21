import { AbstractController } from "../core/controller/AbstractController";
import { MenuItem } from "../models/MenuItem";
import { MySQLMenuItemsRepository } from "../repositories/MySQLMenuItemsRepository";

export class GetMenuItemsController extends AbstractController<MySQLMenuItemsRepository, MenuItem[]>
{
    async handleImplementation()
    {
        const menuItems = await this.Repository.getAll();
        return {statusCode: 200, body: menuItems};
    }
}