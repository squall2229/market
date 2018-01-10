const data = require('../data/');

module.exports = {
  showMain(req, res) {
    res.render('index', {
      id: 'main',
      title: 'Market',
      data
    });
  },

  showItem(req, res) {
    let item = data.find(item => item.id == req.params.id);
    res.render('item/item', {
      id: 'main',
      title: item.title,
      item
    });
  }
}
