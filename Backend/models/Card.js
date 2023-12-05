const mongoose = require('mongoose');

const card = mongoose.model('Card', {
    name: String,
    cardNumber: String,
    date: String,
    cvv: String,
    });

   module.exports = card;