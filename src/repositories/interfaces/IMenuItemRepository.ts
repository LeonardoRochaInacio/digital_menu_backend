import { ReadWriteRepository } from "../../core/repository/types/ReadWriteRepository";

export abstract class IMenuItemRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    // Put here your customs actions from data base like this below:
    public abstract getMenuItemsByRestaurantId(restaurantId: number) : Promise<T[]>;
    // You must to implement it in ../MySQL/MySQLMenuItemRepository.ts
}