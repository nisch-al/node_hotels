import mongoose from "mongoose";    
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    } 
});
//create a model using the schema
const Person = mongoose.model("Person", personSchema);
//export the model
export default Person; 