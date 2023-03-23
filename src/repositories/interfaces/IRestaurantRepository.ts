import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IRestaurantRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    // Put here your customs actions from data base like this below:
    // public getRestaurantByCustomParameter(customParameter: number) : Promise<T[]>;
}