import express, {Express, Request, Response} from "express";
import * as dotenv from "dotenv";
import { GetMenuItemsController } from "./controllers/GetMenuItemsController";
import { MenuItem } from "./models/MenuItem";
import { MySQLMenuItemsRepository } from "./repositories/MySQLMenuItemsRepository";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.get('/', async (req, res) => {
    
    const test_getmenuitems = new MySQLMenuItemsRepository();

    const test_controller = new GetMenuItemsController(test_getmenuitems);

    const result : any = await test_controller.handle();
    res.send(result);
});

app.listen(port, () => console.log(`listing server on ${port}!`));