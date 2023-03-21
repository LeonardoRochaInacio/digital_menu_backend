import ErrorDefault from '../error/ErrorDefault';
import { HttpResponse } from './GenericModels';
import { ReadRepository } from '../repository/types/ReadRepository';
import { ReadWriteRepository } from '../repository/types/ReadWriteRepository';
import { WriteRepository } from '../repository/types/WriteRepository';

export abstract class AbstractController<Repo extends ReadWriteRepository<any, any> | ReadRepository<any> | WriteRepository<any, any>, ResponseFormat, RequestFormat = any>
{
    protected readonly Repository : Repo;

    constructor(Repository: Repo)
    {
        this.Repository = Repository;
    }

    protected abstract handleImplementation(data?: RequestFormat): Promise<HttpResponse<ResponseFormat>>

    public async handle(Data?: RequestFormat): Promise<HttpResponse<ResponseFormat>>
    {
        try
        {
            return await this.handleImplementation(Data);

        }
        catch(error)
        {
            return {statusCode: 500, body: new ErrorDefault().GetErrorMessage(error as string) };
        }
    }

}