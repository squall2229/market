const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/delivery');

router.get('/', deliveryController.showDelivery);

module.exports = router;