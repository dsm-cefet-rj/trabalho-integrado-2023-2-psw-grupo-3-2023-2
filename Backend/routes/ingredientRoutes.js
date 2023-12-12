const router = require('express').Router();
const Ingredient = require('../models/Ingredient');

router.get ('/get', async (req, res) => {
    try {
        const ingredient = await Ingredient.find();
        res.json({ ingredient });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post ('/', async (req, res) => {
    try {
        const { nome, preco } = req.body;
        const ingredient = new Ingredient({ nome, preco });
        await ingredient.save();
        res.json({ ingredient: ingredient._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
