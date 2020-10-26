const express = require("express")
const router = express.Router()

const Item = require("../../models/Item")

router.post("/", (req, res) => {
    const newItem = new Item({
        albumName: req.body.albumName,
        band: req.body.band,
        category: req.body.category,
        type: req.body.type,
        price: req.body.price,
        amount: req.body.amount,
        imgURL: req.body.imgURL,
    })

    newItem.save().then((item) => res.json({success: true}))
})

router.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then((items) => res.json(items))
})

router.get("/search?", (req, res) => {
    const { searchValue, selectedCategory } = req.query

    if (selectedCategory === "All") {
        Item.find({ albumName: { $regex: searchValue } })
            .sort({ albumName: -1 })
            .then((items) => res.json(items))
    } else {
        Item.find({
            albumName: { $regex: searchValue },
            category: { $regex: selectedCategory },
        })
            .sort({ category: -1 })
            .then((items) => res.json(items))
    }
})

router.get("/category?", (req, res) => {
    const { selectedCategory } = req.query;

    Item.find({category: {$regex: selectedCategory}})
        .sort({band: 1})
        .then((items) => res.json(items));
})

router.get("/categories", (req, res) => {
    Item.distinct("category").then((categories) => res.json(categories))
})

router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then((item) => item.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: false }))
})

router.put("/:id", (req, res) => {
    console.log(req.body)
    Item.updateOne({
        name: "Water",
    })
        .then((items) => res.json({ success: true }))
        .catch((err) => res.status(404).json({ success: false }))
})

module.exports = router
