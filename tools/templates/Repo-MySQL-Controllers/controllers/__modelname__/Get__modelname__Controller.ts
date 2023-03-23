import { AbstractController } from "../../core/controller/AbstractController";
import { __modelname__ } from "../../models/__modelname__";
import { MySQL__modelname__Repository } from "../../repositories/MySQL/MySQL__modelname__Repository";

export class Get__modelname__Controller extends AbstractController<MySQL__modelname__Repository, __modelname__, number>
{
    async handleImplementation(id: number)
    {
        const var__modelname__ = await this.Repository.get(id as unknown as string);
        return {statusCode: 200, body: var__modelname__};
    }
}