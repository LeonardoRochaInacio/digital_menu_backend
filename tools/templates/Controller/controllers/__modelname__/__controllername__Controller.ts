import { AbstractController } from "../../core/controller/AbstractController";
import { __modelname__ } from "../../models/__modelname__";
import { MySQL__modelname__Repository } from "../../repositories/MySQL/MySQL__modelname__Repository";

export class __controllername__Controller extends AbstractController<MySQL__modelname__Repository>
{
    async handleImplementation(/* parameter1: type, parameter2: type2 */)
    {
        return {statusCode: 501, body: {}, message: "Not implemented!"};
    }
}