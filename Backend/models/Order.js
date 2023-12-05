const mongoose = require('mongoose');

const order = mongoose.model('Order', {
    orders: [
        {
            tamanho: String,
            sabor: String,
            ingredientes: [
                {
                    id: String,
                    nome: String,
                    valor: Number,
                },
            ],
        },
    ]
});

module.exports = order;