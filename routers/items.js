const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items');

router.get('/', itemsController.showItems);
router.get('/:id', itemsController.showItem);

module.exports = router;