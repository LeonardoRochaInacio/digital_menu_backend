import { IRepositoryRead } from "../IRepositoryRead";
import { IRepositoryWrite } from "../IRepositoryWrite";

export class ReadWriteRepository<T, Y> implements IRepositoryRead<T>, IRepositoryWrite<T,Y>
{
    public async getAll(): Promise<T[]>
    {
        throw new Error("the method getAll need to be implemented!");
    }

    public async get(id: number) :  Promise<T>
    {
        throw new Error("the method get need to be implemented!");
    }
    
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