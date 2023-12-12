const router = require('express').Router();
const Flavor = require('../models/Flavor');

router.get('/', async (req, res) => {
    try {
        const flavor = await Flavor.find();
        res.json({ flavor });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nome, descricao, precos } = req.body;
        const flavor = new Flavor({ nome, descricao, precos });
        await flavor.save();
        res.json({ flavor: flavor._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
