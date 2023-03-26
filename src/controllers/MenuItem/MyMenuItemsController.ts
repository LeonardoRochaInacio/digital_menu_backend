import { AbstractController } from "../../core/controller/AbstractController";
import { MenuItem } from "../../models/MenuItem";
import { MySQLMenuItemRepository } from "../../repositories/MySQL/MySQLMenuItemRepository";

export class MyMenuItemsController extends AbstractController<MySQLMenuItemRepository>
{
    async handleImplementation(restaurantId: number)
    {
        const restaurantsItems: MenuItem[] = await this.Repository.getMenuItemsByRestaurantId(restaurantId);
        return {statusCode: 200, body: restaurantsItems, message: "Not implemented!"};
    }
}