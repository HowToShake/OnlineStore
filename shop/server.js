const express = require('express');
const mongoose = require('mongoose');
const config = require('config')
const cors = require('cors');

const items = require('./routes/api/items');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const app = express();

app.use(cors());
app.use(express.json());

const db = config.get('mongoURI');

mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.use('/api/items', items);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));