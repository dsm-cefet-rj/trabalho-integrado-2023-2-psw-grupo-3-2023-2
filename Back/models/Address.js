const mongoose = require('mongoose');

const address = mongoose.model('Address', {
    number: String,
    street: String,
    complement: String,
    neighborhood: String,
    }); 

   module.exports = address;