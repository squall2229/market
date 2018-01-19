const { connect, ObjectID } = require('../services/db');

module.exports = {
  findOne(req, res, next, id) {
    connect().then(collection => {
      collection.findOne({ _id: ObjectID(id) })
        .then(item => {
          req.item = item;

          next();
        })
        .catch(next);
    });
  },

  showMain(req, res) {
    connect()
      .then(collection => {
        collection.find().toArray()
          .then(data => {
            res.render('index', {
              id: 'main',
              title: 'Market',
              data
            });
          })
      })
    },

  showItem(req, res) {
    res.render('item/item', {
      id: 'main',
      title: req.item.title,
      item: req.item
    });
  }
}
