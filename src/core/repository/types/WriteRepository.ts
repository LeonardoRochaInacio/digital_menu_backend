import { IRepositoryWrite } from "../IRepositoryWrite";

export class WriteRepository<T> implements IRepositoryWrite<T>
{
    public async create(item: T): Promise<boolean>
    {
        throw new Error("the method create need to be implemented!");
    }

    public async update(id: string, item: T): Promise<boolean>
    {
        throw new Error("the method update need to be implemented!");
    }
    
    public async delete(id: string): Promise<boolean>
    {
        throw new Error("the method delete need to be implemented!");
    }
}