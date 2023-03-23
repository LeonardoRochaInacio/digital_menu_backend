import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { Restaurant } from "../../models/Restaurant";
import { MySQLRestaurantRepository } from "../../repositories/MySQL/MySQLRestaurantRepository";

export class UpdateRestaurantController extends AbstractController<MySQLRestaurantRepository, ResultSetHeader, Restaurant>
{
    async handleImplementation(data: Restaurant)
    {
        if(!data.id) throw Error("Undefined id on update");
        const res: ResultSetHeader = await this.Repository.update(data);
        return {statusCode: 200, body: res};
    }
}