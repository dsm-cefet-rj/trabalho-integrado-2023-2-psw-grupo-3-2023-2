const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const userRoutes = require('./routes/userRoutes');
app.use("/user", userRoutes);

const addressRoutes = require('./routes/addressRoutes');
app.use("/address", addressRoutes);

const cardRoutes = require('./routes/cardRoutes');
app.use("/card", cardRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use("/order", orderRoutes);

const flavorRoutes = require('./routes/flavorRoutes');
app.use("/flavor", flavorRoutes);

const ingredientRoutes = require('./routes/ingredientRoutes');
app.use("/ingredient", ingredientRoutes);

mongoose.connect('mongodb+srv://victorbonilha:Ga4RVWVwaQ6vBCmM@pizzaria.yr0hvt9.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(3001, () => {
        console.log('Conectado ao Mongo');
    });
})

