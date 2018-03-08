const router = require('express').Router();

const { tshirt: tshirtController } = require('../controllers');

router.param('id', tshirtController.tshirt.find)

router.route('/')
  .get(tshirtController.tshirts.get)
  .post(tshirtController.tshirts.post);

router.route('/:id')
  .get(tshirtController.tshirt.get)
  .put(tshirtController.tshirt.put)
  .delete(tshirtController.tshirt.delete)

router.route('/:id/price')
  .put(tshirtController.tshirt.price.put)

module.exports = router;