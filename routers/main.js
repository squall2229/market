const { Router } = require('express');
const router = Router();
const { main: { showMain, showItem } } = require('../controllers');

// router.param('id', findOne);
router.get('/', showMain);
router.get('/item/:id', showItem);

module.exports = router;