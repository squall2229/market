module.exports = {
  showCheckout(req, res) {
    res.render('checkout/checkout', {
      title: 'Корзина', 
      id: 'checkout'
    });
  }
}