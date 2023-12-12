const mongoose = require('mongoose');

const ingredient = mongoose.model('Ingredient', {
    _id: String,
    nome: String,
    preco: Number,
    });

   module.exports = ingredient;