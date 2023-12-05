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

mongoose.connect('mongodb+srv://victorbonilha:Ga4RVWVwaQ6vBCmM@pizzaria.yr0hvt9.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(3000, () => {
        console.log('Conectado ao Mongo');
    });
})
