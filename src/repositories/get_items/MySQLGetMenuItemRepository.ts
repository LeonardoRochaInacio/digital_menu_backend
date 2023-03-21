import { IGetMenuItemsRepository } from "../../controllers/get_items/GetMenuItemsInterfaces";
import { MySQLClient } from "../../database/mysql";
import { MenuItem } from "../../models/menuitem";

/*
bymenu_adm
~J4rKSHa6
*/

export class MySQLGetMenuItemRepository implements IGetMenuItemsRepository
{
    async getMenuItems(): Promise<MenuItem[]> 
    {
        const [rows] = await (await MySQLClient.GetInstance().GetConnection()).query("SELECT * FROM menuitems");
        return rows as unknown as Promise<MenuItem[]>;
    }
}