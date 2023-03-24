import express from "express";
import { MySQL__modelname__Repository } from "../repositories/MySQL/MySQL__modelname__Repository";
import { __modelname__ } from "../models/__modelname__";
import { __controllername__Controller } from "../controllers/__modelname__/__controllername__Controller";

const router = express.Router();
const ___modelname__Repository = new MySQL__modelname__Repository();

/*
router.get('/', async (req, res) => 
{
    const Controller = new __controllername__Controller(___modelname__Repository);
    const Result = await Controller.handle();
    res.send(Result);
});
*/

/*
router.post('/', async (req, res) => 
{
    const Controller = new __controllername__Controller(___modelname__Repository);
    const Result = await Controller.handle();
    res.send(Result);
});
*/

/*
router.delete('/', async (req, res) => 
{
    const Controller = new __controllername__Controller(___modelname__Repository);
    const Result = await Controller.handle();
    res.send(Result);
});
*/

/*
router.put('/', async (req, res) => 
{
    const Controller = new __controllername__Controller(___modelname__Repository);
    const Result = await Controller.handle();
    res.send(Result);
});
*/

module.exports = router;