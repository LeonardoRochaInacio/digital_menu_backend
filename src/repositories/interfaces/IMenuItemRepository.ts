import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IMenuItemRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    public abstract getMenuItemsByRestaurantID(restaurant_id: number) : Promise<T[]>;
}