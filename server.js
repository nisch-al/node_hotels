import express from "express";
const app = express();

import db from "./db.js";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
app.use(bodyParser.json()); //req.body
import Menu from "./models/menu.js";
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Hotel Management System");
});
import personRoute from "./routes/PersonRoutes.js";

import menuRoute from "./routes/MenuRoutes.js";
app.use("/person", personRoute);
app.use("/menu", menuRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
