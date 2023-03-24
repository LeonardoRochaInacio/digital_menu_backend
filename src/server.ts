import express, {Express, Request, Response} from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/user", require("./routes/UserRoute"));
app.use("/menuitem", require("./routes/MenuItemRoute"));
app.use("/restaurant", require("./routes/RestaurantRoute"));
app.use("/login", require("./routes/LoginRoute"));

app.listen(port, () => console.log(`listing server on ${port}!`));