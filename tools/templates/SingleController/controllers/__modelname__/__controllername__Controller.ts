import { ResultSetHeader } from "mysql2";
import { AbstractController } from "../../core/controller/AbstractController";
import { __modelname__ } from "../../models/__modelname__";
import { MySQL__modelname__Repository } from "../../repositories/MySQL/MySQL__modelname__Repository";

export class __controllername__Controller extends AbstractController<MySQL__modelname__Repository, __responseType__, __requestType__>
{
    async handleImplementation(data: __requestType__)
    {
        return {statusCode: 200, body: ""};
    }
}