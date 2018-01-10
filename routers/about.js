const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/about');

router.get('/', checkoutController.showAbout);

module.exports = router;