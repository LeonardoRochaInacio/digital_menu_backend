import { IRepositoryWrite } from "../IRepositoryWrite";

export class WriteRepository<T, Y> implements IRepositoryWrite<T, Y>
{
    public async create(item: T): Promise<Y>
    {
        throw new Error("the method create need to be implemented!");
    }

    public async update(item: T): Promise<Y>
    {
        throw new Error("the method update need to be implemented!");
    }
    
    public async delete(id: number): Promise<Y>
    {
        throw new Error("the method delete need to be implemented!");
    }
}