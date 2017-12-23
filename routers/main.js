const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello Express');
});

router.get('/about', (req, res) => {
    res.send('About');
});

router.get('/delivery', (req, res) => {
    res.send('delivery');
});

module.exports = router;