export interface IRepositoryRead<T> 
{
    getAll(): Promise<T[]>;
    get(id: number): Promise<T>;
}