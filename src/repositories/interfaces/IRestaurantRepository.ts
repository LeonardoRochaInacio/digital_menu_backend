import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IRestaurantRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    public abstract getRestaurantsByUserId(userId: number) : Promise<T[]>;
}