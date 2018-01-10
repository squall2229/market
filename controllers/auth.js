module.exports = {
  showLogin(req, res) {
    res.render('auth/login', { title: 'Авторизация', id: 'login' });
  },

  showRegister(req, res) {
    res.render('auth/register', { title: 'Регистрация', id: 'register' });
  }
}