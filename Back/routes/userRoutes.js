const router = require('express').Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    try {
        console.log("teste");
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.json({ user: user._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    });

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
            if (!user) {
                res.status(400).json({ error: 'Usuário não encontrado' });
                return;
            }
            if (user.password !== password) {
                res.status(400).json({ error: 'Senha inválida' });
                return;
            }
            res.json({user});
        }
     catch (error) {
        res.status(500).json({ error: error.message });
    }
    });

    module.exports = router;
