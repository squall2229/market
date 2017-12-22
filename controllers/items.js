const items = require('../data/');

module.exports = {
  showItems(req, res) {
    res.send(items);
  },

  showItem(req, res) {
    let item = items.find(item => item.id == req.params.id);
      
    res.send(item);
  }
}