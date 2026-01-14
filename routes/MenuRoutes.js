import express from "express";
const router = express.Router();
import Menu from "../models/menu.js";

router.post("/menu", async (req, res) => {
  try {
    const data = req.body; //we assume the req contain the menu data
    const newMenu = new Menu(data); //create a new menu document using mongoose model
    const response = await newMenu.save(); //save the new menu to the database
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
export default router;