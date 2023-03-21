import ErrorDefault from '../error/ErrorDefault';
import { HttpResponse } from './GenericModels';
import { ReadRepository } from '../repository/types/ReadRepository';
import { ReadWriteRepository } from '../repository/types/ReadWriteRepository';
import { WriteRepository } from '../repository/types/WriteRepository';

export abstract class AbstractController<Repo extends ReadWriteRepository<any> | ReadRepository<any> | WriteRepository<any>, Return>
{
    protected readonly Repository : Repo;

    constructor(Repository: Repo)
    {
        this.Repository = Repository;
    }

    protected abstract handleImplementation(): Promise<HttpResponse<Return>>

    public async handle(): Promise<HttpResponse<Return>>
    {
        try
        {
            return await this.handleImplementation();

        }
        catch(error)
        {
            return {statusCode: 500, body: new ErrorDefault().GetErrorMessage(error as string) };
        }
    }

}