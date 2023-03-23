import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { __modelname__ } from "../../models/__modelname__";
import { MySQL__modelname__Repository } from "../../repositories/MySQL/MySQL__modelname__Repository";

export class Update__modelname__Controller extends AbstractController<MySQL__modelname__Repository, ResultSetHeader, __modelname__>
{
    async handleImplementation(data: __modelname__)
    {
        if(!data.id) throw Error("Undefined id on update");
        const res: ResultSetHeader = await this.Repository.update(data);
        return {statusCode: 200, body: res};
    }
}