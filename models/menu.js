import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['starter', 'main course', 'dessert', 'beverage'],
        required: true
    },
    description: {
        type: String,
    },
    isAvailable: { 
        type: Boolean,
        default: true 
    }
});
const Menu = mongoose.model("Menu", menuSchema);
export default Menu;