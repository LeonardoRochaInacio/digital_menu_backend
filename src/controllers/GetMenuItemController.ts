import { AbstractController } from "../core/controller/AbstractController";
import { MenuItem } from "../models/MenuItem";
import { MySQLMenuItemsRepository } from "../repositories/MySQLMenuItemsRepository";

export class GetMenuItemController extends AbstractController<MySQLMenuItemsRepository, MenuItem, number>
{
    async handleImplementation(id: number)
    {
        const menuItems = await this.Repository.get(id as unknown as string);
        return {statusCode: 200, body: menuItems};
    }
}