const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

router.post("/", (req, res) => {
  const { name, email, password, role = "user", orders = [] } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ msg: "Enter all fields!" });
  }

  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User already exists!" });
    }
    const newUser = new User({
      name,
      email,
      password,
      role,
      orders,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;

              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                  orders: user.orders,
                },
              });
            }
          );
        });
      });
    });
  });
});

router.put("/:id", (req, res) => {
  User.updateOne({
    $push: {
      orders: [
        {
          status: "Pending",
          orderedItems: [
            {
              itemID: "5f2e859c4c3aaa23e0de220a",
              amount: "3",
            },
            {
              itemID: "5f2e882745fded2e6835a68e",
              amount: "1",
            },
          ],
          price: "$5",
          receiverInfo: {
            name: "JA",
            surname: "MY",
            address: "ULICA 16 MIASTO, KOD-POCZTOWY",
            phoneNumber: "+48 123 456 789",
            deliveryMethod: "PACZKOMAT",
          },
        },
      ],
    },
  })
    .then((items) => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
