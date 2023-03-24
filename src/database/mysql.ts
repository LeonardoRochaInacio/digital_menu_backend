import mysql, {Connection, ConnectionOptions, FieldPacket, OkPacket, ResultSetHeader, RowDataPacket} from "mysql2/promise";

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
            conn.destroy();
        }
    }

    public async Query(_query: string, _values?: any) : Promise<[RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader, FieldPacket[]]>
    {
            const conn: mysql.Connection = await this.GetConnection(); 
            let ret: Promise<any> = undefined as unknown as Promise<any>;

            try
            {
                if(_values)
                {
                    ret = conn.query(_query, _values);    
                }
                else
                {
                    ret =  conn.query(_query);
                }
            }
            catch(error)
            {
                console.log(error);
            }
            finally
            {
                this.CloseConnection();
                this.db = undefined as unknown as Promise<any>;
            }

            return ret;
            
    }

};