import express from "express";
import { MySQLRestaurantRepository } from "../repositories/MySQL/MySQLRestaurantRepository";
import { GetRestaurantController } from "../controllers/Restaurant/GetRestaurantController";
import { GetAllRestaurantsController } from "../controllers/Restaurant/GetAllRestaurantsController";
import { CreateRestaurantController } from "../controllers/Restaurant/CreateRestaurantController";
import { Restaurant } from "../models/Restaurant";
import { DeleteRestaurantController } from "../controllers/Restaurant/DeleteRestaurantController";
import { UpdateRestaurantController } from "../controllers/Restaurant/UpdateRestaurantController";

const router = express.Router();
const _RestaurantRepository = new MySQLRestaurantRepository();

router.get('/', async (req, res) => 
{
    const Controller = new GetAllRestaurantsController(_RestaurantRepository);
    const Result = (await Controller.handle());
    res.send(Result);
});

router.get('/:id', async (req, res) => 
{
    const Controller = new GetRestaurantController(_RestaurantRepository);
    const Result = (await Controller.handle(req.params.id as unknown as number));
    res.send(Result);
});

router.post('/', async (req, res) => 
{
    const Controller = new CreateRestaurantController(_RestaurantRepository);
    const Result = await Controller.handle(req.body as Restaurant);
    res.send(Result);
});

router.delete('/:id', async (req, res) => 
{
    const Controller = new DeleteRestaurantController(_RestaurantRepository);
    const Result = await Controller.handle(req.params.id as unknown as number);
    res.send(Result);
});

router.put('/', async (req, res) => 
{
    const Controller = new UpdateRestaurantController(_RestaurantRepository);
    const Result = await Controller.handle(req.body as Restaurant);
    res.send(Result);
});

module.exports = router;