import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../core/controller/AbstractController";
import { MenuItem } from "../models/MenuItem";
import { MySQLMenuItemsRepository } from "../repositories/MySQLMenuItemsRepository";

export class DeleteMenuItemController extends AbstractController<MySQLMenuItemsRepository, ResultSetHeader, number>
{
    async handleImplementation(id: number)
    {
        if(!id) throw Error("Undefined id on delete");
        const res: ResultSetHeader = await this.Repository.delete(id as unknown as string);
        return {statusCode: 200, body: res};
    }
}