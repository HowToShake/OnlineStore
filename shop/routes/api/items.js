const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');


router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        category: req.body.category,
        size: req.body.size,
        price: req.body.price,
        amount: req.body.amount,
        imgURL: req.body.imgURL
    });

    newItem.save().then(item => res.json(item));
});


router.get('/',(req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items));
});

router.get('/search?',(req,res) => {
    const {searchValue, selectedCategory} = req.query;
    
    if(selectedCategory === 'All'){
        Item.find({ name: { $regex: searchValue } }).sort({name: 1}).then(items => res.json(items));
    }else{
        Item.find({ name: { $regex: searchValue }, category: { $regex: selectedCategory } }).sort({category: 1}).then(items => res.json(items));
    }
})

router.get('/categories', (req,res) => {
    Item.distinct('category').then(categories => res.json(categories));
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
        .catch(err => res.status(404).json({success: false}));
});


module.exports =  router;