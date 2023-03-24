import { ResultSetHeader } from "mysql2";
import { IUserRepository } from "../interfaces/IUserRepository";
import { MySQLClient } from "../../database/MySQL";
import { User } from "../../models/User";

export class MySQLUserRepository extends IUserRepository<User, ResultSetHeader>
{
    
    public async getAll()
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM users");
        return rows as unknown as Promise<User[]>;
    }

    public async get(id: string)
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM users WHERE id = ?", [id]);
        return (rows as any)[0] as unknown as Promise<User>;
    }
    
    public async create(item: User)
    {
        const [rows] = await MySQLClient.GetInstance().Query("INSERT INTO users (username, password, role) VALUES (?, ?, ?)", 
        [item.username, item.password, item.role]);
        return rows as unknown as ResultSetHeader;
    }

    public async update(item: User)
    {
        const [rows] = await MySQLClient.GetInstance().Query("UPDATE users SET username = ?, password = ?, role = ? WHERE id = ?", 
        [item.username, item.password, item.role, item.id]);
        return rows as unknown as ResultSetHeader;
    }
    
    public async delete(id: string)
    {
        const [rows] = await MySQLClient.GetInstance().Query("DELETE FROM users WHERE id = ?", [id]);
        return rows as unknown as ResultSetHeader;
    }
    
    // Example of a custom parameter from the Interface
    public async getUserByName(username: string) 
    {
        const [row] = await MySQLClient.GetInstance().Query("SELECT id, username, role FROM users WHERE username = ?", [username]);
        return (row as any)[0] as unknown as Promise<User>;
    }

}