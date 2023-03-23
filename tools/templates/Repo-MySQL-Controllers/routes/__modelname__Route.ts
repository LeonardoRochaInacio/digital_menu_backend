import express from "express";
import { MySQL__modelname__Repository } from "../repositories/MySQL/MySQL__modelname__Repository";
import { Get__modelname__Controller } from "../controllers/__modelname__/Get__modelname__Controller";
import { GetAll__modelname__sController } from "../controllers/__modelname__/GetAll__modelname__sController";
import { Create__modelname__Controller } from "../controllers/__modelname__/Create__modelname__Controller";
import { __modelname__ } from "../models/__modelname__";
import { Delete__modelname__Controller } from "../controllers/__modelname__/Delete__modelname__Controller";
import { Update__modelname__Controller } from "../controllers/__modelname__/Update__modelname__Controller";

const router = express.Router();
const ___modelname__Repository = new MySQL__modelname__Repository();

router.get('/', async (req, res) => 
{
    const Controller = new GetAll__modelname__sController(___modelname__Repository);
    const Result = (await Controller.handle());
    res.send(Result);
});

router.get('/:id', async (req, res) => 
{
    const Controller = new Get__modelname__Controller(___modelname__Repository);
    const Result = (await Controller.handle(req.params.id as unknown as number));
    res.send(Result);
});

router.post('/', async (req, res) => 
{
    const Controller = new Create__modelname__Controller(___modelname__Repository);
    const Result = await Controller.handle(req.body as __modelname__);
    res.send(Result);
});

router.delete('/:id', async (req, res) => 
{
    const Controller = new Delete__modelname__Controller(___modelname__Repository);
    const Result = await Controller.handle(req.params.id as unknown as number);
    res.send(Result);
});

router.put('/', async (req, res) => 
{
    const Controller = new Update__modelname__Controller(___modelname__Repository);
    const Result = await Controller.handle(req.body as __modelname__);
    res.send(Result);
});

module.exports = router;