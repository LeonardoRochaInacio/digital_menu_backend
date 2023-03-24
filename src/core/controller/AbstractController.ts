import ErrorDefault from '../error/ErrorDefault';
import { HttpResponse, HttpRequest } from './GenericModels';
import { ReadRepository } from '../repository/types/ReadRepository';
import { ReadWriteRepository } from '../repository/types/ReadWriteRepository';
import { WriteRepository } from '../repository/types/WriteRepository';

export abstract class AbstractController<Repo extends ReadWriteRepository<any, any> | ReadRepository<any> | WriteRepository<any, any>>
{
    protected readonly Repository : Repo;

    constructor(Repository: Repo)
    {
        this.Repository = Repository;
    }

    protected abstract handleImplementation(Data: any): Promise<HttpResponse<any>>

    public async handle(Data: any): Promise<HttpResponse<any>>
    {
        try
        {
            const _handle: HttpResponse<any> = await this.handleImplementation(Data);
            return _handle;

        }
        catch(error)
        {
            return { statusCode: 500, message: error as string};
        }
    }

}