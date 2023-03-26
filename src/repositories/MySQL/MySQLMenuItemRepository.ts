import { ResultSetHeader } from "mysql2";
import { IMenuItemRepository } from "../interfaces/IMenuItemRepository";
import { MySQLClient } from "../../database/MySQL";
import { MenuItem } from "../../models/MenuItem";

export class MySQLMenuItemRepository extends IMenuItemRepository<MenuItem, ResultSetHeader>
{
    
    public async getAll()
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM menuitems");
        return rows as unknown as Promise<MenuItem[]>;
    }

    public async get(id: number)
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM menuitems WHERE id = ?", [id]);
        return (rows as any)[0] as unknown as Promise<MenuItem>;
    }
    
    public async create(item: MenuItem)
    {
        const [rows] = await MySQLClient.GetInstance().Query("INSERT INTO menuitems (restaurant_id, title, description, price) VALUES (?, ?, ?, ?)", 
        [item.restaurant_id, item.title, item.description, item.price]);
        return rows as unknown as ResultSetHeader;
    }

    public async update(item: MenuItem)
    {
        const [rows] = await MySQLClient.GetInstance().Query("UPDATE menuitems SET restaurant_id = ?, title = ?, description = ?, price = ? WHERE id = ?", 
        [item.restaurant_id, item.title, item.description, item.id]);
        return rows as unknown as ResultSetHeader;
    }
    
    public async delete(id: number)
    {
        const [rows] = await MySQLClient.GetInstance().Query("DELETE FROM menuitems WHERE id = ?", [id]);
        return rows as unknown as ResultSetHeader;
    }

    public async getMenuItemsByRestaurantId(restaurantId: number)
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM menuitems WHERE restaurant_id = ?", [restaurantId]);
        return rows as unknown as Promise<MenuItem[]>;
    }
    
    // Example of a custom parameter from the Interface
    //public async getMenuItemByCustomParameter(customParameter: number) 
    //{
    //    const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM MenuItem WHERE customParameter = ?", [customParameter]);
    //    return rows as unknown as Promise<MenuItem[]>;
    //}

}