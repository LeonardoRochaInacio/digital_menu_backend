import { IRepositoryRead } from "../IRepositoryRead";

export class ReadRepository<T> implements IRepositoryRead<T>
{
    public async getAll(): Promise<T[]>
    {
        throw new Error("the method getAll need to be implemented!");
    }

    public async get(id: number) :  Promise<T>
    {
        throw new Error("the method get need to be implemented!");
    }
}