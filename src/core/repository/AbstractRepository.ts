export abstract class AbstractRepository<T>
{
    public abstract getAll(): Promise<T[]>;

    public abstract get(): Promise<T>;

    public abstract create(): Promise<T>;
    
    public abstract delete(): Promise<T>;
}