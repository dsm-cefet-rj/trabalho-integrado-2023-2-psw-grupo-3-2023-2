const mongoose = require('mongoose');

const Flavor = mongoose.model('Flavor', {
    _id: String,
    id: Number,
    nome: String,
    descrição: String,
    preços: {
        '30cm': Number,
        '35cm': Number,
        '40cm': Number,
        '70cm': Number,
        '90cm': Number,
    }
});

module.exports = Flavor;