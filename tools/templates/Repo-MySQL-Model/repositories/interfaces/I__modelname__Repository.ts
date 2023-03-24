import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class I__modelname__Repository<T, Y> extends ReadWriteRepository<T, Y>
{
    // Put here your customs actions from data base like this below:
    // public abstract get__modelname__ByCustomParameter(customParameter: number) : Promise<T[]>;
    // You must to implement it in ../MySQL/MySQL__modelname__Repository.ts
}