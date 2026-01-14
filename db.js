//this file is used to connect to the MongoDB database using mongoose

import mongoose from "mongoose";
//define the mongooose connection URL
const mongoURL = "mongodb://localhost:27017/hotels";

// Connect to MongoDB (NO deprecated options)
mongoose.connect(mongoURL);
//mongoose maintain a default connection object reprsenting the MONGOdb connection
const db = mongoose.connection;

//define the event listeners for the database connection
db.on("connected", () => {
  console.log("Mongoose connected");
});
db.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});
db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

//export the connection object
export default db;
