import { AbstractController } from "../../core/controller/AbstractController";
import { Restaurant } from "../../models/Restaurant";
import { MySQLRestaurantRepository } from "../../repositories/MySQL/MySQLRestaurantRepository";

export class MyRestaurantsController extends AbstractController<MySQLRestaurantRepository>
{
    async handleImplementation(userId: number)
    {
        const restaurants: Restaurant[] = await this.Repository.getRestaurantsByUserId(userId);
        return {statusCode: 200, body: restaurants, message: "Sucessfull requested!"};
    }
}