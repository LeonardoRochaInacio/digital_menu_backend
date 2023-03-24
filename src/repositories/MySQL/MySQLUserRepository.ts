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

    public async get(id: number)
    {
        const [rows] = await MySQLClient.GetInstance().Query("SELECT * FROM users WHERE id = ?", [id]);
        return (rows as any)[0] as unknown as Promise<User>;
    }
    
    public async create(item: User)
    {
        const [rows] = await MySQLClient.GetInstance().Query("INSERT INTO users (username, password, email, role, creation_date, last_login_date) VALUES (?, ?, ?, ?, ?, ?)", 
        [item.username, item.password, item.email, item.role, item.creation_date, item.last_login_date]);
        return rows as unknown as ResultSetHeader;
    }

    public async update(item: User)
    {
        const [rows] = await MySQLClient.GetInstance().Query("UPDATE users SET username = ?, password = ?, email= ?, role = ?, creation_date = ?, last_login_date = ? WHERE id = ?", 
        [item.username, item.password, item.email, item.role, item.creation_date, item.last_login_date, item.id]);
        return rows as unknown as ResultSetHeader;
    }
    
    public async delete(id: number)
    {
        const [rows] = await MySQLClient.GetInstance().Query("DELETE FROM users WHERE id = ?", [id]);
        return rows as unknown as ResultSetHeader;
    }
    

    public async getUserByName(username: string) 
    {
        const [row] = await MySQLClient.GetInstance().Query("SELECT id, username, password, email, creation_date, last_login_date, role FROM users WHERE username = ?", [username]);       
        return (row as any)[0] as unknown as Promise<User>;
    }

    public async updateLastLoginTime(id: number, newValue: number)
    {
        const [row] = await MySQLClient.GetInstance().Query("UPDATE users SET last_login_date = ? WHERE id = ?", [id, newValue]);       
        return row as unknown as ResultSetHeader;
    }

}