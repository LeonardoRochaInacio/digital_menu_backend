import { AbstractController } from "../../core/controller/AbstractController";
import { __modelname__ } from "../../models/__modelname__";
import { MySQL__modelname__Repository } from "../../repositories/MySQL/MySQL__modelname__Repository";

export class GetAll__modelname__sController extends AbstractController<MySQL__modelname__Repository, __modelname__[]>
{
    async handleImplementation()
    {
        const var__modelname__ = await this.Repository.getAll();
        return {statusCode: 200, body: var__modelname__};
    }
}