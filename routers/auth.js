const express = require('express');
const router = express.Router();
const { auth: { authenticated, unauthenticated } } = require('../middleware');
const { 
  auth: authController,
  oauth: oauthController
 } = require('../controllers');

router.route('/register')
  .all(unauthenticated)
  .get(authController.showRegister)
  .post(authController.register);

router.route('/login')
  .all(unauthenticated)
  .get(authController.showLogin)
  .post(authController.login);

router.get('/github', oauthController.github.authenticate)
router.get('/github/callback', oauthController.github.callback)

router.get('/vk', oauthController.vk.authenticate)
router.get('/vk/callback', oauthController.vk.callback)

router.get('/logout', authenticated, authController.logout);

module.exports = router;