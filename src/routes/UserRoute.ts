import express from "express";
import { MySQLUserRepository } from "../repositories/MySQL/MySQLUserRepository";
import { GetUserController } from "../controllers/User/GetUserController";
import { GetAllUsersController } from "../controllers/User/GetAllUsersController";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { User } from "../models/User";
import { DeleteUserController } from "../controllers/User/DeleteUserController";
import { UpdateUserController } from "../controllers/User/UpdateUserController";

const router = express.Router();
const _UserRepository = new MySQLUserRepository();

router.get('/', async (req, res) => 
{
    const Controller = new GetAllUsersController(_UserRepository);
    const Result = (await Controller.handle());
    res.send(Result);
});

router.get('/:id', async (req, res) => 
{
    const Controller = new GetUserController(_UserRepository);
    const Result = (await Controller.handle(req.params.id as unknown as number));
    res.send(Result);
});

router.post('/', async (req, res) => 
{
    const Controller = new CreateUserController(_UserRepository);
    const Result = await Controller.handle(req.body as User);
    res.send(Result);
});

router.delete('/:id', async (req, res) => 
{
    const Controller = new DeleteUserController(_UserRepository);
    const Result = await Controller.handle(req.params.id as unknown as number);
    res.send(Result);
});

router.put('/', async (req, res) => 
{
    const Controller = new UpdateUserController(_UserRepository);
    const Result = await Controller.handle(req.body as User);
    res.send(Result);
});

module.exports = router;