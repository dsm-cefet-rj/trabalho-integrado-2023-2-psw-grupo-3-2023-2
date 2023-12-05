const router = require('express').Router();
const Order = require('../models/Order');

router.post('/signup', async (req, res) => {
    try {
        console.log("order");
        const { orders: orderData } = req.body;
        const order = new Order({ orders: orderData });
        await order.save();
        res.json({ order: order._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
