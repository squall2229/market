const { passport } = require('../../shared/services');

module.exports = {
  showLogin(req, res) {
    res.render('auth/login', { 
      title: 'Авторизация', 
      id: 'login' 
    });
  },

  showRegister(req, res) {
    res.render('auth/register', { 
      title: 'Регистрация', 
      id: 'register' 
    });
  },

  register: passport.authenticate('local-register', {
    failureRedirect: '/auth/register',
    successRedirect: '/user'
  }),

  login: passport.authenticate('local-login', {
    failureRedirect: '/auth/login',
    successRedirect: '/user'
  }),

  logout(req, res, next) {
      if (req.session) {
        req.session.destroy(error => {
          if (error) return next(error);

          res.redirect('/');
        });
      }
    }
}