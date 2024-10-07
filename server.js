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

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get("/", async (req, res) => {
    res.render('index.ejs')
});