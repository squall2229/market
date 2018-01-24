const { checkout: Checkout } = require('../models');

module.exports = {
  findItem(req, res, next, id) {
    Checkout.findById({ _id: id })
        .then(checkoutItem => {
            if (!checkoutItem) {
                let error = new Error('Книга не найдена');
                error.status = 404;
                throw error;
            }

            req.checkoutItem = checkoutItem;

            next();
        })
        .catch(next);
  },

  showCheckout(req, res, next) {
    Checkout.find()
      .then(items => {
        let summ = items.reduce((sum, current) => {
          return sum + (current.price * current.count)
        }, 0)

        res.render('checkout/checkout', {
          title: 'Корзина', 
          id: 'checkout',
          items,
          summ
        });
      })
      .catch(next)
  },

  showDelete(req, res) {
    res.render('checkout/delete', {
      title: 'Корзина', 
      id: 'checkout',
    })
  },

  deleteItem(req, res, next) {
    req.checkoutItem.remove()
      .then(() => res.redirect('/checkout'))
      .catch(next)
  }
}