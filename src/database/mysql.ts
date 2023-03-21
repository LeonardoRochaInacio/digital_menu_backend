import mysql, {Connection, ConnectionOptions} from "mysql2/promise";

export class MySQLClient 
{
    public static instance: MySQLClient;
    private db : Promise<mysql.Connection>;
    
    private constructor() 
    {
        this.db = this.GetConnection();
    }

    public static GetInstance(): MySQLClient
    {
        if(!MySQLClient.instance)
        {
            MySQLClient.instance = new MySQLClient();
        }

        return MySQLClient.instance;
    }

    public GetConnection() : Promise<mysql.Connection>
    {     
        if(this.db)
        {
            return this.db;
        }

        return mysql.createConnection(
        {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME
        });
    }

    public async CloseConnection()
    {
        const conn: mysql.Connection = await this.db; 
        if(conn)
        {
            conn.end();
        }
    }

    public async Query(_query: string)
    {
        const conn: mysql.Connection = await this.GetConnection(); 
        return conn.query(_query);
    }

};