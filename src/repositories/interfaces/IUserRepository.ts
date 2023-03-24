import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IUserRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    public abstract getUserByName(customParameter: string) : Promise<T>;
}