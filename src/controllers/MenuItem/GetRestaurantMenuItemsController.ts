import { AbstractController } from "../../core/controller/AbstractController";
import APIReturnState from "../../core/utils/apiReturnState";
import { MenuItem } from "../../models/MenuItem";
import { MySQLMenuItemRepository } from "../../repositories/MySQL/MySQLMenuItemRepository";

export class GetRestaurantMenuItemsController extends AbstractController<MySQLMenuItemRepository>
{
    async handleImplementation(restaurantId: number)
    {
        const restaurantsItems: MenuItem[] = await this.Repository.getMenuItemsByRestaurantId(restaurantId);
        return {statusCode: 200, body: restaurantsItems, message: APIReturnState.success()};
    }
}