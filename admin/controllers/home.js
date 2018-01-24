const { tshirt: Tshirt } = require('../../models');
const sendsize = require('../../utils/sendsize');

module.exports = {
  findOne(req, res, next, id) {
    Tshirt.findById({ _id: id })
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

  showIndexPage(req, res, next) {
    Tshirt.find()
      .then(items => {
        res.render('index', {
          id: 'admin',
          title: 'admin',
          items
        })
      })
      .catch(next)
  },

  showCreateForm(req, res) {
    res.render('form/form', {
      item: new Tshirt()
    })
  },

  showUpdateForm(req, res) {
    res.render('form/form', {
      item: req.item
    })
  },

  showDeleteForm(req, res, next) {
    res.render('form/delete', {
      item: req.item
    })
  },

  createForm(req, res, next) {
    let size = sendsize(req.body) || [];

    Tshirt.create({
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      size
    })
      .then(() => res.redirect('/admin'))
      .catch(next)
  },

  updateForm(req, res, next) {
    Tshirt.findByIdAndUpdate( 
      { _id: req.item._id },
      {
        $set: {
          title: req.body.title,
          price: Number(req.body.price),
          image: req.body.image,
          size: sendsize(req.body)
        }
    }, {
      new: true
    })
      .then(() => res.redirect('/admin'))
      .catch(next)
  },

  deleteForm(req, res, next) {
    req.item.remove()
      .then(() => res.redirect('/admin'))
      .catch(next);
  }
};