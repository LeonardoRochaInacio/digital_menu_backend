import express from "express";
import { MySQLUserRepository } from "../repositories/MySQL/MySQLUserRepository";
import { User } from "../models/User";
import { LoginController } from "../controllers/User/LoginController";

const router = express.Router();
const _UserRepository = new MySQLUserRepository();

router.post('/', async (req, res) => 
{
    const Controller = new LoginController(_UserRepository);
    const Result = await Controller.handle(req.body);
    res.send(Result);
});

module.exports = router;