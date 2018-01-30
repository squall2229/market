const express = require('express');
const router = express.Router();
const { auth: { authenticated, unauthenticated } } = require('../middleware');
const authController = require('../controllers/auth');

router.route('/register')
  .all(unauthenticated)
  .get(authController.showRegister)
  .post(authController.register)

router.route('/login')
  .all(unauthenticated)
  .get(authController.showLogin)
  .post(authController.login)

router.get('/logout', authenticated, authController.logout);

module.exports = router;