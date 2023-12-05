const mongoose = require('mongoose');

const user = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    cellPhone: String,
    });

   module.exports = user;


