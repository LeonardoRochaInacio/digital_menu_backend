import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { MySQL__modelname__Repository } from "../../repositories/MySQL/MySQL__modelname__Repository";

export class Delete__modelname__Controller extends AbstractController<MySQL__modelname__Repository, ResultSetHeader, number>
{
    async handleImplementation(id: number)
    {
        if(!id) throw Error("Undefined id on delete");
        const res: ResultSetHeader = await this.Repository.delete(id as unknown as string);
        return {statusCode: 200, body: res};
    }
}