const { Router } = require('express');
const router = Router();
const { main: { showMain, showItem, findOne, addItem } } = require('../controllers');

router.param('id', findOne);
router.get('/', showMain);
router.route('/item/:id')
  .get(showItem)
  .post(addItem);

module.exports = router;