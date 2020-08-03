const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});


router.get('/',(req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items));
})


router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

router.put("/:id", (req,res) => {
    console.log(req.body);
    Item.updateOne({
        name: 'Water'
    })
        .then(items => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}))
})




module.exports =  router;