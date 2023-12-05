const mongoose = require('mongoose');

const card = mongoose.model('Card', {
    name: String,
    cardNumber: String,
    validate: String,
    cvv: String,
    });

   module.exports = card;