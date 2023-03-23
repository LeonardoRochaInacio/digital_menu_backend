import { AbstractController } from "../../core/controller/AbstractController";
import { Restaurant } from "../../models/Restaurant";
import { MySQLRestaurantRepository } from "../../repositories/MySQL/MySQLRestaurantRepository";

export class GetRestaurantController extends AbstractController<MySQLRestaurantRepository, Restaurant, number>
{
    async handleImplementation(id: number)
    {
        const varRestaurant = await this.Repository.get(id as unknown as string);
        return {statusCode: 200, body: varRestaurant};
    }
}