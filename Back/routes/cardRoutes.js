const router = require('express').Router();
const Card = require('../models/Card');

router.post('/signup', async (req, res) => {
    try {
        console.log("card");
        const { name, cardNumber, validate, cvv } = req.body;
        const card = new Card({ name, cardNumber, validate, cvv });
        await card.save();
        res.json({ card: card._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    });

    module.exports = router;