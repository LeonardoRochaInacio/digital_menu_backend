import express, {Request, Response, NextFunction} from "express";
import { MySQLUserRepository } from "../repositories/MySQL/MySQLUserRepository";
import { LoginController } from "../controllers/User/LoginController";
import { RegisterController } from "../controllers/User/RegisterController";

interface LoginData
{
    username: string;
    password: string;
}

const router = express.Router();
const _UserRepository = new MySQLUserRepository();

router.post('/login', async (Request: Request, Response: Response) => 
{
    const Controller = new LoginController(_UserRepository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});

router.post('/register', async (Request: Request, Response: Response) => 
{
    const Controller = new RegisterController(_UserRepository);
    console.log(Request.body);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});

module.exports = router;