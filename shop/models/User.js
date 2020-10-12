const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    orders: [
        {
            status: { type: String, required: true },
            orderedItems: [{}],
            price: { type: String, required: true },
            receiverInfo: {
                name: { type: String, required: true },
                surname: { type: String, required: true },
                address: { type: String, required: true },
                phoneNumber: { type: String, required: true },
                phoneNumberPrefix: { type: String, required: false },
                deliveryMethod: { type: String, required: true },
                paymentMethod: { type: String, required: true },
                cardNumber: {type: Number, required: false},
                cardOwnerName: {type: String, required: false},
                validUntil: {type: Date, required: false},
                CVC: {type: Number, required: false},
            },
        },
    ],
})

const User = mongoose.model("user", UserSchema)

module.exports = User
