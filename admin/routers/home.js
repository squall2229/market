const router = require('express').Router();
const { home } = require('../controllers');

router.param('id', home.findOne);

router.get('/', home.showIndexPage);

router.route('/create')
  .get(home.showCreateForm)
  .post(home.createForm)

router.route('/:id/update')
  .get(home.showUpdateForm)
  .post(home.updateForm)

router.route('/:id/delete')
  .get(home.showDeleteForm)
  .post(home.deleteForm)

module.exports = router;