const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    albumName: {
        type: String,
        required: true,
    },
    band: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["CD", "VINYL", "DVD", "MP3"],
        default: "CD",
    },
    price: {
        type: Number,
    },
    amount: {
        type: Number,
    },
    imgURL: {
        type: String,
    },
})

const Item = mongoose.model("item", ItemSchema)

module.exports = Item
