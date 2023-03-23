import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { Restaurant } from "../../models/Restaurant";
import { MySQLRestaurantRepository } from "../../repositories/MySQL/MySQLRestaurantRepository";

export class CreateRestaurantController extends AbstractController<MySQLRestaurantRepository, ResultSetHeader, Restaurant>
{
    async handleImplementation(data: Restaurant)
    {
        const res: ResultSetHeader = await this.Repository.create(data);
        return {statusCode: 200, body: res};
    }
}