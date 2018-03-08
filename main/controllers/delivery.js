module.exports = {
  showDelivery(req, res) {
    res.render('delivery/delivery', { title: 'Доставка и оплата', id: 'delivery' });
  }
}