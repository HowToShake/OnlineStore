const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  size: {
    type: String,
    //required: true,
  },
  price: {
    type: Number,
    //required: true,
  },
  amount: {
    type: Number,
  },
  imgURL: {
    type: String,
  },
});

const Item = mongoose.model("item", ItemSchema);

module.exports = Item;
