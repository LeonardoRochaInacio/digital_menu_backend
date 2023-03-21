import { IGetMenuItemsController, IGetMenuItemsRepository } from "./GetMenuItemsInterfaces";
import ErrorDefault from "../../core/ErrorDefault";
import { HttpResponse } from "../ControllersInterfaces";
import { MenuItem } from "../../models/menuitem";

export class GetMenuItemsController implements IGetMenuItemsController
{
    private readonly _getMenuItemsRepository : IGetMenuItemsRepository;

    constructor(_getMenuItemsRepository: IGetMenuItemsRepository)
    {
        this._getMenuItemsRepository = _getMenuItemsRepository;
    }

    async handle()
    {
        try
        {
            const menuItems = await this._getMenuItemsRepository.getMenuItems();
            return {statusCode: 200, body: menuItems};

        }
        catch(error)
        {
            return {statusCode: 200, body: new ErrorDefault().GetErrorMessage(error as string) };
        }
    }
}