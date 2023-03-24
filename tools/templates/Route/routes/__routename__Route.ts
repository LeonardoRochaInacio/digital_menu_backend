import express, {Request, Response} from "express";
import { MySQL__modelname__Repository } from "../repositories/MySQL/MySQL__modelname__Repository";
import { __controllername__Controller } from "../controllers/__modelname__/__controllername__Controller";

const router = express.Router();
const ___modelname__Repository = new MySQL__modelname__Repository();

/*
router.get('/', async (Request: Request, Response: Response) => 
{
    const Controller = new __controllername__Controller(___modelname__Repository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

/*
router.post('/', async (Request: Request, Response: Response) => 
{
    const Controller = new __controllername__Controller(___modelname__Repository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

/*
router.delete('/', async (Request: Request, Response: Response) => 
{
    const Controller = new __controllername__Controller(___modelname__Repository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

/*
router.put('/', async (Request: Request, Response: Response) => 
{
    const Controller = new __controllername__Controller(___modelname__Repository);
    const Result = await Controller.handle(Request.body);
    Response.send(Result);
});
*/

module.exports = router;