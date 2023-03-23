import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class I__modelname__Repository<T, Y> extends ReadWriteRepository<T, Y>
{
    // Put here your customs actions from data base like this below:
    // public get__modelname__ByCustomParameter(customParameter: number) : Promise<T[]>;
}