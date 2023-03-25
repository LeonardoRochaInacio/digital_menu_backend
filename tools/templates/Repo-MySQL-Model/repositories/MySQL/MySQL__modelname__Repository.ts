import { ResultSetHeader } from "mysql2";
import { I__modelname__Repository } from "../interfaces/I__modelname__Repository";
import { MySQLClient } from "../../database/MySQL";
import { __modelname__ } from "../../models/__modelname__";

export class MySQL__modelname__Repository extends I__modelname__Repository<__modelname__, ResultSetHeader>
{
    
    public async getAll()
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM __modelname__");
        return rows as unknown as Promise<__modelname__[]>;
    }

    public async get(id: number)
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM __modelname__ WHERE id = ?", [id]);
        return (rows as any)[0] as unknown as Promise<__modelname__>;
    }
    
    public async create(item: __modelname__)
    {
        const [rows] = await MySQLClient.GetInstance().Query("INSERT INTO __modelname__ (p1, p2, p3) VALUES (?, ?, ?)", 
        [item.p1, item.p2, item.p3]);
        return rows as unknown as ResultSetHeader;
    }

    public async update(item: __modelname__)
    {
        const [rows] = await MySQLClient.GetInstance().Query("UPDATE __modelname__ SET p1 = ?, p2 = ?, p3 = ? WHERE id = ?", 
        [item.p1, item.p2, item.p3, item.id]);
        return rows as unknown as ResultSetHeader;
    }
    
    public async delete(id: number)
    {
        const [rows] = await MySQLClient.GetInstance().Query("DELETE FROM __modelname__ WHERE id = ?", [id]);
        return rows as unknown as ResultSetHeader;
    }
    
    // Example of a custom parameter from the Interface
    //public async get__modelname__ByCustomParameter(customParameter: number) 
    //{
    //    const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM __modelname__ WHERE customParameter = ?", [customParameter]);
    //    return rows as unknown as Promise<__modelname__[]>;
    //}

}