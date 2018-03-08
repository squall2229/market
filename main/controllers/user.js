module.exports = {
  showUser(req, res) {
    res.render('user/', {
      id: 'user',
      title: 'Личный кабинет'
    });
  }
}