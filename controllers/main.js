const { tshirt: Tshirt } = require('../models');

module.exports = {
  findOne(req, res, next, id) {
    Tshirt.findOne({ _id: id })
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
    Tshirt.find()
      .then(data => {
        res.render('index', {
          id: 'main',
          title: 'Market',
          data
        });
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
