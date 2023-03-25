import express, {Request, Response, NextFunction} from "express";
import { MySQLUserRepository } from "../repositories/MySQL/MySQLUserRepository";
import { LoginController } from "../controllers/User/LoginController";
import { RegisterController } from "../controllers/User/RegisterController";
import { auth } from "../middlewares/Auth";
import { UserRole } from "../models/User";

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

router.post('/register', auth(UserRole.sysadmin), async (Request: Request, Response: Response) => 
{
    const Controller = new RegisterController(_UserRepository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});

module.exports = router;