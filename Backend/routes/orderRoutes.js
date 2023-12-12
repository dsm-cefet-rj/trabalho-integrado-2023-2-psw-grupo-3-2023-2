const router = require('express').Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    try {
        console.log("order");
        const { tamanho, sabor, ingredientes } = req.body;
        const order = new Order({ tamanho, sabor, ingredientes });
        await order.save();
        res.json({ order: order._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
