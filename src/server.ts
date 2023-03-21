import express, {Express, Request, Response} from "express";
import * as dotenv from "dotenv";
import { GetMenuItemController } from "./controllers/GetMenuItemController";
import { MenuItem } from "./models/MenuItem";
import { MySQLMenuItemsRepository } from "./repositories/MySQLMenuItemsRepository";
import { CreateMenuItemController } from "./controllers/CreateMenuItemController";
import { DeleteMenuItemController } from "./controllers/DeleteMenuItemController";
import { UpdateMenuItemController } from "./controllers/UpdateMenuItemController copy";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.get('/', async (req, res) => {
    
    const test_getmenuitems = new MySQLMenuItemsRepository();

    const test_controller = new UpdateMenuItemController(test_getmenuitems);
    const test_controller2 = new GetMenuItemController(test_getmenuitems);
    const result1 : MenuItem = (await test_controller2.handle(7)).body as MenuItem;
    const result2 : any = await test_controller.handle({id: 7, price: 1000, description: result1.description, title: result1.title, restaurant_id: result1.restaurant_id})
    res.send(result2);
});

app.listen(port, () => console.log(`listing server on ${port}!`));