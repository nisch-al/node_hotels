import express from "express";
const router = express.Router();
import Person from "../models/person.js";

router.post("/", async (req, res) => {
  try {
    const data = req.body; //we assume the req contain the person data
    const newPerson = new Person(data); //create a new person document using mongoose model
    const response = await newPerson.save(); //save the new person to the database
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    console.log("data retrieved");
    res.status(200).json(persons);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    console.log(workType);
    if (
      workType === "manager" ||
      workType === "chef" ||
      workType === "waiter"
    ) {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Invalid work type" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract person id from url
    const updateData = req.body; //data to update
    //console.log("updateData:", updateData);
    const response = await Person.findByIdAndUpdate(personId, updateData, {
      new: true, //return the updated document
      runValidators: true 
    }); //update person data
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.delete("/:id" , async (req,res) => {
    try {
        const personId = req.params.id;
        // const deleteData = req.body;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: "Person not found"});
        }
        console.log("data deleted");
        res.status(200).json({message: "Person deleted successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})
export default router;
