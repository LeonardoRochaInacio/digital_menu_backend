import { ResultSetHeader } from "mysql2";
import { ReadWriteRepository } from "../core/repository/types/ReadWriteRepository";
import { MySQLClient } from "../database/MySQL";
import { MenuItem } from "../models/MenuItem";

export class MySQLMenuItemsRepository extends ReadWriteRepository<MenuItem, ResultSetHeader>
{
    public async getAll()
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM menuitems");
        return rows as unknown as Promise<MenuItem[]>;
    }

    public async get(id: string)
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
        [item.restaurant_id, item.title, item.description, item.price, item.id]);
        return rows as unknown as ResultSetHeader;
    }
    
    public async delete(id: string)
    {
        const [rows] = await MySQLClient.GetInstance().Query("DELETE FROM menuitems WHERE id = ?", [id]);
        return rows as unknown as ResultSetHeader;
    }
    
}