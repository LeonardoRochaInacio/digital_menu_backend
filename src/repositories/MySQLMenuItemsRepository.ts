import { ReadWriteRepository } from "../core/repository/types/ReadWriteRepository";
import { MySQLClient } from "../database/MySQL";
import { MenuItem } from "../models/MenuItem";

export class MySQLMenuItemsRepository extends ReadWriteRepository<MenuItem>
{
    public async getAll()
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM menuitems");
        return rows as unknown as Promise<MenuItem[]>;
    }

    public async get(id: string)
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM menuitems WHERE id = ?", [id]);
        return rows as unknown as Promise<MenuItem>;
    }
    
    public async create(item: MenuItem)
    {
        return undefined as unknown as Promise<boolean>;
    }

    public async update(id: string, item: MenuItem)
    {
        return undefined as unknown as Promise<boolean>;
    }
    
    public async delete(id: string)
    {
        return undefined as unknown as Promise<boolean>;
    }
    
}