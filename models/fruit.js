const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
});

const Fruit = mongooose.model('Fruit', fruitSchema);

module.export = Fruit;