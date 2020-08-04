const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var fs = require('fs');

const ItemSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    size:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    amount:{
        type: Number,
    },
    img:{
        data: Buffer,
        contentType: String,
    }
});

const Item  = mongoose.model('item', ItemSchema);

module.exports  = Item;