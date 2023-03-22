import { AbstractController } from "../../core/controller/AbstractController";
import { MenuItem } from "../../models/MenuItem";
import { MySQLMenuItemRepository } from "../../repositories/MySQLMenuItemRepository";

export class GetMenuItemController extends AbstractController<MySQLMenuItemRepository, MenuItem, number>
{
    async handleImplementation(id: number)
    {
        const menuItems = await this.Repository.get(id as unknown as string);
        return {statusCode: 200, body: menuItems};
    }
}