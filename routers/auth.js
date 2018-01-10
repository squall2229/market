const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/login', authController.showLogin);
router.get('/register', authController.showRegister);

module.exports = router;