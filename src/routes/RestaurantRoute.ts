import express, {Request, Response} from "express";
import { MySQLRestaurantRepository } from "../repositories/MySQL/MySQLRestaurantRepository";
import { MyRestaurantsController } from "../controllers/Restaurant/MyRestaurantsController";
import { auth } from "../middlewares/Auth";
import { UserRole } from "../models/User";

const router = express.Router();
const _RestaurantRepository = new MySQLRestaurantRepository();

router.get('/myrestaurants', auth(UserRole.basic), async (Request: Request, Response: Response) => 
{
    const Controller = new MyRestaurantsController(_RestaurantRepository);
    const Result = await Controller.handle(Request.body.id);
    Response.send(Result);
});

/*
router.post('/', async (Request: Request, Response: Response) => 
{
    const Controller = new RestaurantController(_RestaurantRepository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

/*
router.delete('/', async (Request: Request, Response: Response) => 
{
    const Controller = new RestaurantController(_RestaurantRepository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

/*
router.put('/', async (Request: Request, Response: Response) => 
{
    const Controller = new RestaurantController(_RestaurantRepository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

module.exports = router;