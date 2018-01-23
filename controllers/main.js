const { tshirt } = require('../models');

module.exports = {
  findOne(req, res, next, id) {
    tshirt.findById({ _id: id })
      .then(item => {
        if (!item) {
          let error = new Error('Товар не найден');
          error.status = 404;
          throw error;
        }

        req.item = item;

        next();
      })
  },

  showMain(req, res, next) {
    tshirt.find()
      .then(data => {
        res.render('index', {
          id: 'main',
          title: 'main',
          data
        })
      })
      .catch(next)
  },

  showItem(req, res) {
    res.render('item/item', {
      id: 'main',
      title: req.item.title,
      item: req.item
    });
  }
}
