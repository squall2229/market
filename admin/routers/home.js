const router = require('express').Router();
const { home: controller } = require('../controllers');

router.get('/', (req, res) => {
  res.render('index', controller.showIndexPage);
});

module.exports = router;