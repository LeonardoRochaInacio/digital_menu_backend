import { IRepositoryRead } from "../IRepositoryRead";
import { IRepositoryWrite } from "../IRepositoryWrite";

export class ReadWriteRepository<T> implements IRepositoryRead<T>, IRepositoryWrite<T>
{
    public async getAll(): Promise<T[]>
    {
        throw new Error("the method getAll need to be implemented!");
    }

    public async get(id: string) :  Promise<T>
    {
        throw new Error("the method get need to be implemented!");
    }
    
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