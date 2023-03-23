import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IUserRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    // Put here your customs actions from data base like this below:
    // public getUserByCustomParameter(customParameter: number) : Promise<T[]>;
}