const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registration');

router.get('/', registrationController.showRegistration);

module.exports = router;