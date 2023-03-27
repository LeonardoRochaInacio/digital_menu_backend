import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IMenuItemRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    public abstract getMenuItemsByRestaurantId(restaurantId: number) : Promise<T[]>;
}