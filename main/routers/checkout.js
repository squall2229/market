const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout');

router.param('id', checkoutController.findItem)

router.route('/')
  .get(checkoutController.showCheckout)

router.route('/:id/delete')
  .get(checkoutController.showDelete)
  .post(checkoutController.deleteItem)


module.exports = router;