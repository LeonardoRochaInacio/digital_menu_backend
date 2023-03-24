import express, {Express, Request, Response} from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({origin: '*'}));
app.use("/user", require("./routes/UserRoute"));
//app.use("/menuitem", require("./routes/MenuItemRoute"));
//app.use("/restaurant", require("./routes/RestaurantRoute"));


app.listen(port, () => console.log(`listening server on ${port}!`));