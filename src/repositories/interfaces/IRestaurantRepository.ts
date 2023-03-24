import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IRestaurantRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    //public abstract getRestaurantByCustomParameter(customParameter: number) : Promise<T[]>;
}