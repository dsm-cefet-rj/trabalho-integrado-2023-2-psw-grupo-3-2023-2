const mongoose = require('mongoose');
const Flavor = require('./Flavor');
const Ingredient = require('./Ingredient');

const order = mongoose.model('Order', {
     tamanho: String,
     sabor: { type: mongoose.Schema.Types.ObjectId, ref: 'Flavor' },
     ingredientes: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
});

module.exports = order;