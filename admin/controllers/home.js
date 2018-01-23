const { item: Item } = require('../../models');

module.exports = {
  showIndexPage(req, res, next) {
    Item.find()
      .then(items => {
        res.render('index', {
          items
        })
      })
      .catch(next)
  }
};