const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")

const User = require("../../models/User")

router.post("/", (req, res) => {
    const { name, email, password, role = "user", orders = [] } = req.body

    if (!name || !email || !password) {
        res.status(400).json({ msg: "Enter all fields!" })
    }

    User.findOne({ email }).then((user) => {
        if (user) {
            return res.status(400).json({ msg: "User already exists!" })
        }
        const newUser = new User({
            name,
            email,
            password,
            role,
            orders,
        })

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err
                newUser.password = hash
                newUser.save().then((user) => {
                    jwt.sign({ id: user.id }, config.get("jwtSecret"), { expiresIn: 3600 }, (err, token) => {
                        if (err) throw err

                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                role: user.role,
                                orders: user.orders,
                            },
                        })
                    })
                })
            })
        })
    })
})

router.put("/order/:userID/:orderID", (req, res) => {
    User.updateOne({ "_id": req.params.userID, "orders._id": req.params.orderID }, { $set: { "orders.$.status": "Resolved" } })
        .then((order) => res.json({ success: true }))
        .catch((err) => res.status(404).json({ success: false }))
})

router.put("/:id", (req, res) => {
    const { orderedItems, price, receiverInfo, status = "Pending" } = req.body
    console.log('attack')
    console.log(req.body);
    User.updateOne({
        $push: {
            orders: [
                {
                    status,
                    orderedItems,
                    price,
                    receiverInfo,
                },
            ],
        },
    })
        .then((order) => res.json({ success: true }))
        .catch((err) => res.status(404).json({ success: false }))
})

router.delete("/:id", (req, res) => {
    User.findById(req.params.id)
        .then((item) => item.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: false }))
})

module.exports = router
