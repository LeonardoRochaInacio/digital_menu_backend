import { AbstractController } from "../../core/controller/AbstractController";
import { MenuItem } from "../../models/MenuItem";
import { MySQLMenuItemRepository } from "../../repositories/MySQL/MySQLMenuItemRepository";

export class GetAllMenuItemByRestaurantController extends AbstractController<MySQLMenuItemRepository, MenuItem[], number>
{
    async handleImplementation(restaurant_id: number)
    {
        const menuItems = await this.Repository.getMenuItemsByRestaurantID(restaurant_id);
        return {statusCode: 200, body: menuItems};
    }
}