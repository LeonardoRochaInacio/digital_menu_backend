import express, {Request, Response} from "express";
import { MySQLMenuItemRepository } from "../repositories/MySQL/MySQLMenuItemRepository";
import { GetRestaurantMenuItemsController } from "../controllers/MenuItem/GetRestaurantMenuItemsController";
import { UserRole } from "../models/User";
import { auth } from "../middlewares/Auth";

const router = express.Router();
const _MenuItemRepository = new MySQLMenuItemRepository();

router.get('/:restaurant_id', async (Request: Request, Response: Response) => 
{
    const Controller = new GetRestaurantMenuItemsController(_MenuItemRepository);
    const Result = await Controller.handle(Request.params.restaurant_id);
    Response.send(Result);
});

/*
router.post('/', async (Request: Request, Response: Response) => 
{
    const Controller = new MenuItemController(_MenuItemRepository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

/*
router.delete('/', async (Request: Request, Response: Response) => 
{
    const Controller = new MenuItemController(_MenuItemRepository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

/*
router.put('/', async (Request: Request, Response: Response) => 
{
    const Controller = new MenuItemController(_MenuItemRepository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

module.exports = router;