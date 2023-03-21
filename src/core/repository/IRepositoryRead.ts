export interface IRepositoryRead<T> 
{
    getAll(): Promise<T[]>;
    get(id: string): Promise<T>;
}