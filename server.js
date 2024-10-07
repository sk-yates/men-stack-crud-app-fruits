const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
});

const Fruit = require('./models/fruit');

// Adding middleware to the app
app.use(express.urlencoded({extended: false}));

app.get("/", async (req, res) => {
    res.render('index.ejs')
});

app.get('/fruits/new', (req, res) => {
    res.render('./fruits/new.ejs');
});



app.post('/fruits', async (req, res) => {
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    } 

    await Fruit.create(req.body);
    res.redirect('/fruits/new');
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});