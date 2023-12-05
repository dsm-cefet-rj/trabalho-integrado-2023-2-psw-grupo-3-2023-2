const mongoose = require('mongoose');

const user = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    });

   module.exports = user;


