import express from "express";
import { MySQLMenuItemRepository } from "../repositories/MySQLMenuItemRepository";
import { UpdateMenuItemController } from "../controllers/MenuItem/UpdateMenuItemController copy";
import { GetMenuItemController } from "../controllers/MenuItem/GetMenuItemController";
import { GetAllMenuItemController } from "../controllers/MenuItem/GetAllMenuItemController";
import { GetAllMenuItemByRestaurantController } from "../controllers/MenuItem/GetAllMenuItemByRestaurantController";

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

router.get('/restaurant/:restaurant_id', async (req, res) => 
{
    const Controller = new GetAllMenuItemByRestaurantController(MenuItemsRepository);
    const Result = (await Controller.handle(req.params.restaurant_id as unknown as number));
    res.send(Result);
});


module.exports = router;