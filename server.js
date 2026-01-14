import express from "express";

const app = express();
import db from "./db.js";
import bodyParser from "body-parser";
app.use(bodyParser.json()); //req.body
import Menu from "./models/menu.js";

app.get("/", (req, res) => {
  res.send("Welcome to the Hotel Management System");
});
import personRoute from "./routes/PersonRoutes.js";

import menuRoute from "./routes/MenuRoutes.js";
app.use("/person", personRoute);
app.use("/menu", menuRoute);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
