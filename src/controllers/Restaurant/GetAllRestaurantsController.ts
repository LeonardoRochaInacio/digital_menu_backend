import { AbstractController } from "../../core/controller/AbstractController";
import { Restaurant } from "../../models/Restaurant";
import { MySQLRestaurantRepository } from "../../repositories/MySQL/MySQLRestaurantRepository";

export class GetAllRestaurantsController extends AbstractController<MySQLRestaurantRepository, Restaurant[]>
{
    async handleImplementation()
    {
        const varRestaurant = await this.Repository.getAll();
        return {statusCode: 200, body: varRestaurant};
    }
}