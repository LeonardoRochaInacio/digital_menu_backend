import { MenuItem } from "../../models/menuitem";
import { HttpResponse } from "../ControllersInterfaces";

export interface IGetMenuItemsController
{
    handle: Promise<HttpResponse<MenuItem[]>>;
}

export interface IGetMenuItemsRepository
{
    getMenuItems(): Promise<MenuItem[]>;
}