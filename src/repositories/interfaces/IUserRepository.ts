import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IUserRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    public abstract getUserByName(username: string) : any;
    public abstract updateLastLoginTime(id: number, newValue: number) : any;
}