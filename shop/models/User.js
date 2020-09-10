const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  orders: [
    {
      status: { type: String, required: true },
      orderedItems: [
        {
          itemID: { type: String, required: true },
          amount: { type: Number, required: true },
        },
      ],
      price: { type: String, required: true },
      receiverInfo: {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        address: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        deliveryMethod: { type: String, required: true },
      },
    },
  ],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
