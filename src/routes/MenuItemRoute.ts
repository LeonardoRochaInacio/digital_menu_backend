import express from "express";
import { MySQLMenuItemRepository } from "../repositories/MySQL/MySQLMenuItemRepository";
import { GetMenuItemController } from "../controllers/MenuItem/GetMenuItemController";
import { GetAllMenuItemController } from "../controllers/MenuItem/GetAllMenuItemController";
import { GetAllMenuItemByRestaurantController } from "../controllers/MenuItem/GetAllMenuItemByRestaurantController";
import { CreateMenuItemController } from "../controllers/MenuItem/CreateMenuItemController";
import { MenuItem } from "../models/MenuItem";
import { DeleteMenuItemController } from "../controllers/MenuItem/DeleteMenuItemController";
import { UpdateMenuItemController } from "../controllers/MenuItem/UpdateMenuItemController";

const router = express.Router();
const MenuItemsRepository = new MySQLMenuItemRepository();

router.get('/', async (req, res) => 
{
    const Controller = new GetAllMenuItemController(MenuItemsRepository);
    const Result = (await Controller.handle());
    res.send(Result);
});

router.get('/:id', async (req, res) => 
{
    const Controller = new GetMenuItemController(MenuItemsRepository);
    const Result = (await Controller.handle(req.params.id as unknown as number));
    res.send(Result);
});

router.post('/', async (req, res) => 
{
    const Controller = new CreateMenuItemController(MenuItemsRepository);
    const Result = await Controller.handle(req.body as MenuItem);
    res.send(Result);
});

router.delete('/:id', async (req, res) => 
{
    const Controller = new DeleteMenuItemController(MenuItemsRepository);
    const Result = await Controller.handle(req.params.id as unknown as number);
    res.send(Result);
});

router.put('/', async (req, res) => 
{
    const Controller = new UpdateMenuItemController(MenuItemsRepository);
    const Result = await Controller.handle(req.body as MenuItem);
    res.send(Result);
});

router.get('/restaurant/:restaurant_id', async (req, res) => 
{
    const Controller = new GetAllMenuItemByRestaurantController(MenuItemsRepository);
    const Result = (await Controller.handle(req.params.restaurant_id as unknown as number));
    res.send(Result);
});


module.exports = router;