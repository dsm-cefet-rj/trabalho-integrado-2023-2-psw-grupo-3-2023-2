const router = require('express').Router();
const Address = require('../models/Address');

router.post('/signup', async (req, res) => {
    try {
        console.log("address");
        const { number, street, complement, neighborhood } = req.body;
        const address = new Address({ number, street, complement, neighborhood });
        await address.save();
        res.json({ address: address._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    });

router.get('/list', async (req, res) => {
    try {
        const address = await Address.find();
        res.json({ address });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    });

    module.exports = router;