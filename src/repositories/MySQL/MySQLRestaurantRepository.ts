import { ResultSetHeader } from "mysql2";
import { IRestaurantRepository } from "../interfaces/IRestaurantRepository";
import { MySQLClient } from "../../database/MySQL";
import { Restaurant } from "../../models/Restaurant";

export class MySQLRestaurantRepository extends IRestaurantRepository<Restaurant, ResultSetHeader>
{
    
    public async getAll()
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM restaurants");
        return rows as unknown as Promise<Restaurant[]>;
    }

    public async get(id: string)
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM restaurants WHERE id = ?", [id]);
        return (rows as any)[0] as unknown as Promise<Restaurant>;
    }
    
    public async create(item: Restaurant)
    {
        const [rows] = await MySQLClient.GetInstance().Query("INSERT INTO restaurants (p1) VALUES (?)", 
        [item.restaurant_name]);
        return rows as unknown as ResultSetHeader;
    }

    public async update(item: Restaurant)
    {
        const [rows] = await MySQLClient.GetInstance().Query("UPDATE restaurants SET restaurant_name = ? WHERE id = ?", 
        [item.restaurant_name, item.id]);
        return rows as unknown as ResultSetHeader;
    }
    
    public async delete(id: string)
    {
        const [rows] = await MySQLClient.GetInstance().Query("DELETE FROM restaurants WHERE id = ?", [id]);
        return rows as unknown as ResultSetHeader;
    }
    
    // Example of a custom parameter from the Interface
    //public async getRestaurantByCustomParameter(customParameter: number) 
    //{
    //    const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM Restaurant WHERE customParameter = ?", [customParameter]);
    //    return rows as unknown as Promise<Restaurant[]>;
    //}

}